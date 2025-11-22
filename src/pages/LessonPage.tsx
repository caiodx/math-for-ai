import { useParams, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { topics } from '../data/topics'
import LessonView from '../components/LessonView'
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react'

export default function LessonPage() {
  const { lessonId } = useParams<{
    lessonId: string
  }>()
  const location = useLocation()
  
  // Extrair topicId do pathname
  const pathParts = location.pathname.split('/').filter(Boolean)
  const topicId = pathParts[0] // Primeira parte do path é o topicId

  const topic = topics.find((t) => t.id === topicId)
  const lesson = topic?.lessons.find((l) => l.id === lessonId)
  const lessonIndex = topic?.lessons.findIndex((l) => l.id === lessonId) ?? -1

  // Debug: verificar se os parâmetros estão sendo capturados
  useEffect(() => {
    console.log('LessonPage - Parâmetros recebidos:', { topicId, lessonId })
    console.log('LessonPage - Tópicos disponíveis:', topics.map(t => t.id))
    
    if (!topicId || !lessonId) {
      console.error('Parâmetros faltando:', { topicId, lessonId })
      return
    }
    
    if (!topic) {
      console.error('Tópico não encontrado:', topicId, 'Tópicos disponíveis:', topics.map(t => t.id))
      return
    }
    
    console.log('LessonPage - Tópico encontrado:', topic.title)
    console.log('LessonPage - Lições disponíveis:', topic.lessons.map(l => ({ id: l.id, title: l.title })))
    
    if (!lesson) {
      console.error('Lição não encontrada:', lessonId, 'Lições disponíveis:', topic.lessons.map(l => l.id))
    } else {
      console.log('LessonPage - Lição encontrada:', lesson.title)
    }
  }, [topicId, lessonId, topic, lesson])

  const [completedLessons, setCompletedLessons] = useState<Set<string>>(
    new Set()
  )

  useEffect(() => {
    // Load completed lessons from localStorage
    const saved = localStorage.getItem(`completed-${topicId}`)
    if (saved) {
      setCompletedLessons(new Set(JSON.parse(saved)))
    }
  }, [topicId])

  const handleLessonComplete = (lessonId: string) => {
    const newCompleted = new Set(completedLessons).add(lessonId)
    setCompletedLessons(newCompleted)
    localStorage.setItem(
      `completed-${topicId}`,
      JSON.stringify(Array.from(newCompleted))
    )
  }

  if (!topic || !lesson) {
    return (
      <div className="text-center py-12 space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Lição não encontrada
        </h2>
        <div className="text-gray-600 dark:text-gray-400 space-y-2">
          {!topicId && <p>TopicId não fornecido</p>}
          {!lessonId && <p>LessonId não fornecido</p>}
          {topicId && !topic && (
            <p>
              Tópico "{topicId}" não encontrado. Tópicos disponíveis:{' '}
              {topics.map((t) => t.id).join(', ')}
            </p>
          )}
          {topic && lessonId && !lesson && (
            <p>
              Lição "{lessonId}" não encontrada no tópico "{topic.title}".
              Lições disponíveis: {topic.lessons.map((l) => l.id).join(', ')}
            </p>
          )}
        </div>
        <div className="space-x-4">
          <Link
            to="/"
            className="text-primary-600 dark:text-primary-400 hover:underline"
          >
            Voltar para a página inicial
          </Link>
          {topic && (
            <Link
              to={`/${topic.id}`}
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              Ver lições de {topic.title}
            </Link>
          )}
        </div>
      </div>
    )
  }

  const prevLesson =
    lessonIndex > 0 ? topic.lessons[lessonIndex - 1] : null
  const nextLesson =
    lessonIndex < topic.lessons.length - 1
      ? topic.lessons[lessonIndex + 1]
      : null

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
        <Link
          to="/"
          className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          Início
        </Link>
        <span>/</span>
        <Link
          to={`/${topicId}`}
          className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          {topic.title}
        </Link>
        <span>/</span>
        <span className="text-gray-900 dark:text-white">{lesson.title}</span>
      </nav>

      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              to={`/${topicId}`}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </Link>
            <div className="flex items-center space-x-4">
              <span className="text-4xl">{topic.icon}</span>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {lesson.title}
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  {lesson.description}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {topic.title} • Lição {lessonIndex + 1} de {topic.lessons.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lesson Content */}
      <LessonView
        lesson={lesson}
        onComplete={() => handleLessonComplete(lesson.id)}
        isCompleted={completedLessons.has(lesson.id)}
      />

      {/* Navigation */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
        <div>
          {prevLesson ? (
            <Link
              to={`/${topicId}/${prevLesson.id}`}
              className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Lição Anterior
                </div>
                <div className="font-medium">{prevLesson.title}</div>
              </div>
            </Link>
          ) : (
            <div className="text-gray-400 dark:text-gray-600">
              <ChevronLeft className="w-5 h-5 inline mr-2" />
              <span className="text-sm">Primeira lição</span>
            </div>
          )}
        </div>

        <Link
          to={`/${topicId}`}
          className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          Ver todas as lições
        </Link>

        <div className="text-right">
          {nextLesson ? (
            <Link
              to={`/${topicId}/${nextLesson.id}`}
              className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              <div className="text-right">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Próxima Lição
                </div>
                <div className="font-medium">{nextLesson.title}</div>
              </div>
              <ChevronRight className="w-5 h-5" />
            </Link>
          ) : (
            <div className="text-gray-400 dark:text-gray-600">
              <span className="text-sm">Última lição</span>
              <ChevronRight className="w-5 h-5 inline ml-2" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

