insert into public.companies (
  id,
  name,
  description,
  industry,
  company_size,
  website
)
values
  (1, 'Civic Digital Services', 'Builds accessible digital services for public-sector programs.', 'Government Technology', '201-500 employees', 'https://example.com/civic-digital'),
  (2, 'Harbor Health Network', 'A regional healthcare network focused on equitable patient outcomes.', 'Healthcare', '5,001-10,000 employees', 'https://example.com/harbor-health'),
  (3, 'Northstar Analytics', 'Helps organizations make responsible decisions with data.', 'Data and Analytics', '501-1,000 employees', 'https://example.com/northstar-analytics'),
  (4, 'BrightGrid Energy', 'Develops and operates clean-energy infrastructure across the United States.', 'Renewable Energy', '1,001-5,000 employees', 'https://example.com/brightgrid'),
  (5, 'Community First Credit Union', 'Provides member-owned financial services and community lending.', 'Financial Services', '501-1,000 employees', 'https://example.com/community-first'),
  (6, 'Learning Bridge', 'Creates workforce training programs for adult learners and career changers.', 'Education', '201-500 employees', 'https://example.com/learning-bridge'),
  (7, 'Atlas Transit Solutions', 'Designs technology and operations programs for safer public transit.', 'Transportation', '1,001-5,000 employees', 'https://example.com/atlas-transit'),
  (8, 'Greenway Housing Partners', 'Develops and preserves affordable, sustainable housing.', 'Housing and Real Estate', '51-200 employees', 'https://example.com/greenway-housing'),
  (9, 'Sentinel Cyber Defense', 'Protects critical infrastructure through practical cybersecurity services.', 'Cybersecurity', '501-1,000 employees', 'https://example.com/sentinel-cyber'),
  (10, 'Open Roads Foundation', 'Expands economic opportunity through community grants and research.', 'Nonprofit', '51-200 employees', 'https://example.com/open-roads'),
  (11, 'Apex Manufacturing Group', 'Produces precision equipment for domestic infrastructure projects.', 'Manufacturing', '1,001-5,000 employees', 'https://example.com/apex-manufacturing'),
  (12, 'Bluebird Communications', 'Delivers public-interest communications and multilingual outreach.', 'Communications', '201-500 employees', 'https://example.com/bluebird-comms')
on conflict (id) do update
set
  name = excluded.name,
  description = excluded.description,
  industry = excluded.industry,
  company_size = excluded.company_size,
  website = excluded.website;

insert into public.jobs (
  id,
  company_id,
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
  tags
)
values
  (
    1, 1, 'Senior Frontend Engineer', 'Washington, DC', 3, 'hybrid', 128000, 158000, 'full-time', 'senior', current_date - 2,
    'Build accessible public-service interfaces used by millions of people.',
    'Join a multidisciplinary delivery team modernizing essential government services with React, TypeScript, and USWDS.',
    array['Lead frontend architecture and implementation', 'Partner with design and research on accessible experiences', 'Mentor engineers and improve delivery practices'],
    array['Five or more years of frontend engineering experience', 'Advanced React and TypeScript skills', 'Demonstrated WCAG and automated testing experience'],
    array['Health, dental, and vision coverage', 'Federal holidays plus flexible leave', 'Professional development budget'],
    'Flexible core hours, Monday through Friday', 'Up to 10%', 'Public trust eligibility preferred', 'Sponsorship is not available',
    array['Quarterly in-person planning in Washington, DC'], array['react', 'typescript', 'uswds', 'accessibility', 'bachelors degree']
  ),
  (
    2, 1, 'UX Researcher', 'Baltimore, MD', 36, 'hybrid', 92000, 118000, 'full-time', 'mid', current_date - 5,
    'Plan and conduct research that improves public digital services.',
    'Work with product teams and community partners to uncover needs, test concepts, and translate findings into actionable recommendations.',
    array['Plan qualitative and quantitative research', 'Facilitate interviews and usability studies', 'Communicate findings to delivery teams'],
    array['Three or more years of applied UX research', 'Strong facilitation and synthesis skills', 'Portfolio demonstrating inclusive research practices'],
    array['Health coverage', 'Transit stipend', 'Flexible leave'],
    'Monday through Friday with flexible hours', 'Up to 15%', null, 'Sponsorship is not available',
    array['Some evening research sessions may be required'], array['ux research', 'usability', 'public service', 'psychology degree']
  ),
  (
    3, 2, 'Registered Nurse - Community Care', 'Arlington, VA', 8, 'onsite', 78000, 101000, 'full-time', 'mid', current_date - 1,
    'Coordinate compassionate care for patients in community clinics.',
    'Provide direct care, patient education, and coordination across an interdisciplinary community health team.',
    array['Deliver and document patient care', 'Coordinate referrals and follow-up', 'Educate patients and caregivers'],
    array['Active Virginia RN license', 'Two years of clinical nursing experience', 'Bachelor of Science in Nursing preferred'],
    array['Medical coverage', 'Retirement match', 'Tuition assistance'],
    'Four ten-hour weekday shifts', 'Local travel up to 10%', 'Background check required', 'Sponsorship may be considered',
    array['Flu vaccination required unless exempt'], array['registered nurse', 'rn', 'community health', 'bsn', 'healthcare']
  ),
  (
    4, 2, 'Healthcare Data Analyst', 'Remote - United States', 0, 'remote', 82000, 106000, 'full-time', 'mid', current_date - 8,
    'Turn clinical and operational data into insights that improve patient care.',
    'Develop trusted reporting and analysis for quality, access, and operational performance across the health network.',
    array['Build dashboards and recurring reports', 'Validate clinical data quality', 'Present findings to operational leaders'],
    array['Three years of analytics experience', 'Strong SQL and data visualization skills', 'Healthcare data experience preferred'],
    array['Health coverage', 'Remote-work stipend', 'Retirement match'],
    'Monday through Friday, Eastern or Central time', 'Up to 5%', null, 'Sponsorship is not available',
    array['Must reside in the United States'], array['sql', 'tableau', 'analytics', 'healthcare', 'statistics degree']
  ),
  (
    5, 3, 'Data Science Intern', 'Chicago, IL', 4, 'hybrid', 48000, 56000, 'internship', 'entry', current_date - 3,
    'Apply statistical methods to real client questions with senior mentorship.',
    'Support responsible analytics projects while building practical experience in data preparation, modeling, and communication.',
    array['Prepare and explore datasets', 'Document model assumptions and findings', 'Present an end-of-term project'],
    array['Currently pursuing a quantitative degree', 'Coursework in Python or R', 'Clear written communication'],
    array['Paid learning time', 'Transit benefit', 'Mentorship program'],
    'Full-time summer schedule', 'None', null, 'Sponsorship is not available',
    array['Twelve-week summer program'], array['data science', 'python', 'r', 'statistics', 'internship']
  ),
  (
    6, 3, 'Senior Data Engineer', 'Remote - United States', 0, 'remote', 135000, 172000, 'full-time', 'senior', current_date - 12,
    'Design reliable data platforms for mission-driven analytics.',
    'Own scalable data pipelines and platform standards that help analysts and scientists deliver trustworthy work.',
    array['Design batch and streaming pipelines', 'Establish observability and data-quality standards', 'Guide platform architecture'],
    array['Six years of data engineering experience', 'Advanced SQL and Python skills', 'Cloud data-platform experience'],
    array['Medical coverage', 'Home-office stipend', 'Annual learning budget'],
    'Flexible schedule with core collaboration hours', 'Quarterly travel', null, 'Sponsorship may be considered',
    array['On-call rotation approximately one week per quarter'], array['data engineering', 'python', 'sql', 'cloud', 'computer science degree']
  ),
  (
    7, 4, 'Solar Project Manager', 'Richmond, VA', 2, 'hybrid', 105000, 132000, 'full-time', 'senior', current_date - 4,
    'Lead utility-scale solar projects from planning through operation.',
    'Coordinate engineering, permitting, procurement, and construction partners to deliver safe renewable-energy projects.',
    array['Manage project scope, schedule, and budget', 'Coordinate permitting and vendor work', 'Report project risks and milestones'],
    array['Five years of infrastructure project management', 'Strong contract and stakeholder management', 'PMP certification preferred'],
    array['Medical coverage', '401(k) match', 'Paid volunteer days'],
    'Monday through Friday', 'Up to 30%', null, 'Sponsorship is not available',
    array['Valid driver license required'], array['project management', 'solar', 'renewable energy', 'pmp', 'engineering degree']
  ),
  (
    8, 4, 'Electrical Engineering Technician', 'Norfolk, VA', 6, 'onsite', 62000, 79000, 'full-time', 'entry', current_date - 9,
    'Support testing and maintenance for clean-energy electrical systems.',
    'Work alongside engineers and field teams to inspect, test, troubleshoot, and document electrical equipment.',
    array['Perform equipment tests and inspections', 'Maintain accurate service records', 'Support field troubleshooting'],
    array['Associate degree in electrical technology or equivalent experience', 'Ability to read electrical diagrams', 'Comfort working outdoors'],
    array['Medical coverage', 'Tool allowance', 'Certification reimbursement'],
    'Day shift with occasional weekend work', 'Up to 20%', null, 'Sponsorship is not available',
    array['Ability to lift 50 pounds'], array['electrical', 'technician', 'solar', 'associate degree', 'maintenance']
  ),
  (
    9, 5, 'Member Services Representative', 'Alexandria, VA', 5, 'onsite', 43000, 54000, 'full-time', 'entry', current_date,
    'Help credit-union members solve everyday financial needs.',
    'Provide accurate, welcoming service while processing transactions and connecting members with appropriate products.',
    array['Process member transactions', 'Resolve account questions', 'Identify helpful financial products'],
    array['Customer-service experience', 'Strong attention to detail', 'High school diploma or equivalent'],
    array['Medical coverage', 'Paid banking holidays', 'Retirement contribution'],
    'Rotating weekday and Saturday schedule', 'None', 'Financial background check required', 'Sponsorship is not available',
    array['Cash-handling experience preferred'], array['customer service', 'banking', 'finance', 'member services']
  ),
  (
    10, 5, 'Compliance Analyst', 'Washington, DC', 1, 'hybrid', 76000, 98000, 'full-time', 'mid', current_date - 15,
    'Support a practical compliance program for member-owned financial services.',
    'Monitor regulatory requirements, assess controls, and help business partners resolve compliance risks.',
    array['Perform compliance reviews', 'Track regulatory changes', 'Draft policies and remediation plans'],
    array['Three years of financial-services compliance experience', 'Strong research and writing skills', 'Bachelor degree preferred'],
    array['Medical coverage', 'Retirement contribution', 'Professional certification support'],
    'Monday through Friday', 'Up to 5%', 'Financial background check required', 'Sponsorship is not available',
    array['CRC or CAMS certification is a plus'], array['compliance', 'banking', 'risk', 'finance degree', 'regulatory']
  ),
  (
    11, 6, 'Instructional Designer', 'Remote - United States', 0, 'remote', 72000, 94000, 'full-time', 'mid', current_date - 6,
    'Create practical online learning for adults changing careers.',
    'Design accessible, evidence-based courses in partnership with instructors, employers, and learner-support teams.',
    array['Design online courses and assessments', 'Coach subject-matter experts', 'Evaluate learning effectiveness'],
    array['Three years of instructional design experience', 'Portfolio of online learning work', 'Knowledge of accessibility standards'],
    array['Medical coverage', 'Remote-work stipend', 'Four-day summer Fridays'],
    'Flexible schedule with Eastern-time meetings', 'Up to 10%', null, 'Sponsorship is not available',
    array['Must reside in the contiguous United States'], array['instructional design', 'education', 'accessibility', 'adult learning', 'masters degree']
  ),
  (
    12, 6, 'Career Coach - Part Time', 'Philadelphia, PA', 7, 'hybrid', 36000, 45000, 'part-time', 'mid', current_date - 10,
    'Coach adult learners through career transitions and job searches.',
    'Provide individualized coaching, facilitate workshops, and connect learners with employment resources.',
    array['Conduct one-on-one coaching', 'Facilitate job-search workshops', 'Maintain learner progress notes'],
    array['Two years of coaching or workforce-development experience', 'Excellent facilitation skills', 'Evening availability'],
    array['Paid leave', 'Professional development support', 'Transit benefit'],
    'Twenty-four hours weekly including two evenings', 'None', null, 'Sponsorship is not available',
    array['This is a part-time benefits-eligible role'], array['career coach', 'workforce development', 'education', 'part-time']
  ),
  (
    13, 7, 'Transit Operations Coordinator', 'Washington, DC', 2, 'onsite', 68000, 86000, 'full-time', 'mid', current_date - 2,
    'Coordinate daily service decisions for a busy public transit network.',
    'Monitor service, communicate disruptions, and coordinate operations teams to keep riders moving safely.',
    array['Monitor real-time service', 'Coordinate incident response', 'Prepare operational reports'],
    array['Three years of transportation operations experience', 'Strong decision-making under pressure', 'Clear radio and written communication'],
    array['Medical coverage', 'Free regional transit pass', 'Pension plan'],
    'Rotating shifts including nights and weekends', 'None', 'Background check required', 'Sponsorship is not available',
    array['Essential on-site role during severe weather'], array['transit', 'operations', 'transportation', 'coordination']
  ),
  (
    14, 7, 'Transportation Planner', 'Silver Spring, MD', 11, 'hybrid', 85000, 109000, 'full-time', 'mid', current_date - 18,
    'Develop equitable plans that improve mobility and transit access.',
    'Analyze travel patterns, engage communities, and develop recommendations for transit service and infrastructure investments.',
    array['Analyze transportation data', 'Lead public engagement activities', 'Draft plans and recommendations'],
    array['Three years of transportation planning experience', 'GIS experience', 'Master degree in planning or related field preferred'],
    array['Medical coverage', 'Transit pass', 'Professional development budget'],
    'Monday through Friday with occasional evening meetings', 'Up to 15%', null, 'Sponsorship is not available',
    array['Bilingual skills are valued'], array['transportation planning', 'gis', 'public engagement', 'urban planning degree']
  ),
  (
    15, 8, 'Affordable Housing Development Associate', 'Baltimore, MD', 3, 'hybrid', 70000, 90000, 'full-time', 'entry', current_date - 7,
    'Support development of affordable and sustainable housing communities.',
    'Assist project teams with financing, due diligence, community engagement, and construction coordination.',
    array['Maintain project budgets and schedules', 'Support financing applications', 'Coordinate due-diligence documents'],
    array['One year of real-estate, finance, or community-development experience', 'Strong spreadsheet skills', 'Bachelor degree preferred'],
    array['Medical coverage', 'Transit stipend', 'Paid volunteer time'],
    'Monday through Friday', 'Local travel up to 15%', null, 'Sponsorship is not available',
    array['Occasional evening community meetings'], array['affordable housing', 'real estate', 'finance', 'community development']
  ),
  (
    16, 8, 'Resident Services Coordinator', 'Baltimore, MD', 5, 'onsite', 50000, 62000, 'temporary', 'entry', current_date - 13,
    'Connect residents with services that support stable housing and wellbeing.',
    'Build trusted relationships with residents and coordinate community programs, referrals, and events.',
    array['Coordinate resident programs', 'Provide service referrals', 'Track participation and outcomes'],
    array['Community-service experience', 'Strong interpersonal skills', 'Spanish proficiency preferred'],
    array['Paid leave', 'Transit stipend', 'Employee assistance program'],
    'Six-month role, Monday through Friday', 'Local travel up to 10%', 'Background check required', 'Sponsorship is not available',
    array['Potential conversion based on funding'], array['resident services', 'housing', 'community', 'temporary', 'social work']
  ),
  (
    17, 9, 'Cybersecurity Analyst', 'Reston, VA', 4, 'hybrid', 98000, 126000, 'full-time', 'mid', current_date - 1,
    'Investigate threats and strengthen defenses for critical infrastructure.',
    'Monitor security events, investigate incidents, and improve controls in partnership with engineering teams.',
    array['Triage and investigate security alerts', 'Support incident response', 'Recommend control improvements'],
    array['Three years of security-operations experience', 'Knowledge of SIEM and endpoint tools', 'Security+ or equivalent preferred'],
    array['Medical coverage', 'Certification reimbursement', 'Retirement match'],
    'Monday through Friday with on-call rotation', 'Up to 10%', 'Must be eligible for a Secret clearance', 'US citizenship required for clearance',
    array['On-call rotation approximately every six weeks'], array['cybersecurity', 'soc', 'incident response', 'security+', 'information technology degree']
  ),
  (
    18, 9, 'Cloud Security Architect', 'Remote - United States', 0, 'remote', 155000, 195000, 'contract', 'senior', current_date - 11,
    'Define secure cloud architecture for high-impact infrastructure programs.',
    'Advise delivery teams on cloud security patterns, threat models, controls, and risk decisions.',
    array['Define reference architectures', 'Review threat models and system designs', 'Advise engineering and compliance teams'],
    array['Eight years of cybersecurity experience', 'Deep AWS or Azure security expertise', 'CISSP preferred'],
    array['Contract completion bonus', 'Remote equipment provided', 'Flexible schedule'],
    'Twelve-month contract with core collaboration hours', 'Up to 10%', 'Active Secret clearance required', 'US citizenship required for clearance',
    array['Potential contract extension'], array['cloud security', 'aws', 'azure', 'architecture', 'cissp', 'contract']
  ),
  (
    19, 10, 'Grants Program Officer', 'Washington, DC', 2, 'hybrid', 88000, 112000, 'full-time', 'mid', current_date - 4,
    'Manage grant partnerships that expand local economic opportunity.',
    'Guide nonprofit partners through grantmaking, monitor outcomes, and strengthen equitable program practices.',
    array['Manage a portfolio of grants', 'Conduct partner due diligence', 'Assess outcomes and learning'],
    array['Four years of grants or nonprofit program experience', 'Strong relationship management', 'Excellent writing skills'],
    array['Medical coverage', 'Generous leave', 'Professional development budget'],
    'Monday through Friday', 'Up to 20%', null, 'Sponsorship is not available',
    array['Occasional evening events'], array['grants', 'nonprofit', 'program management', 'economic development']
  ),
  (
    20, 10, 'Research Assistant', 'Washington, DC', 1, 'hybrid', 47000, 58000, 'full-time', 'entry', current_date - 16,
    'Support applied research on economic mobility and community investment.',
    'Collect, clean, and summarize data while supporting literature reviews and publication workflows.',
    array['Conduct literature reviews', 'Clean and document datasets', 'Support reports and presentations'],
    array['Bachelor degree in economics, public policy, or related field', 'Introductory statistics experience', 'Strong attention to detail'],
    array['Medical coverage', 'Generous leave', 'Tuition support'],
    'Monday through Friday', 'Up to 5%', null, 'Sponsorship is not available',
    array['Two-year early-career development role'], array['research', 'economics', 'public policy', 'statistics', 'bachelors degree']
  ),
  (
    21, 11, 'Quality Assurance Specialist', 'Hagerstown, MD', 9, 'onsite', 65000, 82000, 'full-time', 'mid', current_date - 3,
    'Improve product quality across precision manufacturing operations.',
    'Inspect processes and products, investigate quality issues, and partner with production teams on corrective actions.',
    array['Perform audits and inspections', 'Lead root-cause analysis', 'Maintain quality documentation'],
    array['Three years of manufacturing quality experience', 'Knowledge of ISO 9001', 'Strong problem-solving skills'],
    array['Medical coverage', 'Retirement match', 'Safety shoe allowance'],
    'Day shift, Monday through Friday', 'Up to 5%', null, 'Sponsorship is not available',
    array['Ability to work on the production floor'], array['quality assurance', 'manufacturing', 'iso 9001', 'inspection']
  ),
  (
    22, 11, 'Production Technician - Evening Shift', 'Hagerstown, MD', 12, 'onsite', 44000, 57000, 'full-time', 'entry', current_date - 6,
    'Operate and maintain precision manufacturing equipment.',
    'Set up equipment, monitor production quality, and perform routine maintenance in a safety-focused facility.',
    array['Operate production equipment', 'Complete quality checks', 'Perform routine preventive maintenance'],
    array['High school diploma or equivalent', 'Mechanical aptitude', 'Manufacturing experience preferred'],
    array['Medical coverage', 'Evening shift differential', 'Training reimbursement'],
    'Monday through Thursday, 3:00 PM to 1:30 AM', 'None', null, 'Sponsorship is not available',
    array['Ability to lift 50 pounds'], array['production', 'technician', 'manufacturing', 'evening shift']
  ),
  (
    23, 12, 'Public Affairs Specialist', 'Washington, DC', 2, 'hybrid', 79000, 103000, 'full-time', 'mid', current_date - 5,
    'Develop clear public-facing communications for civic programs.',
    'Translate complex program information into useful content and coordinate communications across channels and partners.',
    array['Develop communications plans', 'Write and edit public-facing content', 'Coordinate media and partner outreach'],
    array['Three years of public affairs or communications experience', 'Excellent writing and editing skills', 'Bachelor degree preferred'],
    array['Medical coverage', 'Flexible leave', 'Transit benefit'],
    'Monday through Friday', 'Up to 10%', null, 'Sponsorship is not available',
    array['Writing samples required'], array['public affairs', 'communications', 'writing', 'media relations', 'communications degree']
  ),
  (
    24, 12, 'Multilingual Content Editor', 'Remote - United States', 0, 'remote', 68000, 88000, 'contract', 'mid', current_date - 14,
    'Edit accurate, accessible public information for multilingual audiences.',
    'Coordinate translation and edit English and Spanish content for clarity, consistency, accessibility, and cultural relevance.',
    array['Edit English and Spanish content', 'Coordinate translation reviews', 'Maintain terminology and style guidance'],
    array['Professional fluency in English and Spanish', 'Three years of editing experience', 'Knowledge of plain-language practices'],
    array['Flexible schedule', 'Remote equipment provided', 'Contract completion bonus'],
    'Nine-month contract with flexible hours', 'None', null, 'Sponsorship is not available',
    array['Portfolio or editing samples required'], array['editor', 'spanish', 'multilingual', 'plain language', 'accessibility', 'contract']
  )
on conflict (id) do update
set
  company_id = excluded.company_id,
  title = excluded.title,
  location = excluded.location,
  distance_miles = excluded.distance_miles,
  work_arrangement = excluded.work_arrangement,
  pay_min = excluded.pay_min,
  pay_max = excluded.pay_max,
  job_type = excluded.job_type,
  experience_level = excluded.experience_level,
  date_posted = excluded.date_posted,
  summary = excluded.summary,
  description = excluded.description,
  responsibilities = excluded.responsibilities,
  qualifications = excluded.qualifications,
  benefits = excluded.benefits,
  schedule = excluded.schedule,
  travel = excluded.travel,
  clearance = excluded.clearance,
  visa_note = excluded.visa_note,
  other_details = excluded.other_details,
  tags = excluded.tags,
  active = true,
  updated_at = timezone('utc'::text, now());

select setval(pg_get_serial_sequence('public.companies', 'id'), (select max(id) from public.companies));
select setval(pg_get_serial_sequence('public.jobs', 'id'), (select max(id) from public.jobs));
