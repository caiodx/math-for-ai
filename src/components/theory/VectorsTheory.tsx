import { motion } from 'framer-motion'
import VectorDiagram from '../visualizations/VectorDiagram'
import VectorOperationsDiagram from '../visualizations/VectorOperationsDiagram'
import { ArrowRight, Zap, Target, TrendingUp } from 'lucide-react'

export default function VectorsTheory() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-8 text-white"
      >
        <div className="flex items-center space-x-4 mb-4">
          <div className="text-6xl">📐</div>
          <div>
            <h2 className="text-3xl font-bold mb-2">O que é um Vetor?</h2>
            <p className="text-blue-100 text-lg">
              Imagine uma seta que te diz QUANTO andar e PARA ONDE ir!
            </p>
          </div>
        </div>
      </motion.div>

      {/* Analogia para Programadores */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded-lg p-6"
      >
        <div className="flex items-start space-x-4">
          <Zap className="w-8 h-8 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Para Programadores: Pense como um Array!
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Se você já trabalha com arrays, vetores são <strong>exatamente isso</strong>! Só que com um nome matemático:
            </p>
            <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 mb-3">
              <pre className="text-green-400 text-sm">
{`// Em JavaScript/Python
const vector = [3, 2, 5];  // Isso é um vetor!
const vector2D = [3, 2];   // Vetor 2D (x, y)

// Em NumPy (Python para IA)
import numpy as np
v = np.array([3, 2, 5])    // Vetor como array NumPy`}
              </pre>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              <strong>Diferença:</strong> Em matemática, chamamos de "vetor" e pensamos nele como uma <strong>seta</strong> com direção e tamanho. Mas na prática, é só um array de números! 🎯
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>💡 Dica:</strong> Quando você vê "vetor" em IA, pense "array de números". É a mesma coisa!
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Visualização */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <Target className="w-6 h-6 mr-2 text-blue-600" />
          Visualização: Vetores no Plano
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VectorDiagram
            vector={{ x: 3, y: 2 }}
            label="v"
            color="#3b82f6"
            showComponents={true}
            showMagnitude={true}
          />
          <VectorDiagram
            vector={{ x: -2, y: 4 }}
            label="u"
            color="#10b981"
            showComponents={true}
            showMagnitude={true}
          />
        </div>
      </div>

      {/* Por que em IA - Foco em Programadores */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800"
      >
        <div className="flex items-start space-x-4">
          <TrendingUp className="w-8 h-8 text-purple-600 dark:text-purple-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Por que Você Vai Trabalhar com Vetores TODO DIA em IA?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Como programador, você já trabalha com arrays. Em IA, <strong>tudo vira vetor</strong>:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <div className="text-2xl mb-2">🖼️</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Imagens → Array
                </h4>
                <div className="bg-gray-900 dark:bg-gray-950 rounded p-2 mb-2">
                  <pre className="text-green-400 text-xs">
{`# Foto 28x28 pixels
image = [[255, 128, ...], ...]
# Vira vetor de 784 números
vector = image.flatten()
# [255, 128, 64, ..., 192]`}
                  </pre>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  Você vai fazer isso em <strong>todos</strong> os projetos de visão computacional!
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <div className="text-2xl mb-2">📝</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Textos → Embeddings
                </h4>
                <div className="bg-gray-900 dark:bg-gray-950 rounded p-2 mb-2">
                  <pre className="text-green-400 text-xs">
{`# Palavra "gato"
word = "gato"
# Vira vetor de 300 números
embedding = model.encode(word)
# [0.2, -0.1, 0.8, ...]`}
                  </pre>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  NLP usa embeddings (vetores) para representar palavras!
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <div className="text-2xl mb-2">👤</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Dados Tabulares
                </h4>
                <div className="bg-gray-900 dark:bg-gray-950 rounded p-2 mb-2">
                  <pre className="text-green-400 text-xs">
{`# Cada linha é um vetor
user = [25, 1.75, 70, ...]
# Idade, altura, peso, etc
# Isso é um vetor!`}
                  </pre>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  Pandas DataFrame? Cada linha é um vetor de features!
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <div className="text-2xl mb-2">🧠</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Redes Neurais
                </h4>
                <div className="bg-gray-900 dark:bg-gray-950 rounded p-2 mb-2">
                  <pre className="text-green-400 text-xs">
{`# Cada camada processa vetores
input = [x1, x2, x3]
output = layer(input)
# Vetor entra, vetor sai!`}
                  </pre>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  TensorFlow/PyTorch trabalham com tensores (vetores multidimensionais)
                </p>
              </div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>🎯 Resumo:</strong> Em IA, <strong>tudo é vetor</strong>. Imagens, textos, dados de usuários, tudo vira array de números. Se você sabe trabalhar com arrays, já sabe 80% do que precisa sobre vetores!
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Operações - Explicação para Programadores */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Operações com Vetores (Como Arrays!)
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Se você sabe somar arrays elemento por elemento, já sabe somar vetores! É a mesma coisa:
        </p>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
            💻 Em Código (Python/NumPy)
          </h4>
          <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4">
            <pre className="text-green-400 text-sm">
{`import numpy as np

# Soma de vetores (elemento por elemento)
v = np.array([3, 2])
u = np.array([2, 4])
soma = v + u  # [5, 6] - simples assim!

# Produto escalar (dot product)
dot = np.dot(v, u)  # 3*2 + 2*4 = 14
# ou
dot = v @ u  # sintaxe moderna`}
            </pre>
          </div>
        </div>

        <div className="space-y-6">
          <VectorOperationsDiagram
            v1={{ x: 3, y: 2 }}
            v2={{ x: 2, y: 4 }}
            operation="sum"
          />
          <VectorOperationsDiagram
            v1={{ x: 3, y: 2 }}
            v2={{ x: 2, y: 4 }}
            operation="dot"
          />
        </div>

        <div className="mt-6 bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>🎯 Dica Prática:</strong> Em NumPy, você não precisa calcular manualmente. Use <code>np.dot()</code>, <code>np.linalg.norm()</code>, etc. A biblioteca faz o trabalho pesado para você!
          </p>
        </div>
      </div>

      {/* Características - Explicação Simples */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          As 3 Coisas que Você Precisa Saber sobre Vetores
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800"
          >
            <div className="text-3xl mb-3">📏</div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">
              1. Dimensão = Tamanho do Array
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              Quantos números tem no vetor:
            </p>
            <div className="bg-gray-900 dark:bg-gray-950 rounded p-2">
              <pre className="text-green-400 text-xs">
{`[3, 2]      → 2D (2 números)
[1, 2, 3]    → 3D (3 números)
[1,2,...,100] → 100D (100 números)`}
              </pre>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-300 mt-2">
              <strong>Em código:</strong> É o <code>length</code> do array!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800"
          >
            <div className="text-3xl mb-3">📐</div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">
              2. Magnitude = Comprimento
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              Quão "longo" é o vetor (Pitágoras):
            </p>
            <div className="bg-gray-900 dark:bg-gray-950 rounded p-2">
              <pre className="text-green-400 text-xs">
{`v = [3, 4]
magnitude = √(3² + 4²)
          = √(9 + 16)
          = √25 = 5`}
              </pre>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-300 mt-2">
              <strong>Em NumPy:</strong> <code>np.linalg.norm(v)</code>
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800"
          >
            <div className="text-3xl mb-3">🧭</div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">
              3. Direção = Para Onde Aponta
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              O ângulo do vetor (como uma bússola):
            </p>
            <div className="bg-gray-900 dark:bg-gray-950 rounded p-2">
              <pre className="text-green-400 text-xs">
{`[3, 0]  → Direita (0°)
[0, 3]  → Cima (90°)
[-3, 0] → Esquerda (180°)
[0, -3] → Baixo (270°)`}
              </pre>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-300 mt-2">
              <strong>Em IA:</strong> Usado para calcular similaridade
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

