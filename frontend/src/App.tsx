import { useEffect, useState } from 'react'
import './app.css'
import { isSupabaseConfigured, supabase } from './lib/supabase'

type Instrument = {
  id: number
  name: string
  section: string
  created_at: string
}

const setupSteps = [
  'Run npm install from the repository root.',
  'Start the local Supabase stack with npm run supabase:start.',
  'Copy frontend/.env.local.example to frontend/.env.local.',
  'Paste the local Project URL and Publishable key into frontend/.env.local.',
  'Run npm run dev and verify the sample data loads.',
]

function App() {
  const [instruments, setInstruments] = useState<Instrument[]>([])
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    isSupabaseConfigured ? 'loading' : 'idle',
  )
  const [message, setMessage] = useState(
    isSupabaseConfigured
      ? 'Connecting to the Supabase API.'
      : 'Supabase environment variables are not configured yet.',
  )

  useEffect(() => {
    if (!supabase) {
      return
    }

    const client = supabase
    let isMounted = true

    const loadInstruments = async () => {
      const { data, error } = await client
        .from('instruments')
        .select('id, name, section, created_at')
        .order('id')

      if (!isMounted) {
        return
      }

      if (error) {
        setStatus('error')
        setMessage(error.message)
        return
      }

      setInstruments(data ?? [])
      setStatus('success')
      setMessage('Frontend and backend are connected.')
    }

    void loadInstruments()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <main className="app-shell">
      <section className="hero-panel">
        <p className="eyebrow">Split Architecture</p>
        <h1>React 19 frontend. Supabase backend.</h1>
        <p className="lede">
          The frontend is a TypeScript React application with the React Compiler
          enabled. The backend is a local Supabase workspace ready for migrations,
          seed data, and API development.
        </p>
        <div className="badge-row">
          <span>React 19</span>
          <span>TypeScript</span>
          <span>Vite</span>
          <span>Supabase CLI</span>
        </div>
      </section>

      <section className="grid">
        <article className="card">
          <div className="card-heading">
            <p className="eyebrow">Status</p>
            <h2>Supabase connection</h2>
          </div>
          <p className={`status-pill status-${status}`}>{message}</p>
          <p className="card-copy">
            The sample query reads from the seeded <code>instruments</code> table
            in the local Supabase database.
          </p>
          <ul className="data-list">
            {instruments.length > 0 ? (
              instruments.map((instrument) => (
                <li key={instrument.id}>
                  <strong>{instrument.name}</strong>
                  <span>{instrument.section}</span>
                </li>
              ))
            ) : (
              <li className="placeholder">
                <strong>No data loaded yet.</strong>
                <span>Start Supabase and configure the frontend env file.</span>
              </li>
            )}
          </ul>
        </article>

        <article className="card">
          <div className="card-heading">
            <p className="eyebrow">Workflow</p>
            <h2>Startup path</h2>
          </div>
          <ol className="setup-list">
            {setupSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </article>
      </section>
    </main>
  )
}

export default App
