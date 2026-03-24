import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from '@/pages/HomePage'
import { FeaturesPage } from '@/pages/FeaturesPage'
import { SolutionsPage } from '@/pages/SolutionsPage'
import { PlansPage } from '@/pages/PlansPage'
import { LearningPage } from '@/pages/LearningPage'

export default function App() {
  return (
    <BrowserRouter basename="/NOVAWEBSITE">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/learning" element={<LearningPage />} />
      </Routes>
    </BrowserRouter>
  )
}
