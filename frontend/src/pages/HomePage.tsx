import { FoundationPage } from './FoundationPage'
import { useDocumentTitle } from '../lib/useDocumentTitle'

export function HomePage() {
  useDocumentTitle('Home')

  return (
    <FoundationPage eyebrow="Phase 1 foundation" title="Public Service Jobs">
      <p>
        The backend contract, routing, USWDS baseline, and search-state utilities are
        ready. The full public search experience will be built in Phase 2.
      </p>
    </FoundationPage>
  )
}
