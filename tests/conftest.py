"""Test floor for the Notes suite.

* The gateway runs ``backend/server.py`` as a script, which puts the app root on
  the path itself. A plain pytest run does not, so the app root (and this
  directory, for the shared ``md_notebook_helpers``) is put on the path and
  ``backend`` imports as a package.
* Kiro Crew (a pinned test dependency, ``tests/requirements.txt``) is the host the
  backend resolves through ``backend/_host.py``. Its data home is pinned to a
  throwaway directory BEFORE anything imports it, and again per test, so no test
  reads or writes the operator's real ``~/.kiro/crew``. The security event log's
  default directory is a session-local one for the same reason.
* ``_floor_monkeypatch`` is the floor's own ``MonkeyPatch``, as in Kiro Crew's
  suite: a test that calls ``monkeypatch.undo()`` must not put the real paths
  back for the rest of the test.
"""

from __future__ import annotations

import os
import shutil
import sys
import tempfile
from pathlib import Path

import pytest

APP_ROOT = Path(__file__).resolve().parent.parent
TESTS = Path(__file__).resolve().parent
for _entry in (str(TESTS), str(APP_ROOT)):
    if _entry not in sys.path:
        sys.path.insert(0, _entry)

_SESSION_HOME = Path(tempfile.mkdtemp(prefix="kca-md-notebook-home-"))
os.environ["KIROCREW_HOME"] = str(_SESSION_HOME / "crew")
os.environ["KIROCREW_WORKSPACE"] = str(_SESSION_HOME / "workspace")
os.environ.pop("MD_NOTEBOOK_HOME", None)


def _can_create_symlink() -> bool:
    with tempfile.TemporaryDirectory() as tmp:
        target = os.path.join(tmp, "target")
        os.mkdir(target)
        try:
            os.symlink(target, os.path.join(tmp, "link"), target_is_directory=True)
        except (OSError, NotImplementedError, AttributeError):
            return False
        return True


requires_symlinks = pytest.mark.skipif(
    not _can_create_symlink(),
    reason="creating a symlink needs SeCreateSymbolicLinkPrivilege on Windows",
)


def pytest_unconfigure(config: pytest.Config) -> None:
    shutil.rmtree(_SESSION_HOME, ignore_errors=True)


@pytest.fixture
def _floor_monkeypatch():
    """The floor's OWN ``MonkeyPatch`` -- never the shared ``monkeypatch``.

    The two are undone independently: ``monkeypatch.undo()`` reverts every record
    on the instance it is called on, so a test that called it mid-way would also
    drop the floor's data-home pin and resolve the operator's real data home.
    """
    mp = pytest.MonkeyPatch()
    try:
        yield mp
    finally:
        mp.undo()


@pytest.fixture
def monkeypatch(_floor_monkeypatch):
    """pytest's own ``monkeypatch``, re-declared to order it AFTER the floor."""
    mp = pytest.MonkeyPatch()
    yield mp
    mp.undo()


@pytest.fixture(scope="session", autouse=True)
def _isolate_sel_default_dir(tmp_path_factory):
    """Point the security event log's default directory at a session-local one.

    The log is a process singleton whose writer is a daemon thread, so it gets
    one directory for the whole run that no individual test deletes.
    """
    from kiro_crew import sel as _sel

    original_default = _sel._default_dir
    original_instance = _sel.SecurityEventLog._instance
    sel_dir = tmp_path_factory.mktemp("sel")
    _sel._default_dir = lambda: sel_dir
    try:
        yield sel_dir
    finally:
        _sel._default_dir = original_default
        _sel.SecurityEventLog._instance = original_instance


@pytest.fixture(autouse=True)
def _isolated_home(tmp_path: Path, _floor_monkeypatch: pytest.MonkeyPatch) -> Path:
    home = tmp_path / "kirocrew-home"
    _floor_monkeypatch.setenv("KIROCREW_HOME", str(home))
    _floor_monkeypatch.setenv("KIROCREW_WORKSPACE", str(tmp_path / "kirocrew-workspace"))
    _floor_monkeypatch.delenv("MD_NOTEBOOK_HOME", raising=False)
    return home
