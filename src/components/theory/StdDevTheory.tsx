import { motion } from 'framer-motion'
import StatisticsDiagram from '../visualizations/StatisticsDiagram'
import { AlertCircle, Target, TrendingUp, BarChart3 } from 'lucide-react'

export default function StdDevTheory() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl p-8 text-white"
      >
        <div className="flex items-center space-x-4">
          <div className="text-6xl">📏</div>
          <div>
            <h2 className="text-3xl font-bold mb-2">Desvio Padrão</h2>
            <p className="text-cyan-100 text-lg">
              Medindo a variabilidade dos seus dados!
            </p>
          </div>
        </div>
      </motion.div>

      {/* Analogia */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 border-l-4 border-yellow-500"
      >
        <div className="flex items-start space-x-4">
          <Target className="w-8 h-8 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Analogia: Duas Turmas com Mesma Média
            </h3>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-3">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Duas turmas com <strong>mesma média</strong> de nota (7.0):
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold text-green-600 mb-2">Turma A (Consistente)</p>
                  <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1 bg-green-50 dark:bg-green-900/20 rounded p-2">
                    <div>[6.8, 7.0, 7.2, 6.9, 7.1]</div>
                    <div className="text-green-600">Desvio pequeno ✓</div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-red-600 mb-2">Turma B (Variável)</p>
                  <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1 bg-red-50 dark:bg-red-900/20 rounded p-2">
                    <div>[3.0, 7.0, 10.0, 5.0, 10.0]</div>
                    <div className="text-red-600">Desvio grande ✗</div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 font-semibold">
              A média sozinha não conta a história completa! O desvio padrão mostra a <strong>variabilidade</strong>! 📊
            </p>
          </div>
        </div>
      </motion.div>

      {/* Visualização */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <BarChart3 className="w-6 h-6 mr-2 text-cyan-600" />
          Visualização: Desvio Padrão
        </h3>
        <StatisticsDiagram
          data={[2, 4, 4, 4, 5, 5, 7, 9]}
          showMean={true}
          showStdDev={true}
        />
      </div>

      {/* Fórmula - Versão Programador */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Como Calcular? (Você Não Precisa Fazer Manualmente!)
        </h3>
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-4 border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            <strong>💡 Boa Notícia:</strong> Você nunca vai calcular isso manualmente! Use bibliotecas:
          </p>
          <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4">
            <pre className="text-green-400 text-sm">
{`# Em Python/NumPy (FÁCIL!)
import numpy as np
dados = [2, 4, 4, 4, 5, 5, 7, 9]
std = np.std(dados)  # 2.0 - pronto!

# Em Pandas
df['coluna'].std()

# Você não precisa da fórmula!`}
            </pre>
          </div>
        </div>
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-lg p-6">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 text-center">
            <strong>Mas se quiser entender:</strong> A fórmula é:
          </p>
          <div className="text-center mb-4">
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              σ = √(Σ(xᵢ - μ)² / n)
            </div>
          </div>
          <div className="space-y-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Passo 1: Calcule a média</div>
              <div className="text-xs text-gray-600 dark:text-gray-300 font-mono">
                μ = (2+4+4+4+5+5+7+9) / 8 = 5
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Passo 2: Calcule diferenças</div>
              <div className="text-xs text-gray-600 dark:text-gray-300 font-mono">
                [-3, -1, -1, -1, 0, 0, 2, 4]
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Passo 3: Eleve ao quadrado</div>
              <div className="text-xs text-gray-600 dark:text-gray-300 font-mono">
                [9, 1, 1, 1, 0, 0, 4, 16]
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Passo 4: Média dos quadrados</div>
              <div className="text-xs text-gray-600 dark:text-gray-300 font-mono">
                (9+1+1+1+0+0+4+16) / 8 = 4
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Passo 5: Raiz quadrada</div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                σ = √4 = 2
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Regra Empírica */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800"
      >
        <div className="flex items-start space-x-4">
          <AlertCircle className="w-8 h-8 text-purple-600 dark:text-purple-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Regra Empírica (68-95-99.7)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Para dados com distribuição normal:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">68%</div>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  dos dados estão dentro de <strong>±1 desvio padrão</strong>
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">95%</div>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  dos dados estão dentro de <strong>±2 desvios padrão</strong>
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">99.7%</div>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  dos dados estão dentro de <strong>±3 desvios padrão</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Em IA */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <TrendingUp className="w-6 h-6 mr-2 text-cyan-600" />
          Por que é ESSENCIAL em IA?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-4 border border-cyan-200 dark:border-cyan-800">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Normalização (Z-score)
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              Antes de treinar modelos, você normaliza:
            </p>
            <div className="bg-white dark:bg-gray-800 rounded p-2 text-xs font-mono">
              z = (x - μ) / σ
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-300 mt-2">
              <strong>Crítico</strong> para redes neurais!
            </p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Detecção de Outliers
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Valores a mais de <strong>3 desvios padrão</strong> da média são outliers
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Feature Scaling
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Algoritmos como SVM e KNN são sensíveis à escala. Normalização resolve!
            </p>
          </div>
          <div className="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-4 border border-pink-200 dark:border-pink-800">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Regularização
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              L2 Regularization penaliza pesos grandes (relacionado à variância)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

