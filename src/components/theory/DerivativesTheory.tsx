import { motion } from 'framer-motion'
import DerivativeDiagram from '../visualizations/DerivativeDiagram'
import { TrendingUp, Gauge, Mountain } from 'lucide-react'

export default function DerivativesTheory() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400">
          O Que é uma Derivada?
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Não é mágica. É apenas o <strong>velocímetro</strong> da matemática.
        </p>
      </motion.div>

      {/* A Intuição: O Velocímetro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
      >
        <div className="flex items-start gap-6">
          <div className="bg-orange-100 dark:bg-orange-900/50 p-4 rounded-xl hidden md:block">
            <Gauge className="w-8 h-8 text-orange-600 dark:text-orange-400" />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              1. A Ideia Intuitiva: Quão Rápido?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Imagine que você está dirigindo um carro.
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
              <li>📍 <strong>A Função f(x)</strong> é a sua <strong>posição</strong> no GPS. "Onde eu estou?"</li>
              <li>⚡ <strong>A Derivada f'(x)</strong> é o seu <strong>velocímetro</strong>. "Quão rápido eu estou mudando de posição?"</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              Se o velocímetro marca 100km/h, isso significa que em 1 hora (se você mantiver essa velocidade), sua posição mudará 100km.
              <br />
              A derivada é exatamente isso: <strong>Taxa de Mudança Instantânea</strong>.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Visualização Interativa */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="w-6 h-6 text-indigo-600" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            2. Dirija na Montanha
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Arraste o slider. Imagine que o ponto é um carro numa montanha russa.
          <br />
          A <strong>inclinação</strong> do carro é a derivada!
        </p>

        <DerivativeDiagram point={2} />

        <div className="grid grid-cols-3 gap-4 text-center mt-4">
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="font-bold text-green-700 dark:text-green-400">Subindo</div>
            <div className="text-xs text-gray-500">Derivada Positiva (+)</div>
          </div>
          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <div className="font-bold text-yellow-700 dark:text-yellow-400">Topo/Fundo</div>
            <div className="text-xs text-gray-500">Derivada Zero (0)</div>
          </div>
          <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <div className="font-bold text-red-700 dark:text-red-400">Descendo</div>
            <div className="text-xs text-gray-500">Derivada Negativa (-)</div>
          </div>
        </div>
      </motion.div>

      {/* Por que isso importa para IA? */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-indigo-50 dark:bg-indigo-900/10 rounded-2xl p-8 border border-indigo-100 dark:border-indigo-900/30"
      >
        <div className="flex items-start gap-6">
          <div className="bg-indigo-100 dark:bg-indigo-900/50 p-4 rounded-xl hidden md:block">
            <Mountain className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              3. O Segredo das Redes Neurais
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Imagine que você está no topo de uma montanha (Erro Alto) e quer chegar ao vale (Erro Baixo) no escuro.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              O que você faz? Você sente a inclinação do chão com o pé.
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <li>🦶 Se o chão desce para a esquerda, você vai para a esquerda.</li>
              <li>🦶 Se o chão desce para a direita, você vai para a direita.</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              Isso é o <strong>Gradiente Descendente</strong>!
              <br />
              A rede neural calcula a derivada (inclinação) do erro e dá um passo na direção oposta para aprender.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Resumo para Devs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white shadow-xl"
      >
        <h3 className="text-xl font-bold mb-4 text-orange-400">
          💻 Resumo para Desenvolvedores
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold mb-2">O que é?</h4>
            <p className="text-gray-300 text-sm">
              `derivada = (novo_valor - valor_antigo) / tempo`. É a taxa de mudança instantânea.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Código (PyTorch/TensorFlow)</h4>
            <p className="text-gray-300 text-sm font-mono bg-black/30 p-2 rounded">
              loss.backward()
            </p>
            <p className="text-gray-400 text-xs mt-1">
              Essa linha mágica calcula todas as derivadas para você!
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
