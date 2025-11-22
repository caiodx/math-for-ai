import { motion } from 'framer-motion'
import { Target, BarChart3, CheckCircle, AlertCircle, TrendingUp } from 'lucide-react'

export default function MetricsTheory() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl p-8 text-white"
      >
        <div className="flex items-center space-x-4 mb-4">
          <div className="text-6xl">📊</div>
          <div>
            <h2 className="text-3xl font-bold mb-2">Métricas de Avaliação</h2>
            <p className="text-teal-100 text-lg">
              Como medir se seu modelo está bom!
            </p>
          </div>
        </div>
      </motion.div>

      {/* Por que precisamos */}
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
              Por que Precisamos de Métricas?
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Você precisa saber: <strong>seu modelo está bom ou ruim?</strong> Métricas te dão essa resposta!
            </p>
          </div>
        </div>
      </motion.div>

      {/* Accuracy */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Accuracy (Acurácia) - A Mais Simples
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          <strong>Quando usar:</strong> Problemas balanceados (classes com quantidades similares)
        </p>
        <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 mb-4">
          <pre className="text-green-400 text-sm">
{`from sklearn.metrics import accuracy_score

y_real = [1, 0, 1, 1, 0]
y_predito = [1, 0, 1, 0, 0]

accuracy = accuracy_score(y_real, y_predito)
# 4 de 5 corretos = 0.8 = 80%`}
          </pre>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
          <div className="flex items-start space-x-2">
            <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                Problema com Accuracy:
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Não funciona bem quando classes são desbalanceadas! Exemplo: 1000 emails (990 não-spam, 10 spam). Modelo que sempre diz "não-spam" tem 99% accuracy mas é inútil!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Precision e Recall */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800"
        >
          <h4 className="font-bold text-gray-900 dark:text-white mb-3">
            Precision (Precisão)
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
            <strong>Pergunta:</strong> Das vezes que o modelo disse "spam", quantas eram realmente spam?
          </p>
          <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-3 mb-3">
            <pre className="text-green-400 text-xs">
{`from sklearn.metrics import precision_score
precision = precision_score(y_real, y_predito)`}
            </pre>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-300">
            <strong>Quando usar:</strong> Falsos positivos são caros (ex: marcar email importante como spam)
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800"
        >
          <h4 className="font-bold text-gray-900 dark:text-white mb-3">
            Recall (Revocação)
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
            <strong>Pergunta:</strong> De todos os spams reais, quantos o modelo encontrou?
          </p>
          <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-3 mb-3">
            <pre className="text-green-400 text-xs">
{`from sklearn.metrics import recall_score
recall = recall_score(y_real, y_predito)`}
            </pre>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-300">
            <strong>Quando usar:</strong> Falsos negativos são caros (ex: deixar spam passar)
          </p>
        </motion.div>
      </div>

      {/* F1 e Matriz de Confusão */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
          <h4 className="font-bold text-gray-900 dark:text-white mb-3">
            F1-Score - O Equilíbrio
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
            Combina Precision e Recall em uma única métrica.
          </p>
          <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-3">
            <pre className="text-green-400 text-xs">
{`from sklearn.metrics import f1_score
f1 = f1_score(y_real, y_predito)
# Média harmônica de precision e recall`}
            </pre>
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 border border-orange-200 dark:border-orange-800">
          <h4 className="font-bold text-gray-900 dark:text-white mb-3">
            Matriz de Confusão
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
            A melhor forma de entender seu modelo!
          </p>
          <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-3">
            <pre className="text-green-400 text-xs">
{`from sklearn.metrics import confusion_matrix
cm = confusion_matrix(y_real, y_predito)
# Mostra TP, TN, FP, FN`}
            </pre>
          </div>
        </div>
      </div>

      {/* Tabela de Referência */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Qual Métrica Usar?
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-300 dark:border-gray-600">
                <th className="text-left p-2 text-gray-900 dark:text-white">Situação</th>
                <th className="text-left p-2 text-gray-900 dark:text-white">Métrica</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-2 text-gray-700 dark:text-gray-300">Classes balanceadas</td>
                <td className="p-2 text-gray-700 dark:text-gray-300">Accuracy</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-2 text-gray-700 dark:text-gray-300">Falsos positivos são caros</td>
                <td className="p-2 text-gray-700 dark:text-gray-300">Precision</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-2 text-gray-700 dark:text-gray-300">Falsos negativos são caros</td>
                <td className="p-2 text-gray-700 dark:text-gray-300">Recall</td>
              </tr>
              <tr>
                <td className="p-2 text-gray-700 dark:text-gray-300">Precisa balancear ambos</td>
                <td className="p-2 text-gray-700 dark:text-gray-300">F1-Score</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Resumo */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800">
        <div className="flex items-start space-x-4">
          <BarChart3 className="w-8 h-8 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Resumo para Programadores
            </h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span><strong>Accuracy:</strong> Simples, mas cuidado com classes desbalanceadas</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span><strong>Precision/Recall:</strong> Use quando falsos positivos/negativos importam</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span><strong>F1:</strong> Bom equilíbrio geral</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span><strong>Matriz de Confusão:</strong> Sempre olhe! Mostra tudo</span>
              </li>
            </ul>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 mt-3">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>💡 Dica:</strong> Comece sempre com matriz de confusão para entender o modelo!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

