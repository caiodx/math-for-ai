import { Link } from 'react-router-dom'
import { topics } from '../data/topics'
import { ArrowRight, BookOpen } from 'lucide-react'

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Matemática para IA
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Revisão interativa dos conceitos matemáticos essenciais para sua
          transição para Inteligência Artificial
        </p>
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <Link
            key={topic.id}
            to={`/${topic.id}`}
            className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            <div className={`${topic.color} h-2 w-full`} />
            <div className="p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-4xl">{topic.icon}</span>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {topic.title}
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {topic.description}
              </p>
              <div className="flex items-center justify-between pt-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {topic.lessons.length} lições
                </span>
                <ArrowRight className="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Info Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-start space-x-4">
          <BookOpen className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Como usar este guia
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">1.</span>
                <span>
                  Escolha um tópico acima e comece pelas lições na ordem
                  apresentada
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">2.</span>
                <span>
                  Leia a teoria e os exemplos antes de fazer os exercícios
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">3.</span>
                <span>
                  Pratique com os exercícios interativos para fixar o
                  conhecimento
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">4.</span>
                <span>
                  Revise os conceitos sempre que necessário - a prática leva à
                  perfeição!
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

