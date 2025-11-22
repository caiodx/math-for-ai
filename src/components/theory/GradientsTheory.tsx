import { motion } from 'framer-motion'
import { Mountain, ArrowDown, Zap, Brain } from 'lucide-react'

export default function GradientsTheory() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 text-white"
      >
        <div className="flex items-center space-x-4">
          <div className="text-6xl">🧭</div>
          <div>
            <h2 className="text-3xl font-bold mb-2">Gradientes</h2>
            <p className="text-indigo-100 text-lg">
              A bússola que guia o aprendizado das redes neurais!
            </p>
          </div>
        </div>
      </motion.div>

      {/* Analogia da Montanha */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-l-4 border-blue-500"
      >
        <div className="flex items-start space-x-4">
          <Mountain className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Analogia da Montanha 🏔️
            </h3>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Imagine que você está numa <strong>montanha</strong> (função de erro) e quer chegar ao <strong>vale</strong> (mínimo):
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <ArrowDown className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">O gradiente aponta para cima</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">(direção de maior crescimento)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ArrowDown className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Você anda na direção oposta</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">(descendo a montanha)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ArrowDown className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Eventualmente chega ao vale</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">(mínimo global - menor erro!)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Definição Simples */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          O que é um Gradiente? (Versão Simples)
        </h3>
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-6 mb-4">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            <strong>Derivada</strong> = para funções com 1 variável (f(x))<br />
            <strong>Gradiente</strong> = para funções com várias variáveis (f(x, y, z, ...))
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4">
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              <strong>Exemplo simples:</strong> Se você tem uma função que depende de x e y:
            </p>
            <div className="bg-gray-900 dark:bg-gray-950 rounded p-3 mb-3">
              <pre className="text-green-400 text-xs">
{`# Função: f(x, y) = x² + y²
# Gradiente = [derivada em x, derivada em y]
# ∇f = [2x, 2y]

# Em código (você não calcula isso manualmente!)
# TensorFlow/PyTorch fazem automaticamente`}
              </pre>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              O gradiente é um <strong>vetor</strong> (array) que contém todas as derivadas. Ele aponta para onde a função <strong>mais cresce</strong>.
            </p>
          </div>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>💡 Para Programadores:</strong> Você <strong>nunca</strong> vai calcular gradientes manualmente! TensorFlow e PyTorch fazem isso com <code>tape.gradient()</code> ou <code>backward()</code>. O importante é entender o <strong>conceito</strong>!
          </p>
        </div>
      </div>

      {/* Gradiente Descendente */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800"
      >
        <div className="flex items-start space-x-4 mb-6">
          <Zap className="w-8 h-8 text-purple-600 dark:text-purple-400 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Gradiente Descendente: O Algoritmo que Treina Redes Neurais
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Este é o algoritmo <strong>mais importante</strong> em Machine Learning!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <div className="text-2xl mb-2">1️⃣</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Forward Pass
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Calcula a saída e o erro
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <div className="text-2xl mb-2">2️⃣</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Backward Pass
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Calcula o gradiente (backpropagation)
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <div className="text-2xl mb-2">3️⃣</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Atualização
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Move parâmetros na direção oposta
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <div className="text-2xl mb-2">4️⃣</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Repetição
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Até convergir (encontrar mínimo)
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
            Fórmula de Atualização (O que Acontece no Código)
          </h4>
          <div className="bg-gray-100 dark:bg-gray-700 rounded p-3 font-mono text-sm text-center mb-3">
            θ = θ - α · ∇f(θ)
          </div>
          <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 mb-3">
            <pre className="text-green-400 text-xs">
{`# Em TensorFlow/PyTorch (você não escreve isso!)
# Mas é o que acontece por baixo dos panos:

# 1. Calcula o gradiente
gradient = tape.gradient(loss, weights)

# 2. Atualiza os pesos
weights = weights - learning_rate * gradient

# Isso é o gradiente descendente!`}
            </pre>
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
            <p><strong>θ (theta):</strong> Pesos da rede neural (os parâmetros que você treina)</p>
            <p><strong>α (alpha):</strong> Learning rate - quão "grande" é cada passo (você define: 0.001, 0.01, etc)</p>
            <p><strong>∇f(θ):</strong> Gradiente - para onde ajustar os pesos</p>
          </div>
        </div>
      </motion.div>

      {/* Importância */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <Brain className="w-6 h-6 mr-2 text-indigo-600" />
          Por que é TÃO Importante?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800">
            <div className="text-2xl mb-2">🧠</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Redes Neurais
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              TODAS as redes são treinadas com gradiente descendente
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
            <div className="text-2xl mb-2">🎯</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Otimização
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              Qualquer modelo que precisa "aprender" usa gradientes
            </p>
          </div>
          <div className="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-4 border border-pink-200 dark:border-pink-800">
            <div className="text-2xl mb-2">⚡</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Fine-tuning
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              Modelos pré-treinados (GPT, BERT) usam para ajuste fino
            </p>
          </div>
        </div>
      </div>

      {/* Variações */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Variações Modernas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">SGD</h4>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              Stochastic Gradient Descent - usa subconjunto dos dados
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Adam</h4>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              Adapta a taxa de aprendizado automaticamente
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">RMSprop</h4>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              Otimização para redes profundas
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

