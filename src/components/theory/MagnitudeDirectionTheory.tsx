import { motion } from 'framer-motion'
import VectorDiagram from '../visualizations/VectorDiagram'
import { Ruler, Compass, Target, Zap } from 'lucide-react'

export default function MagnitudeDirectionTheory() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl p-8 text-white"
      >
        <div className="flex items-center space-x-4">
          <div className="text-6xl">📏</div>
          <div>
            <h2 className="text-3xl font-bold mb-2">Magnitude e Direção</h2>
            <p className="text-teal-100 text-lg">
              Entendendo o tamanho e orientação dos vetores!
            </p>
          </div>
        </div>
      </motion.div>

      {/* Magnitude - Versão Programador */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-l-4 border-blue-500"
      >
        <div className="flex items-start space-x-4">
          <Ruler className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Magnitude = Comprimento do Vetor
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              É o <strong>tamanho</strong> do vetor. Em código, você usa uma função pronta!
            </p>
            <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 mb-4">
              <pre className="text-green-400 text-sm">
{`# Em NumPy (super fácil!)
import numpy as np

v = np.array([3, 4])
magnitude = np.linalg.norm(v)
# 5.0 - pronto! Não precisa calcular manualmente

# Para 3D ou qualquer dimensão
v3d = np.array([1, 2, 3])
magnitude = np.linalg.norm(v3d)
# Funciona para qualquer dimensão!`}
              </pre>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Se Quiser Entender a Fórmula:
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                É o <strong>Teorema de Pitágoras</strong> que você já conhece:
              </p>
              <div className="text-center mb-3">
                <div className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  |v| = √(x² + y²)
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 rounded p-3">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Exemplo:</strong> Vetor [3, 4]
                </p>
                <div className="text-xs font-mono text-gray-600 dark:text-gray-400">
                  |v| = √(3² + 4²) = √(9 + 16) = √25 = <strong className="text-blue-600">5</strong>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                <p className="text-xs font-semibold text-green-600 dark:text-green-400 mb-1">
                  Magnitude Pequena
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  Vetor curto, valores pequenos
                </p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-3">
                <p className="text-xs font-semibold text-red-600 dark:text-red-400 mb-1">
                  Magnitude Grande
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  Vetor longo, valores grandes
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Visualização */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <Target className="w-6 h-6 mr-2 text-teal-600" />
          Visualização: Magnitude de Vetores
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VectorDiagram
            vector={{ x: 3, y: 4 }}
            label="v"
            color="#3b82f6"
            showComponents={true}
            showMagnitude={true}
          />
          <VectorDiagram
            vector={{ x: 5, y: 12 }}
            label="u"
            color="#10b981"
            showComponents={true}
            showMagnitude={true}
          />
        </div>
      </div>

      {/* Direção */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border-l-4 border-purple-500"
      >
        <div className="flex items-start space-x-4">
          <Compass className="w-8 h-8 text-purple-600 dark:text-purple-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Direção = Ângulo do Vetor
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A direção é o <strong>ângulo</strong> que o vetor forma com o eixo X positivo - como uma bússola! Em código, você calcula com <code>arctan</code>.
            </p>
            
            <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 mb-4">
              <pre className="text-green-400 text-sm">
{`# Em Python/NumPy (super fácil!)
import numpy as np

v = np.array([3, 4])
angulo = np.arctan2(v[1], v[0])  # arctan2(y, x)
angulo_graus = np.degrees(angulo)
# 53.13° - pronto!

# Use arctan2 (não arctan!) - funciona em todos os quadrantes`}
              </pre>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Fórmula: θ = arctan(y/x)
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                O ângulo é calculado usando a <strong>tangente inversa</strong> (arctan):
              </p>
              <div className="text-center mb-3">
                <div className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  θ = arctan(y/x)
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  ou melhor: θ = arctan2(y, x) - funciona em todos os quadrantes!
                </p>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-700 rounded p-3 mb-3">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Exemplo:</strong> Vetor [3, 4]
                </p>
                <div className="text-xs font-mono text-gray-600 dark:text-gray-400 space-y-1">
                  <div>θ = arctan(4/3)</div>
                  <div>θ = arctan(1.333...)</div>
                  <div>θ ≈ 53.13°</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-green-50 dark:bg-green-900/20 rounded p-2">
                  <p className="font-semibold text-green-600 dark:text-green-400 mb-1">
                    θ = 0°
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Direita (eixo X+)
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded p-2">
                  <p className="font-semibold text-blue-600 dark:text-blue-400 mb-1">
                    θ = 90°
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Cima (eixo Y+)
                  </p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 rounded p-2">
                  <p className="font-semibold text-red-600 dark:text-red-400 mb-1">
                    θ = 180°
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Esquerda
                  </p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded p-2">
                  <p className="font-semibold text-orange-600 dark:text-orange-400 mb-1">
                    θ = 270°
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Baixo
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3 border border-yellow-200 dark:border-yellow-800">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>💡 Dica Importante:</strong> Use <code>np.arctan2(y, x)</code> ao invés de <code>arctan(y/x)</code>! O <code>arctan2</code> funciona corretamente em todos os 4 quadrantes e evita problemas quando x = 0.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mt-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Por que Direção é Importante em IA?
              </h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Similaridade:</strong> Vetores com direções similares são mais parecidos</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Cosine Similarity:</strong> Usa o ângulo entre vetores para medir similaridade</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Embeddings:</strong> Palavras similares têm vetores com direções próximas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Vetor Unitário - Versão Programador */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800"
      >
        <div className="flex items-start space-x-4">
          <Zap className="w-8 h-8 text-green-600 dark:text-green-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Normalização (Vetor Unitário) - MUITO Importante em IA!
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Normalizar = fazer o vetor ter <strong>magnitude 1</strong>. Você vai fazer isso <strong>o tempo todo</strong> em ML!
            </p>
            <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 mb-4">
              <pre className="text-green-400 text-sm">
{`# Em NumPy (uma linha!)
import numpy as np

v = np.array([3, 4])
v_normalizado = v / np.linalg.norm(v)
# [0.6, 0.8] - magnitude = 1

# Ou use sklearn (ainda mais fácil!)
from sklearn.preprocessing import normalize
v_normalizado = normalize([v])[0]`}
              </pre>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Por que Normalizar?
              </h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span><strong>Feature Scaling:</strong> Coloca todos os features na mesma escala (0 a 1)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span><strong>Algoritmos de ML:</strong> KNN, SVM, redes neurais funcionam melhor com dados normalizados</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span><strong>Similaridade:</strong> Cosine similarity usa vetores normalizados</span>
                </li>
              </ul>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3 mt-4 border border-yellow-200 dark:border-yellow-800">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>🎯 Dica Prática:</strong> Em <strong>todo projeto de ML</strong>, você normaliza os dados antes de treinar. É uma das primeiras coisas que você faz no preprocessing!
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Aplicação em IA */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Aplicações em IA
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-4 border border-teal-200 dark:border-teal-800">
            <div className="text-2xl mb-2">🔧</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Normalização de Features
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              Importante para ML - coloca todos os features na mesma escala
            </p>
          </div>
          <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-4 border border-cyan-200 dark:border-cyan-800">
            <div className="text-2xl mb-2">📐</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Similaridade
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              Cálculo de similaridade entre vetores (cosine similarity)
            </p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <div className="text-2xl mb-2">🌐</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Espaços de Alta Dimensão
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              Distâncias em embeddings (Word2Vec, BERT, etc)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

