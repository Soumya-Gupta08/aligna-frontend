import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mt-20 text-center">
      <h1 className="text-ink text-3xl font-semibold">404</h1>
      <p className="text-ink-2 mt-2 text-sm">That page doesn't exist.</p>
      <Link to="/" className="text-nav-active-text mt-4 inline-block text-sm hover:underline">
        Back to Dashboard
      </Link>
    </div>
  )
}