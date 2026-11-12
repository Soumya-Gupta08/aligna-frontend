import { Filter, Plus } from 'lucide-react'
import TodaysTasks from '../components/dashboard/TodaysTasks'
import TodaysProgress from '../components/dashboard/TodaysProgress'
import CategoryCard from '../components/dashboard/CategoryCard'
import UpcomingDeadlines from '../components/dashboard/UpcomingDeadlines'
import WeeklyCompletion from '../components/dashboard/WeeklyCompletion'
import { categories } from '../data/mockData'
import { useTaskStore } from '../store/useTaskStore'

export default function Dashboard() {
    const openModal = useTaskStore((s) => s.openModal)

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <p className="text-done mb-1 text-[11px] tracking-wider uppercase">● Active Session</p>
          <h1 className="text-ink text-2xl font-semibold">Good morning, Alex!</h1>
          <p className="text-ink-2 mt-1 text-sm">Here's your productivity overview.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-card border-line text-ink-2 hover:text-ink flex items-center gap-2 rounded-lg border px-3 py-2 text-sm">
            <Filter size={14} /> Filter
          </button>
          <button onClick={openModal} className="bg-btn hover:bg-btn-hover flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors">
            <Plus size={14} /> Create New
          </button>
        </div>
      </div>

      {/* Row 1 */}
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2"><TodaysTasks /></div>
        <TodaysProgress />
      </div>

      {/* Active categories */}
      <div>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-ink font-medium">Active Categories</h2>
          <span className="text-ink-muted text-[11px] tracking-wider uppercase">Overall Velocity</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => <CategoryCard key={c.name} {...c} />)}
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid gap-4 lg:grid-cols-2">
        <UpcomingDeadlines />
        <WeeklyCompletion />
      </div>
    </div>
  )
}