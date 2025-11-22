import { Topic } from '../types'

export const topics: Topic[] = [
  {
    id: 'algebra-linear',
    title: 'Álgebra Linear',
    description: 'Vetores, matrizes e operações fundamentais',
    icon: '📐',
    color: 'bg-blue-500',
    lessons: [
      {
        id: 'vetores',
        title: 'Vetores',
        description: 'Entenda o que são vetores e como trabalhar com eles',
        content: {
          theory: `
# Vetores

## O que é um Vetor?

Imagine que você está dando direções para alguém chegar a um ponto no mapa. Você precisa dizer:
- **Quanto andar** (magnitude)
- **Para onde ir** (direção)

Um **vetor** é exatamente isso: uma quantidade que possui tanto **magnitude** (tamanho) quanto **direção**.

### Analogia do Dia a Dia

Pense em um vetor como uma **seta**:
- O **comprimento da seta** = magnitude (quão longe)
- A **direção da seta** = direção (para onde)

## Por que Vetores são Importantes em IA?

Em Inteligência Artificial, vetores são a **linguagem fundamental** dos dados:

- **Imagens**: Uma foto 28×28 pixels vira um vetor de 784 números
- **Textos**: Palavras são convertidas em vetores (embeddings)
- **Dados de usuários**: Perfis são representados como vetores
- **Redes Neurais**: Processam vetores em cada camada

### Exemplo Prático

Quando você faz uma busca no Google, seu texto vira um vetor, que é comparado com outros vetores para encontrar resultados similares!

## Características dos Vetores

### 1. Dimensão
O número de componentes que o vetor possui:
- **2D**: [x, y] - como coordenadas no plano
- **3D**: [x, y, z] - como coordenadas no espaço
- **nD**: [v₁, v₂, ..., vₙ] - vetores de alta dimensão (comuns em IA)

### 2. Magnitude (Comprimento)
O tamanho do vetor, calculado usando o teorema de Pitágoras:
- Para [3, 4]: |v| = √(3² + 4²) = √25 = 5

### 3. Direção
Para onde o vetor aponta no espaço

## Representação Visual

Veja os diagramas abaixo para visualizar vetores no plano 2D. Cada vetor é mostrado como uma seta que parte da origem (0, 0) até o ponto final.

## Operações Básicas

### 1. Soma de Vetores

Para somar dois vetores, você **some cada componente**:

**v** = [1, 2] + **u** = [3, 4] = [4, 6]

**Interpretação Visual**: Se você andar na direção do vetor v e depois na direção do vetor u, o resultado é como se você tivesse andado diretamente na direção do vetor soma!

### 2. Multiplicação por Escalar

Multiplique cada componente pelo número:

2 × [1, 2, 3] = [2, 4, 6]

**Interpretação**: Você está **esticando** ou **encolhendo** o vetor, mantendo a mesma direção.

- Se o escalar > 1: vetor fica maior
- Se 0 < escalar < 1: vetor fica menor
- Se escalar < 0: vetor inverte de direção

### 3. Produto Escalar (Dot Product)

Soma dos produtos dos componentes correspondentes:

[1, 2] · [3, 4] = (1×3) + (2×4) = 3 + 8 = 11

**Interpretação**: O produto escalar mede:
- **Quão alinhados** dois vetores estão
- Se o resultado é **positivo**: vetores apontam em direções similares
- Se o resultado é **negativo**: vetores apontam em direções opostas
- Se o resultado é **zero**: vetores são perpendiculares

**Em IA**: O produto escalar é usado para medir **similaridade** entre vetores de dados!
          `,
          examples: [
            {
              title: 'Exemplo 1: Soma de Vetores',
              description: 'Some os vetores [2, 5] e [3, 1]',
              solution: '[2, 5] + [3, 1] = [2+3, 5+1] = [5, 6]',
            },
            {
              title: 'Exemplo 2: Produto Escalar',
              description: 'Calcule o produto escalar de [1, 3] e [4, 2]',
              solution: '[1, 3] · [4, 2] = (1×4) + (3×2) = 4 + 6 = 10',
            },
          ],
          visualizations: [
            {
              type: 'interactive',
              component: 'vector',
              data: { showSum: true, showDotProduct: true },
            },
          ],
        },
        exercises: [
          {
            id: 'ex1',
            question: 'Qual é o resultado da soma [3, 7] + [2, 1]?',
            type: 'multiple-choice',
            options: ['[5, 8]', '[6, 7]', '[3, 8]', '[5, 7]'],
            correctAnswer: '[5, 8]',
            explanation: 'Some cada componente: 3+2=5 e 7+1=8',
          },
          {
            id: 'ex2',
            question: 'Calcule o produto escalar: [2, 4] · [3, 1]',
            type: 'input',
            correctAnswer: '10',
            explanation: '(2×3) + (4×1) = 6 + 4 = 10',
            hint: 'Multiplique os componentes correspondentes e some',
          },
          {
            id: 'ex3',
            question: 'Qual é a magnitude (comprimento) aproximado do vetor [3, 4]?',
            type: 'multiple-choice',
            options: ['5', '7', '12', '25'],
            correctAnswer: '5',
            explanation: 'Magnitude = √(3² + 4²) = √(9 + 16) = √25 = 5',
            hint: 'Use o teorema de Pitágoras: √(x² + y²)',
          },
          {
            id: 'ex4',
            question: 'Se v = [1, 2] e u = [3, 1], qual é v - u?',
            type: 'input',
            correctAnswer: '[-2, 1]',
            explanation: '[1, 2] - [3, 1] = [1-3, 2-1] = [-2, 1]',
          },
        ],
      },
      {
        id: 'magnitude-direcao',
        title: 'Magnitude e Direção de Vetores',
        description: 'Aprenda a calcular o comprimento e direção de vetores',
        content: {
          theory: `
# Magnitude e Direção

## Magnitude (Comprimento)

A magnitude de um vetor **v** = [x, y] é calculada usando o teorema de Pitágoras:

**|v| = √(x² + y²)**

Para vetores 3D: **|v| = √(x² + y² + z²)**

## Direção

A direção de um vetor é o ângulo que ele forma com o eixo X positivo:

**θ = arctan(y/x)**

## Vetor Unitário

Um vetor unitário tem magnitude 1. Para normalizar um vetor:

**û = v / |v|**

## Aplicação em IA

- Normalização de features (importante para ML)
- Cálculo de similaridade entre vetores
- Distâncias em espaços de alta dimensão
          `,
          examples: [
            {
              title: 'Exemplo: Magnitude',
              description: 'Calcule a magnitude de [3, 4]',
              solution: '|v| = √(3² + 4²) = √(9 + 16) = √25 = 5',
            },
            {
              title: 'Exemplo: Vetor Unitário',
              description: 'Normalize o vetor [3, 4]',
              solution: '|v| = 5, então û = [3/5, 4/5] = [0.6, 0.8]',
            },
          ],
        },
        exercises: [
          {
            id: 'ex1',
            question: 'Qual é a magnitude de [5, 12]?',
            type: 'input',
            correctAnswer: '13',
            explanation: '√(5² + 12²) = √(25 + 144) = √169 = 13',
          },
          {
            id: 'ex2',
            question: 'Um vetor unitário tem magnitude:',
            type: 'multiple-choice',
            options: ['1', '0', '2', 'Depende do vetor'],
            correctAnswer: '1',
            explanation: 'Por definição, um vetor unitário sempre tem magnitude 1',
          },
        ],
      },
      {
        id: 'matrizes',
        title: 'Matrizes',
        description: 'Aprenda sobre matrizes e suas operações',
        content: {
          theory: `
# Matrizes

## O que é uma Matriz?

Imagine uma **tabela de Excel** ou uma **planilha** com números organizados em linhas e colunas. Isso é uma matriz!

Uma **matriz** é uma estrutura retangular de números, onde cada número tem uma posição específica (linha, coluna).

### Analogia do Dia a Dia

- **Planilha Excel**: Cada célula tem uma posição (A1, B2, etc.)
- **Tabela de dados**: Linhas = registros, Colunas = características
- **Imagem digital**: Uma foto é uma matriz de pixels (cada pixel tem cor e posição)

## Por que Matrizes são Fundamentais em IA?

### 1. Representação de Dados
- **Imagens**: Uma foto 28×28 vira uma matriz 28×28 de valores de pixels
- **Dados tabulares**: Cada linha é um exemplo, cada coluna é uma feature
- **Textos**: Embeddings são organizados como matrizes

### 2. Transformações
Matrizes podem **transformar** dados:
- **Rotação**: Girar uma imagem
- **Escala**: Aumentar/diminuir
- **Projeção**: Reduzir dimensões (PCA)

### 3. Redes Neurais
Cada **camada** de uma rede neural é uma multiplicação de matrizes:
- Entrada (vetor) × Pesos (matriz) = Saída (vetor)

## Representação Visual

Veja o diagrama abaixo para visualizar uma matriz e sua transposta. A transposta "vira" a matriz, trocando linhas por colunas.

## Operações Básicas

### 1. Multiplicação por Escalar

Multiplique **cada elemento** pelo número:

2 × [[1, 2], [3, 4]] = [[2, 4], [6, 8]]

**Interpretação**: Você está **escalando** toda a matriz, como aumentar o brilho de uma imagem.

### 2. Soma de Matrizes

Some **elemento por elemento** (matrizes devem ter as mesmas dimensões):

[[1, 2], [3, 4]] + [[5, 6], [7, 8]] = [[6, 8], [10, 12]]

### 3. Multiplicação de Matrizes

Para multiplicar A × B:
- **Regra**: Número de colunas de A = Número de linhas de B
- **Resultado**: Matriz com linhas de A e colunas de B
- **Cálculo**: Cada elemento é o produto escalar de uma linha de A por uma coluna de B

**Exemplo**:
[[1, 2], [3, 4]] × [[5, 6], [7, 8]] = [[19, 22], [43, 50]]

**Em IA**: A multiplicação de matrizes é o coração das redes neurais!

### 4. Transposta

A transposta Aᵀ "vira" a matriz:
- Linhas viram colunas
- Colunas viram linhas

**Exemplo**: Se A = [[1, 2, 3], [4, 5, 6]], então Aᵀ = [[1, 4], [2, 5], [3, 6]]

Veja o diagrama visual abaixo para entender melhor!
          `,
          examples: [
            {
              title: 'Exemplo: Multiplicação por Escalar',
              description: 'Multiplique a matriz [[1, 2], [3, 4]] por 3',
              solution: '3 × [[1, 2], [3, 4]] = [[3, 6], [9, 12]]',
            },
          ],
          visualizations: [
            {
              type: 'interactive',
              component: 'matrix',
              data: { showOperations: true },
            },
          ],
        },
        exercises: [
          {
            id: 'ex1',
            question: 'Qual é o resultado de 2 × [[1, 3], [2, 4]]?',
            type: 'multiple-choice',
            options: [
              '[[2, 6], [4, 8]]',
              '[[3, 5], [4, 6]]',
              '[[1, 3], [4, 8]]',
              '[[2, 3], [4, 8]]',
            ],
            correctAnswer: '[[2, 6], [4, 8]]',
            explanation: 'Multiplique cada elemento por 2',
          },
          {
            id: 'ex2',
            question: 'Qual é a transposta da matriz [[1, 2], [3, 4]]?',
            type: 'multiple-choice',
            options: [
              '[[1, 3], [2, 4]]',
              '[[1, 2], [3, 4]]',
              '[[4, 3], [2, 1]]',
              '[[1, 4], [2, 3]]',
            ],
            correctAnswer: '[[1, 3], [2, 4]]',
            explanation: 'A transposta troca linhas por colunas',
          },
        ],
      },
    ],
  },
  {
    id: 'calculo',
    title: 'Cálculo',
    description: 'Derivadas, gradientes e otimização',
    icon: '📊',
    color: 'bg-green-500',
    lessons: [
      {
        id: 'limites',
        title: 'Limites',
        description: 'Entenda o conceito de limite, base fundamental para derivadas',
        content: {
          theory: `
# Limites

## O que é um Limite?

Imagine que você está **se aproximando** de um ponto, mas **nunca chega exatamente nele**. O limite é o valor que a função "tende" quando você se aproxima infinitamente perto.

### Analogia do Dia a Dia

Pense em uma **parede**:
- Você pode se aproximar **muito, muito perto** da parede
- Mas nunca pode **atravessar** ela
- O limite é como perguntar: "Se eu pudesse chegar infinitamente perto, qual seria o valor?"

## Por que Limites são Importantes?

**Limites são a base das derivadas!** Sem entender limites, você não consegue entender derivadas de verdade.

### Definição Formal (Simplificada)

O limite de f(x) quando x se aproxima de a é L:

**lim(x→a) f(x) = L**

Isso significa: quando x fica **muito próximo** de a, f(x) fica **muito próximo** de L.

## Exemplos Práticos

### Exemplo 1: Limite Simples

lim(x→2) x = 2

**Por quê?** Quando x se aproxima de 2, x é 2. Simples!

### Exemplo 2: Limite de Função

lim(x→3) (x + 1) = 4

**Por quê?** Quando x se aproxima de 3, (x + 1) se aproxima de 4.

### Exemplo 3: Limite "Problemático"

lim(x→0) (x² / x) = ?

Quando x = 0, temos 0/0 (indeterminado!). Mas podemos simplificar:
- x² / x = x (quando x ≠ 0)
- Então lim(x→0) x = 0

## Limites e Derivadas

A derivada é definida usando limites:

**f'(x) = lim(h→0) [f(x+h) - f(x)] / h**

Isso significa: a derivada é o limite da **taxa de variação** quando a diferença h fica **infinitamente pequena**!

## Em Código

Em Python, você pode calcular limites numericamente (aproximando):

\`\`\`python
import numpy as np

# Limite de (x² - 1) / (x - 1) quando x → 1
x_values = np.array([0.9, 0.99, 0.999, 0.9999])
f_values = (x_values**2 - 1) / (x_values - 1)
# Resultado se aproxima de 2!
\`\`\`

## Por que Isso Importa para IA?

- **Derivadas** (usadas em gradiente descendente) são definidas com limites
- **Otimização** precisa entender comportamento quando valores se aproximam de pontos críticos
- **Backpropagation** calcula derivadas, que dependem de limites
          `,
          examples: [
            {
              title: 'Exemplo 1: Limite Básico',
              description: 'Calcule lim(x→5) (2x + 3)',
              solution: 'lim(x→5) (2x + 3) = 2(5) + 3 = 13',
            },
            {
              title: 'Exemplo 2: Limite com Simplificação',
              description: 'Calcule lim(x→2) (x² - 4) / (x - 2)',
              solution: 'Simplificando: (x-2)(x+2)/(x-2) = x+2. Então lim(x→2) (x+2) = 4',
            },
          ],
        },
        exercises: [
          {
            id: 'ex1',
            question: 'Qual é lim(x→3) (x + 2)?',
            type: 'multiple-choice',
            options: ['3', '5', '6', '9'],
            correctAnswer: '5',
            explanation: 'Quando x se aproxima de 3, (x + 2) se aproxima de 5',
          },
          {
            id: 'ex2',
            question: 'Qual é lim(x→0) (x² / x)?',
            type: 'input',
            correctAnswer: '0',
            explanation: 'Simplificando: x²/x = x (quando x≠0). Então lim(x→0) x = 0',
          },
          {
            id: 'ex3',
            question: 'A derivada é definida usando limites. Verdadeiro ou Falso?',
            type: 'multiple-choice',
            options: ['Verdadeiro', 'Falso'],
            correctAnswer: 'Verdadeiro',
            explanation: 'Sim! f\'(x) = lim(h→0) [f(x+h) - f(x)] / h',
          },
        ],
      },
      {
        id: 'derivadas',
        title: 'Derivadas',
        description: 'Entenda o conceito de derivada e sua importância em IA',
        content: {
          theory: `
# Derivadas

## O que é uma Derivada?

Imagine que você está **dirigindo um carro**. A derivada é como o **velocímetro**:
- Ela te diz **quão rápido** você está mudando de posição
- Se você acelera, a derivada aumenta
- Se você freia, a derivada diminui

A **derivada** mede a **taxa de variação** de uma função - ou seja, **quão rápido** a função está mudando em um ponto específico.

## Conceito Visual

Veja o diagrama abaixo! A derivada em um ponto é a **inclinação da reta tangente** (a linha verde) que "toca" a curva naquele ponto.

### Interpretação Geométrica

- **Derivada positiva**: Função está **subindo** (inclinação para cima)
- **Derivada negativa**: Função está **descendo** (inclinação para baixo)
- **Derivada zero**: Função está em um **pico ou vale** (máximo ou mínimo)

## Notação

- **f'(x)**: Derivada de f em relação a x (notação de Lagrange)
- **df/dx**: Derivada de f em relação a x (notação de Leibniz)
- **dy/dx**: Derivada de y em relação a x

## Regras Básicas (Você Precisa Saber!)

### 1. Regra da Potência
Se f(x) = xⁿ, então f'(x) = n·xⁿ⁻¹

**Exemplos**:
- f(x) = x² → f'(x) = 2x
- f(x) = x³ → f'(x) = 3x²
- f(x) = x⁵ → f'(x) = 5x⁴

### 2. Regra da Constante
Se f(x) = c (constante), então f'(x) = 0

**Por quê?** Uma constante não muda, então sua taxa de variação é zero!

### 3. Regra da Soma
A derivada da soma é a soma das derivadas:
(f + g)' = f' + g'

**Exemplo**: Se f(x) = x² + 3x, então f'(x) = 2x + 3

### 4. Regra do Produto (Bônus)
(f · g)' = f'·g + f·g'

## Por que Derivadas são ESSENCIAIS em IA?

### Gradiente Descendente

No treinamento de redes neurais, usamos derivadas para **otimizar**:

1. **Calculamos a derivada** da função de erro em relação aos parâmetros
2. **Ajustamos os parâmetros** na direção oposta ao gradiente (descendo)
3. **Repetimos** até encontrar o mínimo (menor erro possível)

### Analogia da Montanha

Imagine que você está numa **montanha** (função de erro) e quer chegar ao **vale** (mínimo):
- A **derivada** te diz para onde a montanha está mais íngreme
- Você anda na **direção oposta** (descendo)
- Eventualmente chega ao fundo do vale (mínimo global)

### Backpropagation

O algoritmo de **backpropagation** (usado em todas as redes neurais) é essencialmente calcular derivadas em cadeia!

Veja o diagrama visual abaixo para entender melhor a derivada como inclinação!
          `,
          examples: [
            {
              title: 'Exemplo 1: Derivada de x²',
              description: 'Calcule a derivada de f(x) = x²',
              solution: 'f\'(x) = 2x (usando a regra da potência: n=2, então 2·x²⁻¹ = 2x)',
            },
            {
              title: 'Exemplo 2: Derivada de 3x + 5',
              description: 'Calcule a derivada de f(x) = 3x + 5',
              solution: 'f\'(x) = 3 (derivada de 3x é 3, derivada de constante 5 é 0)',
            },
          ],
        },
        exercises: [
          {
            id: 'ex1',
            question: 'Qual é a derivada de f(x) = x³?',
            type: 'multiple-choice',
            options: ['3x²', 'x²', '3x', 'x³'],
            correctAnswer: '3x²',
            explanation: 'Regra da potência: n=3, então 3·x³⁻¹ = 3x²',
          },
          {
            id: 'ex2',
            question: 'Qual é a derivada de f(x) = 5x?',
            type: 'input',
            correctAnswer: '5',
            explanation: 'A derivada de 5x é 5 (constante vezes x)',
          },
          {
            id: 'ex3',
            question: 'Qual é a derivada de f(x) = x² + 3x?',
            type: 'input',
            correctAnswer: '2x + 3',
            explanation: 'f\'(x) = 2x + 3 (derivada de x² é 2x, derivada de 3x é 3)',
          },
        ],
      },
      {
        id: 'gradientes',
        title: 'Gradientes',
        description: 'Entenda gradientes e como são usados em otimização',
        content: {
          theory: `
# Gradientes

## O que é um Gradiente?

Se a **derivada** é para funções de **uma variável**, o **gradiente** é para funções de **múltiplas variáveis**.

O **gradiente** é um **vetor** que contém todas as derivadas parciais de uma função. Ele aponta na direção de **maior crescimento** da função.

### Analogia Visual

Imagine que você está numa **montanha**:
- O **gradiente** é como uma **bússola** que aponta para o topo mais próximo
- Se você quer **subir** mais rápido, siga o gradiente
- Se você quer **descer** (encontrar o mínimo), vá na direção **oposta**

## Definição Matemática

Para uma função f(x, y), o gradiente é:

**∇f = [∂f/∂x, ∂f/∂y]**

Onde:
- **∂f/∂x**: Derivada parcial em relação a x (mantendo y constante)
- **∂f/∂y**: Derivada parcial em relação a y (mantendo x constante)

### Exemplo

Se f(x, y) = x² + y²:
- ∂f/∂x = 2x (derivada de x², y² é constante)
- ∂f/∂y = 2y (derivada de y², x² é constante)
- **∇f = [2x, 2y]**

## Gradiente Descendente: O Algoritmo que Treina Redes Neurais

O **Gradient Descent** (Gradiente Descendente) é o algoritmo **mais importante** em Machine Learning!

### Como Funciona

1. **Inicialização**: Começamos com parâmetros aleatórios (pesos da rede)
2. **Forward Pass**: Calculamos a saída e o erro
3. **Backward Pass**: Calculamos o gradiente (usando backpropagation)
4. **Atualização**: Movemos os parâmetros na direção oposta ao gradiente
5. **Repetição**: Voltamos ao passo 2 até convergir

### Fórmula de Atualização

**θ = θ - α · ∇f(θ)**

Onde:
- **θ**: Parâmetros (pesos)
- **α**: Taxa de aprendizado (learning rate)
- **∇f(θ)**: Gradiente da função de erro

### Learning Rate (Taxa de Aprendizado)

- **Muito pequeno**: Convergência lenta
- **Muito grande**: Pode "pular" o mínimo
- **Ideal**: Ajustado experimentalmente

## Por que é Tão Importante?

### 1. Treinamento de Redes Neurais
**TODAS** as redes neurais são treinadas com gradiente descendente (ou variações):
- Perceptron
- MLPs
- CNNs
- RNNs
- Transformers

### 2. Otimização de Modelos
Qualquer modelo de ML que precisa "aprender" usa gradientes:
- Regressão Linear
- SVM
- Árvores de Decisão (com boosting)

### 3. Fine-tuning
Até mesmo modelos pré-treinados (como GPT, BERT) usam gradientes para ajuste fino!

## Variações Modernas

- **SGD** (Stochastic Gradient Descent): Usa um subconjunto dos dados
- **Adam**: Adapta a taxa de aprendizado automaticamente
- **RMSprop**: Otimização para redes profundas

O gradiente descendente é literalmente o **coração** do aprendizado de máquina moderno!
          `,
          examples: [
            {
              title: 'Exemplo: Gradiente de f(x,y) = x² + y²',
              description: 'Calcule o gradiente',
              solution: '∇f = [2x, 2y] (derivada parcial em x é 2x, em y é 2y)',
            },
          ],
        },
        exercises: [
          {
            id: 'ex1',
            question: 'Para f(x,y) = 3x + 2y, qual é o gradiente no ponto (1, 1)?',
            type: 'multiple-choice',
            options: ['[3, 2]', '[1, 1]', '[4, 3]', '[3, 1]'],
            correctAnswer: '[3, 2]',
            explanation: 'O gradiente é sempre [3, 2] independente do ponto (função linear)',
          },
          {
            id: 'ex2',
            question: 'No gradiente descendente, movemos na direção:',
            type: 'multiple-choice',
            options: [
              'Oposta ao gradiente',
              'Do gradiente',
              'Perpendicular ao gradiente',
              'Aleatória',
            ],
            correctAnswer: 'Oposta ao gradiente',
            explanation: 'Movemos na direção oposta para minimizar a função',
          },
        ],
      },
    ],
  },
  {
    id: 'estatistica',
    title: 'Estatística',
    description: 'Distribuições, correlação e medidas estatísticas',
    icon: '📈',
    color: 'bg-purple-500',
    lessons: [
      {
        id: 'medidas-tendencia',
        title: 'Medidas de Tendência Central',
        description: 'Média, mediana e moda',
        content: {
          theory: `
# Medidas de Tendência Central

## O que são Medidas de Tendência Central?

Imagine que você quer saber a **altura média** de uma turma. Ou o **salário típico** de uma empresa. Essas são medidas de tendência central - elas descrevem o **"centro"** ou valor **típico** de um conjunto de dados.

## As Três Medidas Principais

### 1. Média (Mean) - A Mais Comum

A média é a **soma de todos os valores dividida pelo número de valores**:

**Média = (x₁ + x₂ + ... + xₙ) / n**

#### Exemplo Prático
Alturas: [160, 165, 170, 175, 180] cm
Média = (160 + 165 + 170 + 175 + 180) / 5 = 170 cm

#### Características
- ✅ Fácil de calcular
- ✅ Usa todos os dados
- ❌ Sensível a outliers (valores extremos)

#### Em IA
A média é usada para:
- **Normalização**: Subtrair a média dos dados
- **Feature engineering**: Criar features baseadas na média
- **Avaliação**: Calcular métricas como MAE (Mean Absolute Error)

### 2. Mediana (Median) - A Mais Robusta

A mediana é o **valor do meio** quando os dados estão ordenados:
- Se n é **ímpar**: valor central
- Se n é **par**: média dos dois valores centrais

#### Exemplo Prático
Salários: [1000, 2000, 3000, 4000, 50000] (ordenados)
Mediana = 3000 (valor do meio)

**Por que usar mediana?** O salário de 50000 é um outlier que distorce a média!

#### Características
- ✅ **Robusta** a outliers
- ✅ Representa melhor dados assimétricos
- ❌ Não usa todos os dados igualmente

#### Em IA
A mediana é usada para:
- **Preprocessing**: Remover outliers
- **Análise exploratória**: Entender distribuições
- **Métricas robustas**: Median Absolute Error

### 3. Moda (Mode) - O Mais Frequente

A moda é o valor que **aparece com mais frequência**.

#### Exemplo Prático
Cores favoritas: [azul, azul, verde, azul, vermelho, azul]
Moda = azul (aparece 4 vezes)

#### Características
- ✅ Útil para dados **categóricos**
- ✅ Não afetada por outliers
- ❌ Pode não existir ou haver múltiplas modas

#### Em IA
A moda é usada para:
- **Classificação**: Prever categoria mais comum
- **Imputação**: Preencher valores faltantes com a moda
- **Análise de features categóricas**

## Quando Usar Cada Uma?

### Use Média quando:
- ✅ Dados são **simétricos** (distribuição normal)
- ✅ **Sem outliers** significativos
- ✅ Precisa de uma medida que use todos os dados

### Use Mediana quando:
- ✅ Dados têm **outliers**
- ✅ Distribuição é **assimétrica**
- ✅ Precisa de uma medida **robusta**

### Use Moda quando:
- ✅ Dados são **categóricos** (cores, categorias)
- ✅ Quer saber o valor **mais comum**
- ✅ Dados nominais (sem ordem)

## Visualização

Veja o diagrama abaixo para visualizar como média, mediana e desvio padrão se relacionam com os dados!
          `,
          examples: [
            {
              title: 'Exemplo: Dados [2, 4, 4, 6, 8]',
              description: 'Calcule média, mediana e moda',
              solution: `
- Média: (2+4+4+6+8)/5 = 24/5 = 4.8
- Mediana: 4 (valor do meio)
- Moda: 4 (aparece 2 vezes)
              `,
            },
          ],
          visualizations: [
            {
              type: 'interactive',
              component: 'statistics',
              data: { showMean: true, showMedian: true },
            },
          ],
        },
        exercises: [
          {
            id: 'ex1',
            question: 'Qual é a média de [10, 20, 30, 40]?',
            type: 'input',
            correctAnswer: '25',
            explanation: '(10+20+30+40)/4 = 100/4 = 25',
          },
          {
            id: 'ex2',
            question: 'Qual é a mediana de [1, 3, 5, 7, 9]?',
            type: 'multiple-choice',
            options: ['3', '5', '7', '4'],
            correctAnswer: '5',
            explanation: 'O valor central quando ordenado é 5',
          },
          {
            id: 'ex3',
            question: 'Qual é a moda de [2, 3, 3, 4, 4, 4, 5]?',
            type: 'input',
            correctAnswer: '4',
            explanation: 'O valor 4 aparece 3 vezes, mais que qualquer outro',
          },
        ],
      },
      {
        id: 'desvio-padrao',
        title: 'Desvio Padrão',
        description: 'Entenda variabilidade e desvio padrão',
        content: {
          theory: `
# Desvio Padrão

## O que é Desvio Padrão?

Imagine duas turmas de alunos com a **mesma média** de nota (7.0):
- **Turma A**: [6.8, 7.0, 7.2, 6.9, 7.1] - notas muito próximas
- **Turma B**: [3.0, 7.0, 10.0, 5.0, 10.0] - notas muito espalhadas

Ambas têm média 7.0, mas são **completamente diferentes**! O desvio padrão mede essa **variabilidade**.

## Definição

O **desvio padrão** (σ) mede o quanto os dados se **espalham** em relação à média.

### Fórmula

**σ = √(Σ(xᵢ - μ)² / n)**

Onde:
- **σ**: Desvio padrão
- **xᵢ**: Cada valor individual
- **μ**: Média dos valores
- **n**: Número de valores

### Passo a Passo

1. Calcule a **média** (μ)
2. Para cada valor, calcule a **diferença** da média: (xᵢ - μ)
3. **Eleve ao quadrado**: (xᵢ - μ)² (remove sinais negativos)
4. **Some todos**: Σ(xᵢ - μ)²
5. **Divida por n**: Σ(xᵢ - μ)² / n (variância)
6. **Tire a raiz quadrada**: √(variância) = desvio padrão

## Interpretação Visual

Veja o diagrama abaixo! O desvio padrão mostra:
- **Linhas roxas**: ±1 desvio padrão da média
- **Dados dentro das linhas**: ~68% dos dados (regra empírica)
- **Desvio pequeno**: Dados concentrados (curva estreita)
- **Desvio grande**: Dados espalhados (curva larga)

## Regra Empírica (68-95-99.7)

Para dados com distribuição normal:
- **68%** dos dados estão dentro de ±1 desvio padrão
- **95%** dos dados estão dentro de ±2 desvios padrão
- **99.7%** dos dados estão dentro de ±3 desvios padrão

## Por que é ESSENCIAL em IA?

### 1. Normalização de Dados

Antes de treinar modelos, você **normaliza** os dados:
- **Z-score**: (x - μ) / σ
- Isso coloca todos os features na mesma escala
- **Crítico** para redes neurais!

### 2. Feature Scaling

Algoritmos como SVM, KNN, e redes neurais são sensíveis à escala:
- Features com valores grandes dominam
- Normalização resolve isso usando desvio padrão

### 3. Detecção de Outliers

Valores que estão a mais de **3 desvios padrão** da média são considerados outliers:
- Útil para limpeza de dados
- Prevenção de overfitting

### 4. Análise Exploratória

O desvio padrão te diz:
- Se os dados são **consistentes** ou **variáveis**
- Se precisa de mais dados
- Qual a confiança nas suas métricas

### 5. Regularização

Em modelos de ML, o desvio padrão ajuda a:
- **L2 Regularization**: Penaliza pesos grandes (relacionado à variância)
- **Dropout**: Reduz variância em redes neurais

## Exemplo Prático em ML

**Dataset de preços de casas**:
- Média: R$ 500.000
- Desvio padrão: R$ 100.000

**Interpretação**:
- 68% das casas custam entre R$ 400.000 e R$ 600.000
- Uma casa de R$ 800.000 está a 3 desvios (possível outlier)

Veja o diagrama visual para entender melhor!
          `,
          examples: [
            {
              title: 'Exemplo: Calcule o desvio padrão de [2, 4, 4, 4, 5, 5, 7, 9]',
              description: 'Passo a passo',
              solution: `
1. Média: (2+4+4+4+5+5+7+9)/8 = 40/8 = 5
2. Diferenças: [-3, -1, -1, -1, 0, 0, 2, 4]
3. Quadrados: [9, 1, 1, 1, 0, 0, 4, 16]
4. Média dos quadrados: 32/8 = 4
5. Desvio padrão: √4 = 2
              `,
            },
          ],
        },
        exercises: [
          {
            id: 'ex1',
            question: 'Se a média é 10 e os valores são [8, 10, 12], qual é aproximadamente o desvio padrão?',
            type: 'multiple-choice',
            options: ['1.63', '2', '1', '1.5'],
            correctAnswer: '1.63',
            explanation: 'Diferenças: [-2, 0, 2]. Quadrados: [4, 0, 4]. Média: 8/3 ≈ 2.67. √2.67 ≈ 1.63',
          },
          {
            id: 'ex2',
            question: 'Se o desvio padrão é grande, os dados são:',
            type: 'multiple-choice',
            options: [
              'Muito espalhados',
              'Próximos da média',
              'Todos iguais',
              'Impossível determinar',
            ],
            correctAnswer: 'Muito espalhados',
            explanation: 'Desvio padrão grande indica alta variabilidade',
          },
        ],
      },
      {
        id: 'correlacao',
        title: 'Correlação',
        description: 'Entenda como variáveis se relacionam',
        content: {
          theory: `
# Correlação

## O que é Correlação?

Imagine que você observa:
- Quando a **temperatura** aumenta, as vendas de **sorvete** também aumentam
- Quando o **preço** de um produto aumenta, as **vendas** diminuem

Essas são **correlações** - relações entre duas variáveis!

A **correlação** mede a **força e direção** da relação linear entre duas variáveis.

## Coeficiente de Correlação (r)

O coeficiente de correlação de Pearson varia de **-1 a +1**:

### r = +1: Correlação Positiva Perfeita
- Quando uma variável **aumenta**, a outra **aumenta** proporcionalmente
- **Exemplo**: Altura e peso (geralmente pessoas mais altas pesam mais)
- **Gráfico**: Linha reta subindo da esquerda para direita

### r = 0: Sem Correlação
- Não há relação linear entre as variáveis
- **Exemplo**: Número de sapatos e QI (não relacionado)
- **Gráfico**: Nuvem de pontos sem padrão

### r = -1: Correlação Negativa Perfeita
- Quando uma variável **aumenta**, a outra **diminui** proporcionalmente
- **Exemplo**: Preço e demanda (quanto mais caro, menos vendas)
- **Gráfico**: Linha reta descendo da esquerda para direita

## Interpretação da Força

### Correlação Forte: |r| > 0.7
- Relação muito clara entre as variáveis
- **Exemplo**: r = 0.85 entre horas de estudo e nota

### Correlação Moderada: 0.3 < |r| < 0.7
- Relação perceptível, mas não perfeita
- **Exemplo**: r = 0.5 entre exercício e perda de peso

### Correlação Fraca: |r| < 0.3
- Relação muito fraca ou inexistente
- **Exemplo**: r = 0.15 entre cor do cabelo e inteligência

## ⚠️ AVISO IMPORTANTE

### Correlação ≠ Causalidade!

**Correlação não implica causalidade!** Duas variáveis podem estar correlacionadas sem que uma cause a outra.

#### Exemplos Clássicos

1. **Correlação Espúria**:
   - Vendas de sorvete e afogamentos estão correlacionados
   - Mas não é porque sorvete causa afogamentos!
   - A **causa real** é o verão (terceira variável)

2. **Correlação Reversa**:
   - Mais médicos em uma cidade → Mais doenças?
   - Na verdade, mais doenças → mais médicos!

3. **Coincidência**:
   - Número de filmes de Nicolas Cage e afogamentos em piscinas
   - Correlação alta, mas completamente aleatória!

## Por que é CRUCIAL em IA?

### 1. Feature Selection (Seleção de Features)

Antes de treinar um modelo:
- **Remova features** altamente correlacionadas (redundantes)
- **Mantenha features** com alta correlação com o target
- **Reduz overfitting** e melhora performance

### 2. Detecção de Multicolinearidade

Em regressão linear:
- Features muito correlacionadas causam **instabilidade**
- Coeficientes ficam imprecisos
- **Solução**: Remover ou combinar features correlacionadas

### 3. Análise Exploratória de Dados (EDA)

A correlação ajuda a:
- **Entender** relações nos dados
- **Identificar** padrões interessantes
- **Priorizar** features para análise

### 4. Redução de Dimensionalidade

- **PCA** (Principal Component Analysis) usa correlação
- Encontra combinações de features não correlacionadas
- Reduz número de features mantendo informação

### 5. Feature Engineering

Criar novas features baseadas em correlações:
- **Interações**: Se X e Y são correlacionados, criar X×Y
- **Ratios**: Se há correlação, criar razões entre features

## Matriz de Correlação

Em datasets com muitas features, você cria uma **matriz de correlação**:
- Mostra correlação entre **todos os pares** de features
- Visualização em heatmap (mapa de calor)
- Identifica rapidamente features redundantes

## Exemplo Prático

**Dataset de casas**:
- Área e preço: r = 0.85 (forte correlação positiva)
- Número de quartos e preço: r = 0.72 (forte correlação positiva)
- Área e número de quartos: r = 0.65 (moderada - podem ser redundantes)

**Ação**: Considerar remover uma das features (área ou quartos) para evitar multicolinearidade.

A correlação é uma das ferramentas mais importantes na análise de dados e ML!
          `,
          examples: [
            {
              title: 'Exemplo: Correlação Positiva',
              description: 'Altura e peso geralmente têm correlação positiva',
              solution: 'Pessoas mais altas tendem a pesar mais, então r > 0',
            },
          ],
        },
        exercises: [
          {
            id: 'ex1',
            question: 'Se duas variáveis têm correlação r = -0.85, isso significa:',
            type: 'multiple-choice',
            options: [
              'Correlação negativa forte',
              'Correlação positiva forte',
              'Sem correlação',
              'Correlação moderada',
            ],
            correctAnswer: 'Correlação negativa forte',
            explanation: 'r = -0.85 está próximo de -1, indicando correlação negativa forte',
          },
        ],
      },
    ],
  },
  {
    id: 'probabilidade',
    title: 'Probabilidade',
    description: 'Fundamentos de probabilidade para Machine Learning',
    icon: '🎲',
    color: 'bg-purple-500',
    lessons: [
      {
        id: 'probabilidade-basica',
        title: 'Probabilidade Básica',
        description: 'Entenda o que é probabilidade e como usar em ML',
        content: {
          theory: `
# Probabilidade Básica

## O que é Probabilidade?

Probabilidade é uma forma de medir **incerteza**. Em programação, você já usa isso quando faz:

\`\`\`python
import random
resultado = random.choice([0, 1])  # 50% de chance de cada
\`\`\`

Em Machine Learning, **tudo é probabilístico**! Os modelos não dão respostas certas, dão **probabilidades**.

## Conceito Simples

**Probabilidade = Número de casos favoráveis / Número total de casos**

**Exemplo**: Qual a probabilidade de tirar "cara" ao jogar uma moeda?
- Casos favoráveis: 1 (cara)
- Total de casos: 2 (cara ou coroa)
- Probabilidade: 1/2 = 0.5 = 50%

## Em Código (Python)

\`\`\`python
# Simular probabilidade
import random

def probabilidade_cara():
    resultados = []
    for _ in range(1000):
        resultados.append(random.choice(['cara', 'coroa']))
    
    # Contar quantas vezes deu cara
    caras = resultados.count('cara')
    prob = caras / len(resultados)
    return prob  # Deve ser próximo de 0.5

# Em ML, você usa isso o tempo todo!
# Modelos retornam probabilidades:
# "Esta imagem tem 85% de chance de ser um gato"
\`\`\`

## Por que é Essencial em IA?

1. **Classificação**: Modelos retornam probabilidades (ex: 80% gato, 20% cachorro)
2. **Naive Bayes**: Algoritmo baseado totalmente em probabilidade
3. **Redes Neurais**: Última camada (softmax) retorna probabilidades
4. **Incerteza**: ML lida com incerteza, não certeza absoluta

## Distribuições Comuns

### Distribuição Uniforme
Todos os valores têm a mesma chance:

\`\`\`python
# Dado de 6 lados: cada face tem 1/6 de chance
import numpy as np
np.random.uniform(1, 7)  # Número entre 1 e 6
\`\`\`

### Distribuição Normal (Gaussiana)
A maioria dos valores fica perto da média (curva em sino):

\`\`\`python
# Altura das pessoas, erros de medição, etc
import numpy as np
dados = np.random.normal(170, 10, 1000)  # Média=170, Desvio=10
# A maioria fica entre 160-180
\`\`\`

## Probabilidade Condicional

**P(A|B)** = Probabilidade de A **dado que** B aconteceu

**Exemplo Prático em ML**:
- P(Spam | palavra="gratis") = Probabilidade de ser spam SE contém "gratis"
- Isso é usado em Naive Bayes!

\`\`\`python
# Exemplo conceitual
# Se um email tem "gratis", qual a chance de ser spam?
# P(spam | "gratis") = P("gratis" | spam) * P(spam) / P("gratis")
\`\`\`

## Aplicação Prática: Naive Bayes

\`\`\`python
from sklearn.naive_bayes import MultinomialNB

# Classificador de spam (usa probabilidade!)
modelo = MultinomialNB()
modelo.fit(X_treino, y_treino)

# Retorna probabilidades
probabilidades = modelo.predict_proba(X_teste)
# [[0.1, 0.9], [0.8, 0.2], ...]
# [probabilidade não-spam, probabilidade spam]
\`\`\`

## Resumo para Programadores

- **Probabilidade** = Medir incerteza (0 a 1, ou 0% a 100%)
- Em ML, modelos retornam **probabilidades**, não certezas
- Você já usa probabilidade quando faz \`random.choice()\`
- Naive Bayes, Softmax, e muitos algoritmos usam probabilidade
- **Não precisa calcular manualmente!** Bibliotecas fazem isso
          `,
          examples: [
            {
              title: 'Exemplo: Simular Probabilidade',
              description: 'Simule 1000 lançamentos de moeda',
              solution: `import random

resultados = [random.choice(['cara', 'coroa']) for _ in range(1000)]
prob_cara = resultados.count('cara') / len(resultados)
print(f"Probabilidade de cara: {prob_cara:.2%}")  # ~50%`,
            },
          ],
        },
        exercises: [
          {
            id: 'ex1',
            question: 'Se um modelo de ML retorna [0.2, 0.8] para uma imagem, isso significa:',
            type: 'multiple-choice',
            options: [
              '20% de chance classe 1, 80% de chance classe 2',
              '20% de certeza classe 1, 80% de certeza classe 2',
              'A imagem tem 80 pixels',
              'O modelo tem 80% de acurácia',
            ],
            correctAnswer: '20% de chance classe 1, 80% de chance classe 2',
            explanation: 'Modelos retornam probabilidades, não certezas absolutas',
          },
          {
            id: 'ex2',
            question: 'Qual a probabilidade de tirar um número par ao jogar um dado?',
            type: 'input',
            correctAnswer: '0.5',
            explanation: 'Números pares: 2, 4, 6 (3 casos). Total: 6. Probabilidade = 3/6 = 0.5',
          },
        ],
      },
    ],
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning Prático',
    description: 'Conceitos práticos essenciais para trabalhar com ML',
    icon: '🤖',
    color: 'bg-indigo-500',
    lessons: [
      {
        id: 'funcoes-custo',
        title: 'Funções de Custo/Perda',
        description: 'Entenda como modelos aprendem: minimizando o erro',
        content: {
          theory: `
# Funções de Custo/Perda (Loss Functions)

## O que é uma Função de Custo?

É uma **medida de erro**. O modelo tenta **minimizar** essa função para aprender.

Pense assim: o modelo está "tentando acertar" e a função de custo mede "quão errado ele está".

## Analogia Simples

Imagine que você está jogando dardos:
- **Função de custo** = quão longe você está do alvo
- **Treinar o modelo** = ajustar sua mira para acertar mais perto
- **Custo baixo** = acertou perto do alvo! 🎯
- **Custo alto** = errou feio! ❌

## Por que é Essencial?

**O modelo aprende minimizando o custo!** É assim que funciona:

1. Modelo faz uma previsão
2. Calcula o erro (função de custo)
3. Ajusta os pesos para reduzir o erro
4. Repete até o erro ficar pequeno

## MSE - Mean Squared Error (Regressão)

**Quando usar**: Prever números contínuos (preço, temperatura, etc)

\`\`\`python
from sklearn.metrics import mean_squared_error

# Exemplo: Prever preço de casas
y_real = [100, 200, 300]      # Preços reais
y_predito = [110, 190, 310]   # Preços que o modelo previu

mse = mean_squared_error(y_real, y_predito)
# MSE = média dos erros ao quadrado
# Quanto menor, melhor!
\`\`\`

**Fórmula**: MSE = (1/n) × Σ(y_real - y_predito)²

**Por que ao quadrado?** Para penalizar erros grandes mais!

## Cross-Entropy (Classificação)

**Quando usar**: Classificar em categorias (gato/cachorro, spam/não-spam)

\`\`\`python
from sklearn.metrics import log_loss

# Exemplo: Classificar imagens
y_real = [1, 0, 1]  # 1=gato, 0=cachorro
y_predito = [0.9, 0.2, 0.8]  # Probabilidades

cross_entropy = log_loss(y_real, y_predito)
# Quanto menor, melhor!
\`\`\`

**Por que usar?** Penaliza muito quando o modelo está "confiante mas errado"

## Em Redes Neurais (TensorFlow/Keras)

\`\`\`python
from tensorflow import keras

modelo = keras.Sequential([
    keras.layers.Dense(10, activation='relu'),
    keras.layers.Dense(1)  # Saída
])

# Escolha a função de custo baseado no problema:
# Regressão → MSE
modelo.compile(optimizer='adam', loss='mse')

# Classificação → Cross-entropy
modelo.compile(optimizer='adam', loss='binary_crossentropy')
# ou
modelo.compile(optimizer='adam', loss='categorical_crossentropy')
\`\`\`

## Resumo Prático

| Problema | Função de Custo | Código |
|----------|----------------|--------|
| Prever número (regressão) | MSE | \`loss='mse'\` |
| Classificar 2 classes | Binary Cross-Entropy | \`loss='binary_crossentropy'\` |
| Classificar várias classes | Categorical Cross-Entropy | \`loss='categorical_crossentropy'\` |

**Dica**: Você não precisa implementar! Escolha a função certa e a biblioteca faz o resto.

## Visualização do Aprendizado

Durante o treinamento, você vê o custo diminuindo:

\`\`\`python
# Ao treinar, você vê:
# Época 1: loss = 0.5
# Época 2: loss = 0.3
# Época 3: loss = 0.2
# ...
# Época 100: loss = 0.01  ← Modelo aprendeu!
\`\`\`

**Custo diminuindo = Modelo aprendendo!** 📉
          `,
          examples: [
            {
              title: 'Exemplo: MSE em Regressão',
              description: 'Calcule o MSE para previsões de preço',
              solution: `from sklearn.metrics import mean_squared_error

precos_reais = [100000, 200000, 300000]
precos_preditos = [105000, 195000, 310000]

mse = mean_squared_error(precos_reais, precos_preditos)
print(f"Erro médio: {mse:.0f}")  # Quanto menor, melhor!`,
            },
          ],
        },
        exercises: [
          {
            id: 'ex1',
            question: 'Para prever o preço de uma casa, qual função de custo usar?',
            type: 'multiple-choice',
            options: [
              'MSE (Mean Squared Error)',
              'Cross-Entropy',
              'Accuracy',
              'Precision',
            ],
            correctAnswer: 'MSE (Mean Squared Error)',
            explanation: 'MSE é usado para regressão (prever números contínuos como preços)',
          },
          {
            id: 'ex2',
            question: 'O que significa quando a função de custo diminui durante o treinamento?',
            type: 'multiple-choice',
            options: [
              'O modelo está aprendendo (erro diminuindo)',
              'O modelo está piorando',
              'O modelo parou de aprender',
              'Houve um erro no código',
            ],
            correctAnswer: 'O modelo está aprendendo (erro diminuindo)',
            explanation: 'Custo = erro. Custo diminuindo = erro diminuindo = modelo melhorando!',
          },
        ],
      },
      {
        id: 'overfitting-underfitting',
        title: 'Overfitting e Underfitting',
        description: 'Os problemas mais comuns em ML e como resolver',
        content: {
          theory: `
# Overfitting e Underfitting

## O Problema Mais Comum em ML

Esses são os **dois maiores problemas** que você vai enfrentar. Entender isso é **essencial**!

## Underfitting (Subajuste)

**O que é**: Modelo muito simples, não aprende nem os dados de treino.

**Sintomas**:
- Erro alto no treino
- Erro alto no teste
- Modelo "não entendeu" os dados

**Analogia**: Como um estudante que não estudou nada e vai mal em tudo.

\`\`\`python
# Exemplo: Modelo muito simples para dados complexos
from sklearn.linear_model import LinearRegression

# Dados complexos (não-lineares)
X = [[1], [2], [3], [4], [5]]
y = [1, 4, 9, 16, 25]  # y = x² (curva!)

modelo = LinearRegression()  # Muito simples!
modelo.fit(X, y)
# Vai ter erro alto - modelo linear não captura curva
\`\`\`

**Solução**: Usar modelo mais complexo (mais camadas, mais features, etc)

## Overfitting (Sobreajuste)

**O que é**: Modelo muito complexo, "decorou" os dados de treino mas não generaliza.

**Sintomas**:
- Erro **baixo** no treino (parece perfeito!)
- Erro **alto** no teste (não funciona com dados novos)
- Modelo "decorou" ao invés de "aprender"

**Analogia**: Como um estudante que decorou tudo mas não entendeu - vai mal em provas novas.

\`\`\`python
# Exemplo visual do problema:
# Treino: accuracy = 99%  ← Parece ótimo!
# Teste: accuracy = 60%    ← Mas não funciona com dados novos!
\`\`\`

**Solução**: Regularização, mais dados, modelo mais simples

## Como Identificar?

\`\`\`python
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Dividir dados
X_treino, X_teste, y_treino, y_teste = train_test_split(X, y, test_size=0.2)

# Treinar
modelo.fit(X_treino, y_treino)

# Avaliar
acc_treino = accuracy_score(y_treino, modelo.predict(X_treino))
acc_teste = accuracy_score(y_teste, modelo.predict(X_teste))

print(f"Treino: {acc_treino:.2%}")
print(f"Teste: {acc_teste:.2%}")

# Se acc_treino >> acc_teste → OVERFITTING!
# Se ambos baixos → UNDERFITTING!
\`\`\`

## Soluções Práticas

### Para Overfitting:

1. **Regularização** (L1, L2)
\`\`\`python
from sklearn.linear_model import Ridge  # L2
modelo = Ridge(alpha=0.1)  # alpha = força da regularização
\`\`\`

2. **Dropout** (em redes neurais)
\`\`\`python
from tensorflow import keras
keras.layers.Dropout(0.5)  # Desativa 50% dos neurônios aleatoriamente
\`\`\`

3. **Mais dados** (sempre ajuda!)

4. **Early Stopping** (parar antes de decorar)
\`\`\`python
from tensorflow import keras
modelo.fit(X, y, validation_split=0.2, epochs=100,
           callbacks=[keras.callbacks.EarlyStopping(patience=5)])
# Para se não melhorar por 5 épocas
\`\`\`

### Para Underfitting:

1. **Modelo mais complexo**
2. **Mais features** (mais informações)
3. **Treinar por mais tempo**

## O Equilíbrio Perfeito

**Ideal**: Erro de treino e teste similares e baixos!

\`\`\`python
# Bom modelo:
# Treino: accuracy = 85%
# Teste: accuracy = 83%  ← Próximos! Generaliza bem!
\`\`\`

## Resumo Visual

- **Underfitting**: Modelo muito simples, não captura padrão
- **Overfitting**: Modelo muito complexo, decorou os dados
- **Ideal**: Modelo que captura padrão e generaliza

## Dica de Ouro

**Sempre compare treino vs teste!** Se a diferença for grande, você tem um problema.
          `,
          examples: [
            {
              title: 'Exemplo: Detectar Overfitting',
              description: 'Compare acurácia de treino e teste',
              solution: `from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Dividir dados
X_treino, X_teste, y_treino, y_teste = train_test_split(X, y)

# Treinar e avaliar
modelo.fit(X_treino, y_treino)
acc_treino = accuracy_score(y_treino, modelo.predict(X_treino))
acc_teste = accuracy_score(y_teste, modelo.predict(X_teste))

# Se acc_treino muito maior que acc_teste → Overfitting!
if acc_treino - acc_teste > 0.2:
    print("ATENÇÃO: Possível overfitting!")`,
            },
          ],
        },
        exercises: [
          {
            id: 'ex1',
            question: 'Um modelo tem accuracy de 99% no treino e 60% no teste. Isso indica:',
            type: 'multiple-choice',
            options: [
              'Overfitting (decorou os dados)',
              'Underfitting (modelo muito simples)',
              'Modelo perfeito',
              'Erro no código',
            ],
            correctAnswer: 'Overfitting (decorou os dados)',
            explanation: 'Grande diferença entre treino e teste indica overfitting',
          },
          {
            id: 'ex2',
            question: 'Qual técnica ajuda a reduzir overfitting?',
            type: 'multiple-choice',
            options: [
              'Regularização (L1/L2)',
              'Usar modelo mais complexo',
              'Treinar por mais tempo',
              'Usar menos dados',
            ],
            correctAnswer: 'Regularização (L1/L2)',
            explanation: 'Regularização penaliza modelos muito complexos, reduzindo overfitting',
          },
        ],
      },
      {
        id: 'metricas-avaliacao',
        title: 'Métricas de Avaliação',
        description: 'Como medir se seu modelo está bom',
        content: {
          theory: `
# Métricas de Avaliação

## Por que Precisamos de Métricas?

Você precisa saber: **seu modelo está bom ou ruim?** Métricas te dão essa resposta!

## Accuracy (Acurácia) - A Mais Simples

**Quando usar**: Problemas balanceados (classes com quantidades similares)

\`\`\`python
from sklearn.metrics import accuracy_score

y_real = [1, 0, 1, 1, 0]
y_predito = [1, 0, 1, 0, 0]

accuracy = accuracy_score(y_real, y_predito)
# 4 de 5 corretos = 0.8 = 80%
\`\`\`

**Problema**: Não funciona bem quando classes são desbalanceadas!

**Exemplo do problema**:
- 1000 emails: 990 não-spam, 10 spam
- Modelo que sempre diz "não-spam" tem 99% accuracy!
- Mas é inútil (nunca detecta spam)!

## Precision (Precisão)

**Pergunta**: Das vezes que o modelo disse "spam", quantas eram realmente spam?

**Quando usar**: Quando falsos positivos são caros (ex: marcar email importante como spam)

\`\`\`python
from sklearn.metrics import precision_score

precision = precision_score(y_real, y_predito)
# Das previsões positivas, quantas eram realmente positivas?
\`\`\`

## Recall (Revocação/Sensibilidade)

**Pergunta**: De todos os spams reais, quantos o modelo encontrou?

**Quando usar**: Quando falsos negativos são caros (ex: deixar spam passar)

\`\`\`python
from sklearn.metrics import recall_score

recall = recall_score(y_real, y_predito)
# Dos casos positivos reais, quantos foram encontrados?
\`\`\`

## F1-Score - O Equilíbrio

**Combina Precision e Recall** em uma única métrica.

**Quando usar**: Quando precisa balancear precision e recall

\`\`\`python
from sklearn.metrics import f1_score

f1 = f1_score(y_real, y_predito)
# Média harmônica de precision e recall
\`\`\`

## Matriz de Confusão - Visualizar Tudo

**A melhor forma de entender seu modelo!**

\`\`\`python
from sklearn.metrics import confusion_matrix
import seaborn as sns
import matplotlib.pyplot as plt

cm = confusion_matrix(y_real, y_predito)
sns.heatmap(cm, annot=True, fmt='d')
plt.show()

# Mostra:
#          Predito
#        0    1
# Real 0 [TN  FP]
#     1 [FN  TP]
\`\`\`

**O que significa**:
- **TP (True Positive)**: Acertou positivo
- **TN (True Negative)**: Acertou negativo
- **FP (False Positive)**: Errou (disse positivo mas era negativo)
- **FN (False Negative)**: Errou (disse negativo mas era positivo)

## Qual Métrica Usar?

| Situação | Métrica |
|----------|---------|
| Classes balanceadas | Accuracy |
| Falsos positivos são caros | Precision |
| Falsos negativos são caros | Recall |
| Precisa balancear ambos | F1-Score |
| Quer ver tudo | Matriz de Confusão |

## Exemplo Prático: Detecção de Spam

\`\`\`python
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score

# Resultados do modelo
y_real = [1, 1, 0, 1, 0, 0, 1, 0]  # 1=spam, 0=não-spam
y_predito = [1, 1, 0, 0, 0, 1, 1, 0]

print(f"Accuracy: {accuracy_score(y_real, y_predito):.2%}")
print(f"Precision: {precision_score(y_real, y_predito):.2%}")
print(f"Recall: {recall_score(y_real, y_predito):.2%}")
print(f"F1: {f1_score(y_real, y_predito):.2%}")

# Interpretação:
# - Accuracy: 75% dos emails classificados corretamente
# - Precision: Das vezes que disse spam, 75% eram realmente spam
# - Recall: Dos spams reais, encontrou 75%
# - F1: Balanceamento entre precision e recall
\`\`\`

## Para Regressão (Prever Números)

\`\`\`python
from sklearn.metrics import mean_squared_error, mean_absolute_error, r2_score

# MSE (já vimos)
mse = mean_squared_error(y_real, y_predito)

# MAE (mais fácil de interpretar)
mae = mean_absolute_error(y_real, y_predito)
# Erro médio absoluto: "em média, erra X unidades"

# R² (quanto do erro explica)
r2 = r2_score(y_real, y_predito)
# 1.0 = perfeito, 0.0 = não explica nada
\`\`\`

## Resumo para Programadores

- **Accuracy**: Simples, mas cuidado com classes desbalanceadas
- **Precision/Recall**: Use quando falsos positivos/negativos importam
- **F1**: Bom equilíbrio geral
- **Matriz de Confusão**: Sempre olhe! Mostra tudo
- **Para regressão**: MSE, MAE, R²

**Dica**: Comece sempre com matriz de confusão para entender o modelo!
          `,
          examples: [
            {
              title: 'Exemplo: Calcular Todas as Métricas',
              description: 'Avalie um modelo de classificação',
              solution: `from sklearn.metrics import (accuracy_score, precision_score, 
                          recall_score, f1_score, confusion_matrix)

y_real = [1, 1, 0, 1, 0]
y_predito = [1, 0, 0, 1, 1]

print(f"Accuracy: {accuracy_score(y_real, y_predito):.2%}")
print(f"Precision: {precision_score(y_real, y_predito):.2%}")
print(f"Recall: {recall_score(y_real, y_predito):.2%}")
print(f"F1: {f1_score(y_real, y_predito):.2%}")
print(f"Matriz de Confusão:\\n{confusion_matrix(y_real, y_predito)}")`,
            },
          ],
        },
        exercises: [
          {
            id: 'ex1',
            question: 'Para um problema onde falsos negativos são muito caros (ex: detectar câncer), qual métrica priorizar?',
            type: 'multiple-choice',
            options: [
              'Recall (encontrar todos os casos positivos)',
              'Precision (evitar falsos positivos)',
              'Accuracy',
              'F1-Score',
            ],
            correctAnswer: 'Recall (encontrar todos os casos positivos)',
            explanation: 'Recall mede quantos casos positivos foram encontrados. Importante quando não pode deixar passar casos positivos',
          },
          {
            id: 'ex2',
            question: 'O que mostra uma Matriz de Confusão?',
            type: 'multiple-choice',
            options: [
              'TP, TN, FP, FN - todos os tipos de acertos e erros',
              'Apenas os acertos',
              'Apenas os erros',
              'A complexidade do modelo',
            ],
            correctAnswer: 'TP, TN, FP, FN - todos os tipos de acertos e erros',
            explanation: 'Matriz de confusão mostra todos os 4 casos: verdadeiros positivos/negativos e falsos positivos/negativos',
          },
        ],
      },
      {
        id: 'normalizacao-standardizacao',
        title: 'Normalização e Standardização',
        description: 'Por que e como normalizar dados antes de treinar',
        content: {
          theory: `
# Normalização e Standardização

## Por que Normalizar?

**Muitos algoritmos de ML funcionam melhor com dados normalizados!**

**Problema**: Features com escalas diferentes confundem o modelo.

**Exemplo do problema**:
\`\`\`python
# Dados de casas
area = [50, 100, 150]      # metros² (valores pequenos)
preco = [50000, 100000, 150000]  # reais (valores grandes)

# O modelo vai dar mais peso para "preco" só porque os números são maiores!
# Mas área também é importante!
\`\`\`

**Solução**: Colocar tudo na mesma escala!

## Normalização (Min-Max Scaling)

**Transforma valores para o intervalo [0, 1]**

\`\`\`python
from sklearn.preprocessing import MinMaxScaler

scaler = MinMaxScaler()
X_normalizado = scaler.fit_transform(X)

# Antes: [50, 100, 150]
# Depois: [0.0, 0.5, 1.0]  # Tudo entre 0 e 1!
\`\`\`

**Fórmula**: (valor - mínimo) / (máximo - mínimo)

**Quando usar**: Quando você sabe os limites dos dados (ex: 0-255 para imagens)

## Standardização (Z-score)

**Transforma para média=0 e desvio padrão=1**

\`\`\`python
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
X_padronizado = scaler.fit_transform(X)

# Antes: [50, 100, 150]
# Depois: [-1.22, 0.0, 1.22]  # Média=0, desvio=1
\`\`\`

**Fórmula**: (valor - média) / desvio padrão

**Quando usar**: Quando você não sabe os limites (mais comum!)

## Qual Usar?

| Situação | Método |
|----------|--------|
| Dados com limites conhecidos (0-255) | Normalização (Min-Max) |
| Dados sem limites claros | Standardização (Z-score) |
| Redes Neurais | Standardização (geralmente melhor) |
| KNN, SVM | Standardização (essencial!) |

## Exemplo Completo

\`\`\`python
import pandas as pd
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
X_teste_scaled = scaler.transform(X_teste)  # Usa mesma escala do treino!

# Agora pode treinar
modelo.fit(X_treino_scaled, y_treino)
\`\`\`

**⚠️ ERRO COMUM**: Normalizar treino e teste juntos! Isso "vaza" informação do teste para o treino.

## Pipeline (Fazer Tudo de Uma Vez)

\`\`\`python
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

# Cria pipeline: normaliza → treina
pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('modelo', LogisticRegression())
])

# Treina tudo de uma vez (normaliza automaticamente)
pipeline.fit(X_treino, y_treino)
pipeline.predict(X_teste)  # Normaliza automaticamente também!
\`\`\`

## Quando NÃO Normalizar?

- **Árvores de Decisão** (Random Forest, XGBoost): Não precisam!
- **Naive Bayes**: Geralmente não precisa
- **Dados já na mesma escala**: Desnecessário

## Resumo Prático

1. **Sempre normalize** para: KNN, SVM, Redes Neurais, Regressão Linear
2. **Use StandardScaler** (mais comum)
3. **Normalize APENAS com dados de treino**, depois aplique no teste
4. **Use Pipeline** para facilitar

**Dica**: Se não tiver certeza, normalize! Raramente faz mal.
          `,
          examples: [
            {
              title: 'Exemplo: Normalizar Dados',
              description: 'Use StandardScaler antes de treinar',
              solution: `from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split

# Dividir dados
X_treino, X_teste, y_treino, y_teste = train_test_split(X, y)

# Normalizar
scaler = StandardScaler()
X_treino_scaled = scaler.fit_transform(X_treino)
X_teste_scaled = scaler.transform(X_teste)  # Não fit! Só transform!

# Treinar com dados normalizados
modelo.fit(X_treino_scaled, y_treino)`,
            },
          ],
        },
        exercises: [
          {
            id: 'ex1',
            question: 'Por que é importante normalizar dados antes de treinar modelos como KNN ou SVM?',
            type: 'multiple-choice',
            options: [
              'Features com escalas diferentes confundem o modelo',
              'Para acelerar o treinamento',
              'Para reduzir o tamanho dos dados',
              'Para aumentar a acurácia sempre',
            ],
            correctAnswer: 'Features com escalas diferentes confundem o modelo',
            explanation: 'Algoritmos como KNN e SVM são sensíveis à escala. Features grandes dominam features pequenas se não normalizar',
          },
          {
            id: 'ex2',
            question: 'Qual é o erro comum ao normalizar dados?',
            type: 'multiple-choice',
            options: [
              'Normalizar treino e teste juntos (vaza informação)',
              'Normalizar apenas o treino',
              'Usar StandardScaler ao invés de MinMaxScaler',
              'Normalizar a variável target (y)',
            ],
            correctAnswer: 'Normalizar treino e teste juntos (vaza informação)',
            explanation: 'Deve normalizar apenas com dados de treino, depois aplicar a mesma transformação no teste',
          },
        ],
      },
    ],
  },
]

