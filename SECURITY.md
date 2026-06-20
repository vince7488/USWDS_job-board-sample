# Security Policy

## Supported Versions

This project is in MVP development. Security support applies only to the current
main development line and the dependency versions committed in this repository.

| Component | Supported version | Supported |
| --- | --- | --- |
| USWDS Sample Job Board | Current `main` / active MVP branch | Yes |
| `@uswds/uswds` | `3.13.x` | Yes |
| Older local/vendor USWDS copies | Any static `frontend/public/vendor/uswds` copy | No |
| Older project snapshots | Unmaintained branches or discarded MVP experiments | No |

## Dependency Security

This project uses USWDS through the package dependency `@uswds/uswds`, not through
a copied static vendor directory.

Security updates should be handled by:

- keeping `@uswds/uswds` on the supported `3.13.x` line until we intentionally upgrade;
- reviewing GitHub Dependabot or package manager security alerts;
- running the project test and build checks after dependency updates;
- avoiding committed generated caches such as `node_modules`, `frontend/dist`, and Vite cache files.

## Reporting a Vulnerability

Please report suspected vulnerabilities privately [by contacting me at vernard.net](https://blog.vernard.net/contact/), or through GitHub Security Advisories
for this repository when available.

If GitHub Security Advisories are not available, open a minimal issue that does
not include exploit details and request a private follow-up channel.

When reporting, include:

- affected route, page, component, or dependency;
- steps to reproduce;
- expected impact;
- relevant package versions;
- whether the issue affects local development only or production builds.

## Response Expectations

We will triage security reports as soon as practical during active development.

Accepted vulnerabilities will be tracked privately until a fix or mitigation is
available. Declined reports will include a short explanation when possible.

## Out of Scope

The following are out of scope for this MVP unless they expose a real security risk:

- missing production hosting headers before deployment exists;
- local-only Vite cache or Windows ACL issues;
- placeholder application flows that do not transmit data;
- vulnerabilities in discarded static vendor copies that are no longer used.
