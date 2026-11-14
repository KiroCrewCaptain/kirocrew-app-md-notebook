"""Make the empty, made-up git folder the README pictures attach as a vault.

Notes keeps its notes in a git working tree the user already has (or one it
clones from GitHub). The capture attaches a local folder, so that folder has to
exist and be a git repository before the gateway starts. This script makes an
EMPTY one and nothing else: every note in the pictures is written afterwards
through the app's own API (``scenes.json`` ``setup``), the way the page writes
them.

    python capture/demo_vault.py /tmp/kc-notes-demo
    python capture/capture.py --kirocrew /path/to/KiroCrew

The folder is rebuilt from scratch on every run (author and date fixed), so two
runs photograph the same notebook.
"""

from __future__ import annotations

import os
import shutil
import subprocess
import sys
from pathlib import Path

#: The folder name, which is also the vault name the page shows.
VAULT = "trail-club-notes"

#: A made-up author: the vault's history names nobody real.
_ENV = {
    "GIT_AUTHOR_NAME": "Trail Club",
    "GIT_AUTHOR_EMAIL": "notes@trail-club.example",
    "GIT_COMMITTER_NAME": "Trail Club",
    "GIT_COMMITTER_EMAIL": "notes@trail-club.example",
    "GIT_AUTHOR_DATE": "2026-03-02T09:00:00+00:00",
    "GIT_COMMITTER_DATE": "2026-03-02T09:00:00+00:00",
}


def _git(cwd: Path, *args: str) -> None:
    env = {**os.environ, **_ENV, "GIT_CONFIG_GLOBAL": os.devnull, "GIT_CONFIG_NOSYSTEM": "1"}
    subprocess.run(["git", *args], cwd=cwd, env=env, check=True, capture_output=True)


def build(root: Path) -> Path:
    """Rebuild ``<root>/trail-club-notes`` as an empty repository with one commit."""
    vault = root / VAULT
    if vault.exists():
        shutil.rmtree(vault)
    vault.mkdir(parents=True)
    _git(vault, "init", "-q", "-b", "main")
    _git(vault, "commit", "-q", "--allow-empty", "-m", "Start the trail club notebook")
    return vault


if __name__ == "__main__":
    if len(sys.argv) != 2:
        raise SystemExit("usage: demo_vault.py <parent folder>")
    print(build(Path(sys.argv[1]).resolve()))
