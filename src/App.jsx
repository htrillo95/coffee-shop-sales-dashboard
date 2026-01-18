import Hero from './features/hero/Hero'
import Objectives from './features/objectives/Objectives'
import DashboardPreview from './features/dashboard-preview/DashboardPreview'
import Insights from './features/insights/Insights'
import Links from './features/links/Links'
import V2Plan from './features/v2-plan/V2Plan'
import Footer from './features/footer/Footer'

function App() {
  return (
    <div className="app">
      <Hero />
      <Objectives />
      <DashboardPreview />
      <Insights />
      <Links />
      <V2Plan />
      <Footer />
    </div>
  )
}

export default App
