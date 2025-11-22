import { motion } from 'framer-motion'

interface VectorOperationsDiagramProps {
  v1: { x: number; y: number }
  v2: { x: number; y: number }
  operation: 'sum' | 'subtract' | 'dot'
}

export default function VectorOperationsDiagram({
  v1,
  v2,
  operation,
}: VectorOperationsDiagramProps) {
  const centerX = 150
  const centerY = 150
  const scale = 15

  const v1EndX = centerX + v1.x * scale
  const v1EndY = centerY - v1.y * scale
  const v2EndX = centerX + v2.x * scale
  const v2EndY = centerY - v2.y * scale

  let result: { x: number; y: number } | number | null = null
  let resultEndX = 0
  let resultEndY = 0

  if (operation === 'sum') {
    result = { x: v1.x + v2.x, y: v1.y + v2.y }
    resultEndX = centerX + result.x * scale
    resultEndY = centerY - result.y * scale
  } else if (operation === 'subtract') {
    result = { x: v1.x - v2.x, y: v1.y - v2.y }
    resultEndX = centerX + result.x * scale
    resultEndY = centerY - result.y * scale
  } else if (operation === 'dot') {
    result = v1.x * v2.x + v1.y * v2.y
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
      <div className="mb-4 text-center">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
          {operation === 'sum' && 'Soma de Vetores'}
          {operation === 'subtract' && 'Subtração de Vetores'}
          {operation === 'dot' && 'Produto Escalar'}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {operation === 'sum' && `[${v1.x}, ${v1.y}] + [${v2.x}, ${v2.y}]`}
          {operation === 'subtract' && `[${v1.x}, ${v1.y}] - [${v2.x}, ${v2.y}]`}
          {operation === 'dot' && `[${v1.x}, ${v1.y}] · [${v2.x}, ${v2.y}]`}
        </p>
      </div>

      <svg width="300" height="300" viewBox="0 0 300 300" className="w-full">
        {/* Grid */}
        <defs>
          <pattern
            id="grid-ops"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="0.5"
              className="dark:stroke-gray-700"
            />
          </pattern>
        </defs>
        <rect width="300" height="300" fill="url(#grid-ops)" />

        {/* Axes */}
        <line
          x1="0"
          y1={centerY}
          x2="300"
          y2={centerY}
          stroke="#6b7280"
          strokeWidth="1.5"
        />
        <line
          x1={centerX}
          y1="300"
          x2={centerX}
          y2="0"
          stroke="#6b7280"
          strokeWidth="1.5"
        />

        {/* Vector 1 */}
        <motion.line
          x1={centerX}
          y1={centerY}
          x2={v1EndX}
          y2={v1EndY}
          stroke="#3b82f6"
          strokeWidth="3"
          markerEnd="url(#arrow-v1)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8 }}
        />
        <circle cx={v1EndX} cy={v1EndY} r="4" fill="#3b82f6" />
        <text x={v1EndX + 8} y={v1EndY - 8} fill="#3b82f6" fontSize="12" fontWeight="bold">
          v = [{v1.x}, {v1.y}]
        </text>

        {/* Vector 2 */}
        {operation !== 'dot' && (
          <>
            <motion.line
              x1={centerX}
              y1={centerY}
              x2={v2EndX}
              y2={v2EndY}
              stroke="#10b981"
              strokeWidth="3"
              markerEnd="url(#arrow-v2)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <circle cx={v2EndX} cy={v2EndY} r="4" fill="#10b981" />
            <text x={v2EndX + 8} y={v2EndY + 15} fill="#10b981" fontSize="12" fontWeight="bold">
              u = [{v2.x}, {v2.y}]
            </text>
          </>
        )}

        {/* Result vector (for sum/subtract) */}
        {result && typeof result !== 'number' && (
          <>
            <motion.line
              x1={centerX}
              y1={centerY}
              x2={resultEndX}
              y2={resultEndY}
              stroke="#8b5cf6"
              strokeWidth="3"
              strokeDasharray="5,5"
              markerEnd="url(#arrow-result)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
            <circle cx={resultEndX} cy={resultEndY} r="4" fill="#8b5cf6" />
            <text
              x={resultEndX + 8}
              y={resultEndY - 8}
              fill="#8b5cf6"
              fontSize="12"
              fontWeight="bold"
            >
              {operation === 'sum' ? 'v + u' : 'v - u'} = [{result.x}, {result.y}]
            </text>
          </>
        )}

        {/* Dot product result */}
        {operation === 'dot' && typeof result === 'number' && (
          <motion.g
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <rect
              x={centerX - 60}
              y={centerY - 20}
              width="120"
              height="40"
              fill="#8b5cf6"
              opacity="0.2"
              rx="8"
            />
            <text
              x={centerX}
              y={centerY + 5}
              fill="#8b5cf6"
              fontSize="16"
              fontWeight="bold"
              textAnchor="middle"
            >
              v · u = {result}
            </text>
          </motion.g>
        )}

        {/* Origin */}
        <circle cx={centerX} cy={centerY} r="3" fill="#6b7280" />

        {/* Arrow markers */}
        <defs>
          <marker
            id="arrow-v1"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
          </marker>
          <marker
            id="arrow-v2"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#10b981" />
          </marker>
          <marker
            id="arrow-result"
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

      {/* Explanation */}
      <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          {operation === 'sum' &&
            `Para somar vetores, some cada componente: [${v1.x}, ${v1.y}] + [${v2.x}, ${v2.y}] = [${v1.x + v2.x}, ${v1.y + v2.y}]`}
          {operation === 'subtract' &&
            `Para subtrair vetores, subtraia cada componente: [${v1.x}, ${v1.y}] - [${v2.x}, ${v2.y}] = [${v1.x - v2.x}, ${v1.y - v2.y}]`}
          {operation === 'dot' &&
            `Produto escalar: multiplique componentes correspondentes e some: (${v1.x} × ${v2.x}) + (${v1.y} × ${v2.y}) = ${result}`}
        </p>
      </div>
    </div>
  )
}

