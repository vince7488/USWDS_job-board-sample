import { useState, type ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'

type FoundationPageProps = {
  eyebrow: string
  title: string
  children: ReactNode
}

function SiteHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const closeNav = () => setIsNavOpen(false)

  return (
    <>
      <a className="usa-skipnav" href="#main-content">
        Skip to main content
      </a>
      <section className="usa-banner" aria-label="Official website of the United States government">
        <div className="usa-accordion">
          <header className="usa-banner__header">
            <div className="usa-banner__inner">
              <div className="grid-col-auto">
                <img
                  aria-hidden="true"
                  className="usa-banner__header-flag"
                  src="/favicon.svg"
                  alt=""
                />
              </div>
              <div className="grid-col-fill tablet:grid-col-auto">
                <p className="usa-banner__header-text">
                  A public-service job board demo using USWDS.
                </p>
              </div>
            </div>
          </header>
        </div>
      </section>
      <div className={isNavOpen ? 'usa-overlay is-visible' : 'usa-overlay'} />
      <header className="usa-header usa-header--basic">
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <div className="usa-logo" id="basic-logo">
              <em className="usa-logo__text">
                <Link to="/" title="Public Service Jobs home" onClick={closeNav}>
                  Public Service Jobs
                </Link>
              </em>
            </div>
            <button
              className="usa-menu-btn"
              type="button"
              onClick={() => setIsNavOpen(true)}
            >
              Menu
            </button>
          </div>
          <nav
            aria-label="Primary navigation"
            className={isNavOpen ? 'usa-nav is-visible' : 'usa-nav'}
          >
            <button className="usa-nav__close" type="button" onClick={closeNav}>
              <span className="usa-sr-only">Close navigation</span>
            </button>
            <ul className="usa-nav__primary usa-accordion">
              <li className="usa-nav__primary-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'usa-current usa-nav-link' : 'usa-nav-link'
                  }
                  to="/"
                  onClick={closeNav}
                >
                  <span>Home</span>
                </NavLink>
              </li>
              <li className="usa-nav__primary-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'usa-current usa-nav-link' : 'usa-nav-link'
                  }
                  to="/jobs"
                  onClick={closeNav}
                >
                  <span>Job catalogue</span>
                </NavLink>
              </li>
              <li className="usa-nav__primary-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'usa-current usa-nav-link' : 'usa-nav-link'
                  }
                  to="/jobs/1"
                  onClick={closeNav}
                >
                  <span>Sample detail</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

function SiteFooter() {
  return (
    <footer className="usa-footer">
      <div className="grid-container usa-footer__return-to-top">
        <a href="#main-content">Return to top</a>
      </div>
      <div className="usa-footer__primary-section">
        <div className="grid-container">
          <nav className="usa-footer__nav" aria-label="Footer navigation">
            <ul className="grid-row grid-gap">
              <li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
                <Link className="usa-footer__primary-link" to="/">
                  Home
                </Link>
              </li>
              <li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
                <Link className="usa-footer__primary-link" to="/jobs">
                  Job catalogue
                </Link>
              </li>
              <li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
                <Link className="usa-footer__primary-link" to="/jobs/1">
                  Sample detail
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="usa-footer__secondary-section">
        <div className="grid-container">
          <div className="usa-footer__logo grid-row grid-gap-2">
            <div className="grid-col-auto">
              <img className="usa-footer__logo-img" src="/favicon.svg" alt="" />
            </div>
            <div className="grid-col-auto">
              <p className="usa-footer__logo-heading">Public Service Jobs</p>
              <p className="usa-footer__contact-heading">
                Phase 1 foundation for a USWDS job-search MVP.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export function FoundationPage({ eyebrow, title, children }: FoundationPageProps) {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main id="main-content" className="grid-container padding-y-6" tabIndex={-1}>
        <section className="usa-section">
          <div className="usa-prose">
            <p className="text-primary text-bold text-uppercase margin-top-0">
              {eyebrow}
            </p>
            <h1 className="font-heading-xl margin-top-1">{title}</h1>
          </div>
          <div className="margin-top-4">{children}</div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
