import { useParams } from 'react-router-dom'
import { useDocumentTitle } from '../lib/useDocumentTitle'
import { FoundationPage } from './FoundationPage'

export function JobDetailPage() {
  const { jobId } = useParams()
  useDocumentTitle(`Job ${jobId ?? ''}`.trim())

  return (
    <FoundationPage eyebrow="Phase 1 route" title="Job detail foundation">
      <p>
        Structured job detail UI arrives in Phase 4. This route is ready to load job{' '}
        <strong>{jobId}</strong> through the typed Supabase data service.
      </p>
    </FoundationPage>
  )
}
