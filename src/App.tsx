import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import TopicPage from './pages/TopicPage'
import LessonPage from './pages/LessonPage'
import { topics } from './data/topics'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {topics.map((topic) => (
            <Route key={topic.id} path={`/${topic.id}`}>
              <Route index element={<TopicPage topic={topic} />} />
              <Route
                path=":lessonId"
                element={<LessonPage />}
              />
            </Route>
          ))}
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

