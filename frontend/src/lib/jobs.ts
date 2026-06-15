import { supabase } from './supabase'
import type {
  Company,
  ExperienceLevel,
  Job,
  JobType,
  WorkArrangement,
} from '../types/jobs'

type CompanyRecord = {
  id: number
  name: string
  description: string
  industry: string
  company_size: string | null
  website: string | null
}

type JobRecord = {
  id: number
  company: CompanyRecord
  title: string
  location: string
  distance_miles: number
  work_arrangement: WorkArrangement
  pay_min: number
  pay_max: number
  job_type: JobType
  experience_level: ExperienceLevel
  date_posted: string
  summary: string
  description: string
  responsibilities: string[]
  qualifications: string[]
  benefits: string[]
  schedule: string | null
  travel: string | null
  clearance: string | null
  visa_note: string | null
  other_details: string[]
  tags: string[]
}

const jobSelect = `
  id,
  title,
  location,
  distance_miles,
  work_arrangement,
  pay_min,
  pay_max,
  job_type,
  experience_level,
  date_posted,
  summary,
  description,
  responsibilities,
  qualifications,
  benefits,
  schedule,
  travel,
  clearance,
  visa_note,
  other_details,
  tags,
  company:companies (
    id,
    name,
    description,
    industry,
    company_size,
    website
  )
`

function mapCompany(record: CompanyRecord): Company {
  return {
    id: record.id,
    name: record.name,
    description: record.description,
    industry: record.industry,
    companySize: record.company_size,
    website: record.website,
  }
}

function mapJob(record: JobRecord): Job {
  return {
    id: record.id,
    company: mapCompany(record.company),
    title: record.title,
    location: record.location,
    distanceMiles: record.distance_miles,
    workArrangement: record.work_arrangement,
    payMin: record.pay_min,
    payMax: record.pay_max,
    jobType: record.job_type,
    experienceLevel: record.experience_level,
    datePosted: record.date_posted,
    summary: record.summary,
    description: record.description,
    responsibilities: record.responsibilities,
    qualifications: record.qualifications,
    benefits: record.benefits,
    schedule: record.schedule,
    travel: record.travel,
    clearance: record.clearance,
    visaNote: record.visa_note,
    otherDetails: record.other_details,
    tags: record.tags,
  }
}

function getClient() {
  if (!supabase) {
    throw new Error('Supabase environment variables are not configured.')
  }

  return supabase
}

export async function getJobs() {
  const { data, error } = await getClient()
    .from('jobs')
    .select(jobSelect)
    .order('date_posted', { ascending: false })

  if (error) {
    throw error
  }

  return (data as unknown as JobRecord[]).map(mapJob)
}

export async function getJobById(jobId: number) {
  const { data, error } = await getClient()
    .from('jobs')
    .select(jobSelect)
    .eq('id', jobId)
    .maybeSingle()

  if (error) {
    throw error
  }

  return data ? mapJob(data as unknown as JobRecord) : null
}
