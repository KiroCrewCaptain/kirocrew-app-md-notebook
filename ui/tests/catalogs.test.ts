/**
 * The bundled catalogs carry every string the page asks for.
 *
 * They are the dashboard's own `apps.mdNotebook` subtree (plus the handful of
 * shared keys the page reads), copied per locale. A key the page names that the
 * English catalog lacks would render as the bare key; a locale missing a key
 * English has falls back to English, which is allowed but counted here so a
 * copy that dropped a whole subtree shows up.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { CATALOGS } from '../src/host/i18n'

const SRC = join(__dirname, '..', 'src')
const KEY = /i18nT\(\s*'([a-zA-Z0-9_.]+)'/g

type Catalog = { [key: string]: string | Catalog }

function has(catalog: Catalog, key: string): boolean {
  let node: string | Catalog = catalog
  for (const part of key.split('.')) {
    if (typeof node === 'string' || !Object.prototype.hasOwnProperty.call(node, part)) return false
    node = node[part]
  }
  return true
}

function hasForms(catalog: Catalog, key: string): boolean {
  return has(catalog, key) || has(catalog, `${key}_other`)
}

function leaves(catalog: Catalog, prefix = ''): string[] {
  return Object.entries(catalog).flatMap(([k, v]) =>
    typeof v === 'string' ? [`${prefix}${k}`] : leaves(v, `${prefix}${k}.`),
  )
}

function sourceFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry =>
    entry.isDirectory() ? sourceFiles(join(dir, entry.name)) : /\.tsx?$/.test(entry.name) ? [join(dir, entry.name)] : [],
  )
}

describe('the bundled catalogs', () => {
  it('give English for every literal key the page names', () => {
    const missing = sourceFiles(SRC).flatMap(file =>
      [...readFileSync(file, 'utf-8').matchAll(KEY)].map(m => m[1]).filter(key => !hasForms(CATALOGS.en, key)),
    )
    expect(missing).toEqual([])
  })

  it('ship the same twelve locales the dashboard does', () => {
    expect(Object.keys(CATALOGS).sort()).toEqual(
      ['bn', 'de', 'en', 'es', 'fr', 'hi', 'it', 'ja', 'ko', 'pt', 'ru', 'zh-CN'].sort(),
    )
  })

  it('translate most of what English has in every locale', () => {
    const english = leaves(CATALOGS.en)
    for (const [locale, catalog] of Object.entries(CATALOGS)) {
      const present = english.filter(key => has(catalog, key)).length
      expect(present / english.length, locale).toBeGreaterThan(0.9)
    }
  })
})
