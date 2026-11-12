import { Link, useParams } from 'react-router-dom'
import { subcategories } from '../data/mockData'

export default function Category() {
  const { categoryName } = useParams()
  const subs = subcategories[categoryName] || []

  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="text-ink text-2xl font-semibold">{categoryName}</h1>
      <p className="text-ink-2 mt-1 text-sm">Subcategories</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {subs.map((s) => (
          <Link
            key={s}
            to={`/category/${encodeURIComponent(categoryName)}/${encodeURIComponent(s)}`}
            className="bg-card border-line hover:border-brand/50 rounded-xl border p-5 transition-colors"
          >
            <p className="text-ink font-medium">{s}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}