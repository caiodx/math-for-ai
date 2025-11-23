import { motion } from 'framer-motion'
import LimitsDiagram from '../visualizations/LimitsDiagram'
import { Footprints, Search, AlertTriangle, ArrowRight } from 'lucide-react'

export default function LimitsTheory() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
          O Que é um Limite?
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Esqueça as fórmulas complicadas por um momento. Vamos entender a <strong>ideia</strong>.
        </p>
      </motion.div>

      {/* A Intuição: Caminhando até a Parede */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
      >
        <div className="flex items-start gap-6">
          <div className="bg-indigo-100 dark:bg-indigo-900/50 p-4 rounded-xl hidden md:block">
            <Footprints className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              1. A Ideia Intuitiva: "Quase Lá"
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Imagine que você está caminhando em direção a uma parede. A cada passo, você anda metade da distância que falta.
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
              <li>👣 Passo 1: Você está a 1 metro.</li>
              <li>👣 Passo 2: Você está a 0.5 metros.</li>
              <li>👣 Passo 3: Você está a 0.25 metros.</li>
              <li>👣 Passo 100: Você está a 0.0000...01 metros.</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              Você vai encostar na parede? <span className="text-red-500">Não exatamente.</span><br />
              Mas você vai chegar tão perto, mas <strong>tão perto</strong>, que para todos os efeitos práticos, você está na parede.
            </p>
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border-l-4 border-indigo-500">
              <p className="text-sm text-indigo-900 dark:text-indigo-200">
                <strong>Isso é um Limite!</strong> É o valor do qual você se aproxima infinitamente, sem necessariamente chegar lá.
              </p>
            </div>
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
          <Search className="w-6 h-6 text-purple-600" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            2. Veja com seus próprios olhos
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Arraste o slider abaixo. Tente chegar exatamente no alvo vermelho. Veja como o valor de Y se comporta.
        </p>

        <LimitsDiagram functionType="quadratic" point={2} />

        <p className="text-sm text-center text-gray-500 mt-2">
          Perceba: Não importa se você vem da esquerda ou da direita, você "mira" no mesmo lugar.
        </p>
      </motion.div>

      {/* O Problema do Buraco (0/0) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-orange-50 dark:bg-orange-900/10 rounded-2xl p-8 border border-orange-100 dark:border-orange-900/30"
      >
        <div className="flex items-start gap-6">
          <div className="bg-orange-100 dark:bg-orange-900/50 p-4 rounded-xl hidden md:block">
            <AlertTriangle className="w-8 h-8 text-orange-600 dark:text-orange-400" />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              3. Por que isso é útil? (O Mistério do 0/0)
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Às vezes, a matemática "quebra". Tente calcular esta função quando x = 2:
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center font-mono text-lg shadow-sm">
              f(x) = (x² - 4) / (x - 2)
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              Se você colocar x = 2, você tem <code className="bg-orange-200 dark:bg-orange-800 px-1 rounded">0 / 0</code>. Isso é um erro! O computador explode, o universo colapsa.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Mas o Limite nos salva!</strong> Em vez de perguntar "quanto vale em 2?", perguntamos "quanto vale <strong>perto</strong> de 2?".
            </p>

            <div className="mt-4">
              <h4 className="font-bold mb-2">Tente se aproximar do "Buraco":</h4>
              <LimitsDiagram functionType="rational" point={2} />
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mt-4">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Mesmo que em x=2 exista um "buraco" (o ponto branco), nós sabemos exatamente onde ele <strong>deveria</strong> estar. O limite preenche esse buraco!
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Notação Matemática */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <ArrowRight className="text-green-500" />
          4. Traduzindo para "Matematiquês"
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Tudo o que dissemos até agora se escreve assim:
            </p>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center">
              <span className="text-3xl font-serif italic text-gray-900 dark:text-white">
                lim
              </span>
              <span className="text-xs relative top-2 right-4 text-gray-500">x→2</span>
              <span className="text-2xl font-serif text-gray-900 dark:text-white ml-2">
                f(x) = 4
              </span>
            </div>
          </div>
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <p>Isso se lê:</p>
            <blockquote className="border-l-4 border-green-500 pl-4 py-2 italic bg-green-50 dark:bg-green-900/20 rounded-r">
              "O limite de f(x), quando x tende a 2, é igual a 4."
            </blockquote>
            <p>
              Ou seja: "Quando x chega pertinho de 2, a função chega pertinho de 4."
            </p>
          </div>
        </div>
      </motion.div>

      {/* Resumo para Devs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white shadow-xl"
      >
        <h3 className="text-xl font-bold mb-4 text-green-400">
          💻 Resumo para Desenvolvedores
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold mb-2">O que é?</h4>
            <p className="text-gray-300 text-sm">
              É como um `debugger` que inspeciona o valor de uma função infinitamente próximo de um ponto, ignorando o ponto em si.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Para que serve em IA?</h4>
            <p className="text-gray-300 text-sm">
              É a base das <strong>Derivadas</strong>. Sem limites, não podemos calcular a inclinação de uma curva, não temos gradiente, e as Redes Neurais não aprendem!
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

