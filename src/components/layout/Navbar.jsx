import { Search, Moon, Sun, Bell } from 'lucide-react'

export default function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="bg-navbar border-line flex h-14 items-center justify-between border-b px-6">
      <div className="bg-surface border-line flex w-96 items-center gap-2 rounded-lg border px-3 py-1.5">
        <Search size={15} className="text-ink-muted" />
        <input
          placeholder="Search tasks, categories, subcategories..."
          className="text-ink placeholder:text-ink-muted w-full bg-transparent text-sm outline-none"
        />
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={onToggleTheme}
          className="text-ink-2 hover:text-ink transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <Bell size={18} className="text-ink-2" />
        <div className="bg-surface border-line flex items-center gap-2 rounded-full border py-1 pr-3 pl-1">
          <div className="bg-btn flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-white">
            A
          </div>
          <span className="text-ink text-sm">Alex</span>
        </div>
      </div>
    </header>
  )
}