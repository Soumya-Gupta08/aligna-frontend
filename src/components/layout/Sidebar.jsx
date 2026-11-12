import { useState } from 'react'
import {
  LayoutDashboard,
  CheckSquare,
  Calendar,
  BarChart3,
  Settings,
  LogOut,
  ChevronsLeft,
  Plus,
} from 'lucide-react'
import clsx from 'clsx'

const categories = [
  { name: 'DSA', count: '13/20' },
  { name: 'College', count: '8/10' },
  { name: 'Interviews', count: '4/10' },
  { name: 'Hobbies', count: '5/10' },
  { name: 'System Design', count: '3/7' },
]

const bottomLinks = [
  { name: "Today's Tasks", icon: CheckSquare },
  { name: 'Calendar', icon: Calendar },
  { name: 'Analytics', icon: BarChart3 },
  { name: 'Settings', icon: Settings },
  { name: 'Logout', icon: LogOut },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [active, setActive] = useState('Dashboard')

  return (
  <aside
    className={clsx(
      'bg-sidebar border-line m-2 flex shrink-0 flex-col overflow-hidden rounded-2xl border transition-all duration-300',
      collapsed ? 'w-16' : 'w-60'
    )}
  >
    {/* Logo + toggle */}
    <div
      className={clsx(
        'flex items-center px-4',
        collapsed ? 'flex-col gap-2 py-3' : 'h-14 gap-2'
      )}
    >
      <div className="bg-btn flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white">
        A
      </div>
      {!collapsed && (
        <span className="text-ink font-semibold">Aligna</span>
      )}
      <button
        onClick={() => setCollapsed(!collapsed)}
        aria-label="Toggle sidebar"
        className={clsx(
          'text-ink-muted hover:text-ink-2 hover:bg-surface rounded-md p-1 transition-colors',
          !collapsed && 'ml-auto'
        )}
      >
        <ChevronsLeft
          size={18}
          className={clsx('shrink-0 transition-transform', collapsed && 'rotate-180')}
        />
      </button>
    </div>

    <div className="border-line mx-4 border-t" />

    {/* Main nav */}
    <nav className="flex-1 overflow-y-auto px-3 py-2">
      <button
        onClick={() => setActive('Dashboard')}
        className={clsx(
          'flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors',
          collapsed ? 'justify-center' : 'gap-3',
          active === 'Dashboard'
            ? 'bg-nav-active text-nav-active-text'
            : 'text-ink-2 hover:bg-surface'
        )}
      >
        <LayoutDashboard size={18} className="shrink-0" />
        {!collapsed && 'Dashboard'}
      </button>

      {!collapsed && (
        <>
          <div className="text-ink-muted mt-3 mb-1 flex items-center justify-between px-3 text-[11px] tracking-wider uppercase">
            Categories
            <Plus size={14} className="cursor-pointer" />
          </div>
          {categories.map((c) => (
            <button
              key={c.name}
              onClick={() => setActive(c.name)}
              className={clsx(
                'flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors',
                active === c.name
                  ? 'bg-nav-active text-nav-active-text'
                  : 'text-ink-2 hover:bg-surface'
              )}
            >
              {c.name}
              <span className="bg-surface text-ink-2 rounded px-1.5 py-0.5 text-[11px]">
                {c.count}
              </span>
            </button>
          ))}
        </>
      )}
    </nav>

    <div className="border-line mx-4 border-t" />

    {/* Bottom links */}
    <div className="px-3 py-3">
      {bottomLinks.map(({ name, icon: Icon }) => (
        <button
          key={name}
          className={clsx(
            'text-ink-2 hover:bg-surface flex w-full items-center rounded-lg px-3 py-2 text-sm transition-colors',
            collapsed ? 'justify-center' : 'gap-3'
          )}
        >
          <Icon size={16} className="shrink-0" />
          {!collapsed && name}
        </button>
      ))}
    </div>
  </aside>
)
}
