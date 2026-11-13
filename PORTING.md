# Porting notes: built-in → external app

This repository was ported from Kiro Crew's built-in Notes app as it stands at
the head of [kirodotdev/KiroCrew#36365](https://github.com/kirodotdev/KiroCrew/pull/36365)
(`9c5ecb203b`, which carries #36327 and #36346 under it): the backend at
`src/kiro_crew/apps/builtins/md_notebook/`, its dashboard page at
`website/src/apps/md-notebook/`, its store art at
`website/public/app-assets/md-notebook/`, and its tests: the two under the
app's own `tests/`, the eight `test/test_md_notebook*.py` suites about the
app's backend (with their helpers `md_notebook_helpers.py`,
`git_maintenance_helpers.py` and `windows_sim.py`), and the sixteen frontend
suites under `website/src/test/` and `website/src/apps/md-notebook/` that test
the page.

That head is the one where Notes keeps its state in `apps/md-notebook/data/state/`,
masked by its own `credentialMasks` entry, rather than in a directory core
handed it by name. That is what makes an external copy possible: everything the
built-in needs from the sandbox is now declared in its manifest.

"Gap" below means something the built-in gets from Kiro Crew that an external
app has no public way to get today. Each gap is a Kiro Crew change, not a change
here.

## What carried over unchanged

- `app.json` `name` (`md-notebook`), `version` (`1.0.0`), `permissions`
  (`/apps/md-notebook/api`, `/api/knowledge`), `credentialMasks` (`state/`),
  `platform`, `defaultEnabled` (`false`), every display field, `useCases` and
  `configuration`. `tests/test_manifest_contract.py` compares them with the
  built-in's manifest (`tests/fixtures/builtin-app.json`), because adoption
  refuses a manifest that would widen a grant or force the app off.
- Where the data lives: the token, the vault registry and the sync settings in
  `<data home>/apps/md-notebook/data/state/`, clones in
  `<data home>/workspace/md-notebook/vaults/`. An adopted install finds all of
  it where it already is.
- The backend's process model: an aiohttp server the gateway spawns and
  reverse-proxies at `/apps/md-notebook/api/*`, bound to `127.0.0.1`, with
  `port: "auto"`, `healthCheck: "/health"` and the gateway's HMAC check on every
  other route. Every route, its validation and response shape, the git
  operations and their hardening (config-hook neutralizing, the remote and
  git-dir pins, the planted-link refusals), the save guard, the note index,
  search and the auto-sync loop are the built-in's modules line for line:
  `diff` against them shows only the host bridge, the import paths and the
  three changes in the table below.
- The page's markup, styles (`ui/src/styles.ts`), keyboard shortcuts and
  behaviour, including every saved preference key in `LS`
  (`ui/src/constants.ts`, pinned against `tests/fixtures/builtin-constants.ts`),
  so an existing user's panel, sort, view and last open note come back.

## What changed, and why

| Built-in | Here | Why |
|---|---|---|
| `"backend": {"entryPoint": "kiro_crew.apps.builtins.md_notebook.server"}` | `"entryPoint": "backend/server.py"` | A module-style entry resolves only inside the Kiro Crew package. A file entry inside the app's own tree is the external form. `server.py` puts the app root on `sys.path` when run as a script, so its siblings import as `backend.*`. |
| `from kiro_crew... import ...` in five modules | One host bridge (`backend/_host.py`) | See [Host bridge](#host-bridge-private-kiro-crew-imports). |
| The state directory from `kiro_crew.md_notebook_state.default_app_state_dir()` | `server_store._app_state_dir()`: `<config_dir()>/apps/md-notebook/data/state` | The same path, computed here. `md_notebook_state` is core's own module (the moves of older layouts into that directory), not something a backend should import. |
| `sel().log_api_access(..., source="builtin-app")` | `source="app"` | This copy is an installed app; it says so. |
| The facade module's canonical name `kiro_crew.apps.builtins.md_notebook.server`, its logger and `ApiError.__module__` | `backend.server` | The dotted name this tree imports under. |
| `iconUrl` / `heroImage*` as absolute `/app-assets/...` SVGs | `iconPath` / `heroImage*` / `screenshots` as repo-relative PNGs under `assets/` | A registry app's art is repo-relative, and the catalog's publish step refuses SVG for a non-builtin source. The PNGs were rendered from the built-in SVGs (the icon at 512×512 on an opaque tile with its `--ico-a` / `--ico-b` tokens resolved to fixed green tones; heroes at 1200×675; detail banners at 1200×288). The SVGs are kept beside them. The store screenshot is the README's light hero. |
| `ui.pages` `[{"route": "/md-notebook", "icon": "NotebookPen"}]`, page compiled into the dashboard | `ui.entry: "dist/index.mjs"` (a committed ESM bundle built from `ui/src/`), `ui.pages` `[{"route": "/apps/md-notebook", "label": "Notes"}]`, no `icon` | An installed app ships its page as a bundle AppHost loads. The legacy `/md-notebook` route and glyph of an ADOPTED record come from Kiro Crew's adoption pin, never from this manifest. |
| App Store copy keys in the dashboard catalogs (`apps.mdNotebook.manifest.*`) | `l10n` block in `app.json`, one entry per shipped non-English locale | The listing copy travels with the app. It is the `apps.mdNotebook.manifest` subtree of `ui/i18n/<locale>.json`, kept equal by a test. |
| `features: []` | absent | Empty; the field means nothing for an installed app. |
| No `minKiroCrewVersion` | `"minKiroCrewVersion": "0.13.0"` | The first Kiro Crew whose `credentialMasks` accepts a directory entry (`state/`, #36346). An older host would refuse the manifest. |

## Host bridge: private Kiro Crew imports

The backend runs under the gateway's own interpreter (this app has no
`requirements.txt`, so no app venv is made), so it can use the host's own
security code instead of a copy that would drift from the policy every other
Kiro Crew surface enforces. None of these is a published App Kit surface for a
spawned backend yet. Every one is imported in `backend/_host.py` and nowhere
else; a name the host lacks is recorded, and `server.py` refuses to start
(naming them) rather than run with a weaker fence. `tests/test_host_bridge.py`
pins that, and that the gateway's launch serves `/health`.

| Host module | Names | Use |
|---|---|---|
| `kiro_crew.apps.proxy_auth` | `verify_proxy_request`, `raw_request_target` | The gateway's signature on every proxied request. (This one IS public: App Kit `api-reference.md`, "Proxy Authentication".) |
| `kiro_crew.security` | `redact`, `redact_local_paths`, `path_contains_sensitive` | Error text redaction, and the credential fence on attach and clone paths |
| `kiro_crew.hooks` | `is_sensitive_path`, `safe_read_file_bytes`, `FileTooLargeError` | The credential fence on every note path, and the link-safe read |
| `kiro_crew.git_config_hooks` | `config_hook_disable_args`, `ConfigHookScanError` | Neutralizes repo-defined git hooks, filters and helpers on every git call |
| `kiro_crew.git_worktree_scope` | `worktree_probe_failure_is_empty_scope` | Reads a failed worktree probe the way the host does |
| `kiro_crew.atomic_write` | `replace_with_retry`, `rename_with_retry`, `refuse_linked_parent` | Note and state publishes, with the Windows sharing-violation retry and the planted-link refusal |
| `kiro_crew.platform_compat` | `IS_POSIX`, `IS_WINDOWS`, `CREATE_NEW_PROCESS_GROUP`, `kill_and_reap`, `is_link_or_junction`, `restrict_to_owner`, `rmtree_force` | The host's cross-platform process, link and permission helpers |
| `kiro_crew.config.paths` | `config_dir` | The active data home (`KIROCREW_HOME`) |
| `kiro_crew.constants` | `WINDOWS_DEVICE_STEMS` | Reserved Windows names a new note may not take |
| `kiro_crew.loop_lock` | `LoopBoundLock` | The per-loop locks the save path serializes on |
| `kiro_crew.sel` | `sel` | The security event log (critical writes for the auto-sync switch) |
| `kiro_crew._facade_mirror` | `install`, `MirroredModule` | The patch-reaching facade `server.py` is over its four owner modules |

## Page: dashboard modules the bundle cannot import

| Built-in import | Here |
|---|---|
| `components/Clickable`, `components/ErrorNotice` | The same components from `@kirocrew/app-sdk/ui` |
| `hooks/useImeGuard`, `i18n/format.compareText`, `i18n/format.fmtNumber` | The SDK's |
| `i18n/t.i18nT`, `react-i18next` `Trans` | `ui/src/host/i18n.ts` over the bundled catalogs in `ui/i18n/` and the SDK's `activeLocale`; `ui/src/host/Trans.tsx` |
| `i18n/format.fmtDateFields` | `ui/src/host/format.ts`, over the SDK's `activeLocale` |
| `hooks/useIsMobile`, `components/icons/panels`, `components/destinationVars`, `utils/urlTransform`, `api/helpers.sanitize` | Copied into `ui/src/host/` (react-markdown's `defaultUrlTransform` restated, see NOTICE) |
| `components/BrandIcon.GithubIcon` | `ui/src/host/BrandIcon.tsx` with the same mark, inlined |
| `components/ReadingWidthToggle` | `ui/src/host/ReadingWidthToggle.tsx`, its tooltip a native `title` (the host's `HoverTip` is not an App Kit surface) |
| `utils/highlightClient` and its worker | `ui/src/host/highlightClient.ts` with the worker inlined into the bundle (a `blob:` worker; the dashboard's `worker-src` allows it) and the dashboard's core language set |
| `import('mermaid')` (a dashboard chunk) | `ui/src/host/mermaidRuntime.ts` loads the dashboard's `/vendor/mermaid.min.js` on the first diagram |
| `api/edgeAuthChallenge`, `api/apiError` | `ui/src/host/edgeAuthChallenge.ts` (the two names the page uses) |
| `framer-motion` | Bundled |

The page keeps the built-in's own `fetch` calls (to its backend through the
gateway proxy, to `/api/knowledge` for the Knowledge toggle, and to the
dashboard's `/api/file-raw` for note images) rather than the SDK's scoped
client: the stale-backend and sign-in-proxy messages read the raw status,
headers and body, which the scoped client does not expose. Every path it calls
is pinned by `tests/test_manifest_contract.py`.

## Remaining gaps

1. **The state moves are core's.** Older installs kept the token, registry and
   settings in `<data home>/md-notebook-staging/` (and before that in
   `workspace/md-notebook/`). Core's `md_notebook_state` moves them into
   `apps/md-notebook/data/state/` before any spawn, and core's
   `apps/backend.py` waits for that move to seal before it starts the SHIPPED
   backend. An external backend gets the move (it runs in spawn prep, by app
   name) but not the wait: on the very first start after an adoption, before
   the move has sealed once, it could read an empty state directory and show
   no vaults until its next start. Closing this needs the wait keyed on the
   app's name rather than on the shipped package.
2. **Core still names Notes.** Besides `md_notebook_state`, the masks of the old
   locations (`sandbox_leaves.py`, `sandbox_precreate.py`, `sandbox_staging.py`,
   `security/paths_lists.py`), the shipped backend's `-I` launch in
   `apps/backend.py`, `components/appstore/appManifest.ts`'s catalog keys and a
   handful of comments name it. Those are the "move out" step in Kiro Crew,
   not this repository's.
3. **U1. Images in notes still use the dashboard's `/api/file-raw`.** It is not
   in `permissions.api` and not an App Kit surface; the built-in relied on it
   too. A renamed route breaks note images (the alt text shows).
4. **U2. Code highlighting knows only the dashboard's core languages.** A
   language an edition contributes to the dashboard is shown as plain text.
5. **U3. Mermaid comes from the dashboard's `/vendor/mermaid.min.js`.** A host
   that stops serving it shows the diagram's source, as a failed render does.
6. **U4. The sign-in-proxy refusal is retried.** The dashboard throws its own
   shared error class there, which its query client recognises and stops
   retrying; a bundle cannot construct that class, so React Query may retry the
   refusal a few times before showing it.
7. **U5. `{{productName}}` is always "Kiro Crew".** An edition's renamed product
   is not exposed to a bundle.

## Tests

- `tests/`: the eight backend suites and the app's two own suites, unchanged
  apart from the import path, run against the pinned Kiro Crew
  (`tests/requirements.txt`). `tests/conftest.py` is the subset of Kiro Crew's
  test floor they need (data home and security log pinned per run, the floor's
  own `MonkeyPatch`, `requires_symlinks`). Not ported:
  `test/test_server_md_notebook_facade.py`, which holds the facade to Kiro
  Crew's repository-wide facade-mirror scan; `test_md_notebook_state.py`,
  `test_md_notebook_real_sandbox.py` and `test_sandbox_md_notebook_carveout.py`,
  which test core's state moves and sandbox.
- `ui/tests/`: the sixteen frontend suites, with imports pointed at `ui/src/`.
  Four changed: the Mermaid suite stubs `host/mermaidRuntime` instead of the
  `mermaid` package (and its fragment reference rides on an `<a>`, because
  DOMPurify drops `<use>` itself); the API suite's sign-in-proxy case asserts
  this app's error class (gap U4); the Settings suite switches language
  through the SDK stub; and the Settings focus suite's shortcut fixture has
  the full `Shortcut` shape.
- `tests/test_manifest_contract.py`, `tests/test_host_bridge.py` and
  `ui/tests/catalogs.test.ts` are new: what adoption needs from this tree, the
  bridge, and the bundled catalogs.
