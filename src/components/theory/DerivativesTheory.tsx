import { motion } from 'framer-motion'
import DerivativeDiagram from '../visualizations/DerivativeDiagram'
import { Gauge, Mountain, TrendingDown, Lightbulb, Calculator, Code } from 'lucide-react'

export default function DerivativesTheory() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-8 text-white"
      >
        <div className="flex items-center space-x-4">
          <div className="text-6xl">📈</div>
          <div>
            <h2 className="text-3xl font-bold mb-2">O que é uma Derivada?</h2>
            <p className="text-orange-100 text-lg">
              É como o velocímetro do seu carro - mostra quão rápido você está mudando!
            </p>
          </div>
        </div>
      </motion.div>

      {/* Analogia para Programadores - Melhorada */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-l-4 border-blue-500"
      >
        <div className="flex items-start space-x-4">
          <Gauge className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Para Programadores: Pense como Taxa de Mudança
            </h3>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Em programação, você já calcula "taxa de mudança" o tempo todo:
                </p>
                <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 mb-3">
                  <pre className="text-green-400 text-sm">
{`# Exemplo 1: Velocidade (taxa de mudança de posição)
posicao_inicial = 0
posicao_final = 100  # metros
tempo = 10  # segundos

# Taxa de mudança = velocidade
velocidade = (posicao_final - posicao_inicial) / tempo
print(f"Velocidade: {velocidade} m/s")  # 10 m/s
# Isso é uma derivada! (mudança / tempo)

# Exemplo 2: Taxa de crescimento de vendas
vendas_mes_1 = 1000
vendas_mes_2 = 1500
tempo = 1  # mês

crescimento = (vendas_mes_2 - vendas_mes_1) / tempo
print(f"Crescimento: {crescimento} vendas/mês")  # 500 vendas/mês
# Isso também é uma derivada!`}
                  </pre>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Derivada</strong> = Quão rápido algo está mudando. É como calcular a <strong>velocidade</strong> de uma função!
                </p>
              </div>
              
              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3 border border-yellow-200 dark:border-yellow-800">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>💡 Analogia Intuitiva:</strong> A derivada é como a <strong>inclinação de uma estrada</strong> em um ponto específico. 
                  Se a estrada está muito íngreme (derivada grande), você sobe rápido. Se está plana (derivada zero), você está no topo ou no fundo. 
                  Se está descendo (derivada negativa), você está indo para baixo!
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Conexão com Limites - Expandida */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6 border-l-4 border-indigo-500"
      >
        <div className="flex items-start space-x-4">
          <Lightbulb className="w-8 h-8 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              🔗 Derivadas e Limites: A Base Fundamental
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Importante!</strong> Se você ainda não estudou limites, volte e estude primeiro! 
              A derivada é definida usando limites:
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4">
              <div className="text-center mb-3">
                <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                  f'(x) = lim(h→0) [f(x+h) - f(x)] / h
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Tradução:</strong> A derivada é o limite da taxa de variação quando h fica infinitamente pequeno
                </p>
              </div>
              
              <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 mb-3">
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

# Vamos ver passo a passo:
x = 2
h = 0.0001  # muito pequeno
f_x_mais_h = f(2 + 0.0001)  # f(2.0001) = 4.0004
f_x = f(2)  # f(2) = 4
derivada = (f_x_mais_h - f_x) / h
# derivada = (4.0004 - 4) / 0.0001 = 0.0004 / 0.0001 = 4`}
                </pre>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  <strong>📝 Passo a Passo:</strong>
                </p>
                <ol className="text-sm text-gray-600 dark:text-gray-300 space-y-1 list-decimal list-inside">
                  <li>Pegue um ponto x (ex: x = 2)</li>
                  <li>Some um valor muito pequeno h (ex: h = 0.0001)</li>
                  <li>Calcule f(x+h) e f(x)</li>
                  <li>A derivada é [f(x+h) - f(x)] / h quando h → 0</li>
                </ol>
              </div>
            </div>
            
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3 border border-yellow-200 dark:border-yellow-800">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>💡 Por isso estudamos limites primeiro!</strong> Sem entender limites, 
                você não consegue entender de verdade como as derivadas funcionam. Mas não se preocupe - 
                na prática, você vai usar regras simples (como veremos abaixo) e as bibliotecas fazem o trabalho pesado!
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Visualização - Melhorada */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <Lightbulb className="w-6 h-6 mr-2 text-orange-600" />
          Visualização: Derivada como Inclinação
        </h3>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-4 border-l-4 border-blue-500">
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            <strong>🎯 Para Programadores:</strong> A derivada é simplesmente a <strong>inclinação</strong> da função em um ponto específico. 
            É como calcular a "taxa de crescimento" de uma variável.
          </p>
          <div className="bg-white dark:bg-gray-800 rounded p-3 mb-2">
            <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">
              <strong>Analogia em código:</strong>
            </p>
            <pre className="text-xs text-gray-700 dark:text-gray-300 font-mono">
{`# Se você tem uma função que calcula vendas ao longo do tempo:
vendas = [100, 150, 200, 250]  # vendas por mês

# A "derivada" seria a taxa de crescimento:
crescimento = [50, 50, 50]  # +50 vendas por mês

# A inclinação (derivada) = 50 vendas/mês`}
            </pre>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-300">
            <strong>No gráfico abaixo:</strong> A reta verde mostra essa inclinação. Se ela está muito inclinada, 
            a função está mudando rápido. Se está quase horizontal, a função está mudando devagar. 
            É exatamente isso que algoritmos de otimização (como Gradient Descent) usam para ajustar parâmetros!
          </p>
        </div>
        
        <DerivativeDiagram showTangent={true} point={2} />
      </div>

      {/* Interpretação - Expandida */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800"
        >
          <div className="text-3xl mb-3">📈</div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-2">
            Derivada Positiva
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            Função está <strong>subindo</strong>. A inclinação aponta para cima!
          </p>
          <div className="bg-white dark:bg-gray-800 rounded p-2 mt-2">
            <p className="text-xs text-gray-600 dark:text-gray-300">
              <strong>Exemplo:</strong> f'(x) = 3 significa que para cada unidade em x, a função sobe 3 unidades
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 border border-red-200 dark:border-red-800"
        >
          <div className="text-3xl mb-3">📉</div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-2">
            Derivada Negativa
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            Função está <strong>descendo</strong>. A inclinação aponta para baixo!
          </p>
          <div className="bg-white dark:bg-gray-800 rounded p-2 mt-2">
            <p className="text-xs text-gray-600 dark:text-gray-300">
              <strong>Exemplo:</strong> f'(x) = -2 significa que para cada unidade em x, a função desce 2 unidades
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800"
        >
          <div className="text-3xl mb-3">⚖️</div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-2">
            Derivada Zero
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            Função está em um <strong>pico ou vale</strong> (máximo ou mínimo)!
          </p>
          <div className="bg-white dark:bg-gray-800 rounded p-2 mt-2">
            <p className="text-xs text-gray-600 dark:text-gray-300">
              <strong>Exemplo:</strong> f'(x) = 0 significa que a função não está mudando nesse ponto
            </p>
          </div>
        </motion.div>
      </div>

      {/* Regras - Muito Mais Detalhada */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <Calculator className="w-6 h-6 mr-2 text-purple-600" />
          Regras Básicas (Passo a Passo)
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          <strong>Boa notícia:</strong> Você não precisa calcular derivadas manualmente! Frameworks como TensorFlow/PyTorch fazem isso automaticamente. Mas entender ajuda muito:
        </p>
        
        <div className="space-y-6">
          {/* Regra da Potência - Expandida */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-5 border border-blue-200 dark:border-blue-800">
            <div className="flex items-start space-x-3 mb-3">
              <div className="text-2xl">⚡</div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">
                  Regra da Potência
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Se f(x) = xⁿ, então f'(x) = n·xⁿ⁻¹
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-3">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                <strong>Como funciona:</strong> Você "baixa" o expoente para frente e diminui 1 no expoente
              </p>
              <div className="space-y-2">
                <div className="bg-gray-100 dark:bg-gray-700 rounded p-2">
                  <div className="text-sm font-mono text-gray-700 dark:text-gray-300">
                    <strong>Exemplo 1:</strong> f(x) = x²
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    f'(x) = 2·x²⁻¹ = <strong className="text-blue-600">2x</strong>
                  </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded p-2">
                  <div className="text-sm font-mono text-gray-700 dark:text-gray-300">
                    <strong>Exemplo 2:</strong> f(x) = x³
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    f'(x) = 3·x³⁻¹ = <strong className="text-blue-600">3x²</strong>
                  </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded p-2">
                  <div className="text-sm font-mono text-gray-700 dark:text-gray-300">
                    <strong>Exemplo 3:</strong> f(x) = x⁵
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    f'(x) = 5·x⁵⁻¹ = <strong className="text-blue-600">5x⁴</strong>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4">
              <pre className="text-green-400 text-sm">
{`# Em código (você não precisa fazer isso manualmente!)
# Mas é útil entender:

def derivada_potencia(x, n):
    return n * (x ** (n - 1))

# Exemplo: derivada de x²
resultado = derivada_potencia(3, 2)  # 2 * 3 = 6
print(f"f'(3) para x² = {resultado}")`}
              </pre>
            </div>
          </div>

          {/* Regra da Constante - Expandida */}
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-5 border border-green-200 dark:border-green-800">
            <div className="flex items-start space-x-3 mb-3">
              <div className="text-2xl">🔒</div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">
                  Regra da Constante
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Se f(x) = c (número fixo), então f'(x) = 0
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-3">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                <strong>Por quê?</strong> Se algo não muda, a velocidade de mudança é zero!
              </p>
              <div className="space-y-2">
                <div className="bg-gray-100 dark:bg-gray-700 rounded p-2">
                  <div className="text-sm font-mono text-gray-700 dark:text-gray-300">
                    <strong>Exemplo 1:</strong> f(x) = 5
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    f'(x) = <strong className="text-green-600">0</strong> (não muda nunca!)
                  </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded p-2">
                  <div className="text-sm font-mono text-gray-700 dark:text-gray-300">
                    <strong>Exemplo 2:</strong> f(x) = -10
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    f'(x) = <strong className="text-green-600">0</strong> (ainda é constante!)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Regra da Soma - Nova */}
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-5 border border-purple-200 dark:border-purple-800">
            <div className="flex items-start space-x-3 mb-3">
              <div className="text-2xl">➕</div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">
                  Regra da Soma
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  A derivada da soma é a soma das derivadas: (f + g)' = f' + g'
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-3">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                <strong>Como funciona:</strong> Derive cada parte separadamente e some!
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 rounded p-3">
                <div className="text-sm font-mono text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Exemplo:</strong> f(x) = x² + 3x
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <div>f'(x) = derivada de x² + derivada de 3x</div>
                  <div>f'(x) = 2x + 3</div>
                  <div className="mt-2 text-purple-600 dark:text-purple-400 font-semibold">
                    Resultado: f'(x) = 2x + 3
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Regra do Múltiplo Constante - Nova */}
          <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-5 border border-orange-200 dark:border-orange-800">
            <div className="flex items-start space-x-3 mb-3">
              <div className="text-2xl">✖️</div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">
                  Regra do Múltiplo Constante
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Se f(x) = c·g(x), então f'(x) = c·g'(x)
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                <strong>Como funciona:</strong> A constante "sai" e você deriva só a função!
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 rounded p-3">
                <div className="text-sm font-mono text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Exemplo:</strong> f(x) = 5x²
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <div>f'(x) = 5 · derivada de x²</div>
                  <div>f'(x) = 5 · 2x</div>
                  <div className="mt-2 text-orange-600 dark:text-orange-400 font-semibold">
                    Resultado: f'(x) = 10x
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 mt-6 border border-yellow-200 dark:border-yellow-800">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>🎯 Importante:</strong> Você não precisa decorar essas regras! O importante é entender que <strong>derivadas medem taxa de mudança</strong> e que <strong>gradiente descendente usa derivadas</strong> para treinar redes neurais. As bibliotecas fazem os cálculos para você!
          </p>
        </div>
      </motion.div>

      {/* Exemplos Práticos com Código - Nova Seção */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <Code className="w-6 h-6 mr-2 text-blue-600" />
          Exemplos Práticos (Com Código!)
        </h3>
        
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
              Exemplo 1: Derivada de x²
            </h4>
            <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 mb-3">
              <pre className="text-green-400 text-sm">
{`# Função: f(x) = x²
# Derivada: f'(x) = 2x

def f(x):
    return x**2

# Usando a regra da potência:
# f'(x) = 2x
def f_prime(x):
    return 2 * x

# Teste:
x = 3
print(f"f({x}) = {f(x)}")      # 9
print(f"f'({x}) = {f_prime(x)}")  # 6

# O que significa?
# No ponto x=3, a função está subindo com inclinação 6
# Ou seja: para cada unidade que x aumenta, f(x) aumenta 6 unidades`}
              </pre>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
              Exemplo 2: Derivada de 3x + 5
            </h4>
            <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 mb-3">
              <pre className="text-green-400 text-sm">
{`# Função: f(x) = 3x + 5
# Derivada: f'(x) = 3

def f(x):
    return 3*x + 5

# Usando as regras:
# - Derivada de 3x = 3 (regra do múltiplo constante)
# - Derivada de 5 = 0 (regra da constante)
# - f'(x) = 3 + 0 = 3
def f_prime(x):
    return 3

# Teste:
x = 10
print(f"f({x}) = {f(x)}")      # 35
print(f"f'({x}) = {f_prime(x)}")  # 3 (sempre 3, não importa o x!)

# O que significa?
# A função tem inclinação constante de 3
# É uma reta que sempre sobe 3 unidades para cada unidade em x`}
              </pre>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
              Exemplo 3: Derivada de x² + 3x
            </h4>
            <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4">
              <pre className="text-green-400 text-sm">
{`# Função: f(x) = x² + 3x
# Derivada: f'(x) = 2x + 3

def f(x):
    return x**2 + 3*x

# Usando as regras:
# - Derivada de x² = 2x (regra da potência)
# - Derivada de 3x = 3 (regra do múltiplo constante)
# - f'(x) = 2x + 3 (regra da soma)
def f_prime(x):
    return 2*x + 3

# Teste:
x = 2
print(f"f({x}) = {f(x)}")      # 10
print(f"f'({x}) = {f_prime(x)}")  # 7

# O que significa?
# No ponto x=2, a função está subindo com inclinação 7`}
              </pre>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Analogia da Montanha - Melhorada */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800"
      >
        <div className="flex items-start space-x-4">
          <Mountain className="w-8 h-8 text-purple-600 dark:text-purple-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Por que Derivadas são ESSENCIAIS em IA?
            </h3>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 mb-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Analogia da Montanha 🏔️
              </h4>
              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <p>
                  Imagine que você está numa <strong>montanha</strong> (função de erro) e quer chegar ao <strong>vale</strong> (mínimo):
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <TrendingDown className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                    <span>A <strong>derivada</strong> te diz para onde a montanha está mais íngreme</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingDown className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                    <span>Você anda na <strong>direção oposta</strong> (descendo)</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingDown className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                    <span>Eventualmente chega ao <strong>fundo do vale</strong> (mínimo global)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Gradiente Descendente
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">
                  O algoritmo que treina TODAS as redes neurais usa derivadas!
                </p>
                <div className="bg-gray-900 dark:bg-gray-950 rounded p-2">
                  <pre className="text-green-400 text-xs">
{`# Pseudocódigo
while erro > minimo:
    gradiente = calcular_derivada(erro)
    pesos = pesos - taxa * gradiente`}
                  </pre>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Backpropagation
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">
                  Calcula derivadas em cadeia para ajustar os pesos da rede
                </p>
                <div className="bg-gray-900 dark:bg-gray-950 rounded p-2">
                  <pre className="text-green-400 text-xs">
{`# Em TensorFlow/PyTorch
with tf.GradientTape() as tape:
    predicao = modelo(entrada)
    erro = loss(predicao, verdade)
gradiente = tape.gradient(erro, modelo.pesos)`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Como Usar em Código Real - Nova Seção */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800"
      >
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <Code className="w-6 h-6 mr-2 text-green-600" />
          Como Usar Derivadas em Código Real (TensorFlow/PyTorch)
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          <strong>Boa notícia:</strong> Você não precisa calcular derivadas manualmente! As bibliotecas fazem isso automaticamente:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              TensorFlow / Keras
            </h4>
            <div className="bg-gray-900 dark:bg-gray-950 rounded p-3">
              <pre className="text-green-400 text-xs">
{`import tensorflow as tf

# Criar modelo
modelo = tf.keras.Sequential([
    tf.keras.layers.Dense(10)
])

# Compilar (define função de erro)
modelo.compile(
    optimizer='adam',  # usa derivadas!
    loss='mse'         # função de erro
)

# Treinar (calcula derivadas automaticamente)
modelo.fit(X, y, epochs=10)
# As derivadas são calculadas automaticamente
# pelo TensorFlow durante o treinamento!`}
              </pre>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              PyTorch
            </h4>
            <div className="bg-gray-900 dark:bg-gray-950 rounded p-3">
              <pre className="text-green-400 text-xs">
{`import torch
import torch.nn as nn

# Criar modelo
modelo = nn.Linear(10, 1)
otimizador = torch.optim.Adam(modelo.parameters())

# Treinar
for epoch in range(10):
    predicao = modelo(X)
    erro = nn.MSELoss()(predicao, y)
    
    # Calcular derivadas automaticamente
    erro.backward()  # calcula todas as derivadas!
    otimizador.step()  # ajusta pesos usando derivadas
    otimizador.zero_grad()`}
              </pre>
            </div>
          </div>
        </div>
        
        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3 mt-4 border border-yellow-200 dark:border-yellow-800">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>💡 Resumo:</strong> Você não precisa calcular derivadas manualmente! As bibliotecas fazem isso. 
            Mas entender <strong>o que são</strong> e <strong>como funcionam</strong> ajuda muito a debugar problemas e entender o que está acontecendo durante o treinamento!
          </p>
        </div>
      </motion.div>
    </div>
  )
}
