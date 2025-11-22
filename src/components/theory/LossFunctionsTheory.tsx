import { motion } from 'framer-motion'
import { Target, TrendingDown, Zap, Code } from 'lucide-react'

export default function LossFunctionsTheory() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl p-8 text-white"
      >
        <div className="flex items-center space-x-4 mb-4">
          <div className="text-6xl">📉</div>
          <div>
            <h2 className="text-3xl font-bold mb-2">Funções de Custo/Perda</h2>
            <p className="text-indigo-100 text-lg">
              Como modelos aprendem: minimizando o erro!
            </p>
          </div>
        </div>
      </motion.div>

      {/* Analogia */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-l-4 border-blue-500"
      >
        <div className="flex items-start space-x-4">
          <Target className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Analogia: Jogando Dardos
            </h3>
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Pense em jogar dardos:
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>Função de custo</strong> = quão longe você está do alvo</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>Treinar o modelo</strong> = ajustar sua mira para acertar mais perto</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>Custo baixo</strong> = acertou perto do alvo! 🎯</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-red-600">✗</span>
                    <span><strong>Custo alto</strong> = errou feio! ❌</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Por que é essencial */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Por que é Essencial?
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          <strong>O modelo aprende minimizando o custo!</strong> É assim que funciona:
        </p>
        <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 mb-4">
          <pre className="text-green-400 text-sm">
{`# O processo de aprendizado:
1. Modelo faz uma previsão
2. Calcula o erro (função de custo)
3. Ajusta os pesos para reduzir o erro
4. Repete até o erro ficar pequeno

# Em código:
modelo.fit(X, y)  # Minimiza o custo automaticamente!`}
          </pre>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>💡 Dica:</strong> Você não precisa implementar isso! A biblioteca faz automaticamente quando você chama <code>fit()</code>.
          </p>
        </div>
      </div>

      {/* MSE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800"
      >
        <div className="flex items-start space-x-4">
          <TrendingDown className="w-8 h-8 text-green-600 dark:text-green-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              MSE - Mean Squared Error (Regressão)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              <strong>Quando usar:</strong> Prever números contínuos (preço, temperatura, etc)
            </p>
            <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 mb-3">
              <pre className="text-green-400 text-sm">
{`from sklearn.metrics import mean_squared_error

# Exemplo: Prever preço de casas
y_real = [100, 200, 300]      # Preços reais
y_predito = [110, 190, 310]   # Preços que o modelo previu

mse = mean_squared_error(y_real, y_predito)
# MSE = média dos erros ao quadrado
# Quanto menor, melhor!`}
              </pre>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong>Por que ao quadrado?</strong> Para penalizar erros grandes mais! Um erro de 10 é pior que dois erros de 5.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Cross-Entropy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800"
      >
        <div className="flex items-start space-x-4">
          <Code className="w-8 h-8 text-purple-600 dark:text-purple-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Cross-Entropy (Classificação)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              <strong>Quando usar:</strong> Classificar em categorias (gato/cachorro, spam/não-spam)
            </p>
            <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 mb-3">
              <pre className="text-green-400 text-sm">
{`from sklearn.metrics import log_loss

# Exemplo: Classificar imagens
y_real = [1, 0, 1]  # 1=gato, 0=cachorro
y_predito = [0.9, 0.2, 0.8]  # Probabilidades

cross_entropy = log_loss(y_real, y_predito)
# Quanto menor, melhor!`}
              </pre>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong>Por que usar?</strong> Penaliza muito quando o modelo está "confiante mas errado". Se disse 90% gato mas era cachorro, o erro é grande!
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Em Redes Neurais */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Em Redes Neurais (TensorFlow/Keras)
        </h3>
        <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 mb-4">
          <pre className="text-green-400 text-sm">
{`from tensorflow import keras

modelo = keras.Sequential([
    keras.layers.Dense(10, activation='relu'),
    keras.layers.Dense(1)  # Saída
])

# Escolha a função de custo baseado no problema:
# Regressão → MSE
modelo.compile(optimizer='adam', loss='mse')

# Classificação → Cross-entropy
modelo.compile(optimizer='adam', loss='binary_crossentropy')
# ou
modelo.compile(optimizer='adam', loss='categorical_crossentropy')`}
          </pre>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
            Tabela de Referência Rápida
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <th className="text-left p-2 text-gray-900 dark:text-white">Problema</th>
                  <th className="text-left p-2 text-gray-900 dark:text-white">Função de Custo</th>
                  <th className="text-left p-2 text-gray-900 dark:text-white">Código</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-2 text-gray-700 dark:text-gray-300">Prever número (regressão)</td>
                  <td className="p-2 text-gray-700 dark:text-gray-300">MSE</td>
                  <td className="p-2 font-mono text-primary-600 dark:text-primary-400">loss='mse'</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-2 text-gray-700 dark:text-gray-300">Classificar 2 classes</td>
                  <td className="p-2 text-gray-700 dark:text-gray-300">Binary Cross-Entropy</td>
                  <td className="p-2 font-mono text-primary-600 dark:text-primary-400">loss='binary_crossentropy'</td>
                </tr>
                <tr>
                  <td className="p-2 text-gray-700 dark:text-gray-300">Classificar várias classes</td>
                  <td className="p-2 text-gray-700 dark:text-gray-300">Categorical Cross-Entropy</td>
                  <td className="p-2 font-mono text-primary-600 dark:text-primary-400">loss='categorical_crossentropy'</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Visualização do aprendizado */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800">
        <div className="flex items-start space-x-4">
          <Zap className="w-8 h-8 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Visualização do Aprendizado
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Durante o treinamento, você vê o custo diminuindo:
            </p>
            <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4">
              <pre className="text-green-400 text-sm">
{`# Ao treinar, você vê:
# Época 1: loss = 0.5
# Época 2: loss = 0.3
# Época 3: loss = 0.2
# ...
# Época 100: loss = 0.01  ← Modelo aprendeu!

# Custo diminuindo = Modelo aprendendo! 📉`}
              </pre>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-3">
              <strong>💡 Dica:</strong> Se o custo não diminuir, algo está errado! Verifique learning rate, dados, etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

