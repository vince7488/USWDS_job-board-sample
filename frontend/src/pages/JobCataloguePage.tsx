import { useSearchParams } from 'react-router-dom'
import { parseJobSearchParams } from '../lib/jobSearchParams'
import { useDocumentTitle } from '../lib/useDocumentTitle'
import { FoundationPage } from './FoundationPage'

export function JobCataloguePage() {
  useDocumentTitle('Job catalogue')
  const [searchParams] = useSearchParams()
  const filters = parseJobSearchParams(searchParams)

  return (
    <FoundationPage eyebrow="Phase 1 route" title="Job catalogue foundation">
      <p>
        Catalogue UI and filtering arrive in Phase 3. URL state is active now so
        searches can use stable, shareable links.
      </p>
      <p>
        Current query: <strong>{filters.query || 'All jobs'}</strong>
      </p>
    </FoundationPage>
  )
}
