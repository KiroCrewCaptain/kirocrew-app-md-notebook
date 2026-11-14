/// <reference lib="webworker" />
// The dashboard's highlight worker (`utils/hljsWorker`), bundled into this app.
// Highlight worker — runs highlight.js off the main thread. highlight.js builds
// one giant alternation regex per language and runs RegExp.exec; on some inputs
// that catastrophically backtracks (profiled at 327ms), which would freeze the
// UI if it ran on the main thread. Here a slow highlight only delays this
// worker's reply — the page stays responsive and scroll stays at full fps.
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import python from 'highlight.js/lib/languages/python'
import bash from 'highlight.js/lib/languages/bash'
import json from 'highlight.js/lib/languages/json'
import yaml from 'highlight.js/lib/languages/yaml'
import xml from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'
import sql from 'highlight.js/lib/languages/sql'
import rust from 'highlight.js/lib/languages/rust'
import java from 'highlight.js/lib/languages/java'
import markdown from 'highlight.js/lib/languages/markdown'

// The dashboard's core language set (`utils/hljsLanguages`), under the same names.
// The languages an edition contributes to the dashboard are not reachable from a bundle.
const LANGUAGES: ReadonlyArray<[string, Parameters<typeof hljs.registerLanguage>[1]]> = [
  ['javascript', javascript], ['js', javascript], ['jsx', javascript],
  ['typescript', typescript], ['ts', typescript], ['tsx', typescript],
  ['python', python], ['py', python],
  ['bash', bash], ['sh', bash], ['shell', bash], ['zsh', bash],
  ['json', json], ['yaml', yaml], ['yml', yaml],
  ['xml', xml], ['html', xml], ['css', css], ['sql', sql],
  ['rust', rust], ['rs', rust], ['java', java],
  ['markdown', markdown], ['md', markdown],
]
for (const [name, language] of LANGUAGES) hljs.registerLanguage(name, language)

interface HighlightRequest {
  id: number
  code: string
  lang?: string
}
interface HighlightResponse {
  id: number
  html: string
}

const ctx = self as unknown as DedicatedWorkerGlobalScope

ctx.onmessage = (e: MessageEvent<HighlightRequest>) => {
  const { id, code, lang } = e.data
  let html = ''
  try {
    if (lang && hljs.getLanguage(lang)) {
      html = hljs.highlight(code, { language: lang }).value
    } else {
      html = hljs.highlightAuto(code).value
    }
  } catch (e) {
    // Plain-text fallback is correct, but leave a breadcrumb in the worker
    // console (devtools) so a systematically-failing language is noticeable.
    html = ''
    // eslint-disable-next-line no-console
    console.warn('[hljsWorker] highlight failed', (e as Error)?.name)
  }
  const res: HighlightResponse = { id, html }
  ctx.postMessage(res)
}
