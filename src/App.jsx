import { useMemo } from 'react'
import { useCoffeeShopData } from './hooks/useCoffeeShopData'
import { calculateKPIs } from './utils/calculateKPIs'
import Hero from './features/hero/Hero'
import Filter from './features/filter/Filter'
import About from './features/about/About'
import Objectives from './features/objectives/Objectives'
import DashboardPreview from './features/dashboard-preview/DashboardPreview'
import Insights from './features/insights/Insights'
import DataPreview from './features/data-preview/DataPreview'
import Links from './features/links/Links'
import Footer from './features/footer/Footer'

function App() {
  const { kpis, storeLocations, selectedStore, setSelectedStore, loading, filteredData, rawData, error } = useCoffeeShopData()
  
  // Use overall KPIs (from all data) for hero, not filtered
  const overallKpis = useMemo(() => {
    if (rawData.length === 0) {
      return {
        totalTransactions: 149116,
        totalRevenue: 698812,
        avgRevenuePerTransaction: 4.69
      }
    }
    return calculateKPIs(rawData)
  }, [rawData])

  return (
    <div className="app">
      <Hero 
        kpis={overallKpis}
        loading={loading}
      />
      <About />
      <Objectives />
      <DashboardPreview />
      <Insights />
      <DataPreview 
        filteredData={filteredData} 
        loading={loading}
        kpis={kpis}
        error={error}
        filterComponent={
          <Filter 
            storeLocations={storeLocations}
            selectedStore={selectedStore}
            onStoreChange={setSelectedStore}
          />
        }
      />
      <Links />
      <Footer />
    </div>
  )
}

export default App
