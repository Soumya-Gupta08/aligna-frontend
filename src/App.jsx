import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import Category from './pages/Category'
import Subcategory from './pages/Subcategory'
import TodaysTasksPage from './pages/TodaysTasksPage'
import Calendar from './pages/Calendar'
import Analytics from './pages/Analytics'
import Settings from './pages/Settings'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/category/:categoryName/:subName" element={<Subcategory />} />
        <Route path="/today" element={<TodaysTasksPage />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
