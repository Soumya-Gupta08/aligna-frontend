import { Link, useParams } from 'react-router-dom'

export default function Subcategory() {
  const { categoryName, subName } = useParams()

  return (
    <div className="mx-auto max-w-6xl">
      <p className="text-ink-2 text-sm">
        <Link to={`/category/${encodeURIComponent(categoryName)}`} className="text-violet-soft hover:underline">
          {categoryName}
        </Link>{' '}
        › {subName}
      </p>
      <h1 className="text-ink mt-1 text-2xl font-semibold">{subName}</h1>
      {/* ProgressRing + task list go here later */}
    </div>
  )
}