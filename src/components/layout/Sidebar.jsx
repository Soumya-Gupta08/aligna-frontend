import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard, CheckSquare, Calendar, BarChart3,
  Settings, LogOut, ChevronsLeft, Plus,
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
  { name: "Today's Tasks", icon: CheckSquare, to: '/today' },
  { name: 'Calendar', icon: Calendar, to: '/calendar' },
  { name: 'Analytics', icon: BarChart3, to: '/analytics' },
  { name: 'Settings', icon: Settings, to: '/settings' },
]

const linkClass = ({ isActive }) =>
  clsx(
    'flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
    isActive
      ? 'bg-nav-active text-nav-active-text font-medium'
      : 'text-ink-2 hover:bg-surface'
  )

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={clsx(
        'bg-sidebar border-line flex h-screen flex-col border-r transition-all duration-300',
        collapsed ? 'w-16' : 'w-60'
      )}
    >
      <div className="flex h-14 items-center gap-2 px-4">
        <div className="bg-btn flex h-7 w-7 items-center justify-center rounded-lg text-sm font-bold text-white">
          A
        </div>
        {!collapsed && <span className="text-ink font-semibold">Aligner</span>}
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-2">
        <NavLink to="/" end className={linkClass}>
          <LayoutDashboard size={18} />
          {!collapsed && 'Dashboard'}
        </NavLink>

        {!collapsed && (
          <>
            <div className="text-ink-muted mt-5 mb-2 flex items-center justify-between px-3 text-[11px] tracking-wider uppercase">
              Categories
              <Plus size={14} className="cursor-pointer" />
            </div>
            {categories.map((c) => (
              <NavLink
                key={c.name}
                to={`/category/${encodeURIComponent(c.name)}`}
                className={(state) =>
                  clsx(linkClass(state), 'justify-between')
                }
              >
                {c.name}
                <span className="bg-surface text-ink-2 rounded px-1.5 py-0.5 text-[11px]">
                  {c.count}
                </span>
              </NavLink>
            ))}
          </>
        )}
      </nav>

      <div className="border-line border-t px-3 py-3">
        {bottomLinks.map(({ name, icon: Icon, to }) => (
          <NavLink key={name} to={to} className={linkClass}>
            <Icon size={16} />
            {!collapsed && name}
          </NavLink>
        ))}
        <button className="text-ink-2 hover:bg-surface flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors">
          <LogOut size={16} />
          {!collapsed && 'Logout'}
        </button>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-ink-muted hover:text-ink-2 mt-2 flex w-full items-center gap-3 px-3 py-2 text-xs"
        >
          <ChevronsLeft size={16} className={clsx(collapsed && 'rotate-180')} />
          {!collapsed && 'Collapse Sidebar'}
        </button>
      </div>
    </aside>
  )
}