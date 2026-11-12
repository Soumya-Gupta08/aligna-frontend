import { ExternalLink } from 'lucide-react'
import Card from '../ui/Card'
import { deadlines } from '../../data/mockData'

export default function UpcomingDeadlines() {
  return (
    <Card>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-ink font-medium">Upcoming Deadlines</h2>
        <span className="text-ink-muted text-xs">Next 4 Days</span>
      </div>

      <ul className="space-y-3">
        {deadlines.map((d) => (
          <li key={d.id} className="border-line border-b pb-3 last:border-0">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-ink text-sm">
                  {d.overdue && (
                    <span className="bg-overdue/15 text-overdue mr-2 rounded px-1.5 py-0.5 text-[10px]">
                      Overdue {d.overdue}
                    </span>
                  )}
                  {d.title}
                </p>
                <p className="text-xs">
                  <span className="text-violet-soft">{d.cat}</span>
                  <span className="text-ink-muted"> › {d.sub}</span>
                  {d.priority && <span className="text-overdue"> • {d.priority}</span>}
                </p>
              </div>
              <div className="text-right text-xs">
                <p className={d.overdue ? 'text-overdue' : 'text-ink'}>{d.date}</p>
                {d.time && <p className="text-ink-muted">{d.time}</p>}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <button className="text-ink-2 hover:text-ink mx-auto mt-3 flex items-center gap-1 text-xs">
        Open Calendar Schedule <ExternalLink size={12} />
      </button>
    </Card>
  )
}