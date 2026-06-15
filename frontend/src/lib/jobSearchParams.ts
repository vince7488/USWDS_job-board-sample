import {
  datePostedOptions,
  experienceLevels,
  jobSortOptions,
  jobTypes,
  workArrangements,
  type DatePostedOption,
  type ExperienceLevel,
  type JobSearchFilters,
  type JobSortOption,
  type JobType,
  type WorkArrangement,
} from '../types/jobs'

export const defaultJobSearchFilters: JobSearchFilters = {
  query: '',
  location: '',
  distance: null,
  workArrangements: [],
  payMin: null,
  payMax: null,
  experienceLevels: [],
  datePosted: 'any',
  jobTypes: [],
  industry: '',
  sort: 'relevance',
}

function isAllowed<T extends string>(value: string, allowed: readonly T[]): value is T {
  return allowed.includes(value as T)
}

function parsePositiveNumber(value: string | null) {
  if (!value) {
    return null
  }

  const parsed = Number(value)
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : null
}

function parseAllowedList<T extends string>(
  params: URLSearchParams,
  key: string,
  allowed: readonly T[],
) {
  return params.getAll(key).filter((value): value is T => isAllowed(value, allowed))
}

export function parseJobSearchParams(params: URLSearchParams): JobSearchFilters {
  const datePostedValue = params.get('datePosted') ?? ''
  const sortValue = params.get('sort') ?? ''

  return {
    query: params.get('q')?.trim() ?? '',
    location: params.get('location')?.trim() ?? '',
    distance: parsePositiveNumber(params.get('distance')),
    workArrangements: parseAllowedList<WorkArrangement>(
      params,
      'work',
      workArrangements,
    ),
    payMin: parsePositiveNumber(params.get('payMin')),
    payMax: parsePositiveNumber(params.get('payMax')),
    experienceLevels: parseAllowedList<ExperienceLevel>(
      params,
      'experience',
      experienceLevels,
    ),
    datePosted: isAllowed<DatePostedOption>(datePostedValue, datePostedOptions)
      ? datePostedValue
      : defaultJobSearchFilters.datePosted,
    jobTypes: parseAllowedList<JobType>(params, 'type', jobTypes),
    industry: params.get('industry')?.trim() ?? '',
    sort: isAllowed<JobSortOption>(sortValue, jobSortOptions)
      ? sortValue
      : defaultJobSearchFilters.sort,
  }
}

export function serializeJobSearchFilters(filters: JobSearchFilters) {
  const params = new URLSearchParams()

  if (filters.query.trim()) params.set('q', filters.query.trim())
  if (filters.location.trim()) params.set('location', filters.location.trim())
  if (filters.distance !== null) params.set('distance', String(filters.distance))
  filters.workArrangements.forEach((value) => params.append('work', value))
  if (filters.payMin !== null) params.set('payMin', String(filters.payMin))
  if (filters.payMax !== null) params.set('payMax', String(filters.payMax))
  filters.experienceLevels.forEach((value) => params.append('experience', value))
  if (filters.datePosted !== defaultJobSearchFilters.datePosted) {
    params.set('datePosted', filters.datePosted)
  }
  filters.jobTypes.forEach((value) => params.append('type', value))
  if (filters.industry.trim()) params.set('industry', filters.industry.trim())
  if (filters.sort !== defaultJobSearchFilters.sort) params.set('sort', filters.sort)

  return params
}
