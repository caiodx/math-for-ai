import { motion } from 'framer-motion'
import DerivativeDiagram from '../visualizations/DerivativeDiagram'
import { Gauge, Mountain, TrendingDown, Lightbulb } from 'lucide-react'

export default function DerivativesTheory() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-8 text-white"
      >
        <div className="flex items-center space-x-4">
          <div className="text-6xl">📈</div>
          <div>
            <h2 className="text-3xl font-bold mb-2">O que é uma Derivada?</h2>
            <p className="text-orange-100 text-lg">
              É como o velocímetro do seu carro - mostra quão rápido você está mudando!
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
          <Gauge className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Para Programadores: Pense como Taxa de Mudança
            </h3>
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-3">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Em programação, você já calcula "taxa de mudança" o tempo todo:
                </p>
                <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 mb-3">
                  <pre className="text-green-400 text-sm">
{`# Exemplo: Velocidade (taxa de mudança de posição)
posicao_inicial = 0
posicao_final = 100
tempo = 10

# Taxa de mudança = velocidade
velocidade = (posicao_final - posicao_inicial) / tempo
# Isso é uma derivada! (mudança / tempo)`}
                  </pre>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Derivada</strong> = Quão rápido algo está mudando. É como calcular a <strong>velocidade</strong> de uma função!
                </p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>💡 Analogia Simples:</strong> Se você tem uma função que representa <strong>posição</strong>, a derivada é a <strong>velocidade</strong>. Se velocidade, a derivada é a <strong>aceleração</strong>!
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Visualização */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <Lightbulb className="w-6 h-6 mr-2 text-orange-600" />
          Visualização: Derivada como Inclinação
        </h3>
        <DerivativeDiagram showTangent={true} point={2} />
      </div>

      {/* Interpretação */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800"
        >
          <div className="text-3xl mb-3">📈</div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-2">
            Derivada Positiva
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Função está <strong>subindo</strong>. A inclinação aponta para cima!
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 border border-red-200 dark:border-red-800"
        >
          <div className="text-3xl mb-3">📉</div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-2">
            Derivada Negativa
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Função está <strong>descendo</strong>. A inclinação aponta para baixo!
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800"
        >
          <div className="text-3xl mb-3">⚖️</div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-2">
            Derivada Zero
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Função está em um <strong>pico ou vale</strong> (máximo ou mínimo)!
          </p>
        </motion.div>
      </div>

      {/* Analogia da Montanha */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800"
      >
        <div className="flex items-start space-x-4">
          <Mountain className="w-8 h-8 text-purple-600 dark:text-purple-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Por que Derivadas são ESSENCIAIS em IA?
            </h3>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 mb-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Analogia da Montanha 🏔️
              </h4>
              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <p>
                  Imagine que você está numa <strong>montanha</strong> (função de erro) e quer chegar ao <strong>vale</strong> (mínimo):
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <TrendingDown className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                    <span>A <strong>derivada</strong> te diz para onde a montanha está mais íngreme</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingDown className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                    <span>Você anda na <strong>direção oposta</strong> (descendo)</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingDown className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                    <span>Eventualmente chega ao <strong>fundo do vale</strong> (mínimo global)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Gradiente Descendente
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  O algoritmo que treina TODAS as redes neurais usa derivadas!
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Backpropagation
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  Calcula derivadas em cadeia para ajustar os pesos da rede
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Regras - Explicação Simples */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Regras Básicas (Você Precisa Saber!)
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          <strong>Boa notícia:</strong> Você não precisa calcular derivadas manualmente! Frameworks como TensorFlow/PyTorch fazem isso automaticamente. Mas entender ajuda muito:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">
              Regra da Potência
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              Se f(x) = xⁿ, então f'(x) = n·xⁿ⁻¹
            </p>
            <div className="bg-white dark:bg-gray-800 rounded p-3 mb-3">
              <div className="text-xs font-mono text-gray-700 dark:text-gray-300 space-y-1">
                <div>x² → 2x (baixa o 2, diminui 1 no expoente)</div>
                <div>x³ → 3x²</div>
                <div>x⁵ → 5x⁴</div>
              </div>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              <strong>Em código:</strong> Você não calcula isso! O framework faz.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">
              Regra da Constante
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              Se f(x) = c (número fixo), então f'(x) = 0
            </p>
            <div className="bg-white dark:bg-gray-800 rounded p-3 mb-3">
              <div className="text-xs font-mono text-gray-700 dark:text-gray-300">
                f(x) = 5 → f'(x) = 0<br />
                (não muda, então taxa de mudança = 0)
              </div>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              <strong>Faz sentido:</strong> Se algo não muda, a velocidade de mudança é zero!
            </p>
          </div>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>🎯 Importante:</strong> Você não precisa decorar essas regras! O importante é entender que <strong>derivadas medem taxa de mudança</strong> e que <strong>gradiente descendente usa derivadas</strong> para treinar redes neurais. As bibliotecas fazem os cálculos para você!
          </p>
        </div>
      </div>
    </div>
  )
}

