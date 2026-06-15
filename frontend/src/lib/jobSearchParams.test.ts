import { describe, expect, it } from 'vitest'
import {
  defaultJobSearchFilters,
  parseJobSearchParams,
  serializeJobSearchFilters,
} from './jobSearchParams'
import type { JobSearchFilters } from '../types/jobs'

describe('job search URL state', () => {
  it('returns defaults for an empty search', () => {
    expect(parseJobSearchParams(new URLSearchParams())).toEqual(defaultJobSearchFilters)
  })

  it('round trips supported filters', () => {
    const filters: JobSearchFilters = {
      ...defaultJobSearchFilters,
      query: 'data analyst',
      location: 'Washington, DC',
      distance: 25,
      workArrangements: ['hybrid', 'remote'],
      payMin: 80000,
      payMax: 130000,
      experienceLevels: ['mid'],
      datePosted: 'past-week',
      jobTypes: ['full-time', 'contract'],
      industry: 'Government Technology',
      sort: 'newest',
    }

    const parsed = parseJobSearchParams(serializeJobSearchFilters(filters))

    expect(parsed).toEqual(filters)
  })

  it('ignores invalid filter values', () => {
    const parsed = parseJobSearchParams(
      new URLSearchParams(
        'distance=-5&payMin=nope&work=somewhere&type=freelance&sort=random',
      ),
    )

    expect(parsed).toEqual(defaultJobSearchFilters)
  })
})
