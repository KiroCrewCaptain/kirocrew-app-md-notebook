/**
 * The Mermaid runtime, loaded from the dashboard rather than bundled.
 *
 * The built-in page lazy-imported the dashboard's own `mermaid` chunk. A bundle
 * cannot reach that chunk, and bundling Mermaid would add about 3 MB to every
 * install for the few notes that hold a diagram. The dashboard already serves the
 * same release as one script at `/vendor/mermaid.min.js` (`lib/vendorPaths`), which
 * defines `window.mermaid`; this loads it once, on the first diagram. A failed load
 * leaves the diagram's source on screen, as a failed render does.
 */

export interface MermaidApi {
  initialize: (config: Record<string, unknown>) => void
  render: (id: string, code: string) => Promise<{ svg: string }>
}

export const MERMAID_RUNTIME_PATH = '/vendor/mermaid.min.js'

let load: Promise<MermaidApi> | null = null

export function loadMermaidRuntime(): Promise<MermaidApi> {
  load ??= new Promise<MermaidApi>((resolve, reject) => {
    const host = window as unknown as { mermaid?: MermaidApi }
    if (host.mermaid) {
      resolve(host.mermaid)
      return
    }
    const script = document.createElement('script')
    script.src = MERMAID_RUNTIME_PATH
    script.async = true
    script.onload = () => {
      if (host.mermaid) resolve(host.mermaid)
      else reject(new Error('the dashboard served no Mermaid runtime'))
    }
    script.onerror = () => {
      // Forget the failure so a later diagram can try again.
      load = null
      reject(new Error('could not load the Mermaid runtime'))
    }
    document.head.appendChild(script)
  })
  return load
}
