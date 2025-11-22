import { motion } from 'framer-motion'
import { Dice6, Target, TrendingUp, Zap } from 'lucide-react'

export default function ProbabilityTheory() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-8 text-white"
      >
        <div className="flex items-center space-x-4 mb-4">
          <div className="text-6xl">🎲</div>
          <div>
            <h2 className="text-3xl font-bold mb-2">Probabilidade Básica</h2>
            <p className="text-purple-100 text-lg">
              Medindo incerteza - a base de Machine Learning!
            </p>
          </div>
        </div>
      </motion.div>

      {/* Para Programadores */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-l-4 border-blue-500"
      >
        <div className="flex items-start space-x-4">
          <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Para Programadores: Você Já Usa Probabilidade!
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Quando você faz <code>random.choice()</code>, está usando probabilidade! Em ML, <strong>tudo é probabilístico</strong>:
            </p>
            <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 mb-4">
              <pre className="text-green-400 text-sm">
{`# Você já faz isso:
import random
resultado = random.choice([0, 1])  # 50% de chance

# Em ML, modelos retornam probabilidades:
# "Esta imagem tem 85% de chance de ser um gato"
probabilidades = modelo.predict_proba(imagem)
# [0.15, 0.85]  # 15% cachorro, 85% gato`}
              </pre>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>💡 Importante:</strong> Modelos de ML <strong>não dão certezas</strong>, dão <strong>probabilidades</strong>! Isso é fundamental entender.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Conceito Simples */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Conceito Simples
        </h3>
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-4">
          <div className="text-center mb-4">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              Probabilidade = Casos Favoráveis / Total de Casos
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              <strong>Exemplo:</strong> Qual a probabilidade de tirar "cara" ao jogar uma moeda?
            </p>
            <div className="bg-gray-900 dark:bg-gray-950 rounded p-3 mb-3">
              <pre className="text-green-400 text-sm">
{`Casos favoráveis: 1 (cara)
Total de casos: 2 (cara ou coroa)
Probabilidade = 1/2 = 0.5 = 50%`}
              </pre>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <strong>Em código:</strong> Probabilidade sempre entre 0 (impossível) e 1 (certo), ou 0% a 100%
            </p>
          </div>
        </div>
      </div>

      {/* Por que em IA */}
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
              Por que Probabilidade é ESSENCIAL em IA?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <div className="text-2xl mb-2">🎯</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Classificação
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Modelos retornam probabilidades:
                </p>
                <div className="bg-gray-900 dark:bg-gray-950 rounded p-2">
                  <pre className="text-green-400 text-xs">
{`# "80% gato, 20% cachorro"
prob = [0.2, 0.8]`}
                  </pre>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <div className="text-2xl mb-2">📊</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Naive Bayes
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Algoritmo baseado totalmente em probabilidade:
                </p>
                <div className="bg-gray-900 dark:bg-gray-950 rounded p-2">
                  <pre className="text-green-400 text-xs">
{`from sklearn.naive_bayes import MultinomialNB
modelo = MultinomialNB()
# Usa probabilidade condicional!`}
                  </pre>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <div className="text-2xl mb-2">🧠</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Softmax
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Última camada de redes neurais retorna probabilidades:
                </p>
                <div className="bg-gray-900 dark:bg-gray-950 rounded p-2">
                  <pre className="text-green-400 text-xs">
{`# Softmax converte saída em probabilidades
# Soma sempre = 1.0`}
                  </pre>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <div className="text-2xl mb-2">❓</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Incerteza
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  ML lida com incerteza, não certeza absoluta. Probabilidade quantifica isso!
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Distribuições */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Distribuições Comuns (Você Vai Ver Muito!)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">
              Uniforme
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              Todos os valores têm a mesma chance:
            </p>
            <div className="bg-gray-900 dark:bg-gray-950 rounded p-3">
              <pre className="text-green-400 text-xs">
{`# Dado de 6 lados
import numpy as np
np.random.uniform(1, 7)
# Cada face: 1/6 de chance`}
              </pre>
            </div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">
              Normal (Gaussiana)
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              Curva em sino - muito comum em ML:
            </p>
            <div className="bg-gray-900 dark:bg-gray-950 rounded p-3">
              <pre className="text-green-400 text-xs">
{`# Altura, erros, etc
dados = np.random.normal(170, 10, 1000)
# Média=170, Desvio=10
# Maioria entre 160-180`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Resumo */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800">
        <div className="flex items-start space-x-4">
          <Target className="w-8 h-8 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Resumo para Programadores
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span><strong>Probabilidade</strong> = Medir incerteza (0 a 1, ou 0% a 100%)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Em ML, modelos retornam <strong>probabilidades</strong>, não certezas</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Você já usa quando faz <code>random.choice()</code></span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Naive Bayes, Softmax, e muitos algoritmos usam probabilidade</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span><strong>Não precisa calcular manualmente!</strong> Bibliotecas fazem isso</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

