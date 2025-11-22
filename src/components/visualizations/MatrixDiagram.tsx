import { motion } from 'framer-motion'

interface MatrixDiagramProps {
  matrix: number[][]
  label?: string
  color?: string
  showTranspose?: boolean
}

export default function MatrixDiagram({
  matrix,
  label = 'A',
  color = '#3b82f6',
  showTranspose = false,
}: MatrixDiagramProps) {
  const transpose = matrix[0].map((_, colIndex) =>
    matrix.map((row) => row[colIndex])
  )

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Original Matrix */}
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 text-center">
            Matriz {label}
          </h4>
          <div className="flex justify-center">
            <div
              className="border-2 rounded-lg p-4 inline-block"
              style={{ borderColor: color }}
            >
              <div className="space-y-2">
                {matrix.map((row, i) => (
                  <motion.div
                    key={i}
                    className="flex space-x-2 justify-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {row.map((cell, j) => (
                      <motion.div
                        key={j}
                        className="w-12 h-12 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-semibold"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: i * 0.1 + j * 0.05,
                          type: 'spring',
                        }}
                      >
                        {cell}
                      </motion.div>
                    ))}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
            {matrix.length} × {matrix[0].length}
          </p>
        </div>

        {/* Transpose */}
        {showTranspose && (
          <>
            <div className="flex items-center text-2xl font-bold text-gray-400">
              →
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 text-center">
                Transposta {label}ᵀ
              </h4>
              <div className="flex justify-center">
                <div
                  className="border-2 rounded-lg p-4 inline-block border-dashed"
                  style={{ borderColor: '#8b5cf6' }}
                >
                  <div className="space-y-2">
                    {transpose.map((row, i) => (
                      <motion.div
                        key={i}
                        className="flex space-x-2 justify-center"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        {row.map((cell, j) => (
                          <motion.div
                            key={j}
                            className="w-12 h-12 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded bg-purple-50 dark:bg-purple-900/20 text-gray-900 dark:text-white font-semibold"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              delay: 0.5 + i * 0.1 + j * 0.05,
                              type: 'spring',
                            }}
                          >
                            {cell}
                          </motion.div>
                        ))}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                {transpose.length} × {transpose[0].length}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

