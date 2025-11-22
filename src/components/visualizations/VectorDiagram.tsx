import { motion } from 'framer-motion'

interface VectorDiagramProps {
  vector: { x: number; y: number }
  label?: string
  color?: string
  showComponents?: boolean
  showMagnitude?: boolean
}

export default function VectorDiagram({
  vector,
  label = 'v',
  color = '#3b82f6',
  showComponents = true,
  showMagnitude = true,
}: VectorDiagramProps) {
  const centerX = 150
  const centerY = 150
  const scale = 20
  const endX = centerX + vector.x * scale
  const endY = centerY - vector.y * scale // Invert Y axis
  const magnitude = Math.sqrt(vector.x * vector.x + vector.y * vector.y)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
      <svg width="300" height="300" viewBox="0 0 300 300" className="w-full">
        {/* Grid */}
        <defs>
          <pattern
            id="grid-small"
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
        <rect width="300" height="300" fill="url(#grid-small)" />

        {/* Axes */}
        <line
          x1="0"
          y1={centerY}
          x2="300"
          y2={centerY}
          stroke="#6b7280"
          strokeWidth="2"
          markerEnd="url(#arrowhead-axis)"
        />
        <line
          x1={centerX}
          y1="300"
          x2={centerX}
          y2="0"
          stroke="#6b7280"
          strokeWidth="2"
          markerEnd="url(#arrowhead-axis)"
        />

        {/* Axis labels */}
        <text x="290" y={centerY - 5} fill="#6b7280" fontSize="12">
          x
        </text>
        <text x={centerX + 5} y="15" fill="#6b7280" fontSize="12">
          y
        </text>

        {/* Component lines (dashed) */}
        {showComponents && (
          <>
            <line
              x1={centerX}
              y1={centerY}
              x2={endX}
              y2={centerY}
              stroke={color}
              strokeWidth="1.5"
              strokeDasharray="3,3"
              opacity="0.5"
            />
            <line
              x1={endX}
              y1={centerY}
              x2={endX}
              y2={endY}
              stroke={color}
              strokeWidth="1.5"
              strokeDasharray="3,3"
              opacity="0.5"
            />
            {/* Component labels */}
            <text
              x={(centerX + endX) / 2}
              y={centerY + 15}
              fill={color}
              fontSize="11"
              fontWeight="bold"
            >
              {vector.x}
            </text>
            <text
              x={endX + 10}
              y={(centerY + endY) / 2}
              fill={color}
              fontSize="11"
              fontWeight="bold"
            >
              {vector.y}
            </text>
          </>
        )}

        {/* Vector arrow */}
        <motion.line
          x1={centerX}
          y1={centerY}
          x2={endX}
          y2={endY}
          stroke={color}
          strokeWidth="4"
          markerEnd="url(#arrowhead-vector)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />

        {/* Origin point */}
        <circle cx={centerX} cy={centerY} r="4" fill="#6b7280" />

        {/* End point */}
        <motion.circle
          cx={endX}
          cy={endY}
          r="5"
          fill={color}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
        />

        {/* Vector label */}
        <text
          x={endX + 10}
          y={endY - 10}
          fill={color}
          fontSize="14"
          fontWeight="bold"
        >
          {label} = [{vector.x}, {vector.y}]
        </text>

        {/* Magnitude */}
        {showMagnitude && (
          <text
            x={endX + 10}
            y={endY + 15}
            fill="#10b981"
            fontSize="12"
          >
            |{label}| = {magnitude.toFixed(2)}
          </text>
        )}

        {/* Arrow markers */}
        <defs>
          <marker
            id="arrowhead-axis"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#6b7280" />
          </marker>
          <marker
            id="arrowhead-vector"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill={color} />
          </marker>
        </defs>
      </svg>
    </div>
  )
}

