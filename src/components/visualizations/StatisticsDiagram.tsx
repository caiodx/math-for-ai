import { motion } from 'framer-motion'

interface StatisticsDiagramProps {
  data: number[]
  showMean?: boolean
  showMedian?: boolean
  showStdDev?: boolean
}

export default function StatisticsDiagram({
  data,
  showMean = true,
  showMedian = true,
  showStdDev = true,
}: StatisticsDiagramProps) {
  const sorted = [...data].sort((a, b) => a - b)
  const mean = data.reduce((a, b) => a + b, 0) / data.length
  const median =
    sorted.length % 2 === 0
      ? (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2
      : sorted[Math.floor(sorted.length / 2)]
  const variance =
    data.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / data.length
  const stdDev = Math.sqrt(variance)

  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const width = 400
  const height = 200
  const barWidth = width / data.length
  const scale = (height - 40) / max

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
        Medidas Estatísticas
      </h4>

      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full">
        {/* Bars */}
        {data.map((value, index) => (
          <motion.rect
            key={index}
            x={index * barWidth + 5}
            y={height - value * scale - 20}
            width={barWidth - 10}
            height={value * scale}
            fill="#3b82f6"
            rx="4"
            initial={{ height: 0, y: height - 20 }}
            animate={{ height: value * scale, y: height - value * scale - 20 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          />
        ))}

        {/* Mean line */}
        {showMean && (
          <motion.line
            x1="0"
            y1={height - mean * scale - 20}
            x2={width}
            y2={height - mean * scale - 20}
            stroke="#10b981"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.5 }}
          />
        )}

        {/* Median line */}
        {showMedian && (
          <motion.line
            x1="0"
            y1={height - median * scale - 20}
            x2={width}
            y2={height - median * scale - 20}
            stroke="#ef4444"
            strokeWidth="2"
            strokeDasharray="3,3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.7 }}
          />
        )}

        {/* Std Dev bands */}
        {showStdDev && (
          <>
            <motion.line
              x1="0"
              y1={height - (mean + stdDev) * scale - 20}
              x2={width}
              y2={height - (mean + stdDev) * scale - 20}
              stroke="#8b5cf6"
              strokeWidth="1.5"
              strokeDasharray="2,2"
              opacity="0.6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.9 }}
            />
            <motion.line
              x1="0"
              y1={height - (mean - stdDev) * scale - 20}
              x2={width}
              y2={height - (mean - stdDev) * scale - 20}
              stroke="#8b5cf6"
              strokeWidth="1.5"
              strokeDasharray="2,2"
              opacity="0.6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.9 }}
            />
          </>
        )}

        {/* Labels */}
        {showMean && (
          <text
            x={width - 80}
            y={height - mean * scale - 25}
            fill="#10b981"
            fontSize="11"
            fontWeight="bold"
          >
            Média = {mean.toFixed(1)}
          </text>
        )}
        {showMedian && (
          <text
            x={width - 80}
            y={height - median * scale - 5}
            fill="#ef4444"
            fontSize="11"
            fontWeight="bold"
          >
            Mediana = {median.toFixed(1)}
          </text>
        )}
        {showStdDev && (
          <text
            x={width - 100}
            y={height - (mean + stdDev) * scale - 5}
            fill="#8b5cf6"
            fontSize="10"
          >
            ±σ = {stdDev.toFixed(1)}
          </text>
        )}
      </svg>

      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 border border-green-200 dark:border-green-800">
          <div className="text-xs text-green-600 dark:text-green-400 font-medium mb-1">
            Média
          </div>
          <div className="text-lg font-bold text-green-700 dark:text-green-300">
            {mean.toFixed(2)}
          </div>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-3 border border-red-200 dark:border-red-800">
          <div className="text-xs text-red-600 dark:text-red-400 font-medium mb-1">
            Mediana
          </div>
          <div className="text-lg font-bold text-red-700 dark:text-red-300">
            {median.toFixed(2)}
          </div>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 border border-purple-200 dark:border-purple-800">
          <div className="text-xs text-purple-600 dark:text-purple-400 font-medium mb-1">
            Desvio Padrão
          </div>
          <div className="text-lg font-bold text-purple-700 dark:text-purple-300">
            {stdDev.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  )
}

