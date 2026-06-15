import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type FoundationPageProps = {
  eyebrow: string
  title: string
  children: ReactNode
}

export function FoundationPage({ eyebrow, title, children }: FoundationPageProps) {
  return (
    <main id="main-content" className="grid-container padding-y-6">
      <section className="phase-banner bg-white padding-4 shadow-2 radius-md">
        <p className="text-primary text-bold text-uppercase margin-top-0">{eyebrow}</p>
        <h1 className="font-heading-xl margin-top-1">{title}</h1>
        <div className="measure-5">{children}</div>
        <nav aria-label="Phase 1 route verification">
          <ul className="route-list margin-top-4">
            <li>
              <Link className="usa-button" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="usa-button usa-button--outline" to="/jobs">
                Job catalogue
              </Link>
            </li>
            <li>
              <Link className="usa-button usa-button--outline" to="/jobs/1">
                Sample job detail
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  )
}
