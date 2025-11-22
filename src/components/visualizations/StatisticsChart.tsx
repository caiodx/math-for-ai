import { useState } from 'react'
import {
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { RotateCcw, TrendingUp } from 'lucide-react'

interface StatisticsChartProps {
  showMean?: boolean
  showMedian?: boolean
}

export default function StatisticsChart({
  showMean = true,
  showMedian = true,
}: StatisticsChartProps) {
  const [data, setData] = useState([
    { name: 'A', value: 10 },
    { name: 'B', value: 20 },
    { name: 'C', value: 15 },
    { name: 'D', value: 25 },
    { name: 'E', value: 18 },
    { name: 'F', value: 22 },
    { name: 'G', value: 30 },
  ])

  const calculateMean = () => {
    const sum = data.reduce((acc, item) => acc + item.value, 0)
    return sum / data.length
  }

  const calculateMedian = () => {
    const sorted = [...data].sort((a, b) => a.value - b.value)
    const mid = Math.floor(sorted.length / 2)
    return sorted.length % 2 === 0
      ? (sorted[mid - 1].value + sorted[mid].value) / 2
      : sorted[mid].value
  }

  const calculateStdDev = () => {
    const mean = calculateMean()
    const variance =
      data.reduce((acc, item) => acc + Math.pow(item.value - mean, 2), 0) /
      data.length
    return Math.sqrt(variance)
  }

  const mean = calculateMean()
  const median = calculateMedian()
  const stdDev = calculateStdDev()

  const reset = () => {
    setData([
      { name: 'A', value: 10 },
      { name: 'B', value: 20 },
      { name: 'C', value: 15 },
      { name: 'D', value: 25 },
      { name: 'E', value: 18 },
      { name: 'F', value: 22 },
      { name: 'G', value: 30 },
    ])
  }

  const updateValue = (index: number, value: number) => {
    const newData = [...data]
    newData[index].value = value
    setData(newData)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-primary-600" />
          Análise Estatística Interativa
        </h3>
        <button
          onClick={reset}
          className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Resetar</span>
        </button>
      </div>

      <div className="space-y-6">
        {/* Chart */}
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              {showMean && (
                <Line
                  type="monotone"
                  dataKey={() => mean}
                  stroke="#10b981"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Média"
                />
              )}
              {showMedian && (
                <Line
                  type="monotone"
                  dataKey={() => median}
                  stroke="#ef4444"
                  strokeWidth={2}
                  strokeDasharray="3 3"
                  name="Mediana"
                />
              )}
              <Legend />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <div className="text-sm text-green-600 dark:text-green-400 font-medium mb-1">
              Média
            </div>
            <div className="text-2xl font-bold text-green-700 dark:text-green-300">
              {mean.toFixed(2)}
            </div>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
            <div className="text-sm text-red-600 dark:text-red-400 font-medium mb-1">
              Mediana
            </div>
            <div className="text-2xl font-bold text-red-700 dark:text-red-300">
              {median.toFixed(2)}
            </div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">
              Desvio Padrão
            </div>
            <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">
              {stdDev.toFixed(2)}
            </div>
          </div>
        </div>

        {/* Data Controls */}
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
            Ajustar Valores
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {data.map((item, index) => (
              <div key={index} className="space-y-1">
                <label className="text-xs text-gray-600 dark:text-gray-400">
                  {item.name}: {item.value}
                </label>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={item.value}
                  onChange={(e) => updateValue(index, parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

