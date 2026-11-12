import { BarChart, Bar, XAxis, Cell, ResponsiveContainer } from 'recharts'
import { TrendingUp } from 'lucide-react'
import Card from '../ui/Card'
import { weekly } from '../../data/mockData'

const TODAY = 'Thu'

export default function WeeklyCompletion() {
  return (
    <Card>
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-ink font-medium">Weekly Completion</h2>
          <p className="text-ink-2 mt-1 text-xs">
            38 tasks completed this week <span className="text-done">(+12% vs last week)</span>
          </p>
        </div>
        <span className="bg-surface text-ink-2 rounded px-2 py-0.5 text-[11px]">Target: 50</span>
      </div>

      <div className="mt-4 h-44">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={weekly}>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'var(--text-muted)', fontSize: 11 }}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {weekly.map((w) => (
                <Cell
                  key={w.day}
                  fill={w.day === TODAY ? '#7C5CFC' : 'var(--nav-active-bg)'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-surface mt-3 flex items-center justify-between rounded-lg px-3 py-2 text-xs">
        <span className="text-ink-2 flex items-center gap-2">
          <TrendingUp size={13} className="text-done" /> Current daily velocity: 9.5 tasks/day
        </span>
        <span className="text-done font-medium">Ahead of Goal</span>
      </div>
    </Card>
  )
}