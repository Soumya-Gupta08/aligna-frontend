import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import useTheme from '../../hooks/useTheme'
import CreateTaskModal from '../tasks/CreateTaskModal'

export default function Layout() {
  const { theme, toggle } = useTheme()

  return (
    <div className="bg-bg flex h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar theme={theme} onToggleTheme={toggle} />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
      <CreateTaskModal />
    </div>
  )
}