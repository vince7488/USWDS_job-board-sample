import { Link, useParams } from 'react-router-dom'
import { useDocumentTitle } from '../lib/useDocumentTitle'
import { FoundationPage } from './FoundationPage'

export function JobDetailPage() {
  const { jobId } = useParams()
  useDocumentTitle(`Job ${jobId ?? ''}`.trim())

  return (
    <FoundationPage eyebrow="Detail route" title="Job detail foundation">
      <div className="usa-card site-single-card">
        <div className="usa-card__container">
          <div className="usa-card__header">
            <h2 className="usa-card__heading">Structured detail shell</h2>
          </div>
          <div className="usa-card__body usa-prose">
            <p>
              This route is ready to load job <strong>{jobId}</strong> through the typed
              Supabase data service. The final detail page will stay split into
              structured sections instead of a single WYSIWYG content blob.
            </p>
            <h3>Planned sections</h3>
            <ul>
              <li>Job header with title, company, location, pay, and job type</li>
              <li>Company profile with industry, size, and website details</li>
              <li>Responsibilities, qualifications, and additional details blocks</li>
            </ul>
          </div>
          <div className="usa-card__footer">
            <Link className="usa-button usa-button--outline" to="/jobs">
              Back to catalogue
            </Link>
          </div>
        </div>
      </div>
    </FoundationPage>
  )
}
