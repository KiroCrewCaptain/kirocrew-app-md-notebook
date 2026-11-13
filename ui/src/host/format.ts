/**
 * The one dashboard formatter the App SDK does not export: `fmtDateFields`, a date
 * rendered from explicit fields in the host's active language. Restated over the
 * SDK's `activeLocale` with the dashboard's `toDate` rules: an empty value or an
 * invalid date reads `—`, and a number below 10^11 is seconds rather than ms.
 */
import { activeLocale } from '@kirocrew/app-sdk'

export type DateFieldOptions = Omit<Intl.DateTimeFormatOptions, 'dateStyle' | 'timeStyle' | 'localeMatcher'>

const SECONDS_CEILING = 1e11

function toDate(value: Date | string | number | null | undefined): Date | null {
  if (value === null || value === undefined || value === '') return null
  if (value instanceof Date) return Number.isNaN(value.getTime()) ? null : value
  if (typeof value === 'number') {
    if (!Number.isFinite(value) || value <= 0) return null
    const d = new Date(value < SECONDS_CEILING ? value * 1000 : value)
    return Number.isNaN(d.getTime()) ? null : d
  }
  const d = new Date(value)
  return Number.isNaN(d.getTime()) ? null : d
}

export function fmtDateFields(value: Date | string | number | null | undefined, options: DateFieldOptions): string {
  const d = toDate(value)
  if (!d) return '—'
  return new Intl.DateTimeFormat(activeLocale(), { localeMatcher: 'lookup', ...options }).format(d)
}
