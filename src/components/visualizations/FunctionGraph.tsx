import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { RotateCcw } from 'lucide-react'

interface FunctionGraphProps {
  functionType?: 'linear' | 'quadratic' | 'cubic' | 'custom'
  showDerivative?: boolean
  showTangent?: boolean
  tangentPoint?: number
}

export default function FunctionGraph({
  functionType = 'quadratic',
  showDerivative = false,
  showTangent = false,
  tangentPoint = 2,
}: FunctionGraphProps) {
  const [a, setA] = useState(1)
  const [b, setB] = useState(0)
  const [c, setC] = useState(0)
  const [point, setPoint] = useState(tangentPoint)

  const calculateFunction = (x: number): number => {
    switch (functionType) {
      case 'linear':
        return a * x + b
      case 'quadratic':
        return a * x * x + b * x + c
      case 'cubic':
        return a * x * x * x + b * x * x + c * x
      default:
        return a * x * x + b * x + c
    }
  }

  const calculateDerivative = (x: number): number => {
    switch (functionType) {
      case 'linear':
        return a
      case 'quadratic':
        return 2 * a * x + b
      case 'cubic':
        return 3 * a * x * x + 2 * b * x + c
      default:
        return 2 * a * x + b
    }
  }

  const generateData = () => {
    const data = []
    for (let x = -5; x <= 5; x += 0.1) {
      const y = calculateFunction(x)
      const dy = showDerivative ? calculateDerivative(x) : null
      data.push({ x: parseFloat(x.toFixed(1)), y: parseFloat(y.toFixed(2)), dy })
    }
    return data
  }

  const generateTangentLine = () => {
    if (!showTangent) return []
    const y0 = calculateFunction(point)
    const slope = calculateDerivative(point)
    const data = []
    for (let x = point - 2; x <= point + 2; x += 0.1) {
      const y = y0 + slope * (x - point)
      data.push({ x: parseFloat(x.toFixed(1)), y: parseFloat(y.toFixed(2)) })
    }
    return data
  }

  const reset = () => {
    setA(1)
    setB(0)
    setC(0)
    setPoint(2)
  }

  const data = generateData()
  const tangentData = generateTangentLine()
  const derivativeValue = showDerivative ? calculateDerivative(point) : null
  const functionValue = calculateFunction(point)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Gráfico de Função e Derivada
        </h3>
        <button
          onClick={reset}
          className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Resetar</span>
        </button>
      </div>

      <div className="space-y-4">
        {/* Graph */}
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="x"
                stroke="#6b7280"
                label={{ value: 'x', position: 'insideBottom', offset: -5 }}
              />
              <YAxis
                stroke="#6b7280"
                label={{ value: 'f(x)', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Line
                type="monotone"
                dataKey="y"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={false}
                name="f(x)"
              />
              {showDerivative && (
                <Line
                  type="monotone"
                  dataKey="dy"
                  stroke="#10b981"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={false}
                  name="f'(x)"
                />
              )}
              {showTangent && tangentData.length > 0 && (
                <Line
                  type="monotone"
                  data={tangentData}
                  dataKey="y"
                  stroke="#ef4444"
                  strokeWidth={2}
                  strokeDasharray="3 3"
                  dot={false}
                  name="Tangente"
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {functionType === 'quadratic' && (
            <>
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2">
                  Coeficiente a: {a}
                </label>
                <input
                  type="range"
                  min="-3"
                  max="3"
                  step="0.1"
                  value={a}
                  onChange={(e) => setA(parseFloat(e.target.value))}
                  className="w-full"
                />
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2">
                  Coeficiente b: {b}
                </label>
                <input
                  type="range"
                  min="-5"
                  max="5"
                  step="0.1"
                  value={b}
                  onChange={(e) => setB(parseFloat(e.target.value))}
                  className="w-full"
                />
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2">
                  Coeficiente c: {c}
                </label>
                <input
                  type="range"
                  min="-5"
                  max="5"
                  step="0.1"
                  value={c}
                  onChange={(e) => setC(parseFloat(e.target.value))}
                  className="w-full"
                />
              </div>
            </>
          )}

          {showTangent && (
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2">
                Ponto da Tangente: {point}
              </label>
              <input
                type="range"
                min="-4"
                max="4"
                step="0.1"
                value={point}
                onChange={(e) => setPoint(parseFloat(e.target.value))}
                className="w-full"
              />
            </div>
          )}
        </div>

        {/* Info */}
        <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4 border border-primary-200 dark:border-primary-800">
          <div className="text-sm space-y-1">
            <div className="text-gray-700 dark:text-gray-300">
              <strong>Função:</strong> f(x) = {a !== 0 && `${a}x²`}
              {b !== 0 && ` + ${b}x`}
              {c !== 0 && ` + ${c}`}
            </div>
            {showDerivative && (
              <div className="text-gray-700 dark:text-gray-300">
                <strong>Derivada:</strong> f'(x) = {2 * a}x + {b}
              </div>
            )}
            {showTangent && derivativeValue !== null && (
              <div className="text-gray-700 dark:text-gray-300">
                <strong>No ponto x = {point}:</strong> f({point}) = {functionValue.toFixed(2)},
                f'({point}) = {derivativeValue.toFixed(2)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

