import { motion } from 'framer-motion'
import StatisticsDiagram from '../visualizations/StatisticsDiagram'
import { BarChart3, TrendingUp, AlertTriangle, Target } from 'lucide-react'

export default function StatisticsTheory() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-8 text-white"
      >
        <div className="flex items-center space-x-4">
          <div className="text-6xl">📊</div>
          <div>
            <h2 className="text-3xl font-bold mb-2">Medidas de Tendência Central</h2>
            <p className="text-purple-100 text-lg">
              Descobrindo o valor "típico" dos seus dados!
            </p>
          </div>
        </div>
      </motion.div>

      {/* Analogia para Programadores */}
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
              Para Programadores: Pense como Arrays de Dados
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Em programação, você já calcula médias o tempo todo! Em IA, você precisa entender melhor os dados:
            </p>
            <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 mb-3">
              <pre className="text-green-400 text-sm">
{`# Exemplo: Preços de casas
precos = [100000, 200000, 300000, 400000, 5000000]

# Observação: 4 casas normais (100k a 400k)
#             + 1 mansão de 5 milhões (outlier!)`}
              </pre>
            </div>
            
            {/* Explicação Detalhada da Média */}
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 mb-3 border border-red-200 dark:border-red-800">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                ❌ Média: Por que é Enganosa?
              </h4>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-3 mb-3">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Cálculo passo a passo:</strong>
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 rounded p-2 mb-2">
                  <div className="text-xs font-mono text-gray-700 dark:text-gray-300 space-y-1">
                    <div>Soma = 100000 + 200000 + 300000 + 400000 + 5000000</div>
                    <div>Soma = <strong className="text-red-600">6000000</strong></div>
                    <div className="mt-2">Média = 6000000 / 5 = <strong className="text-red-600">1.200.000</strong></div>
                  </div>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">
                  <strong>Problema:</strong> A média de R$ 1.200.000 sugere que as casas custam mais de 1 milhão, 
                  mas na verdade <strong>4 das 5 casas</strong> custam entre R$ 100k e R$ 400k!
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  <strong>Por quê?</strong> A casa de 5 milhões "puxa" a média para cima, distorcendo completamente o resultado!
                </p>
              </div>
            </div>

            {/* Explicação Detalhada da Mediana */}
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mb-3 border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                ✅ Mediana: Por que é Melhor?
              </h4>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-3 mb-3">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Cálculo passo a passo:</strong>
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 rounded p-2 mb-2">
                  <div className="text-xs font-mono text-gray-700 dark:text-gray-300 space-y-1">
                    <div>1. Ordenar: [100000, 200000, <strong className="text-green-600">300000</strong>, 400000, 5000000]</div>
                    <div>2. Pegar o valor do meio (posição 3 de 5): <strong className="text-green-600">300000</strong></div>
                  </div>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">
                  <strong>Por que é melhor?</strong>
                </p>
                <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1 list-disc list-inside ml-2">
                  <li>A mediana <strong>ignora completamente</strong> a casa de 5 milhões</li>
                  <li>Ela pega apenas o valor do meio: R$ 300.000</li>
                  <li>Isso representa muito melhor as <strong>4 casas normais</strong> (100k, 200k, 300k, 400k)</li>
                  <li>A mediana não é afetada por valores extremos (outliers)</li>
                </ul>
              </div>
            </div>

            {/* Comparação Visual */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-3 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                📊 Comparação Visual
              </h4>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                <div className="text-xs text-gray-700 dark:text-gray-300 space-y-2">
                  <div>
                    <strong>Dados reais:</strong>
                    <div className="bg-gray-100 dark:bg-gray-700 rounded p-2 mt-1 font-mono">
                      [100k, 200k, 300k, 400k, <span className="text-red-600 font-bold">5M</span>]
                    </div>
                  </div>
                  <div>
                    <strong className="text-red-600">Média: R$ 1.200.000</strong> ❌
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Enganosa! Sugere que todas as casas custam mais de 1 milhão
                    </div>
                  </div>
                  <div>
                    <strong className="text-green-600">Mediana: R$ 300.000</strong> ✅
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Correta! Representa bem as 4 casas normais (entre 100k e 400k)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Código Completo */}
            <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 mb-3">
              <pre className="text-green-400 text-sm">
{`# Exemplo completo em Python
precos = [100000, 200000, 300000, 400000, 5000000]

# Média (pode ser enganosa!)
media = sum(precos) / len(precos)
print(f"Média: R$ {media:,.0f}")
# Média: R$ 1,200,000 ❌ (engana!)

# Mediana (mais robusta - ignora outliers!)
precos_ordenados = sorted(precos)
mediana = precos_ordenados[len(precos_ordenados) // 2]
print(f"Mediana: R$ {mediana:,.0f}")
# Mediana: R$ 300,000 ✅ (representa melhor!)

# Em Pandas
import pandas as pd
df = pd.DataFrame({'precos': precos})
print(f"Média: R$ {df['precos'].mean():,.0f}")
print(f"Mediana: R$ {df['precos'].median():,.0f}")`}
              </pre>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3 border border-yellow-200 dark:border-yellow-800">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>💡 Resumo:</strong> Quando há <strong>outliers</strong> (valores extremos como a casa de 5 milhões), 
                a <strong>média é enganosa</strong> porque é "puxada" pelo valor extremo. A <strong>mediana é melhor</strong> 
                porque ignora os extremos e pega apenas o valor do meio, representando melhor os dados "normais"!
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Visualização */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <BarChart3 className="w-6 h-6 mr-2 text-purple-600" />
          Visualização: Medidas Estatísticas
        </h3>
        <StatisticsDiagram
          data={[10, 20, 15, 25, 18, 22, 30, 12, 28, 20]}
          showMean={true}
          showMedian={true}
          showStdDev={true}
        />
      </div>

      {/* As Três Medidas - Versão Programador */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800"
        >
          <div className="text-4xl mb-4">📊</div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">
            Média (Mean)
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
            Soma todos e divide pelo total (você já sabe fazer isso!)
          </p>
          <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-3 mb-3">
            <pre className="text-green-400 text-xs">
{`# Em Python
dados = [10, 20, 30]
media = sum(dados) / len(dados)
# 20

# Em Pandas
df['coluna'].mean()`}
            </pre>
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex items-center text-green-600">
              <span className="mr-2">✓</span>
              <span>Fácil - você já usa!</span>
            </div>
            <div className="flex items-center text-red-600">
              <span className="mr-2">✗</span>
              <span>Um valor muito grande distorce</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800"
        >
          <div className="text-4xl mb-4">🎯</div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">
            Mediana (Median)
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
            Valor do meio quando ordenado (ignora extremos!)
          </p>
          <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-3 mb-3">
            <pre className="text-green-400 text-xs">
{`# Em Python
dados = [1, 3, 5, 7, 9]
mediana = sorted(dados)[len(dados)//2]
# 5 (valor do meio)

# Em Pandas
df['coluna'].median()`}
            </pre>
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex items-center text-green-600">
              <span className="mr-2">✓</span>
              <span>Ignora valores extremos</span>
            </div>
            <div className="flex items-center text-yellow-600">
              <span className="mr-2">⚠</span>
              <span>Usa só o valor do meio</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800"
        >
          <div className="text-4xl mb-4">🏆</div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">
            Moda (Mode)
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
            Valor que aparece mais vezes (como contar frequências!)
          </p>
          <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-3 mb-3">
            <pre className="text-green-400 text-xs">
{`# Em Python
from collections import Counter
dados = [2, 3, 3, 4, 4, 4]
moda = Counter(dados).most_common(1)[0][0]
# 4 (aparece 3 vezes)

# Em Pandas
df['coluna'].mode()`}
            </pre>
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex items-center text-green-600">
              <span className="mr-2">✓</span>
              <span>Útil para dados categóricos</span>
            </div>
            <div className="flex items-center text-yellow-600">
              <span className="mr-2">⚠</span>
              <span>Pode não ter moda</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quando Usar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800"
      >
        <div className="flex items-start space-x-4">
          <TrendingUp className="w-8 h-8 text-purple-600 dark:text-purple-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Quando Usar Cada Uma?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Use Média quando:
                </h4>
                <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                  <li>✓ Dados simétricos</li>
                  <li>✓ Sem outliers</li>
                  <li>✓ Precisa usar todos os dados</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Use Mediana quando:
                </h4>
                <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                  <li>✓ Tem outliers</li>
                  <li>✓ Dados assimétricos</li>
                  <li>✓ Precisa de robustez</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Use Moda quando:
                </h4>
                <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                  <li>✓ Dados categóricos</li>
                  <li>✓ Quer valor mais comum</li>
                  <li>✓ Dados nominais</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Em IA */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <AlertTriangle className="w-6 h-6 mr-2 text-purple-600" />
          Aplicações em IA
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Normalização
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Subtrair a média dos dados antes de treinar modelos
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Feature Engineering
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Criar features baseadas na média, mediana ou moda
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Avaliação
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Calcular métricas como MAE (Mean Absolute Error)
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Preprocessing
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Usar mediana para remover outliers dos dados
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

