import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import clsx from 'clsx'
import { useTaskStore, todayStr, formatTime } from '../../store/useTaskStore'
import { subcategories } from '../../data/mockData'

const categoryNames = Object.keys(subcategories)
const priorities = ['High', 'Med', 'Low']

const inputClass =
  'bg-surface border-line text-ink placeholder:text-ink-muted focus:border-brand w-full rounded-lg border px-3 py-2 text-sm outline-none transition-colors'

const emptyForm = () => ({
  title: '',
  cat: categoryNames[0],
  sub: subcategories[categoryNames[0]][0],
  priority: 'Med',
  date: todayStr(),
  time: '',
})

export default function CreateTaskModal() {
  const { isModalOpen, closeModal, addTask } = useTaskStore()
  const [form, setForm] = useState(emptyForm())
  const [error, setError] = useState('')

  // reset form each time the modal opens
  useEffect(() => {
    if (isModalOpen) {
      setForm(emptyForm())
      setError('')
    }
  }, [isModalOpen])

  // close on Escape
  useEffect(() => {
    if (!isModalOpen) return
    const onKey = (e) => e.key === 'Escape' && closeModal()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isModalOpen, closeModal])

  if (!isModalOpen) return null

  const set = (field, value) => setForm((f) => ({ ...f, [field]: value }))

  const changeCategory = (cat) =>
    setForm((f) => ({ ...f, cat, sub: subcategories[cat][0] }))

  const submit = () => {
    if (!form.title.trim()) {
      setError('Please enter a task title.')
      return
    }
    addTask({
      title: form.title.trim(),
      cat: form.cat,
      sub: form.sub,
      priority: form.priority,
      date: form.date,
      time: formatTime(form.time),
    })
    closeModal()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={closeModal}
    >
      <div
        className="bg-card border-line w-full max-w-md rounded-xl border p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Create task"
      >
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-ink text-lg font-semibold">Create Task</h2>
          <button onClick={closeModal} className="text-ink-muted hover:text-ink" aria-label="Close">
            <X size={18} />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-ink-2 mb-1 block text-xs">Title</label>
            <input
              autoFocus
              value={form.title}
              onChange={(e) => set('title', e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && submit()}
              placeholder="e.g. Solve 2 graph problems"
              className={inputClass}
            />
            {error && <p className="text-overdue mt-1 text-xs">{error}</p>}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-ink-2 mb-1 block text-xs">Category</label>
              <select
                value={form.cat}
                onChange={(e) => changeCategory(e.target.value)}
                className={inputClass}
              >
                {categoryNames.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-ink-2 mb-1 block text-xs">Subcategory</label>
              <select
                value={form.sub}
                onChange={(e) => set('sub', e.target.value)}
                className={inputClass}
              >
                {subcategories[form.cat].map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="text-ink-2 mb-1 block text-xs">Priority</label>
            <div className="grid grid-cols-3 gap-2">
              {priorities.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => set('priority', p)}
                  className={clsx(
                    'rounded-lg border py-1.5 text-sm transition-colors',
                    form.priority === p
                      ? 'bg-nav-active text-nav-active-text border-brand'
                      : 'bg-surface border-line text-ink-2 hover:text-ink'
                  )}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-ink-2 mb-1 block text-xs">Due date</label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => set('date', e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-ink-2 mb-1 block text-xs">Time</label>
              <input
                type="time"
                value={form.time}
                onChange={(e) => set('time', e.target.value)}
                className={inputClass}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-2">
          <button
            onClick={closeModal}
            className="text-ink-2 hover:text-ink border-line rounded-lg border px-4 py-2 text-sm"
          >
            Cancel
          </button>
          <button
            onClick={submit}
            className="bg-btn hover:bg-btn-hover rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors"
          >
            Create Task
          </button>
        </div>
      </div>
    </div>
  )
}