import { motion } from 'framer-motion'

interface DerivativeDiagramProps {
  showTangent?: boolean
  point?: number
}

export default function DerivativeDiagram({
  showTangent = true,
  point = 2,
}: DerivativeDiagramProps) {
  const width = 300
  const height = 200
  const centerX = width / 2
  const centerY = height / 2
  const scale = 30

  // Função f(x) = x²
  const f = (x: number) => x * x
  const fPrime = (x: number) => 2 * x // Derivada

  const pointX = point
  const pointY = f(pointX)
  const slope = fPrime(pointX)
  const tangentY0 = pointY - slope * pointX

  // Coordenadas para o gráfico
  const graphX = (x: number) => centerX + x * scale
  const graphY = (y: number) => centerY - y * scale

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
        Derivada como Inclinação da Reta Tangente
      </h4>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center">
        f(x) = x² | f'(x) = 2x | No ponto x = {point}
      </p>

      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full">
        {/* Grid */}
        <defs>
          <pattern
            id="grid-derivative"
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
        <rect width={width} height={height} fill="url(#grid-derivative)" />

        {/* Axes */}
        <line
          x1="0"
          y1={centerY}
          x2={width}
          y2={centerY}
          stroke="#6b7280"
          strokeWidth="2"
        />
        <line
          x1={centerX}
          y1={height}
          x2={centerX}
          y2="0"
          stroke="#6b7280"
          strokeWidth="2"
        />

        {/* Function curve f(x) = x² */}
        <motion.path
          d={`M ${graphX(-3)} ${graphY(f(-3))} ${Array.from({ length: 60 }, (_, i) => {
            const x = -3 + (i / 10)
            return `L ${graphX(x)} ${graphY(f(x))}`
          }).join(' ')}`}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5 }}
        />

        {/* Point on curve */}
        <motion.circle
          cx={graphX(pointX)}
          cy={graphY(pointY)}
          r="6"
          fill="#ef4444"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: 'spring' }}
        />

        {/* Tangent line */}
        {showTangent && (
          <motion.line
            x1={graphX(pointX - 2)}
            y1={graphY(tangentY0 + slope * (pointX - 2))}
            x2={graphX(pointX + 2)}
            y2={graphY(tangentY0 + slope * (pointX + 2))}
            stroke="#10b981"
            strokeWidth="3"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          />
        )}

        {/* Labels */}
        <text
          x={graphX(pointX) + 10}
          y={graphY(pointY) - 10}
          fill="#ef4444"
          fontSize="12"
          fontWeight="bold"
        >
          ({point}, {pointY})
        </text>
        <text
          x={graphX(pointX + 1.5)}
          y={graphY(tangentY0 + slope * (pointX + 1.5)) - 10}
          fill="#10b981"
          fontSize="11"
        >
          Tangente (inclinação = {slope})
        </text>
      </svg>

      <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <strong>Interpretação:</strong> A derivada f'({point}) = {slope} é a <strong>inclinação</strong> da reta
          tangente (verde) no ponto ({point}, {pointY}). Quanto maior a inclinação, mais
          "íngreme" a função está naquele ponto.
        </p>
      </div>
    </div>
  )
}

