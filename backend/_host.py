"""Every place the Notes backend reaches into Kiro Crew, in one module.

The gateway spawns ``backend/server.py`` under its own interpreter (this app has
no ``requirements.txt``, so no app venv is made), so the host's own security and
filesystem code is importable here. The backend uses it instead of a copy, so
the credential fence, the redaction, the proxy signature check and the git
config-hook neutralizer stay the ones every other Kiro Crew surface enforces.
None of these is a published App Kit surface for a spawned backend yet;
``PORTING.md`` lists each one.

Every host name is imported HERE and nowhere else in ``backend/``
(``tests/test_host_bridge.py`` pins that). A name the host does not provide is
recorded in :data:`HOST_GAPS`; :func:`missing` names them, and ``server.main``
refuses to start while any is missing, so a host without one of them never runs
this backend with a weaker fence than the built-in had.
"""

from __future__ import annotations

import importlib
from types import ModuleType
from typing import Any

#: The host modules and the names this backend uses from each.
HOST_NAMES: dict[str, tuple[str, ...]] = {
    "kiro_crew._facade_mirror": ("install", "MirroredModule"),
    "kiro_crew.apps.proxy_auth": ("raw_request_target", "verify_proxy_request"),
    "kiro_crew.atomic_write": ("refuse_linked_parent", "rename_with_retry", "replace_with_retry"),
    "kiro_crew.config.paths": ("config_dir",),
    "kiro_crew.constants": ("WINDOWS_DEVICE_STEMS",),
    "kiro_crew.git_config_hooks": ("ConfigHookScanError", "config_hook_disable_args"),
    "kiro_crew.git_worktree_scope": ("worktree_probe_failure_is_empty_scope",),
    "kiro_crew.hooks": ("FileTooLargeError", "is_sensitive_path", "safe_read_file_bytes"),
    "kiro_crew.loop_lock": ("LoopBoundLock",),
    "kiro_crew.platform_compat": (
        "CREATE_NEW_PROCESS_GROUP",
        "IS_POSIX",
        "IS_WINDOWS",
        "is_link_or_junction",
        "kill_and_reap",
        "restrict_to_owner",
        "rmtree_force",
    ),
    "kiro_crew.security": ("path_contains_sensitive", "redact", "redact_local_paths"),
    "kiro_crew.sel": ("sel",),
}

#: ``"module.name"`` for every host name that could not be imported.
HOST_GAPS: list[str] = []


def _load(module: str) -> ModuleType | None:
    try:
        mod = importlib.import_module(module)
    except Exception:  # noqa: BLE001 - any import failure means "not provided"
        HOST_GAPS.extend(f"{module}.{name}" for name in HOST_NAMES[module])
        return None
    for name in HOST_NAMES[module]:
        if not hasattr(mod, name):
            HOST_GAPS.append(f"{module}.{name}")
    return mod


class _Missing:
    """Stands in for a host module that is absent: every attribute use raises."""

    def __init__(self, module: str) -> None:
        self._module = module

    def __getattr__(self, name: str) -> Any:
        raise RuntimeError(f"the Kiro Crew host does not provide {self._module}.{name}")


def _module(name: str) -> Any:
    return _load(name) or _Missing(name)


_facade_mirror = _module("kiro_crew._facade_mirror")
proxy_auth = _module("kiro_crew.apps.proxy_auth")
atomic_write = _module("kiro_crew.atomic_write")
config_paths = _module("kiro_crew.config.paths")
constants = _module("kiro_crew.constants")
git_config_hooks = _module("kiro_crew.git_config_hooks")
git_worktree_scope = _module("kiro_crew.git_worktree_scope")
hooks = _module("kiro_crew.hooks")
loop_lock = _module("kiro_crew.loop_lock")
platform_compat = _module("kiro_crew.platform_compat")
security = _module("kiro_crew.security")
sel_module = _module("kiro_crew.sel")


def missing() -> list[str]:
    """The host names this process could not import, sorted."""
    return sorted(HOST_GAPS)
