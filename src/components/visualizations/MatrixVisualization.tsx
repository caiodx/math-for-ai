import { useState } from 'react'
import { RotateCcw, Plus, X } from 'lucide-react'

interface MatrixVisualizationProps {
  initialMatrix?: number[][]
  showOperations?: boolean
}

export default function MatrixVisualization({
  initialMatrix,
  showOperations = false,
}: MatrixVisualizationProps) {
  const [matrixA, setMatrixA] = useState<number[][]>(
    initialMatrix || [
      [1, 2],
      [3, 4],
    ]
  )
  const [matrixB, setMatrixB] = useState<number[][]>([
    [5, 6],
    [7, 8],
  ])
  const [operation, setOperation] = useState<'add' | 'multiply' | 'scalar'>(
    'add'
  )
  const [scalar, setScalar] = useState(2)

  const addMatrices = (a: number[][], b: number[][]): number[][] => {
    return a.map((row, i) => row.map((val, j) => val + b[i][j]))
  }

  const multiplyMatrices = (a: number[][], b: number[][]): number[][] => {
    const result: number[][] = []
    for (let i = 0; i < a.length; i++) {
      result[i] = []
      for (let j = 0; j < b[0].length; j++) {
        let sum = 0
        for (let k = 0; k < a[0].length; k++) {
          sum += a[i][k] * b[k][j]
        }
        result[i][j] = sum
      }
    }
    return result
  }

  const multiplyByScalar = (matrix: number[][], scalar: number): number[][] => {
    return matrix.map((row) => row.map((val) => val * scalar))
  }

  const getResult = (): number[][] | null => {
    if (operation === 'add') {
      if (
        matrixA.length === matrixB.length &&
        matrixA[0].length === matrixB[0].length
      ) {
        return addMatrices(matrixA, matrixB)
      }
      return null
    }
    if (operation === 'multiply') {
      if (matrixA[0].length === matrixB.length) {
        return multiplyMatrices(matrixA, matrixB)
      }
      return null
    }
    if (operation === 'scalar') {
      return multiplyByScalar(matrixA, scalar)
    }
    return null
  }

  const reset = () => {
    setMatrixA([
      [1, 2],
      [3, 4],
    ])
    setMatrixB([
      [5, 6],
      [7, 8],
    ])
    setScalar(2)
  }

  const updateMatrix = (
    matrix: number[][],
    setMatrix: (m: number[][]) => void,
    row: number,
    col: number,
    value: number
  ) => {
    const newMatrix = matrix.map((r, i) =>
      r.map((c, j) => (i === row && j === col ? value : c))
    )
    setMatrix(newMatrix)
  }

  const renderMatrix = (matrix: number[][], label: string, color: string) => (
    <div className="flex flex-col items-center">
      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
        {label}
      </div>
      <div
        className="border-2 rounded-lg p-4"
        style={{ borderColor: color }}
      >
        <div className="space-y-1">
          {matrix.map((row, i) => (
            <div key={i} className="flex space-x-2">
              {row.map((val, j) => (
                <input
                  key={j}
                  type="number"
                  value={val}
                  onChange={(e) =>
                    updateMatrix(
                      matrix,
                      label === 'A' ? setMatrixA : setMatrixB,
                      i,
                      j,
                      parseFloat(e.target.value) || 0
                    )
                  }
                  className="w-16 text-center border border-gray-300 dark:border-gray-600 rounded px-2 py-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const result = getResult()

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Visualização de Matrizes
        </h3>
        <button
          onClick={reset}
          className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Resetar</span>
        </button>
      </div>

      {showOperations && (
        <div className="mb-4 flex space-x-2">
          <button
            onClick={() => setOperation('add')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              operation === 'add'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            <Plus className="w-4 h-4 inline mr-1" />
            Soma
          </button>
          <button
            onClick={() => setOperation('multiply')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              operation === 'multiply'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            <X className="w-4 h-4 inline mr-1" />
            Multiplicação
          </button>
          <button
            onClick={() => setOperation('scalar')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              operation === 'scalar'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Escalar
          </button>
        </div>
      )}

      <div className="flex flex-col items-center space-y-6">
        <div className="flex items-center space-x-4">
          {renderMatrix(matrixA, 'A', '#3b82f6')}
          {operation !== 'scalar' && (
            <>
              <div className="text-2xl font-bold text-gray-600 dark:text-gray-400">
                {operation === 'add' ? '+' : '×'}
              </div>
              {renderMatrix(matrixB, 'B', '#10b981')}
            </>
          )}
          {operation === 'scalar' && (
            <>
              <div className="text-2xl font-bold text-gray-600 dark:text-gray-400">
                ×
              </div>
              <div className="flex flex-col items-center">
                <input
                  type="number"
                  value={scalar}
                  onChange={(e) => setScalar(parseFloat(e.target.value) || 0)}
                  className="w-20 text-center border-2 border-purple-500 rounded-lg px-4 py-2 text-xl font-bold bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Escalar
                </div>
              </div>
            </>
          )}
          {result && (
            <>
              <div className="text-2xl font-bold text-gray-600 dark:text-gray-400">
                =
              </div>
              {renderMatrix(result, 'Resultado', '#8b5cf6')}
            </>
          )}
        </div>

        {!result && operation !== 'scalar' && (
          <div className="text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-4 py-2 rounded-lg">
            {operation === 'add'
              ? 'As matrizes devem ter as mesmas dimensões para soma'
              : 'O número de colunas de A deve igualar o número de linhas de B'}
          </div>
        )}
      </div>
    </div>
  )
}

