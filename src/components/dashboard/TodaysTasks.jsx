import { Check, Plus, ArrowRight } from 'lucide-react'
import clsx from 'clsx'
import Card from '../ui/Card'
import { todaysTasks } from '../../data/mockData'
import { Link } from 'react-router-dom'
import { useTaskStore, todayStr } from '../../store/useTaskStore'

const priorityStyle = {
  High: 'bg-overdue/15 text-overdue',
  Med: 'bg-pending/15 text-pending',
  Low: 'bg-surface text-ink-2',
}

export default function TodaysTasks() {
  const allTasks = useTaskStore((s) => s.tasks)
  const toggleTask = useTaskStore((s) => s.toggleTask)
  const openModal = useTaskStore((s) => s.openModal)

  const t = allTasks.filter((t) => t.date === todayStr())
  const doneCount = todaysTasks.filter((t) => t.done).length

  return (
    <Card className="flex flex-col">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-ink font-medium">Today's Tasks</h2>
          <span className="bg-pending/15 text-pending rounded px-2 py-0.5 text-[11px]">
            {doneCount} of {todaysTasks.length} completed
          </span>
        </div>
        <Link
          to="/today"
          className="text-nav-active-text text-xs hover:underline flex gap-2"
        >
          View All {<ArrowRight size={14} />}
        </Link>
      </div>

      <ul className="space-y-2">
        {todaysTasks.map((t) => (
          <li
            key={t.id}
            className="bg-surface flex items-center gap-3 rounded-lg px-3 py-2.5"
          >
            <button
              onClick={() => toggleTask(t.id)}
              aria-label="Toggle task"
              className={clsx(
                'flex h-4 w-4 shrink-0 items-center justify-center rounded border',
                t.done
                  ? 'bg-done border-done text-black'
                  : 'border-line hover:border-brand',
              )}
            >
              {t.done && <Check size={12} strokeWidth={3} />}
            </button>

            <div className="min-w-0 flex-1">
              <p
                className={clsx(
                  'truncate text-sm',
                  t.done ? 'text-ink-muted line-through' : 'text-ink',
                )}
              >
                {t.title}
              </p>
              <p className="text-xs">
                <span className="text-violet-soft">{t.cat}</span>
                <span className="text-ink-muted"> › {t.sub}</span>
                {t.note && <span className="text-overdue"> • {t.note}</span>}
              </p>
            </div>

            <span
              className={clsx(
                'rounded px-1.5 py-0.5 text-[10px]',
                priorityStyle[t.priority],
              )}
            >
              {t.priority}
            </span>
            <span className="text-ink-muted w-16 text-right text-xs">
              {t.time}
            </span>
          </li>
        ))}
      </ul>

      <button className="text-ink-2 border-line hover:bg-surface mt-3 flex items-center justify-center gap-1 rounded-lg border border-dashed py-2 text-sm">
        <Plus size={14} /> Add task to Today
      </button>
    </Card>
  )
}
