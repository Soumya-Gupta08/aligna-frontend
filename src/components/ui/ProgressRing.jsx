export default function ProgressRing({
  percent,
  completed,
  total,
  size = 160,
  stroke = 12,
  showLabel = true,
}) {
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percent / 100) * circumference

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            strokeWidth={stroke}
            className="stroke-ring-track"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="stroke-done transition-all duration-700"
          />
        </svg>
        <span
          className="text-ink absolute inset-0 flex items-center justify-center font-semibold"
          style={{ fontSize: size * 0.22 }}
        >
          {percent}%
        </span>
      </div>
      {showLabel && (
        <p className="text-ink-2 text-xs">
          {completed} of {total} tasks completed
        </p>
      )}
    </div>
  )
}