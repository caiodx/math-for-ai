import { motion } from 'framer-motion'
import { Link, TrendingUp, AlertTriangle, Target } from 'lucide-react'

export default function CorrelationTheory() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl p-8 text-white"
      >
        <div className="flex items-center space-x-4">
          <div className="text-6xl">🔗</div>
          <div>
            <h2 className="text-3xl font-bold mb-2">Correlação</h2>
            <p className="text-pink-100 text-lg">
              Descobrindo relações entre variáveis!
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
          <Link className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Para Programadores: Descobrindo Relações nos Dados
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Em IA, você precisa entender quais features estão relacionadas. A correlação te ajuda nisso!
            </p>
            <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 mb-4">
              <pre className="text-green-400 text-sm">
{`# Em Pandas (super fácil!)
import pandas as pd

df = pd.DataFrame({
    'temperatura': [20, 25, 30, 35],
    'vendas_sorvete': [10, 50, 100, 150],
    'preco': [5, 6, 7, 8],
    'vendas': [200, 150, 100, 50]
})

# Calcular correlação
correlacao = df.corr()
# Mostra correlação entre TODAS as colunas!

# Temperatura vs Vendas Sorvete: r ≈ 0.99 (forte!)
# Preço vs Vendas: r ≈ -0.99 (negativa forte!)`}
              </pre>
            </div>
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Correlação Positiva (r próximo de +1):</strong>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  🌡️ Temperatura ↑ → 🍦 Vendas de Sorvete ↑ (quando uma aumenta, a outra também)
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Correlação Negativa (r próximo de -1):</strong>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  💰 Preço ↑ → 📉 Vendas ↓ (quando uma aumenta, a outra diminui)
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Sem Correlação (r próximo de 0):</strong>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  👟 Número de Sapatos ↔ 🧠 QI (não há relação!)
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Escala */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <Target className="w-6 h-6 mr-2 text-pink-600" />
          Coeficiente de Correlação (r)
        </h3>
        <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold">-1</div>
              <div className="text-xs mt-1">Negativa Perfeita</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">0</div>
              <div className="text-xs mt-1">Sem Correlação</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">+1</div>
              <div className="text-xs mt-1">Positiva Perfeita</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="bg-red-600/80 rounded p-2 text-center">
              <strong>r = -1</strong><br />
              Uma aumenta,<br />outra diminui
            </div>
            <div className="bg-yellow-600/80 rounded p-2 text-center">
              <strong>r = 0</strong><br />
              Sem relação<br />linear
            </div>
            <div className="bg-green-600/80 rounded p-2 text-center">
              <strong>r = +1</strong><br />
              Ambas aumentam<br />juntas
            </div>
          </div>
        </div>
      </div>

      {/* Interpretação */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800"
        >
          <div className="text-3xl mb-3">💪</div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-2">
            Correlação Forte
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            |r| &gt; 0.7
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-300">
            Relação muito clara entre as variáveis
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800"
        >
          <div className="text-3xl mb-3">⚖️</div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-2">
            Correlação Moderada
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            0.3 &lt; |r| &lt; 0.7
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-300">
            Relação perceptível, mas não perfeita
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 border border-red-200 dark:border-red-800"
        >
          <div className="text-3xl mb-3">💔</div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-2">
            Correlação Fraca
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            |r| &lt; 0.3
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-300">
            Relação muito fraca ou inexistente
          </p>
        </motion.div>
      </div>

      {/* Aviso Importante */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border-2 border-red-500 dark:border-red-800"
      >
        <div className="flex items-start space-x-4">
          <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              ⚠️ AVISO IMPORTANTE
            </h3>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4">
              <p className="text-lg font-bold text-red-600 dark:text-red-400 mb-2">
                Correlação ≠ Causalidade!
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Duas variáveis podem estar correlacionadas <strong>sem que uma cause a outra</strong>!
              </p>
            </div>
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                  Exemplo: Correlação Espúria
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  🍦 Vendas de sorvete ↔ 🏊 Afogamentos (correlacionados, mas a causa real é o verão!)
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                  Exemplo: Coincidência
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  🎬 Filmes de Nicolas Cage ↔ 🏊 Afogamentos (correlação alta, mas completamente aleatória!)
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Em IA - Exemplos Práticos */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <TrendingUp className="w-6 h-6 mr-2 text-pink-600" />
          Por que Você Vai Usar Correlação TODO DIA em IA?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-4 border border-pink-200 dark:border-pink-800">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Feature Selection (Seleção de Features)
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              Antes de treinar, você remove features redundantes:
            </p>
            <div className="bg-gray-900 dark:bg-gray-950 rounded p-2">
              <pre className="text-green-400 text-xs">
{`# Se duas features têm r > 0.9
# Remova uma (são redundantes!)
corr = df.corr()
# Remove features muito correlacionadas`}
              </pre>
            </div>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Análise Exploratória (EDA)
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              Primeira coisa que você faz em qualquer projeto:
            </p>
            <div className="bg-gray-900 dark:bg-gray-950 rounded p-2">
              <pre className="text-green-400 text-xs">
{`# Visualizar correlações
import seaborn as sns
sns.heatmap(df.corr())
# Vê rapidamente relações!`}
              </pre>
            </div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Feature Engineering
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              Criar novas features baseadas em correlações:
            </p>
            <div className="bg-gray-900 dark:bg-gray-950 rounded p-2">
              <pre className="text-green-400 text-xs">
{`# Se área e quartos são correlacionados
# Crie: area_por_quarto
df['area_por_quarto'] = df['area'] / df['quartos']`}
              </pre>
            </div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Selecionar Features Relevantes
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              Escolha features com alta correlação com o target:
            </p>
            <div className="bg-gray-900 dark:bg-gray-950 rounded p-2">
              <pre className="text-green-400 text-xs">
{`# Features com alta correlação
# com o target são importantes!
corr_com_target = df.corr()['preco']
# Escolha as maiores!`}
              </pre>
            </div>
          </div>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>🎯 Resumo Prático:</strong> Em <strong>todo projeto de ML</strong>, você começa calculando <code>df.corr()</code> para entender os dados. É uma das primeiras coisas que você faz na análise exploratória!
          </p>
        </div>
      </div>
    </div>
  )
}

