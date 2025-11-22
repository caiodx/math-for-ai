import { motion } from 'framer-motion'
import LimitsDiagram from '../visualizations/LimitsDiagram'
import { Target, ArrowRight, Lightbulb, Infinity } from 'lucide-react'

export default function LimitsTheory() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-8 text-white"
      >
        <div className="flex items-center space-x-4">
          <div className="text-6xl">🎯</div>
          <div>
            <h2 className="text-3xl font-bold mb-2">O que é um Limite?</h2>
            <p className="text-indigo-100 text-lg">
              É o valor que uma função "tende" quando você se aproxima infinitamente perto de um ponto!
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
          <Target className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Para Programadores: Pense como "Aproximação Infinita"
            </h3>
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-3">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Em programação, você já trabalha com conceitos similares:
                </p>
                <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 mb-3">
                  <pre className="text-green-400 text-sm">
{`# Exemplo: Loop que se aproxima de um valor
x = 1.0
for i in range(10):
    x = x + (2 - x) / 2  # Aproxima de 2
    print(f"x = {x:.6f}")
# x se aproxima de 2, mas nunca chega exatamente!

# Limite: lim(x→2) x = 2
# Significa: quando x se aproxima de 2, x tende a 2`}
                  </pre>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3 border border-yellow-200 dark:border-yellow-800">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>💡 Entenda assim:</strong> O limite é o valor que você "quase alcança" quando se aproxima infinitamente perto, mas sem nunca chegar exatamente!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Visualização */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <Infinity className="w-6 h-6 mr-2 text-indigo-600" />
          Visualização: Aproximando-se do Limite
        </h3>
        <LimitsDiagram functionType="quadratic" point={2} showApproach={true} />
        <div className="mt-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>O que você vê:</strong> Os pontos verdes mostram valores de x se aproximando de 2. 
            O ponto vermelho mostra o limite. Quanto mais perto você chega de x = 2, mais perto o valor 
            da função chega do limite!
          </p>
        </div>
      </div>

      {/* Definição Formal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border-l-4 border-purple-500"
      >
        <div className="flex items-start space-x-4">
          <ArrowRight className="w-8 h-8 text-purple-600 dark:text-purple-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Definição (Simplificada para Programadores)
            </h3>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-3">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                O limite de f(x) quando x se aproxima de a é L:
              </p>
              <div className="text-center mb-3">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  lim(x→a) f(x) = L
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong>Tradução:</strong> Quando x fica <strong>muito próximo</strong> de a, 
                f(x) fica <strong>muito próximo</strong> de L.
              </p>
            </div>
            <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4">
              <pre className="text-green-400 text-sm">
{`# Em código (aproximação numérica)
import numpy as np

def calcular_limite(func, ponto, precisao=1e-10):
    # Valores se aproximando do ponto
    x_values = np.array([
        ponto - 0.1,
        ponto - 0.01,
        ponto - 0.001,
        ponto - 0.0001,
        ponto + 0.0001,
        ponto + 0.001,
        ponto + 0.01,
        ponto + 0.1
    ])
    
    y_values = func(x_values)
    # O limite é o valor que y se aproxima
    limite = np.mean(y_values)
    return limite

# Exemplo: lim(x→2) x²
def f(x):
    return x**2

limite = calcular_limite(f, 2)
print(f"lim(x→2) x² = {limite}")  # ≈ 4`}
              </pre>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Exemplos Práticos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <Lightbulb className="w-6 h-6 mr-2 text-yellow-600" />
          Exemplos Práticos (Passo a Passo)
        </h3>
        
        <div className="space-y-6">
          {/* Exemplo 1 */}
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Exemplo 1: Limite Simples
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Calcule: <strong>lim(x→2) x</strong>
            </p>
            <div className="bg-white dark:bg-gray-800 rounded p-3 mb-2">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong>Solução:</strong> Quando x se aproxima de 2, x é 2. Simples!
              </p>
              <div className="text-center mt-2">
                <div className="text-lg font-bold text-green-600 dark:text-green-400">
                  lim(x→2) x = 2
                </div>
              </div>
            </div>
          </div>

          {/* Exemplo 2 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Exemplo 2: Limite de Função
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Calcule: <strong>lim(x→3) (x + 1)</strong>
            </p>
            <div className="bg-white dark:bg-gray-800 rounded p-3 mb-2">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                <strong>Solução:</strong> Quando x se aproxima de 3, (x + 1) se aproxima de 4.
              </p>
              <div className="text-center mt-2">
                <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                  lim(x→3) (x + 1) = 4
                </div>
              </div>
            </div>
          </div>

          {/* Exemplo 3 */}
          <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Exemplo 3: Limite "Problemático" (0/0)
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Calcule: <strong>lim(x→0) (x² / x)</strong>
            </p>
            <div className="bg-white dark:bg-gray-800 rounded p-3 mb-2">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                <strong>Problema:</strong> Quando x = 0, temos 0/0 (indeterminado!).
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                <strong>Solução:</strong> Simplificamos primeiro (quando x ≠ 0):
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 rounded p-2 mb-2">
                <div className="text-sm font-mono text-gray-700 dark:text-gray-300">
                  x² / x = x (quando x ≠ 0)
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Então: <strong>lim(x→0) x = 0</strong>
              </p>
              <div className="text-center mt-2">
                <div className="text-lg font-bold text-orange-600 dark:text-orange-400">
                  lim(x→0) (x² / x) = 0
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Conexão com Derivadas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800"
      >
        <div className="flex items-start space-x-4 mb-4">
          <Lightbulb className="w-8 h-8 text-red-600 dark:text-red-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              🔗 Limites e Derivadas: A Conexão Essencial!
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Esta é a parte mais importante!</strong> A derivada é definida usando limites:
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4">
              <div className="text-center mb-3">
                <div className="text-xl font-bold text-red-600 dark:text-red-400">
                  f'(x) = lim(h→0) [f(x+h) - f(x)] / h
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                <strong>O que isso significa?</strong>
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 list-disc list-inside">
                <li>A derivada é o <strong>limite</strong> da taxa de variação</li>
                <li>Quando h fica <strong>infinitamente pequeno</strong> (h → 0)</li>
                <li>Calculamos a <strong>inclinação</strong> da reta tangente</li>
              </ul>
            </div>
            <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4">
              <pre className="text-green-400 text-sm">
{`# Exemplo: Derivada de x² usando limite
def f(x):
    return x**2

def derivada_por_limite(x, h=1e-10):
    # f'(x) = lim(h→0) [f(x+h) - f(x)] / h
    return (f(x + h) - f(x)) / h

# Para x = 2
resultado = derivada_por_limite(2)
print(f"f'(2) = {resultado}")  # ≈ 4 (que é 2x quando x=2)

# Isso é exatamente como as bibliotecas calculam derivadas!`}
              </pre>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3 mt-4 border border-yellow-200 dark:border-yellow-800">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>💡 Por isso você precisa entender limites primeiro!</strong> Sem limites, 
                você não consegue entender de verdade como as derivadas funcionam, e derivadas são 
                essenciais para gradiente descendente e backpropagation em redes neurais!
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Por que Importa para IA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800"
      >
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          🧠 Por que Limites Importam para IA?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <div className="text-2xl mb-2">📈</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Derivadas
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Derivadas (usadas em gradiente descendente) são definidas com limites
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <div className="text-2xl mb-2">🎯</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Otimização
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Entender comportamento quando valores se aproximam de pontos críticos
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <div className="text-2xl mb-2">🔄</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Backpropagation
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Calcula derivadas, que dependem de limites para funcionar
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <div className="text-2xl mb-2">⚡</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Gradiente Descendente
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Usa derivadas (que usam limites) para encontrar mínimos
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

