import { motion } from 'framer-motion'
import { useState } from 'react'

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
  const [zoom, setZoom] = useState(1.0)
  
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
  const baseWidth = 800
  const baseHeight = 400
  const barWidth = baseWidth / data.length
  const scale = (baseHeight - 80) / max

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
          Medidas Estatísticas
        </h4>
        
        {/* Zoom Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setZoom(Math.max(0.5, zoom - 0.25))}
            className="px-3 py-1.5 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-semibold text-sm"
            aria-label="Diminuir zoom"
          >
            −
          </button>
          <span className="text-sm text-gray-700 dark:text-gray-300 min-w-[70px] text-center">
            Zoom: {(zoom * 100).toFixed(0)}%
          </span>
          <button
            onClick={() => setZoom(Math.min(2.0, zoom + 0.25))}
            className="px-3 py-1.5 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-semibold text-sm"
            aria-label="Aumentar zoom"
          >
            +
          </button>
          <button
            onClick={() => setZoom(1.0)}
            className="px-3 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
            aria-label="Resetar zoom"
          >
            Resetar
          </button>
        </div>
      </div>

      <div className="overflow-auto border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900/50 p-4">
        <svg width={baseWidth * zoom} height={baseHeight * zoom} viewBox={`0 0 ${baseWidth} ${baseHeight}`} className="w-full">
        {/* Bars */}
        {data.map((value, index) => (
          <motion.rect
            key={index}
            x={index * barWidth + 5}
            y={baseHeight - value * scale - 40}
            width={barWidth - 10}
            height={value * scale}
            fill="#3b82f6"
            rx="4"
            initial={{ height: 0, y: baseHeight - 40 }}
            animate={{ height: value * scale, y: baseHeight - value * scale - 40 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          />
        ))}

        {/* Mean line */}
        {showMean && (
          <motion.line
            x1="0"
            y1={baseHeight - mean * scale - 40}
            x2={baseWidth}
            y2={baseHeight - mean * scale - 40}
            stroke="#10b981"
            strokeWidth="3"
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
            y1={baseHeight - median * scale - 40}
            x2={baseWidth}
            y2={baseHeight - median * scale - 40}
            stroke="#ef4444"
            strokeWidth="3"
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
              y1={baseHeight - (mean + stdDev) * scale - 40}
              x2={baseWidth}
              y2={baseHeight - (mean + stdDev) * scale - 40}
              stroke="#8b5cf6"
              strokeWidth="2"
              strokeDasharray="2,2"
              opacity="0.6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.9 }}
            />
            <motion.line
              x1="0"
              y1={baseHeight - (mean - stdDev) * scale - 40}
              x2={baseWidth}
              y2={baseHeight - (mean - stdDev) * scale - 40}
              stroke="#8b5cf6"
              strokeWidth="2"
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
            x={baseWidth - 100}
            y={baseHeight - mean * scale - 50}
            fill="#10b981"
            fontSize="14"
            fontWeight="bold"
          >
            Média = {mean.toFixed(1)}
          </text>
        )}
        {showMedian && (
          <text
            x={baseWidth - 100}
            y={baseHeight - median * scale - 20}
            fill="#ef4444"
            fontSize="14"
            fontWeight="bold"
          >
            Mediana = {median.toFixed(1)}
          </text>
        )}
        {showStdDev && (
          <text
            x={baseWidth - 120}
            y={baseHeight - (mean + stdDev) * scale - 20}
            fill="#8b5cf6"
            fontSize="12"
          >
            ±σ = {stdDev.toFixed(1)}
          </text>
        )}
      </svg>
      </div>

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

