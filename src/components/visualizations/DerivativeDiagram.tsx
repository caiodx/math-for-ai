import { motion } from 'framer-motion'
import { useState } from 'react'

interface DerivativeDiagramProps {
  showTangent?: boolean
  point?: number
}

export default function DerivativeDiagram({
  showTangent = true,
  point = 2,
}: DerivativeDiagramProps) {
  const [zoom, setZoom] = useState(0.75)
  const width = 600
  const height = 400
  const centerX = width / 2
  const centerY = height / 2
  const baseScale = 50
  const scale = baseScale * zoom

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
      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 mb-4">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 text-center">
          <strong>O que está sendo mostrado:</strong>
        </p>
        <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1 text-center">
          <p>
            <strong className="text-blue-600 dark:text-blue-400">f(x) = x²</strong> → A função original (curva azul)
          </p>
          <p>
            <strong className="text-green-600 dark:text-green-400">f'(x) = 2x</strong> → A derivada (inclinação em cada ponto)
          </p>
          <p>
            <strong className="text-red-600 dark:text-red-400">No ponto x = {point}</strong> → Estamos analisando aqui
          </p>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            <strong>Em código:</strong> Se <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">f(x) = x²</code>, então 
            <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">f'({point}) = {slope}</code> é a taxa de mudança nesse ponto!
          </p>
        </div>
      </div>

      {/* Zoom Controls */}
      <div className="flex items-center justify-center gap-4 mb-4">
        <button
          onClick={() => setZoom(Math.max(0.5, zoom - 0.25))}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-semibold"
          aria-label="Diminuir zoom"
        >
          −
        </button>
        <span className="text-sm text-gray-700 dark:text-gray-300 min-w-[80px] text-center">
          Zoom: {(zoom * 100).toFixed(0)}%
        </span>
        <button
          onClick={() => setZoom(Math.min(3, zoom + 0.25))}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-semibold"
          aria-label="Aumentar zoom"
        >
          +
        </button>
        <button
          onClick={() => setZoom(1)}
          className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
          aria-label="Resetar zoom"
        >
          Resetar
        </button>
      </div>

      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full">
        {/* Grid */}
        <defs>
          <pattern
            id="grid-derivative"
            width={baseScale}
            height={baseScale}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${baseScale} 0 L 0 0 0 ${baseScale}`}
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

        {/* X-axis labels */}
        {(() => {
          const range = Math.ceil(6 / zoom)
          const step = zoom >= 1.5 ? 0.5 : zoom >= 0.75 ? 1 : 2
          const labels: JSX.Element[] = []
          
          for (let x = -range; x <= range; x += step) {
            if (Math.abs(x) < 0.01) continue
            const xPos = graphX(x)
            if (xPos < 0 || xPos > width) continue
            
            labels.push(
              <g key={`x-${x}`}>
                <line
                  x1={xPos}
                  y1={centerY - 5}
                  x2={xPos}
                  y2={centerY + 5}
                  stroke="#6b7280"
                  strokeWidth="2"
                />
                <text
                  x={xPos}
                  y={centerY + 20}
                  fill="#6b7280"
                  fontSize="12"
                  textAnchor="middle"
                  className="dark:fill-gray-300"
                >
                  {x % 1 === 0 ? x : x.toFixed(1)}
                </text>
              </g>
            )
          }
          return labels
        })()}

        {/* Y-axis labels */}
        {(() => {
          const range = Math.ceil(12 / zoom)
          const step = zoom >= 1.5 ? 1 : zoom >= 0.75 ? 2 : 4
          const labels: JSX.Element[] = []
          
          for (let y = -range; y <= range; y += step) {
            if (Math.abs(y) < 0.01) continue
            const yPos = graphY(y)
            if (yPos < 0 || yPos > height) continue
            
            labels.push(
              <g key={`y-${y}`}>
                <line
                  x1={centerX - 5}
                  y1={yPos}
                  x2={centerX + 5}
                  y2={yPos}
                  stroke="#6b7280"
                  strokeWidth="2"
                />
                <text
                  x={centerX - 15}
                  y={yPos + 4}
                  fill="#6b7280"
                  fontSize="12"
                  textAnchor="end"
                  className="dark:fill-gray-300"
                >
                  {y % 1 === 0 ? y : y.toFixed(1)}
                </text>
              </g>
            )
          }
          return labels
        })()}

        {/* Function curve f(x) = x² */}
        {(() => {
          const range = Math.max(3, 6 / zoom)
          const steps = Math.ceil(60 * zoom)
          const stepSize = (range * 2) / steps
          
          return (
            <motion.path
              d={`M ${graphX(-range)} ${graphY(f(-range))} ${Array.from({ length: steps }, (_, i) => {
                const x = -range + (i * stepSize)
                return `L ${graphX(x)} ${graphY(f(x))}`
              }).join(' ')}`}
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5 }}
            />
          )
        })()}

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
        <div className="space-y-2">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>📊 O que você está vendo:</strong>
          </p>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1.5 ml-4 list-disc">
            <li>
              A <strong className="text-blue-600 dark:text-blue-400">curva azul</strong> é a função f(x) = x²
            </li>
            <li>
              O <strong className="text-red-600 dark:text-red-400">ponto vermelho</strong> ({point}, {pointY}) marca onde estamos analisando
            </li>
            <li>
              A <strong className="text-green-600 dark:text-green-400">reta verde tracejada</strong> é a reta tangente - ela "toca" a curva apenas nesse ponto
            </li>
            <li>
              A <strong>derivada f'({point}) = {slope}</strong> é exatamente a <strong>inclinação dessa reta verde</strong>
            </li>
          </ul>
          <p className="text-sm text-gray-700 dark:text-gray-300 mt-3 pt-3 border-t border-gray-300 dark:border-gray-600">
            <strong>💡 Por que isso importa?</strong> A derivada nos diz <strong>quão rápido</strong> a função está mudando naquele ponto. 
            Se f'({point}) = {slope}, significa que para cada unidade que você anda no eixo X, a função sobe {slope} unidades no eixo Y. 
            É essa informação que algoritmos de IA usam para "aprender" e ajustar parâmetros!
          </p>
        </div>
      </div>
    </div>
  )
}

