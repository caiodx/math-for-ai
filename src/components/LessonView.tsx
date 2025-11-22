import { useState } from 'react'
import { Lesson } from '../types'
import ExerciseCard from './ExerciseCard'
import { CheckCircle2, BookOpen } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import VectorVisualization from './visualizations/VectorVisualization'
import FunctionGraph from './visualizations/FunctionGraph'
import MatrixVisualization from './visualizations/MatrixVisualization'
import StatisticsChart from './visualizations/StatisticsChart'
import VectorDiagram from './visualizations/VectorDiagram'
import VectorOperationsDiagram from './visualizations/VectorOperationsDiagram'
import MatrixDiagram from './visualizations/MatrixDiagram'
import DerivativeDiagram from './visualizations/DerivativeDiagram'
import StatisticsDiagram from './visualizations/StatisticsDiagram'
import VectorsTheory from './theory/VectorsTheory'
import MatricesTheory from './theory/MatricesTheory'
import DerivativesTheory from './theory/DerivativesTheory'
import StatisticsTheory from './theory/StatisticsTheory'
import GradientsTheory from './theory/GradientsTheory'
import StdDevTheory from './theory/StdDevTheory'
import CorrelationTheory from './theory/CorrelationTheory'
import MagnitudeDirectionTheory from './theory/MagnitudeDirectionTheory'
import ProbabilityTheory from './theory/ProbabilityTheory'
import LossFunctionsTheory from './theory/LossFunctionsTheory'
import OverfittingTheory from './theory/OverfittingTheory'
import MetricsTheory from './theory/MetricsTheory'
import NormalizationTheory from './theory/NormalizationTheory'

interface LessonViewProps {
  lesson: Lesson
  onComplete: () => void
  isCompleted: boolean
}

export default function LessonView({
  lesson,
  onComplete,
  isCompleted,
}: LessonViewProps) {
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(
    new Set()
  )

  const handleExerciseComplete = (exerciseId: string) => {
    setCompletedExercises((prev) => new Set(prev).add(exerciseId))
    
    // Check if all exercises are completed
    if (
      completedExercises.size + 1 === lesson.exercises.length &&
      !isCompleted
    ) {
      onComplete()
    }
  }

  const allExercisesCompleted =
    completedExercises.size === lesson.exercises.length

  return (
    <div className="space-y-6">
      {/* Lesson Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <BookOpen className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {lesson.title}
            </h2>
          </div>
          {isCompleted && (
            <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-sm font-medium">Completo</span>
            </div>
          )}
        </div>
        <p className="text-gray-600 dark:text-gray-300">{lesson.description}</p>
      </div>

      {/* Theory Content - Custom Components */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
        {lesson.id === 'vetores' && <VectorsTheory />}
        {lesson.id === 'magnitude-direcao' && <MagnitudeDirectionTheory />}
        {lesson.id === 'matrizes' && <MatricesTheory />}
        {lesson.id === 'derivadas' && <DerivativesTheory />}
        {lesson.id === 'gradientes' && <GradientsTheory />}
        {lesson.id === 'medidas-tendencia' && <StatisticsTheory />}
        {lesson.id === 'desvio-padrao' && <StdDevTheory />}
        {lesson.id === 'correlacao' && <CorrelationTheory />}
        {lesson.id === 'probabilidade-basica' && <ProbabilityTheory />}
        {lesson.id === 'funcoes-custo' && <LossFunctionsTheory />}
        {lesson.id === 'overfitting-underfitting' && <OverfittingTheory />}
        {lesson.id === 'metricas-avaliacao' && <MetricsTheory />}
        {lesson.id === 'normalizacao-standardizacao' && <NormalizationTheory />}
        
        {/* Fallback to markdown for other lessons */}
        {!['vetores', 'magnitude-direcao', 'matrizes', 'derivadas', 'gradientes', 'medidas-tendencia', 'desvio-padrao', 'correlacao', 'probabilidade-basica', 'funcoes-custo', 'overfitting-underfitting', 'metricas-avaliacao', 'normalizacao-standardizacao'].includes(lesson.id) && (
          <>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Teoria
            </h3>
            <div className="prose prose-sm dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-white prose-code:text-primary-600 dark:prose-code:text-primary-400">
              <ReactMarkdown>{lesson.content.theory}</ReactMarkdown>
            </div>
          </>
        )}

        {/* Visual Diagrams for specific lessons */}
        {lesson.id === 'vetores' && (
          <div className="mt-6 space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Visualização: Vetor no Plano 2D
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Operações com Vetores
              </h4>
              <div className="space-y-4">
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
            </div>
          </div>
        )}

        {lesson.id === 'matrizes' && (
          <div className="mt-6 space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Visualização: Matriz e sua Transposta
              </h4>
              <MatrixDiagram
                matrix={[
                  [1, 2, 3],
                  [4, 5, 6],
                ]}
                label="A"
                color="#3b82f6"
                showTranspose={true}
              />
            </div>
          </div>
        )}

        {lesson.id === 'derivadas' && (
          <div className="mt-6 space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Visualização: Derivada como Inclinação
              </h4>
              <DerivativeDiagram showTangent={true} point={2} />
            </div>
          </div>
        )}

        {lesson.id === 'medidas-tendencia' && (
          <div className="mt-6 space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Visualização: Medidas Estatísticas
              </h4>
              <StatisticsDiagram
                data={[10, 20, 15, 25, 18, 22, 30, 12, 28, 20]}
                showMean={true}
                showMedian={true}
                showStdDev={true}
              />
            </div>
          </div>
        )}

        {lesson.id === 'desvio-padrao' && (
          <div className="mt-6 space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Visualização: Desvio Padrão
              </h4>
              <StatisticsDiagram
                data={[2, 4, 4, 4, 5, 5, 7, 9]}
                showMean={true}
                showStdDev={true}
              />
            </div>
          </div>
        )}

        {/* Examples */}
        {lesson.content.examples && lesson.content.examples.length > 0 && (
          <div className="mt-6 space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Exemplos
            </h4>
            {lesson.content.examples.map((example, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 border border-gray-200 dark:border-gray-600"
              >
                <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {example.title}
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {example.description}
                </p>
                <div className="bg-white dark:bg-gray-800 rounded p-3 border border-gray-200 dark:border-gray-600">
                  <p className="text-sm font-mono text-gray-900 dark:text-white whitespace-pre-wrap">
                    {example.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Visualizations */}
      {lesson.content.visualizations && lesson.content.visualizations.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Visualizações Interativas
          </h3>
          {lesson.content.visualizations.map((viz, index) => {
            if (viz.type === 'interactive' && viz.component === 'vector') {
              return (
                <VectorVisualization
                  key={index}
                  showSum={viz.data?.showSum}
                  showDotProduct={viz.data?.showDotProduct}
                />
              )
            }
            if (viz.type === 'interactive' && viz.component === 'function') {
              return (
                <FunctionGraph
                  key={index}
                  functionType={viz.data?.functionType}
                  showDerivative={viz.data?.showDerivative}
                  showTangent={viz.data?.showTangent}
                  tangentPoint={viz.data?.tangentPoint}
                />
              )
            }
            if (viz.type === 'interactive' && viz.component === 'matrix') {
              return (
                <MatrixVisualization
                  key={index}
                  initialMatrix={viz.data?.initialMatrix}
                  showOperations={viz.data?.showOperations}
                />
              )
            }
            if (viz.type === 'interactive' && viz.component === 'statistics') {
              return (
                <StatisticsChart
                  key={index}
                  showMean={viz.data?.showMean}
                  showMedian={viz.data?.showMedian}
                />
              )
            }
            return null
          })}
        </div>
      )}

      {/* Exercises */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Exercícios
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {completedExercises.size} / {lesson.exercises.length} completos
          </span>
        </div>
        {lesson.exercises.map((exercise, index) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            index={index + 1}
            onComplete={() => handleExerciseComplete(exercise.id)}
            isCompleted={completedExercises.has(exercise.id)}
          />
        ))}
      </div>

      {/* Completion Message */}
      {allExercisesCompleted && !isCompleted && (
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <div className="flex items-center space-x-2 text-green-800 dark:text-green-200">
            <CheckCircle2 className="w-5 h-5" />
            <p className="font-medium">
              Parabéns! Você completou todos os exercícios desta lição!
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

