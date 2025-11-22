import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Topic } from '../types'
import { ChevronRight, CheckCircle2, Circle, BookOpen } from 'lucide-react'

interface TopicPageProps {
  topic: Topic
}

export default function TopicPage({ topic }: TopicPageProps) {
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(
    new Set()
  )

  useEffect(() => {
    // Load completed lessons from localStorage
    const saved = localStorage.getItem(`completed-${topic.id}`)
    if (saved) {
      setCompletedLessons(new Set(JSON.parse(saved)))
    }
  }, [topic.id])

  return (
    <div className="space-y-6">
      {/* Topic Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-4">
          <span className="text-5xl">{topic.icon}</span>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {topic.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              {topic.description}
            </p>
          </div>
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {topic.lessons.map((lesson, index) => (
          <Link
            key={lesson.id}
            to={`/${topic.id}/${lesson.id}`}
            className="group bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3 flex-1">
                  {completedLessons.has(lesson.id) ? (
                    <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" />
                  ) : (
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                      <Circle className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                        Lição {index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {lesson.title}
                    </h3>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors flex-shrink-0" />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                {lesson.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {lesson.exercises.length} exercícios
                </span>
                {completedLessons.has(lesson.id) && (
                  <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                    Completo
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Info Card */}
      <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-6 border border-primary-200 dark:border-primary-800">
        <div className="flex items-start space-x-3">
          <BookOpen className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Como estudar este tópico
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Clique em qualquer lição acima para começar. Recomendamos seguir a ordem
              das lições para uma melhor compreensão dos conceitos. Complete os
              exercícios de cada lição antes de avançar para a próxima.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

