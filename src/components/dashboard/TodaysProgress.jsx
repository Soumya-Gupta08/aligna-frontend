import { Flame, Zap } from 'lucide-react'
import Card from '../ui/Card'
import ProgressRing from '../ui/ProgressRing'
import { useTaskStore, todayStr, isOverdue } from '../../store/useTaskStore'

// const stats = [
//   { label: 'Done', value: 6, color: 'bg-done' },
//   { label: 'Pending', value: 2, color: 'bg-pending' },
//   { label: 'Overdue', value: 0, color: 'bg-overdue' },
// ]

export default function TodaysProgress() {
  const allTasks = useTaskStore((s) => s.tasks)
  const today = allTasks.filter((t) => t.date === todayStr())

  const total = today.length
  const done = today.filter((t) => t.done).length
  const pending = total - done // overdue tasks are a subset of pending
  const overdue = today.filter(isOverdue).length
  const percent = total ? Math.round((done / total) * 100) : 0

  const stats = [
    { label: 'Done', value: done, color: 'bg-done' },
    { label: 'Pending', value: pending, color: 'bg-pending' },
    { label: 'Overdue', value: overdue, color: 'bg-overdue' },
  ]
  return (
    <Card className="flex flex-col">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-ink font-medium">Today's Progress</h2>
        <span className="bg-pending/15 text-pending flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px]">
          <Flame size={12} /> 14-day streak
        </span>
      </div>

      <div className="flex justify-center py-2">
        <ProgressRing percent={75} completed={6} total={8} size={150} />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {stats.map((s) => (
          <div key={s.label} className="bg-surface rounded-lg py-2 text-center">
            <p className="text-ink-2 flex items-center justify-center gap-1 text-[11px]">
              <span className={`h-1.5 w-1.5 rounded-full ${s.color}`} />
              {s.label}
            </p>
            <p className="text-ink text-lg font-semibold">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-surface text-ink-2 mt-4 flex items-center justify-between rounded-lg px-3 py-2 text-xs">
        <span className="flex items-center gap-2">
          <Zap size={13} className="text-nav-active-text" /> 2 focus blocks
          remaining today
        </span>
        <span className="text-nav-active-text font-medium">90 min</span>
      </div>
    </Card>
  )
}
