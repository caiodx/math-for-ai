import { motion } from 'framer-motion'
import { AlertTriangle, TrendingUp, TrendingDown, CheckCircle, XCircle } from 'lucide-react'

export default function OverfittingTheory() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-8 text-white"
      >
        <div className="flex items-center space-x-4 mb-4">
          <div className="text-6xl">⚠️</div>
          <div>
            <h2 className="text-3xl font-bold mb-2">Overfitting e Underfitting</h2>
            <p className="text-red-100 text-lg">
              Os problemas mais comuns em ML e como resolver!
            </p>
          </div>
        </div>
      </motion.div>

      {/* Underfitting */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-l-4 border-blue-500"
      >
        <div className="flex items-start space-x-4">
          <TrendingDown className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Underfitting (Subajuste)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              <strong>O que é:</strong> Modelo muito simples, não aprende nem os dados de treino.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-3">
              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Sintomas:
              </p>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-center space-x-2">
                  <XCircle className="w-4 h-4 text-red-500" />
                  <span>Erro alto no treino</span>
                </li>
                <li className="flex items-center space-x-2">
                  <XCircle className="w-4 h-4 text-red-500" />
                  <span>Erro alto no teste</span>
                </li>
                <li className="flex items-center space-x-2">
                  <XCircle className="w-4 h-4 text-red-500" />
                  <span>Modelo "não entendeu" os dados</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4">
              <pre className="text-green-400 text-sm">
{`# Exemplo: Modelo muito simples
from sklearn.linear_model import LinearRegression

# Dados complexos (não-lineares)
X = [[1], [2], [3], [4], [5]]
y = [1, 4, 9, 16, 25]  # y = x² (curva!)

modelo = LinearRegression()  # Muito simples!
modelo.fit(X, y)
# Vai ter erro alto - modelo linear não captura curva`}
              </pre>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-3">
              <strong>Solução:</strong> Usar modelo mais complexo (mais camadas, mais features, etc)
            </p>
          </div>
        </div>
      </motion.div>

      {/* Overfitting */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border-l-4 border-red-500"
      >
        <div className="flex items-start space-x-4">
          <TrendingUp className="w-8 h-8 text-red-600 dark:text-red-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Overfitting (Sobreajuste) - O MAIS COMUM!
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              <strong>O que é:</strong> Modelo muito complexo, "decorou" os dados de treino mas não generaliza.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-3">
              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Sintomas (CUIDADO!):
              </p>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Erro <strong>baixo</strong> no treino (parece perfeito!)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <XCircle className="w-4 h-4 text-red-500" />
                  <span>Erro <strong>alto</strong> no teste (não funciona com dados novos)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <XCircle className="w-4 h-4 text-red-500" />
                  <span>Modelo "decorou" ao invés de "aprender"</span>
                </li>
              </ul>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3 mb-3 border border-yellow-200 dark:border-yellow-800">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>⚠️ Atenção:</strong> Este é o problema mais comum! Modelo parece ótimo no treino mas falha no mundo real.
              </p>
            </div>
            <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4">
              <pre className="text-green-400 text-sm">
{`# Exemplo visual do problema:
# Treino: accuracy = 99%  ← Parece ótimo!
# Teste: accuracy = 60%    ← Mas não funciona com dados novos!

# Diferença grande = OVERFITTING!`}
              </pre>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-3">
              <strong>Solução:</strong> Regularização, mais dados, modelo mais simples
            </p>
          </div>
        </div>
      </motion.div>

      {/* Como Identificar */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Como Identificar? (Código Prático)
        </h3>
        <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 mb-4">
          <pre className="text-green-400 text-sm">
{`from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Dividir dados
X_treino, X_teste, y_treino, y_teste = train_test_split(X, y, test_size=0.2)

# Treinar
modelo.fit(X_treino, y_treino)

# Avaliar
acc_treino = accuracy_score(y_treino, modelo.predict(X_treino))
acc_teste = accuracy_score(y_teste, modelo.predict(X_teste))

print(f"Treino: {acc_treino:.2%}")
print(f"Teste: {acc_teste:.2%}")

# Se acc_treino >> acc_teste → OVERFITTING!
# Se ambos baixos → UNDERFITTING!`}
          </pre>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>💡 Dica de Ouro:</strong> <strong>Sempre compare treino vs teste!</strong> Se a diferença for grande, você tem um problema.
          </p>
        </div>
      </div>

      {/* Soluções */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800"
        >
          <h4 className="font-bold text-gray-900 dark:text-white mb-3">
            Para Overfitting:
          </h4>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                1. Regularização (L1, L2)
              </p>
              <div className="bg-gray-900 dark:bg-gray-950 rounded p-2">
                <pre className="text-green-400 text-xs">
{`from sklearn.linear_model import Ridge
modelo = Ridge(alpha=0.1)`}
                </pre>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                2. Dropout (redes neurais)
              </p>
              <div className="bg-gray-900 dark:bg-gray-950 rounded p-2">
                <pre className="text-green-400 text-xs">
{`keras.layers.Dropout(0.5)`}
                </pre>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                3. Early Stopping
              </p>
              <div className="bg-gray-900 dark:bg-gray-950 rounded p-2">
                <pre className="text-green-400 text-xs">
{`keras.callbacks.EarlyStopping(patience=5)`}
                </pre>
              </div>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              4. Mais dados (sempre ajuda!)
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800"
        >
          <h4 className="font-bold text-gray-900 dark:text-white mb-3">
            Para Underfitting:
          </h4>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span><strong>Modelo mais complexo</strong> (mais camadas, mais neurônios)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span><strong>Mais features</strong> (mais informações para o modelo)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span><strong>Treinar por mais tempo</strong> (mais épocas)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span><strong>Reduzir regularização</strong> (deixar modelo mais livre)</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* O Equilíbrio Perfeito */}
      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
        <div className="flex items-start space-x-4">
          <CheckCircle className="w-8 h-8 text-purple-600 dark:text-purple-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              O Equilíbrio Perfeito
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              <strong>Ideal:</strong> Erro de treino e teste similares e baixos!
            </p>
            <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4">
              <pre className="text-green-400 text-sm">
{`# Bom modelo:
# Treino: accuracy = 85%
# Teste: accuracy = 83%  ← Próximos! Generaliza bem!

# Modelo que generaliza bem = Sucesso! 🎯`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

