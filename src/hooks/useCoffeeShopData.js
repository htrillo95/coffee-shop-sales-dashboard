import { useState, useEffect, useMemo } from 'react'

/**
 * Custom hook to load and filter coffee shop sales data
 * Replaces Excel PivotTables/slicers with client-side filtering
 */
export function useCoffeeShopData() {
  const [rawData, setRawData] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedStore, setSelectedStore] = useState('All')

  // Load and parse CSV once on mount
  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch('/coffee_shop_sales.csv')
        const text = await response.text()
        
        // Parse CSV (simple parser, handles quoted values)
        const lines = text.split('\n').filter(line => line.trim())
        const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''))
        
        const data = lines.slice(1).map(line => {
          // Simple CSV parsing - handles quoted values
          const values = []
          let current = ''
          let inQuotes = false
          
          for (let i = 0; i < line.length; i++) {
            const char = line[i]
            if (char === '"') {
              inQuotes = !inQuotes
            } else if (char === ',' && !inQuotes) {
              values.push(current.trim().replace(/^"|"$/g, ''))
              current = ''
            } else {
              current += char
            }
          }
          values.push(current.trim().replace(/^"|"$/g, ''))
          
          const row = {}
          headers.forEach((header, index) => {
            row[header] = values[index] || ''
          })
          return row
        }).filter(row => row.transaction_id) // Filter out empty rows
        
        setRawData(data)
        setLoading(false)
      } catch (error) {
        console.error('Error loading CSV:', error)
        setLoading(false)
      }
    }
    
    loadData()
  }, [])

  // Get unique store locations for filter dropdown
  const storeLocations = useMemo(() => {
    const stores = [...new Set(rawData.map(row => row.store_location))].filter(Boolean).sort()
    return ['All', ...stores]
  }, [rawData])

  // Filter data based on selected store (memoized to avoid unnecessary recomputation)
  const filteredData = useMemo(() => {
    if (selectedStore === 'All') {
      return rawData
    }
    return rawData.filter(row => row.store_location === selectedStore)
  }, [rawData, selectedStore])

  // Compute KPIs from filtered data (memoized)
  const kpis = useMemo(() => {
    if (filteredData.length === 0) {
      return {
        totalTransactions: 0,
        totalRevenue: 0,
        avgRevenuePerTransaction: 0
      }
    }

    const totalTransactions = filteredData.length
    const totalRevenue = filteredData.reduce((sum, row) => {
      // Handle both "Revenue" (capital R) and "revenue" (lowercase) columns
      // Also handle currency format like "$6.00" by removing $ and parsing
      let revenue = parseFloat(row.Revenue) || parseFloat(row.revenue)
      if (isNaN(revenue)) {
        const revenueStr = (row.Revenue || row.revenue || '').toString().replace(/[$,]/g, '')
        revenue = parseFloat(revenueStr)
      }
      // Fallback to calculating from unit_price × transaction_qty
      if (isNaN(revenue) || revenue === 0) {
        revenue = (parseFloat(row.unit_price) || 0) * (parseInt(row.transaction_qty) || 0)
      }
      return sum + (revenue || 0)
    }, 0)
    const avgRevenuePerTransaction = totalRevenue / totalTransactions

    return {
      totalTransactions,
      totalRevenue,
      avgRevenuePerTransaction
    }
  }, [filteredData])

  return {
    rawData,
    filteredData,
    kpis,
    storeLocations,
    selectedStore,
    setSelectedStore,
    loading
  }
}
