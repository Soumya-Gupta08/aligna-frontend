import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { todaysTasks } from '../data/mockData'

export const todayStr = () => {
  const d = new Date()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${m}-${day}`
}

// "16:30" -> "4:30 PM"
export const formatTime = (t24) => {
  if (!t24) return ''
  const [h, m] = t24.split(':').map(Number)
  const suffix = h >= 12 ? 'PM' : 'AM'
  return `${h % 12 || 12}:${String(m).padStart(2, '0')} ${suffix}`
}

// "4:30 PM" -> minutes since midnight
const toMinutes = (display) => {
  const match = /(\d+):(\d+)\s*(AM|PM)/i.exec(display || '')
  if (!match) return null
  let h = Number(match[1]) % 12
  if (match[3].toUpperCase() === 'PM') h += 12
  return h * 60 + Number(match[2])
}

export const isOverdue = (task) => {
  if (task.done) return false
  const today = todayStr()
  if (task.date < today) return true
  if (task.date > today) return false
  const mins = toMinutes(task.time)
  if (mins === null) return false
  const now = new Date()
  return mins < now.getHours() * 60 + now.getMinutes()
}

const seed = todaysTasks.map((t) => ({ ...t, date: todayStr() }))

export const useTaskStore = create(
  persist(
    (set) => ({
      tasks: seed,
      isModalOpen: false,

      openModal: () => set({ isModalOpen: true }),
      closeModal: () => set({ isModalOpen: false }),

      addTask: (task) =>
        set((s) => ({
          tasks: [...s.tasks, { id: Date.now(), done: false, ...task }],
        })),

      toggleTask: (id) =>
        set((s) => ({
          tasks: s.tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
        })),

      deleteTask: (id) =>
        set((s) => ({ tasks: s.tasks.filter((t) => t.id !== id) })),
    }),
    {
      name: 'aligner-tasks',
      partialize: (s) => ({ tasks: s.tasks }), // don't persist modal state
    }
  )
)