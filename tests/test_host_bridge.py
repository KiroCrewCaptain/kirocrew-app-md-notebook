"""The backend reaches Kiro Crew only through ``backend/_host.py``, and fails closed without it.

- No other module in ``backend/`` names ``kiro_crew``: the list of host names is
  one place (``_host.HOST_NAMES``), and ``PORTING.md`` documents each one.
- The pinned host provides every one of them.
- A host that lacks one gets a backend that refuses to START, naming what is
  missing, rather than one that runs with a weaker fence than the built-in had.
- The gateway's launch (``python backend/server.py``, the app root as the working
  directory) serves ``/health`` from this tree.
"""

from __future__ import annotations

import ast
import os
import socket
import subprocess
import sys
import time
import urllib.request
from pathlib import Path

import pytest

from backend import _host

APP_ROOT = Path(__file__).resolve().parent.parent
BACKEND = APP_ROOT / "backend"


def _imported_top_names(path: Path) -> set[str]:
    tree = ast.parse(path.read_text(encoding="utf-8"))
    names: set[str] = set()
    for node in ast.walk(tree):
        if isinstance(node, ast.Import):
            names |= {alias.name for alias in node.names}
        elif isinstance(node, ast.ImportFrom) and node.level == 0 and node.module:
            names.add(node.module)
    return names


def test_only_the_bridge_imports_the_host() -> None:
    for path in sorted(BACKEND.glob("*.py")):
        if path.name == "_host.py":
            continue
        imported = _imported_top_names(path)
        assert not any(n == "kiro_crew" or n.startswith("kiro_crew.") for n in imported), path.name


def test_the_bridge_imports_exactly_the_names_it_lists() -> None:
    source = (BACKEND / "_host.py").read_text(encoding="utf-8")
    for module in _host.HOST_NAMES:
        assert f'_module("{module}")' in source, module


def test_the_pinned_host_provides_every_name() -> None:
    assert _host.missing() == []


def test_a_missing_host_module_raises_on_use() -> None:
    stand_in = _host._Missing("kiro_crew.nothing_here")
    with pytest.raises(RuntimeError, match="kiro_crew.nothing_here.anything"):
        stand_in.anything  # noqa: B018 - the attribute read is the call under test


def test_a_backend_without_its_host_refuses_to_start(tmp_path: Path) -> None:
    # ``-S`` leaves no site-packages, so no ``kiro_crew`` is importable; the backend
    # must stop before it imports anything else, with the names it is missing.
    env = {k: v for k, v in os.environ.items() if k != "PYTHONPATH"}
    proc = subprocess.run(
        [sys.executable, "-I", "-S", str(BACKEND / "server.py")],
        cwd=str(APP_ROOT),
        env=env,
        capture_output=True,
        text=True,
        encoding="utf-8",
        timeout=60,
    )
    assert proc.returncode == 1, proc.stderr
    assert "Notes cannot start: this Kiro Crew does not provide" in proc.stderr
    assert "kiro_crew.apps.proxy_auth.verify_proxy_request" in proc.stderr


def _free_port() -> int:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
        sock.bind(("127.0.0.1", 0))
        return sock.getsockname()[1]


def test_the_gateway_launch_serves_health(tmp_path: Path) -> None:
    port = _free_port()
    env = {
        **os.environ,
        "PORT": str(port),
        "KIROCREW_HOME": str(tmp_path / "home"),
        "KIROCREW_APP_NAME": "md-notebook",
    }
    proc = subprocess.Popen(
        [sys.executable, str(BACKEND / "server.py")],
        cwd=str(APP_ROOT),
        env=env,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.PIPE,
    )
    try:
        deadline = time.monotonic() + 60
        body = b""
        while time.monotonic() < deadline:
            if proc.poll() is not None:
                pytest.fail(f"the backend exited: {proc.stderr.read().decode(errors='replace')}")
            try:
                with urllib.request.urlopen(f"http://127.0.0.1:{port}/health", timeout=2) as resp:
                    body = resp.read()
                    break
            except OSError:
                time.sleep(0.2)
        assert b'"ok": true' in body
    finally:
        proc.terminate()
        try:
            proc.wait(timeout=20)
        except subprocess.TimeoutExpired:
            proc.kill()
            proc.wait(timeout=20)
        if proc.stderr is not None:
            proc.stderr.close()
