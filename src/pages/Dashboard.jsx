import ProgressRing from '../components/ui/ProgressRing'

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-ink text-2xl font-semibold">Good morning, Alex!</h1>
      <p className="text-ink-2 mt-1 text-sm">
        Here's your productivity overview.
      </p>

      <div className="bg-card border-line mt-6 inline-block rounded-xl border p-6">
        <h2 className="text-ink mb-4 font-medium">Today's Progress</h2>
        <ProgressRing percent={75} completed={6} total={8} />
      </div>
    </div>
  )
}