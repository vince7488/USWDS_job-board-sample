import { Link, useSearchParams } from 'react-router-dom'
import { parseJobSearchParams } from '../lib/jobSearchParams'
import { useDocumentTitle } from '../lib/useDocumentTitle'
import { FoundationPage } from './FoundationPage'

export function JobCataloguePage() {
  useDocumentTitle('Job catalogue')
  const [searchParams] = useSearchParams()
  const filters = parseJobSearchParams(searchParams)

  const hasQuery = Boolean(filters.query)

  return (
    <FoundationPage eyebrow="Catalogue route" title="Job catalogue foundation">
      <div className="grid-row grid-gap">
        <section className="tablet:grid-col-8" aria-labelledby="catalogue-state">
          <div className="usa-alert usa-alert--info usa-alert--slim">
            <div className="usa-alert__body">
              <p className="usa-alert__text">
                Catalogue UI and filtering arrive next. This route already reads URL
                state so searches can use stable, shareable links.
              </p>
            </div>
          </div>

          <div className="usa-summary-box margin-top-3" role="region" aria-labelledby="catalogue-state">
            <div className="usa-summary-box__body">
              <h2 className="usa-summary-box__heading" id="catalogue-state">
                Current search state
              </h2>
              <div className="usa-summary-box__text">
                <p>
                  Query:{' '}
                  <strong>{hasQuery ? filters.query : 'All jobs'}</strong>
                </p>
                <div className="tag-list" aria-label="Active foundation filters">
                  <span className="usa-tag">Sort: {filters.sort}</span>
                  <span className="usa-tag">Date: {filters.datePosted}</span>
                  {filters.workArrangements.map((workArrangement) => (
                    <span className="usa-tag" key={workArrangement}>
                      {workArrangement}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <aside className="tablet:grid-col-4" aria-labelledby="catalogue-actions">
          <div className="usa-card site-single-card">
            <div className="usa-card__container">
              <div className="usa-card__header">
                <h2 className="usa-card__heading" id="catalogue-actions">
                  Route actions
                </h2>
              </div>
              <div className="usa-card__body">
                <p>
                  Use the sample links to verify that URL-backed search state and detail
                  routing stay intact.
                </p>
              </div>
              <div className="usa-card__footer">
                <Link className="usa-button" to="/jobs?q=data+analyst&work=remote">
                  Try a remote data search
                </Link>
                <Link className="usa-button usa-button--outline margin-top-1" to="/jobs/1">
                  Open sample detail
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </FoundationPage>
  )
}
