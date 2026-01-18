/**
 * Calculate KPIs from transaction data
 * Handles revenue parsing from various formats
 */
export function calculateKPIs(data) {
  if (!data || data.length === 0) {
    return {
      totalTransactions: 0,
      totalRevenue: 0,
      avgRevenuePerTransaction: 0
    }
  }

  const totalTransactions = data.length
  const totalRevenue = data.reduce((sum, row) => {
    // Try to parse revenue from various formats
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
}
