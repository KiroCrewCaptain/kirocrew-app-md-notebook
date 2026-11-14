/**
 * The bundle's entry: AppHost lazy-imports this module and renders its default
 * export as the app's page.
 *
 * It subscribes to the host's language generation, which is what repaints the
 * page on a language switch: `i18nT` reads the active locale at call time, and
 * this component's re-render reaches every child.
 */

import { useLanguageGeneration } from '@kirocrew/app-sdk'
import MdNotebookPage from './MdNotebookPage'

export default function MdNotebookApp() {
  useLanguageGeneration()
  return <MdNotebookPage />
}
