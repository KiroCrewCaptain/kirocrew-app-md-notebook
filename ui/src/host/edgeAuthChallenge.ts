/**
 * The dashboard's `api/edgeAuthChallenge`, restated for the two names this page uses.
 *
 * A gate in front of the gateway (an auth proxy) answers an expired session with its
 * own HTML sign-in page, not the backend's JSON. Recognising it lets the page say
 * "reload to sign in again" instead of showing the proxy's markup as an error.
 * The host keeps a per-message address memo for its own error screen; this page shows
 * the message inline, so it has none.
 */
import { i18nT } from './i18n'

const HTML_DOCUMENT_START = /^<(?:!doctype\s|html[\s>])/i
const CHALLENGE_STATUSES: ReadonlySet<number> = new Set([401, 403])

export type ChallengeOutcome = 'challenged' | 'framed'

function isEmbeddedPane(): boolean {
  try {
    return typeof window !== 'undefined' && window.self !== window.top
  } catch {
    return true
  }
}

export function noteEdgeAuthChallenge(
  status: number,
  contentType: string | null,
  body: string,
): ChallengeOutcome | null {
  if (!CHALLENGE_STATUSES.has(status)) return null
  const type = (contentType ?? '').split(';', 1)[0].trim().toLowerCase()
  if (type !== 'text/html' && type !== 'application/xhtml+xml') return null
  if (!HTML_DOCUMENT_START.test(body.trim())) return null
  if (typeof window === 'undefined') return 'challenged'
  return isEmbeddedPane() ? 'framed' : 'challenged'
}

export function edgeChallengeMessage(outcome: ChallengeOutcome | null): string | null {
  if (outcome === null) return null
  if (outcome === 'framed') {
    let origin = ''
    try {
      origin = typeof window === 'undefined' ? '' : window.location.origin
    } catch {
      origin = ''
    }
    return i18nT('api.client.proxy_challenge_framed', { origin })
  }
  return i18nT('api.client.proxy_challenge_reload')
}
