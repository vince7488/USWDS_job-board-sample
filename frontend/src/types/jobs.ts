export const workArrangements = ['onsite', 'hybrid', 'remote'] as const
export const jobTypes = [
  'full-time',
  'part-time',
  'contract',
  'internship',
  'temporary',
] as const
export const experienceLevels = ['entry', 'mid', 'senior', 'executive'] as const
export const datePostedOptions = ['any', 'past-day', 'past-week', 'past-month'] as const
export const jobSortOptions = ['relevance', 'newest', 'highest-pay'] as const

export type WorkArrangement = (typeof workArrangements)[number]
export type JobType = (typeof jobTypes)[number]
export type ExperienceLevel = (typeof experienceLevels)[number]
export type DatePostedOption = (typeof datePostedOptions)[number]
export type JobSortOption = (typeof jobSortOptions)[number]

export type Company = {
  id: number
  name: string
  description: string
  industry: string
  companySize: string | null
  website: string | null
}

export type Job = {
  id: number
  company: Company
  title: string
  location: string
  distanceMiles: number
  workArrangement: WorkArrangement
  payMin: number
  payMax: number
  jobType: JobType
  experienceLevel: ExperienceLevel
  datePosted: string
  summary: string
  description: string
  responsibilities: string[]
  qualifications: string[]
  benefits: string[]
  schedule: string | null
  travel: string | null
  clearance: string | null
  visaNote: string | null
  otherDetails: string[]
  tags: string[]
}

export type JobSearchFilters = {
  query: string
  location: string
  distance: number | null
  workArrangements: WorkArrangement[]
  payMin: number | null
  payMax: number | null
  experienceLevels: ExperienceLevel[]
  datePosted: DatePostedOption
  jobTypes: JobType[]
  industry: string
  sort: JobSortOption
}
