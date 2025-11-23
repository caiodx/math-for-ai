import { motion } from 'framer-motion'
import GradientDiagram from '../visualizations/GradientDiagram'
import { Compass, Mountain, Brain, Zap } from 'lucide-react'

export default function GradientsTheory() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
          O Que é um Gradiente?
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          É a <strong>bússola</strong> que diz para a Inteligência Artificial para onde ir.
        </p>
      </motion.div>

      {/* A Intuição: O Montanhista Cego */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
      >
        <div className="flex items-start gap-6">
          <div className="bg-purple-100 dark:bg-purple-900/50 p-4 rounded-xl hidden md:block">
            <Mountain className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              1. A Analogia do Montanhista Cego 🏔️
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Imagine que você está perdido em uma montanha à noite, sem enxergar nada.
              Seu objetivo é chegar ao <strong>ponto mais baixo</strong> (o vale) para encontrar água.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Como você faz isso?
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
              <li className="flex items-center gap-2">
                🦶 <strong>Passo 1:</strong> Você sente o chão com os pés.
              </li>
              <li className="flex items-center gap-2">
                ↗️ <strong>Passo 2:</strong> Você descobre onde o chão sobe mais íngreme (isso é o <strong>Gradiente</strong>!).
              </li>
              <li className="flex items-center gap-2">
                ⬇️ <strong>Passo 3:</strong> Você dá um passo na <strong>direção oposta</strong> (descendo).
              </li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              Se você repetir isso várias vezes, eventualmente chegará ao fundo. É assim que as máquinas aprendem!
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
          <Zap className="w-6 h-6 text-yellow-500" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            2. Simulador de Gradiente Descendente
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          O mapa abaixo mostra a "montanha" vista de cima. O azul é o vale (objetivo).
          <br />
          <strong>Clique em qualquer lugar</strong> para soltar uma bola e vê-la encontrar o caminho sozinha!
        </p>

        <GradientDiagram />

      </motion.div>

      {/* Definição Técnica Simplificada */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="grid md:grid-cols-2 gap-6"
      >
        <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6 border border-indigo-100 dark:border-indigo-800">
          <div className="flex items-center gap-3 mb-4">
            <Compass className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              O Que é Matematicamente?
            </h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            O gradiente é apenas um vetor (uma seta) que agrupa todas as derivadas parciais.
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-3 font-mono text-sm text-center border border-indigo-200 dark:border-indigo-700">
            ∇f = [derivada_x, derivada_y, ...]
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
            Ele sempre aponta para a direção de <strong>maior subida</strong>. Por isso, para minimizar o erro, andamos na direção oposta (negativa).
          </p>
        </div>

        <div className="bg-pink-50 dark:bg-pink-900/20 rounded-xl p-6 border border-pink-100 dark:border-pink-800">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="w-6 h-6 text-pink-600 dark:text-pink-400" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              O Algoritmo Mágico
            </h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            A fórmula que treina o ChatGPT, o Google Translate e o reconhecimento facial do seu celular é esta:
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-3 font-mono text-sm text-center border border-pink-200 dark:border-pink-700">
            novo_peso = peso_atual - (passo × gradiente)
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
            Chamamos o "passo" de <strong>Learning Rate</strong> (Taxa de Aprendizado). Se for muito grande, você tropeça. Se for muito pequeno, demora uma eternidade.
          </p>
        </div>
      </motion.div>

      {/* Resumo para Devs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white shadow-xl"
      >
        <h3 className="text-xl font-bold mb-4 text-purple-400">
          💻 Resumo para Desenvolvedores
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold mb-2">Conceito</h4>
            <p className="text-gray-300 text-sm">
              Gradiente é a direção do erro mais alto. Queremos o erro mais baixo. Logo, subtraímos o gradiente dos pesos.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Código (PyTorch)</h4>
            <pre className="text-gray-300 text-xs font-mono bg-black/30 p-3 rounded overflow-x-auto">
              {`# 1. Calcula gradiente (direção de subida)
loss.backward()

# 2. Anda na direção oposta (descida)
optimizer.step()

# 3. Zera para o próximo passo
optimizer.zero_grad()`}
            </pre>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
