import { useState, useEffect } from 'react'
import { Play, Pause, RotateCcw } from 'lucide-react'

interface LimitsDiagramProps {
  functionType?: 'linear' | 'quadratic' | 'rational'
  point?: number
  showApproach?: boolean
}

export default function LimitsDiagram({
  functionType = 'quadratic',
  point = 2,
}: LimitsDiagramProps) {
  // State for the slider value (x approaching point)
  const [currentX, setCurrentX] = useState(point - 2)
  const [isPlaying, setIsPlaying] = useState(false)

  const width = 600
  const height = 400
  const padding = 60
  const xMin = point - 3
  const xMax = point + 3
  const yMin = -2
  const yMax = 8 // Adjusted for better visibility

  const scaleX = (x: number) => ((x - xMin) / (xMax - xMin)) * (width - 2 * padding) + padding
  const scaleY = (y: number) => height - padding - ((y - yMin) / (yMax - yMin)) * (height - 2 * padding)

  // Functions
  const linear = (x: number) => 2 * x + 1
  const quadratic = (x: number) => x * x
  const rational = (x: number) => {
    // (x^2 - 4) / (x - 2)
    // Technically undefined at x=2, but simplifies to x+2
    if (Math.abs(x - 2) < 0.0001) return NaN // Represent the hole
    return (x * x - 4) / (x - 2)
  }

  const getFunction = (x: number) => {
    switch (functionType) {
      case 'linear': return linear(x)
      case 'quadratic': return quadratic(x)
      case 'rational': return rational(x)
      default: return quadratic(x)
    }
  }

  // Animation loop
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentX(prev => {
          const step = 0.05
          const next = prev + step
          if (next >= point) {
            setIsPlaying(false)
            return point
          }
          return next
        })
      }, 50)
    }
    return () => clearInterval(interval)
  }, [isPlaying, point])

  // Generate curve points
  const curvePoints: string[] = []
  for (let i = 0; i <= 200; i++) {
    const x = xMin + (i / 200) * (xMax - xMin)
    const y = getFunction(x)

    // Skip if NaN (hole) or out of bounds
    if (!isNaN(y) && y >= yMin && y <= yMax) {
      curvePoints.push(`${scaleX(x)},${scaleY(y)}`)
    }
  }

  // Calculate current values
  const currentY = getFunction(currentX)
  // For the limit value, we use the simplified version for rational functions
  const limitValue = functionType === 'rational' ? point + 2 : getFunction(point)

  // Distance from target
  const distance = Math.abs(point - currentX)
  const isClose = distance < 0.1
  const isVeryClose = distance < 0.01

  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="mb-4 flex justify-between items-center">
        <h4 className="font-bold text-gray-900 dark:text-white">
          Explore o Limite: Arraste o ponto!
        </h4>
        <div className="flex space-x-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200"
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>
          <button
            onClick={() => {
              setIsPlaying(false)
              setCurrentX(point - 2)
            }}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200"
          >
            <RotateCcw size={16} />
          </button>
        </div>
      </div>

      <div className="relative">
        <svg
          width="100%"
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          className="overflow-visible"
        >
          {/* Grid and Axes (Simplified) */}
          <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#9ca3af" strokeWidth="2" />
          <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#9ca3af" strokeWidth="2" />

          {/* Curve */}
          <polyline
            points={curvePoints.join(' ')}
            fill="none"
            stroke="#6366f1"
            strokeWidth="4"
            className="dark:stroke-indigo-400"
            strokeLinecap="round"
          />

          {/* The Limit Point (Hole or Solid) */}
          <circle
            cx={scaleX(point)}
            cy={scaleY(limitValue)}
            r="6"
            fill={functionType === 'rational' ? 'white' : '#ef4444'}
            stroke="#ef4444"
            strokeWidth="3"
            className={functionType === 'rational' ? 'dark:fill-gray-800' : ''}
          />
          <text x={scaleX(point)} y={scaleY(limitValue) - 15} textAnchor="middle" className="text-sm font-bold fill-red-500">
            Alvo
          </text>

          {/* The Moving Point (You) */}
          {!isNaN(currentY) && (
            <g>
              <circle
                cx={scaleX(currentX)}
                cy={scaleY(currentY)}
                r="8"
                fill="#10b981"
                stroke="white"
                strokeWidth="2"
                className="transition-all duration-75"
              />
              {/* Dashed lines to axes */}
              <line
                x1={scaleX(currentX)}
                y1={scaleY(currentY)}
                x2={scaleX(currentX)}
                y2={height - padding}
                stroke="#10b981"
                strokeDasharray="4 4"
                opacity="0.5"
              />
              <line
                x1={scaleX(currentX)}
                y1={scaleY(currentY)}
                x2={padding}
                y2={scaleY(currentY)}
                stroke="#10b981"
                strokeDasharray="4 4"
                opacity="0.5"
              />
            </g>
          )}
        </svg>

        {/* Overlay Info */}
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between gap-4">
              <span className="text-gray-500">Sua Posição (x):</span>
              <span className="font-mono font-bold text-green-600">{currentX.toFixed(4)}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-gray-500">Altura da Função (y):</span>
              <span className="font-mono font-bold text-green-600">
                {isNaN(currentY) ? "INDEFINIDO" : currentY.toFixed(4)}
              </span>
            </div>
            <div className="h-px bg-gray-200 dark:bg-gray-700 my-2" />
            <div className="flex justify-between gap-4">
              <span className="text-gray-500">Distância do Alvo:</span>
              <span className={`font-mono font-bold ${isVeryClose ? 'text-green-500' : 'text-orange-500'}`}>
                {distance.toFixed(4)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Control */}
      <div className="mt-6">
        <input
          type="range"
          min={point - 2}
          max={point + 2}
          step="0.001"
          value={currentX}
          onChange={(e) => {
            setIsPlaying(false)
            setCurrentX(parseFloat(e.target.value))
          }}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-indigo-600"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>Longe ({point - 2})</span>
          <span>O Alvo ({point})</span>
          <span>Longe ({point + 2})</span>
        </div>
      </div>

      {/* Feedback Message */}
      <div className={`mt-4 p-3 rounded-lg text-center transition-colors duration-300 ${isVeryClose
        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
        : 'bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
        }`}>
        {isVeryClose ? (
          <span className="font-bold flex items-center justify-center gap-2">
            🎉 Você está incrivelmente perto! O limite é {limitValue}!
          </span>
        ) : isClose ? (
          <span>Quase lá... continue se aproximando!</span>
        ) : (
          <span>Arraste o slider para se aproximar do alvo</span>
        )}
      </div>
    </div>
  )
}

