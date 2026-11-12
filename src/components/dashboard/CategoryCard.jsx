import Card from '../ui/Card'
import ProgressRing from '../ui/ProgressRing'
import {Link} from 'react-router-dom'

const tagColor = {
  'Top Priority': 'text-nav-active-text',
  'On Track': 'text-done',
  'Needs Attention': 'text-pending',
  Balanced: 'text-upcoming',
}

export default function CategoryCard({ name, done, total, tag, pending }) {
  const percent = Math.round((done / total) * 100)

  return (
    <Link to={`/category/${encodeURIComponent(name)}`}>
    <Card className="hover:border-brand/50 cursor-pointer transition-colors">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-ink mt-2 font-medium">{name}</p>
          <p className="text-ink-2 mt-1 text-xs">
            <span className="text-upcoming">{done}</span> of {total} completed
          </p>
        </div>
        <ProgressRing percent={percent} size={52} stroke={5} showLabel={false} />
      </div>
      <div className="text-ink-muted mt-4 flex items-center justify-between text-[11px]">
        <span>{pending} pending</span>
        <span className={tagColor[tag]}>{tag}</span>
      </div>
    </Card>
    </Link>
  )
}