import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { AppRoutes } from './App'

function renderRoute(route: string) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <AppRoutes />
    </MemoryRouter>,
  )
}

describe('application routes', () => {
  it('renders the home route', () => {
    renderRoute('/')
    expect(screen.getByRole('heading', { name: 'Public Service Jobs' })).toBeVisible()
  })

  it('renders catalogue URL search state', () => {
    renderRoute('/jobs?q=data+analyst')
    expect(screen.getByText('data analyst')).toBeVisible()
  })

  it('renders a job detail route', () => {
    renderRoute('/jobs/12')
    expect(screen.getByText('12')).toBeVisible()
  })
})
