export interface Topic {
  id: string
  title: string
  description: string
  icon: string
  color: string
  lessons: Lesson[]
}

export interface Lesson {
  id: string
  title: string
  description: string
  content: LessonContent
  exercises: Exercise[]
}

export interface LessonContent {
  theory: string
  examples?: Example[]
  visualizations?: Visualization[]
}

export interface Example {
  title: string
  description: string
  solution: string
  code?: string
}

export interface Visualization {
  type: 'chart' | 'graph' | 'interactive'
  data: any
  component?: string
}

export interface Exercise {
  id: string
  question: string
  type: 'multiple-choice' | 'input' | 'interactive'
  options?: string[]
  correctAnswer: string | number
  explanation: string
  hint?: string
}

export interface UserProgress {
  topicId: string
  lessonId: string
  exerciseId: string
  completed: boolean
  attempts: number
  lastAttempt: Date
}

