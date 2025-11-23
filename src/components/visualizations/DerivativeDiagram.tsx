import { useState, useEffect } from 'react'
import { Play, Pause, RotateCcw, TrendingUp, TrendingDown, Minus } from 'lucide-react'

interface DerivativeDiagramProps {
  showTangent?: boolean
  point?: number
}

export default function DerivativeDiagram({
  point = 2,
}: DerivativeDiagramProps) {
  // State for the slider value (x position)
  const [currentX, setCurrentX] = useState(point)
  const [isPlaying, setIsPlaying] = useState(false)

  const width = 600
  const height = 400
  const padding = 60
  const xMin = -3
  const xMax = 5
  const yMin = -2
  const yMax = 10

  const scaleX = (x: number) => ((x - xMin) / (xMax - xMin)) * (width - 2 * padding) + padding
  const scaleY = (y: number) => height - padding - ((y - yMin) / (yMax - yMin)) * (height - 2 * padding)

  // Function f(x) = x²
  // We can add more functions later if needed
  const f = (x: number) => 0.5 * x * x // Using 0.5x^2 to fit better in view
  const fPrime = (x: number) => x // Derivative of 0.5x^2 is x

  // Animation loop
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentX(prev => {
          const step = 0.05
          const next = prev + step
          if (next >= xMax - 1) {
            setIsPlaying(false)
            return xMin + 1
          }
          return next
        })
      }, 50)
    }
    return () => clearInterval(interval)
  }, [isPlaying])

  // Current values
  const currentY = f(currentX)
  const slope = fPrime(currentX)

  // Tangent line calculation
  // y - y0 = m(x - x0) => y = m(x - x0) + y0
  const tangentLength = 2
  const x1 = currentX - tangentLength
  const y1 = slope * (x1 - currentX) + currentY
  const x2 = currentX + tangentLength
  const y2 = slope * (x2 - currentX) + currentY

  // Generate curve points
  const curvePoints: string[] = []
  for (let i = 0; i <= 200; i++) {
    const x = xMin + (i / 200) * (xMax - xMin)
    const y = f(x)
    if (y >= yMin && y <= yMax) {
      curvePoints.push(`${scaleX(x)},${scaleY(y)}`)
    }
  }

  // Determine slope status
  const slopeStatus = Math.abs(slope) < 0.1 ? 'zero' : slope > 0 ? 'positive' : 'negative'
  const slopeColor = slopeStatus === 'positive' ? '#10b981' : slopeStatus === 'negative' ? '#ef4444' : '#f59e0b'

  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="mb-4 flex justify-between items-center">
        <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-indigo-600" />
          Dirija na Curva!
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
              setCurrentX(0)
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

          {/* Zero line for Y */}
          <line
            x1={padding}
            y1={scaleY(0)}
            x2={width - padding}
            y2={scaleY(0)}
            stroke="#e5e7eb"
            strokeWidth="1"
            strokeDasharray="4 4"
            className="dark:stroke-gray-700"
          />

          {/* Curve */}
          <polyline
            points={curvePoints.join(' ')}
            fill="none"
            stroke="#6366f1"
            strokeWidth="4"
            className="dark:stroke-indigo-400"
            strokeLinecap="round"
          />

          {/* Tangent Line */}
          <line
            x1={scaleX(x1)}
            y1={scaleY(y1)}
            x2={scaleX(x2)}
            y2={scaleY(y2)}
            stroke={slopeColor}
            strokeWidth="3"
            strokeDasharray="6 4"
          />

          {/* The Point (Car) */}
          <circle
            cx={scaleX(currentX)}
            cy={scaleY(currentY)}
            r="8"
            fill={slopeColor}
            stroke="white"
            strokeWidth="2"
            className="transition-all duration-75 shadow-lg"
          />

          {/* Slope Indicator Line (Vertical) */}
          <line
            x1={scaleX(currentX)}
            y1={scaleY(currentY)}
            x2={scaleX(currentX)}
            y2={height - padding}
            stroke={slopeColor}
            strokeDasharray="2 2"
            opacity="0.5"
          />
        </svg>

        {/* Overlay Info - Speedometer Style */}
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-sm w-48">
          <div className="text-center">
            <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Inclinação (Derivada)</span>
            <div className={`text-3xl font-mono font-bold my-1 transition-colors duration-300`} style={{ color: slopeColor }}>
              {slope.toFixed(2)}
            </div>
            <div className="flex justify-center items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300">
              {slopeStatus === 'positive' && <><TrendingUp size={16} /> Subindo</>}
              {slopeStatus === 'negative' && <><TrendingDown size={16} /> Descendo</>}
              {slopeStatus === 'zero' && <><Minus size={16} /> Plano</>}
            </div>
          </div>
        </div>
      </div>

      {/* Slider Control */}
      <div className="mt-6">
        <input
          type="range"
          min={xMin + 0.5}
          max={xMax - 0.5}
          step="0.01"
          value={currentX}
          onChange={(e) => {
            setIsPlaying(false)
            setCurrentX(parseFloat(e.target.value))
          }}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-indigo-600"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>Esquerda (Descendo)</span>
          <span>Fundo do Vale (0)</span>
          <span>Direita (Subindo)</span>
        </div>
      </div>

      {/* Educational Context */}
      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
        <div className={`p-2 rounded ${slopeStatus === 'negative' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 font-bold' : 'bg-gray-50 text-gray-500 dark:bg-gray-800 dark:text-gray-500'}`}>
          Descida
          <br />
          (Derivada Negativa)
        </div>
        <div className={`p-2 rounded ${slopeStatus === 'zero' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 font-bold' : 'bg-gray-50 text-gray-500 dark:bg-gray-800 dark:text-gray-500'}`}>
          Plano
          <br />
          (Derivada Zero)
        </div>
        <div className={`p-2 rounded ${slopeStatus === 'positive' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 font-bold' : 'bg-gray-50 text-gray-500 dark:bg-gray-800 dark:text-gray-500'}`}>
          Subida
          <br />
          (Derivada Positiva)
        </div>
      </div>
    </div>
  )
}

