import { useState } from 'react'
import { RotateCcw } from 'lucide-react'

interface VectorVisualizationProps {
  showSum?: boolean
  showDotProduct?: boolean
}

export default function VectorVisualization({
  showSum = false,
  showDotProduct = false,
}: VectorVisualizationProps) {
  const [v1, setV1] = useState({ x: 3, y: 2, label: 'v', color: '#3b82f6' })
  const [v2, setV2] = useState({ x: 2, y: 4, label: 'u', color: '#10b981' })

  const scale = 30
  const centerX = 200
  const centerY = 200

  const sum = showSum
    ? { x: v1.x + v2.x, y: v1.y + v2.y, label: 'v + u', color: '#8b5cf6' }
    : null

  const dotProduct = showDotProduct ? v1.x * v2.x + v1.y * v2.y : null

  const toScreenCoords = (x: number, y: number) => ({
    x: centerX + x * scale,
    y: centerY - y * scale, // Invert Y axis
  })

  const reset = () => {
    setV1({ x: 3, y: 2, label: 'v', color: '#3b82f6' })
    setV2({ x: 2, y: 4, label: 'u', color: '#10b981' })
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Visualização Interativa de Vetores
        </h3>
        <button
          onClick={reset}
          className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Resetar</span>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* SVG Canvas */}
        <div className="flex-1">
          <svg
            width="400"
            height="400"
            viewBox="0 0 400 400"
            className="border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900"
          >
            {/* Grid */}
            <defs>
              <pattern
                id="grid"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 30 0 L 0 0 0 30"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="0.5"
                  className="dark:stroke-gray-700"
                />
              </pattern>
            </defs>
            <rect width="400" height="400" fill="url(#grid)" />

            {/* Axes */}
            <line
              x1="0"
              y1={centerY}
              x2="400"
              y2={centerY}
              stroke="#6b7280"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />
            <line
              x1={centerX}
              y1="400"
              x2={centerX}
              y2="0"
              stroke="#6b7280"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />

            {/* Arrow marker */}
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#6b7280" />
              </marker>
            </defs>

            {/* Vector 1 */}
            {(() => {
              const coords = toScreenCoords(v1.x, v1.y)
              return (
                <>
                  <line
                    x1={centerX}
                    y1={centerY}
                    x2={coords.x}
                    y2={coords.y}
                    stroke={v1.color}
                    strokeWidth="3"
                    markerEnd="url(#arrowhead-blue)"
                  />
                  <circle cx={coords.x} cy={coords.y} r="5" fill={v1.color} />
                  <text
                    x={coords.x + 10}
                    y={coords.y - 10}
                    fill={v1.color}
                    fontSize="14"
                    fontWeight="bold"
                  >
                    {v1.label} = [{v1.x}, {v1.y}]
                  </text>
                </>
              )
            })()}

            {/* Vector 2 */}
            {(() => {
              const coords = toScreenCoords(v2.x, v2.y)
              return (
                <>
                  <line
                    x1={centerX}
                    y1={centerY}
                    x2={coords.x}
                    y2={coords.y}
                    stroke={v2.color}
                    strokeWidth="3"
                    markerEnd="url(#arrowhead-green)"
                  />
                  <circle cx={coords.x} cy={coords.y} r="5" fill={v2.color} />
                  <text
                    x={coords.x + 10}
                    y={coords.y + 20}
                    fill={v2.color}
                    fontSize="14"
                    fontWeight="bold"
                  >
                    {v2.label} = [{v2.x}, {v2.y}]
                  </text>
                </>
              )
            })()}

            {/* Sum Vector */}
            {sum && (() => {
              const coords = toScreenCoords(sum.x, sum.y)
              return (
                <>
                  <line
                    x1={centerX}
                    y1={centerY}
                    x2={coords.x}
                    y2={coords.y}
                    stroke={sum.color}
                    strokeWidth="3"
                    strokeDasharray="5,5"
                    markerEnd="url(#arrowhead-purple)"
                  />
                  <circle cx={coords.x} cy={coords.y} r="5" fill={sum.color} />
                  <text
                    x={coords.x + 10}
                    y={coords.y - 10}
                    fill={sum.color}
                    fontSize="14"
                    fontWeight="bold"
                  >
                    {sum.label} = [{sum.x}, {sum.y}]
                  </text>
                </>
              )
            })()}

            {/* Arrow markers for vectors */}
            <defs>
              <marker
                id="arrowhead-blue"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
              </marker>
              <marker
                id="arrowhead-green"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#10b981" />
              </marker>
              <marker
                id="arrowhead-purple"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#8b5cf6" />
              </marker>
            </defs>
          </svg>
        </div>

        {/* Controls */}
        <div className="space-y-4 min-w-[250px]">
          {/* Vector 1 Controls */}
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
              <div
                className="w-4 h-4 rounded mr-2"
                style={{ backgroundColor: v1.color }}
              />
              Vetor {v1.label}
            </h4>
            <div className="space-y-2">
              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400">
                  X: {v1.x}
                </label>
                <input
                  type="range"
                  min="-8"
                  max="8"
                  value={v1.x}
                  onChange={(e) =>
                    setV1({ ...v1, x: parseInt(e.target.value) })
                  }
                  className="w-full"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400">
                  Y: {v1.y}
                </label>
                <input
                  type="range"
                  min="-8"
                  max="8"
                  value={v1.y}
                  onChange={(e) =>
                    setV1({ ...v1, y: parseInt(e.target.value) })
                  }
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Vector 2 Controls */}
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
              <div
                className="w-4 h-4 rounded mr-2"
                style={{ backgroundColor: v2.color }}
              />
              Vetor {v2.label}
            </h4>
            <div className="space-y-2">
              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400">
                  X: {v2.x}
                </label>
                <input
                  type="range"
                  min="-8"
                  max="8"
                  value={v2.x}
                  onChange={(e) =>
                    setV2({ ...v2, x: parseInt(e.target.value) })
                  }
                  className="w-full"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400">
                  Y: {v2.y}
                </label>
                <input
                  type="range"
                  min="-8"
                  max="8"
                  value={v2.y}
                  onChange={(e) =>
                    setV2({ ...v2, y: parseInt(e.target.value) })
                  }
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Calculations */}
          <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4 border border-primary-200 dark:border-primary-800">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Cálculos
            </h4>
            {showSum && sum && (
              <div className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong>Soma:</strong> [{v1.x}, {v1.y}] + [{v2.x}, {v2.y}] = [
                {sum.x}, {sum.y}]
              </div>
            )}
            {showDotProduct && (
              <div className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Produto Escalar:</strong> [{v1.x}, {v1.y}] · [{v2.x},{' '}
                {v2.y}] = {dotProduct}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

