/** The dashboard's `api/helpers.sanitize`: DOMPurify over markup the page renders. */
import DOMPurify from 'dompurify'

export function sanitize(html: string): string {
  return DOMPurify.sanitize(html)
}
