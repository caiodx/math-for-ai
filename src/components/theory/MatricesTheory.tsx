import { motion } from 'framer-motion'
import MatrixDiagram from '../visualizations/MatrixDiagram'
import { Table, RotateCw, Brain, Grid } from 'lucide-react'

export default function MatricesTheory() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-8 text-white"
      >
        <div className="flex items-center space-x-4">
          <div className="text-6xl">📊</div>
          <div>
            <h2 className="text-3xl font-bold mb-2">O que é uma Matriz?</h2>
            <p className="text-green-100 text-lg">
              Uma tabela organizada de números - como uma planilha Excel!
            </p>
          </div>
        </div>
      </motion.div>

      {/* Analogia para Programadores */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-l-4 border-blue-500"
      >
        <div className="flex items-start space-x-4">
          <Table className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Para Programadores: É um Array 2D!
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Se você já trabalhou com <strong>arrays bidimensionais</strong> ou <strong>DataFrames do Pandas</strong>, você já conhece matrizes!
            </p>
            <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 mb-4">
              <pre className="text-green-400 text-sm">
{`# Em Python/NumPy
import numpy as np

# Matriz = Array 2D
matrix = np.array([
    [1, 2, 3],
    [4, 5, 6]
])

# Em Pandas (você já usa!)
import pandas as pd
df = pd.DataFrame({
    'idade': [25, 30],
    'altura': [175, 165],
    'peso': [70, 60]
})
# Isso é uma matriz!`}
              </pre>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong>💡 Entenda assim:</strong>
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• <strong>Linha</strong> = Um exemplo/registro (como uma pessoa)</li>
                <li>• <strong>Coluna</strong> = Uma característica/feature (idade, altura, etc)</li>
                <li>• <strong>Matriz</strong> = Tabela de dados (como Excel ou DataFrame)</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Visualização */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <Grid className="w-6 h-6 mr-2 text-green-600" />
          Visualização: Matriz e Transposta
        </h3>
        <MatrixDiagram
          matrix={[
            [1, 2, 3],
            [4, 5, 6],
          ]}
          label="A"
          color="#10b981"
          showTranspose={true}
        />
      </div>

      {/* Aplicações em IA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800"
      >
        <div className="flex items-start space-x-4 mb-6">
          <Brain className="w-8 h-8 text-purple-600 dark:text-purple-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Matrizes em IA: Onde Você Vai Usar?
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md"
          >
            <div className="text-3xl mb-3">🖼️</div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">
              Imagens Digitais
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              Uma foto 28×28 pixels = matriz 28×28
            </p>
            <div className="bg-gray-100 dark:bg-gray-700 rounded p-2 text-xs font-mono">
              [[255, 128, 64], [192, 96, 32], ...]
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md"
          >
            <div className="text-3xl mb-3">🧠</div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">
              Redes Neurais
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              Cada camada = multiplicação de matrizes
            </p>
            <div className="bg-gray-100 dark:bg-gray-700 rounded p-2 text-xs font-mono">
              Saída = Entrada × Pesos
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md"
          >
            <div className="text-3xl mb-3">🔄</div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">
              Transformações
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Rotação, escala, projeção de dados
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md"
          >
            <div className="text-3xl mb-3">📊</div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">
              Dados Tabulares
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Datasets são matrizes: linhas = exemplos, colunas = features
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Operações - Explicação Simples */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <RotateCw className="w-6 h-6 mr-2 text-green-600" />
          Operações com Matrizes (Em Código!)
        </h3>
        
        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
              1. Multiplicação por Escalar (Fácil!)
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              Multiplique <strong>cada número</strong> pelo escalar. É como aumentar o brilho de uma imagem:
            </p>
            <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 mb-3">
              <pre className="text-green-400 text-sm">
{`# Em NumPy
A = np.array([[1, 2], [3, 4]])
result = 2 * A
# [[2, 4], [6, 8]]
# Cada número foi multiplicado por 2!`}
              </pre>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded p-3 font-mono text-sm text-center">
              2 × [[1, 2], [3, 4]] = [[2, 4], [6, 8]]
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
              2. Multiplicação de Matrizes (O Coração das Redes Neurais!)
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              <strong>Esta é a operação mais importante!</strong> É o que acontece em cada camada de uma rede neural. Vamos entender <strong>como funciona</strong>:
            </p>

            {/* Regra Básica */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-4 border border-blue-200 dark:border-blue-800">
              <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                📐 Regra Básica (Muito Importante!)
              </h5>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-3">
                <p><strong>Para multiplicar A × B:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Número de <strong>colunas de A</strong> = Número de <strong>linhas de B</strong></li>
                  <li>Resultado: matriz com <strong>linhas de A</strong> e <strong>colunas de B</strong></li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded p-3">
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">
                  <strong>Exemplo:</strong> A é 2×3, B é 3×4
                </p>
                <p className="text-xs font-mono text-gray-700 dark:text-gray-300">
                  A(2×3) × B(3×4) = C(2×4) ✓
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  (3 colunas de A = 3 linhas de B → OK!)
                </p>
              </div>
            </div>

            {/* Como Calcular - Passo a Passo */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4 border border-gray-300 dark:border-gray-600">
              <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                🔢 Como Calcular? (Passo a Passo)
              </h5>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                <strong>Fórmula mágica:</strong> Cada elemento C[i,j] = <strong>produto escalar</strong> da linha i de A pela coluna j de B
              </p>
              
              <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 mb-3">
                <pre className="text-green-400 text-xs">
{`# Exemplo: A × B = C
A = [[1, 2],     B = [[5, 6],     C = [[?, ?],
     [3, 4]]          [7, 8]]          [?, ?]]

# C[0,0] = linha 0 de A · coluna 0 de B
#        = [1, 2] · [5, 7]
#        = (1×5) + (2×7) = 5 + 14 = 19

# C[0,1] = linha 0 de A · coluna 1 de B
#        = [1, 2] · [6, 8]
#        = (1×6) + (2×8) = 6 + 16 = 22

# C[1,0] = linha 1 de A · coluna 0 de B
#        = [3, 4] · [5, 7]
#        = (3×5) + (4×7) = 15 + 28 = 43

# C[1,1] = linha 1 de A · coluna 1 de B
#        = [3, 4] · [6, 8]
#        = (3×6) + (4×8) = 18 + 32 = 50

# Resultado:
C = [[19, 22],
     [43, 50]]`}
                </pre>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3 border border-yellow-200 dark:border-yellow-800">
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  <strong>💡 Lembre-se:</strong> Linha de A × Coluna de B = elemento de C. É como fazer produto escalar várias vezes!
                </p>
              </div>
            </div>

            {/* Visualização do Processo */}
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 mb-4 border border-purple-200 dark:border-purple-800">
              <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                👁️ Visualização do Processo (Exemplo Completo)
              </h5>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-3">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Vamos calcular A × B passo a passo:</strong>
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">Matriz A:</p>
                    <div className="bg-gray-100 dark:bg-gray-700 rounded p-2 font-mono text-xs">
                      [1, 2]<br/>
                      [3, 4]
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">Matriz B:</p>
                    <div className="bg-gray-100 dark:bg-gray-700 rounded p-2 font-mono text-xs">
                      [5, 6]<br/>
                      [7, 8]
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">Resultado C:</p>
                    <div className="bg-gray-100 dark:bg-gray-700 rounded p-2 font-mono text-xs">
                      [?, ?]<br/>
                      [?, ?]
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded p-2 border border-blue-200 dark:border-blue-800">
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">
                      C[0,0] = Linha 0 de A · Coluna 0 de B
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      = [1, 2] · [5, 7] = (1×5) + (2×7) = <strong className="text-blue-600">19</strong>
                    </p>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 rounded p-2 border border-green-200 dark:border-green-800">
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">
                      C[0,1] = Linha 0 de A · Coluna 1 de B
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      = [1, 2] · [6, 8] = (1×6) + (2×8) = <strong className="text-green-600">22</strong>
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded p-2 border border-yellow-200 dark:border-yellow-800">
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">
                      C[1,0] = Linha 1 de A · Coluna 0 de B
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      = [3, 4] · [5, 7] = (3×5) + (4×7) = <strong className="text-yellow-600">43</strong>
                    </p>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 rounded p-2 border border-red-200 dark:border-red-800">
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">
                      C[1,1] = Linha 1 de A · Coluna 1 de B
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      = [3, 4] · [6, 8] = (3×6) + (4×8) = <strong className="text-red-600">50</strong>
                    </p>
                  </div>
                </div>

                <div className="mt-4 bg-gray-900 dark:bg-gray-950 rounded p-3">
                  <p className="text-xs text-gray-400 dark:text-gray-500 mb-1">Resultado Final:</p>
                  <p className="font-mono text-green-400 text-sm">
                    C = [[19, 22],<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[43, 50]]
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3 border border-yellow-200 dark:border-yellow-800">
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  <strong>🎯 Padrão:</strong> Para cada posição C[i,j], pegue a linha i de A e a coluna j de B, faça o produto escalar!
                </p>
              </div>
            </div>

            {/* Em Código */}
            <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 mb-3">
              <pre className="text-green-400 text-sm">
{`# Em NumPy (ou TensorFlow/PyTorch)
import numpy as np

A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

# Multiplicação de matrizes
C = A @ B  # ou np.dot(A, B)
# Resultado: [[19, 22], [43, 50]]

# Em redes neurais:
# input @ weights = output
# É exatamente isso!`}
              </pre>
            </div>

            {/* Por que funciona assim */}
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mb-3 border border-green-200 dark:border-green-800">
              <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                🤔 Por que Funciona Assim?
              </h5>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Pense em uma rede neural: você tem várias entradas (linha de A) e vários pesos (coluna de B). A multiplicação combina tudo:
              </p>
              <div className="bg-white dark:bg-gray-800 rounded p-3">
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  <strong>Exemplo:</strong> Prever preço de casa com 2 features (área, quartos) e 3 neurônios:
                </p>
                <div className="text-xs font-mono text-gray-700 dark:text-gray-300 mt-2">
                  entrada = [100m², 3 quartos]<br/>
                  pesos = [[0.5, 0.3], [0.2, 0.8], [0.1, 0.4]]<br/>
                  saída = entrada × pesos = [59, 260, 220]
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3 border border-yellow-200 dark:border-yellow-800">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>💡 Dica Prática:</strong> Você não precisa calcular manualmente! Use <code>@</code> ou <code>np.dot()</code> e a biblioteca faz tudo. Mas entender <strong>como funciona</strong> ajuda muito a debugar problemas em redes neurais!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

