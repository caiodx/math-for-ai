import { useState } from 'react'
import { Exercise } from '../types'
import { CheckCircle2, XCircle, Lightbulb, HelpCircle } from 'lucide-react'

interface ExerciseCardProps {
  exercise: Exercise
  index: number
  onComplete: () => void
  isCompleted: boolean
}

export default function ExerciseCard({
  exercise,
  index,
  onComplete,
  isCompleted,
}: ExerciseCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('')
  const [userInput, setUserInput] = useState<string>('')
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [showHint, setShowHint] = useState(false)

  const handleSubmit = () => {
    let correct = false

    if (exercise.type === 'multiple-choice') {
      correct = selectedAnswer === exercise.correctAnswer
    } else if (exercise.type === 'input') {
      // Normalize answers for comparison
      const normalizedUser = userInput.trim().toLowerCase()
      const normalizedCorrect = String(exercise.correctAnswer)
        .trim()
        .toLowerCase()
      correct = normalizedUser === normalizedCorrect
    }

    setIsCorrect(correct)
    setShowResult(true)

    if (correct && !isCompleted) {
      setTimeout(() => {
        onComplete()
      }, 1000)
    }
  }

  const handleReset = () => {
    setSelectedAnswer('')
    setUserInput('')
    setShowResult(false)
    setIsCorrect(false)
    setShowHint(false)
  }

  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md border-2 transition-all ${
        isCompleted
          ? 'border-green-500 dark:border-green-400'
          : showResult && isCorrect
          ? 'border-green-500 dark:border-green-400'
          : showResult && !isCorrect
          ? 'border-red-500 dark:border-red-400'
          : 'border-gray-200 dark:border-gray-700'
      }`}
    >
      <div className="p-6 space-y-4">
        {/* Question Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3 flex-1">
            <div
              className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                isCompleted
                  ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                  : 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
              }`}
            >
              {isCompleted ? (
                <CheckCircle2 className="w-5 h-5" />
              ) : (
                index
              )}
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex-1">
              {exercise.question}
            </h4>
          </div>
        </div>

        {/* Hint Button */}
        {exercise.hint && !showHint && !isCompleted && (
          <button
            onClick={() => setShowHint(true)}
            className="flex items-center space-x-2 text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
          >
            <Lightbulb className="w-4 h-4" />
            <span>Mostrar dica</span>
          </button>
        )}

        {/* Hint Display */}
        {showHint && exercise.hint && (
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <div className="flex items-start space-x-2">
              <HelpCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                {exercise.hint}
              </p>
            </div>
          </div>
        )}

        {/* Multiple Choice */}
        {exercise.type === 'multiple-choice' && exercise.options && (
          <div className="space-y-2">
            {exercise.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => !showResult && setSelectedAnswer(option)}
                disabled={showResult || isCompleted}
                className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                  selectedAnswer === option
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700'
                } ${
                  showResult && option === exercise.correctAnswer
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                    : ''
                } ${
                  showResult &&
                  selectedAnswer === option &&
                  option !== exercise.correctAnswer
                    ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                    : ''
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <span className="text-gray-900 dark:text-white">
                  {option}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        {exercise.type === 'input' && (
          <div>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              disabled={showResult || isCompleted}
              placeholder="Digite sua resposta..."
              className="w-full px-4 py-2 border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-primary-500 disabled:opacity-50"
            />
          </div>
        )}

        {/* Result */}
        {showResult && (
          <div
            className={`rounded-lg p-4 ${
              isCorrect
                ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
            }`}
          >
            <div className="flex items-start space-x-2">
              {isCorrect ? (
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
              )}
              <div className="flex-1">
                <p
                  className={`font-medium mb-2 ${
                    isCorrect
                      ? 'text-green-800 dark:text-green-200'
                      : 'text-red-800 dark:text-red-200'
                  }`}
                >
                  {isCorrect ? 'Correto! 🎉' : 'Incorreto. Tente novamente!'}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {exercise.explanation}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        {!isCompleted && (
          <div className="flex items-center space-x-3">
            {!showResult ? (
              <button
                onClick={handleSubmit}
                disabled={
                  (exercise.type === 'multiple-choice' && !selectedAnswer) ||
                  (exercise.type === 'input' && !userInput.trim())
                }
                className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Verificar Resposta
              </button>
            ) : (
              <button
                onClick={handleReset}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Tentar Novamente
              </button>
            )}
          </div>
        )}

        {/* Completed Badge */}
        {isCompleted && (
          <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
            <CheckCircle2 className="w-5 h-5" />
            <span className="text-sm font-medium">Exercício completo!</span>
          </div>
        )}
      </div>
    </div>
  )
}

