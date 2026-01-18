import Hero from './features/hero/Hero'
import Objectives from './features/objectives/Objectives'
import DashboardPreview from './features/dashboard-preview/DashboardPreview'
import Insights from './features/insights/Insights'
import DataPreview from './features/data-preview/DataPreview'
import Links from './features/links/Links'
import Footer from './features/footer/Footer'

function App() {
  return (
    <div className="app">
      <Hero />
      <Objectives />
      <DashboardPreview />
      <Insights />
      <DataPreview />
      <Links />
      <Footer />
    </div>
  )
}

export default App
