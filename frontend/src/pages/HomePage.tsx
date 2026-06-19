import { Link } from 'react-router-dom'
import { FoundationPage } from './FoundationPage'
import { useDocumentTitle } from '../lib/useDocumentTitle'

export function HomePage() {
  useDocumentTitle('Home')

  return (
    <FoundationPage eyebrow="USWDS foundation" title="Public Service Jobs">
      <section className="usa-hero site-hero" aria-labelledby="home-hero-title">
        <div className="grid-container">
          <div className="usa-hero__callout">
            <p className="usa-hero__heading">
              <span className="usa-hero__heading--alt">Find roles built for service.</span>
              Search public-interest jobs with structured, accessible data.
            </p>
            <p id="home-hero-title">
              Phase 1 connects the job board routes, Supabase contract, URL search
              state, and USWDS visual system.
            </p>
            <Link className="usa-button" to="/jobs">
              Browse the catalogue
            </Link>
          </div>
        </div>
      </section>

      <div className="usa-summary-box margin-top-5" role="region" aria-labelledby="phase-one-summary">
        <div className="usa-summary-box__body">
          <h2 className="usa-summary-box__heading" id="phase-one-summary">
            Foundation ready for job search
          </h2>
          <div className="usa-summary-box__text">
            The application now has a real route structure, typed job data, shareable
            search parameters, and a public read-only backend model.
          </div>
        </div>
      </div>

      <ul className="usa-card-group margin-top-4">
        <li className="usa-card tablet:grid-col-4">
          <div className="usa-card__container">
            <div className="usa-card__header">
              <h2 className="usa-card__heading">Structured data</h2>
            </div>
            <div className="usa-card__body">
              <p>
                Jobs and companies are normalized in Supabase with dedicated fields for
                pay, location, qualifications, responsibilities, and tags.
              </p>
            </div>
          </div>
        </li>
        <li className="usa-card tablet:grid-col-4">
          <div className="usa-card__container">
            <div className="usa-card__header">
              <h2 className="usa-card__heading">Accessible routes</h2>
            </div>
            <div className="usa-card__body">
              <p>
                Home, catalogue, and detail routes render with semantic headings,
                keyboard-friendly navigation, and unique document titles.
              </p>
            </div>
          </div>
        </li>
        <li className="usa-card tablet:grid-col-4">
          <div className="usa-card__container">
            <div className="usa-card__header">
              <h2 className="usa-card__heading">MVP search state</h2>
            </div>
            <div className="usa-card__body">
              <p>
                Search and filter values can round-trip through URL parameters before
                the full catalogue interface is built.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </FoundationPage>
  )
}
