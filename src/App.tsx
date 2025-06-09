import { Route, Routes } from 'react-router-dom'

import { Container } from './components/shared/Container'
import ProgressBar from './components/shared/ProgressBar'
import { QuestionsPage, ResultPage, UploadPage, WelcomePage } from './pages'

function App() {
  return (
    <Container className="min-h-screen pt-16 pb-8 box-border">
      <ProgressBar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Container>
  )
}

export default App
