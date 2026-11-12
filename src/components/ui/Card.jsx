import clsx from 'clsx'

export default function Card({ className, children }) {
  return (
    <div className={clsx('bg-card border-line rounded-3xl border p-5', className)}>
      {children}
    </div>
  )
}