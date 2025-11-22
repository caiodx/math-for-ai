import { useState } from 'react'

interface LimitsDiagramProps {
  functionType?: 'linear' | 'quadratic' | 'rational'
  point?: number
  showApproach?: boolean
}

export default function LimitsDiagram({
  functionType = 'quadratic',
  point = 2,
  showApproach = true,
}: LimitsDiagramProps) {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null)

  const width = 600
  const height = 400
  const padding = 60
  const xMin = -3
  const xMax = 5
  const yMin = -2
  const yMax = 6

  const scaleX = (x: number) => ((x - xMin) / (xMax - xMin)) * (width - 2 * padding) + padding
  const scaleY = (y: number) => height - padding - ((y - yMin) / (yMax - yMin)) * (height - 2 * padding)

  // Funções para plotar
  const linear = (x: number) => 2 * x + 1
  const quadratic = (x: number) => x * x
  const rational = (x: number) => {
    if (Math.abs(x - 2) < 0.01) {
      // Quando x ≈ 2, simplificamos: (x²-4)/(x-2) = (x-2)(x+2)/(x-2) = x+2
      return x + 2
    }
    return (x * x - 4) / (x - 2)
  }

  const getFunction = (x: number) => {
    switch (functionType) {
      case 'linear':
        return linear(x)
      case 'quadratic':
        return quadratic(x)
      case 'rational':
        return rational(x)
      default:
        return quadratic(x)
    }
  }

  // Gerar pontos da curva
  const curvePoints: string[] = []
  for (let i = 0; i <= 200; i++) {
    const x = xMin + (i / 200) * (xMax - xMin)
    if (functionType === 'rational' && Math.abs(x - 2) < 0.1) continue
    const y = getFunction(x)
    if (y >= yMin && y <= yMax) {
      curvePoints.push(`${scaleX(x)},${scaleY(y)}`)
    }
  }

  const limitValue = getFunction(point)
  const approachPoints = showApproach
    ? [
        point - 0.5,
        point - 0.2,
        point - 0.1,
        point - 0.05,
        point + 0.05,
        point + 0.1,
        point + 0.2,
        point + 0.5,
      ]
    : []

  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
      <svg
        width="100%"
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="overflow-visible"
      >
        {/* Grid */}
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="0.5"
              className="dark:stroke-gray-700"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Eixos */}
        <line
          x1={padding}
          y1={height - padding}
          x2={width - padding}
          y2={height - padding}
          stroke="#374151"
          strokeWidth="2"
          className="dark:stroke-gray-300"
        />
        <line
          x1={padding}
          y1={padding}
          x2={padding}
          y2={height - padding}
          stroke="#374151"
          strokeWidth="2"
          className="dark:stroke-gray-300"
        />

        {/* Labels dos eixos */}
        {Array.from({ length: Math.floor(xMax - xMin) + 1 }, (_, i) => {
          const x = xMin + i
          if (x === 0) return null
          return (
            <text
              key={`x-${x}`}
              x={scaleX(x)}
              y={height - padding + 20}
              textAnchor="middle"
              className="text-xs fill-gray-600 dark:fill-gray-400"
            >
              {x}
            </text>
          )
        })}
        {Array.from({ length: Math.floor(yMax - yMin) + 1 }, (_, i) => {
          const y = yMin + i
          if (y === 0) return null
          return (
            <text
              key={`y-${y}`}
              x={padding - 10}
              y={scaleY(y) + 4}
              textAnchor="end"
              className="text-xs fill-gray-600 dark:fill-gray-400"
            >
              {y}
            </text>
          )
        })}

        {/* Curva */}
        <polyline
          points={curvePoints.join(' ')}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="3"
          className="dark:stroke-blue-400"
        />

        {/* Ponto do limite */}
        <circle
          cx={scaleX(point)}
          cy={scaleY(limitValue)}
          r="6"
          fill="#ef4444"
          className="dark:fill-red-400"
          stroke="white"
          strokeWidth="2"
        />
        <text
          x={scaleX(point)}
          y={scaleY(limitValue) - 15}
          textAnchor="middle"
          className="text-sm font-bold fill-red-600 dark:fill-red-400"
        >
          lim
        </text>

        {/* Linha vertical no ponto */}
        <line
          x1={scaleX(point)}
          y1={padding}
          x2={scaleX(point)}
          y2={height - padding}
          stroke="#ef4444"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          className="dark:stroke-red-400"
          opacity="0.5"
        />

        {/* Pontos de aproximação */}
        {showApproach &&
          approachPoints.map((x, idx) => {
            const y = getFunction(x)
            if (y < yMin || y > yMax) return null
            return (
              <g key={`approach-${idx}`}>
                <circle
                  cx={scaleX(x)}
                  cy={scaleY(y)}
                  r="4"
                  fill="#10b981"
                  className="dark:fill-green-400"
                  opacity="0.7"
                  onMouseEnter={() => setHoveredPoint(idx)}
                  onMouseLeave={() => setHoveredPoint(null)}
                />
                {hoveredPoint === idx && (
                  <text
                    x={scaleX(x)}
                    y={scaleY(y) - 10}
                    textAnchor="middle"
                    className="text-xs fill-green-600 dark:fill-green-400 font-semibold"
                  >
                    x={x.toFixed(2)}, y={y.toFixed(2)}
                  </text>
                )}
              </g>
            )
          })}

        {/* Label do ponto */}
        <text
          x={scaleX(point)}
          y={height - padding + 35}
          textAnchor="middle"
          className="text-sm font-semibold fill-gray-900 dark:fill-white"
        >
          x = {point}
        </text>
        <text
          x={width - padding + 10}
          y={scaleY(limitValue)}
          textAnchor="start"
          className="text-sm font-semibold fill-gray-900 dark:fill-white"
        >
          lim = {limitValue.toFixed(2)}
        </text>
      </svg>

      <div className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center">
        <p>
          <strong>Ponto vermelho:</strong> O limite quando x → {point}
        </p>
        {showApproach && (
          <p className="mt-1">
            <strong>Pontos verdes:</strong> Valores se aproximando do ponto (hover para ver valores)
          </p>
        )}
      </div>
    </div>
  )
}

