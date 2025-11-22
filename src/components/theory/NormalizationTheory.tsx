import { motion } from 'framer-motion'
import { Scale, AlertTriangle, CheckCircle, Zap } from 'lucide-react'

export default function NormalizationTheory() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl p-8 text-white"
      >
        <div className="flex items-center space-x-4 mb-4">
          <div className="text-6xl">⚖️</div>
          <div>
            <h2 className="text-3xl font-bold mb-2">Normalização e Standardização</h2>
            <p className="text-pink-100 text-lg">
              Por que e como normalizar dados antes de treinar
            </p>
          </div>
        </div>
      </motion.div>

      {/* Por que normalizar */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border-l-4 border-red-500"
      >
        <div className="flex items-start space-x-4">
          <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Por que Normalizar?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Muitos algoritmos de ML funcionam melhor com dados normalizados!</strong>
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-3">
              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Problema: Features com escalas diferentes confundem o modelo
              </p>
              <div className="bg-gray-900 dark:bg-gray-950 rounded p-3">
                <pre className="text-green-400 text-xs">
{`# Dados de casas
area = [50, 100, 150]      # metros² (valores pequenos)
preco = [50000, 100000, 150000]  # reais (valores grandes)

# O modelo vai dar mais peso para "preco" 
# só porque os números são maiores!
# Mas área também é importante!`}
                </pre>
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>✅ Solução:</strong> Colocar tudo na mesma escala!
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Normalização vs Standardização */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800"
        >
          <h4 className="font-bold text-gray-900 dark:text-white mb-3">
            Normalização (Min-Max)
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
            Transforma valores para o intervalo [0, 1]
          </p>
          <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-3 mb-3">
            <pre className="text-green-400 text-xs">
{`from sklearn.preprocessing import MinMaxScaler

scaler = MinMaxScaler()
X_normalizado = scaler.fit_transform(X)

# Antes: [50, 100, 150]
# Depois: [0.0, 0.5, 1.0]`}
            </pre>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-300">
            <strong>Quando usar:</strong> Quando você sabe os limites (ex: 0-255 para imagens)
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800"
        >
          <h4 className="font-bold text-gray-900 dark:text-white mb-3">
            Standardização (Z-score)
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
            Transforma para média=0 e desvio padrão=1
          </p>
          <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-3 mb-3">
            <pre className="text-green-400 text-xs">
{`from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
X_padronizado = scaler.fit_transform(X)

# Antes: [50, 100, 150]
# Depois: [-1.22, 0.0, 1.22]`}
            </pre>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-300">
            <strong>Quando usar:</strong> Quando você não sabe os limites (mais comum!)
          </p>
        </motion.div>
      </div>

      {/* Exemplo Completo */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Exemplo Completo (Código Correto!)
        </h3>
        <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 mb-4">
          <pre className="text-green-400 text-sm">
{`import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split

# Carregar dados
df = pd.read_csv('casas.csv')
X = df[['area', 'quartos', 'idade']]
y = df['preco']

# IMPORTANTE: Normalizar APENAS os dados de treino!
X_treino, X_teste, y_treino, y_teste = train_test_split(X, y)

# Criar scaler e ajustar nos dados de TREINO
scaler = StandardScaler()
scaler.fit(X_treino)  # Aprende média e desvio do TREINO

# Transformar treino e teste
X_treino_scaled = scaler.transform(X_treino)
X_teste_scaled = scaler.transform(X_teste)  # Usa mesma escala!

# Agora pode treinar
modelo.fit(X_treino_scaled, y_treino)`}
          </pre>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
          <div className="flex items-start space-x-2">
            <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                ⚠️ ERRO COMUM:
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Normalizar treino e teste juntos! Isso "vaza" informação do teste para o treino. <strong>Sempre normalize apenas com dados de treino!</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pipeline */}
      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
        <div className="flex items-start space-x-4">
          <Zap className="w-8 h-8 text-purple-600 dark:text-purple-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Pipeline (Fazer Tudo de Uma Vez)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Facilita muito! Normaliza automaticamente:
            </p>
            <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4">
              <pre className="text-green-400 text-sm">
{`from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

# Cria pipeline: normaliza → treina
pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('modelo', LogisticRegression())
])

# Treina tudo de uma vez (normaliza automaticamente)
pipeline.fit(X_treino, y_treino)
pipeline.predict(X_teste)  # Normaliza automaticamente também!`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Quando não normalizar */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800">
        <div className="flex items-start space-x-4">
          <CheckCircle className="w-8 h-8 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Quando NÃO Normalizar?
            </h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Árvores de Decisão</strong> (Random Forest, XGBoost): Não precisam!</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Naive Bayes:</strong> Geralmente não precisa</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Dados já na mesma escala:</strong> Desnecessário</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Resumo */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          Resumo Prático
        </h3>
        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li className="flex items-start">
            <span className="mr-2">✓</span>
            <span><strong>Sempre normalize</strong> para: KNN, SVM, Redes Neurais, Regressão Linear</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">✓</span>
            <span><strong>Use StandardScaler</strong> (mais comum)</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">✓</span>
            <span><strong>Normalize APENAS com dados de treino</strong>, depois aplique no teste</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">✓</span>
            <span><strong>Use Pipeline</strong> para facilitar</span>
          </li>
        </ul>
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 mt-4">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>💡 Dica:</strong> Se não tiver certeza, normalize! Raramente faz mal.
          </p>
        </div>
      </div>
    </div>
  )
}

