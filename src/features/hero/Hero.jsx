export default function Hero({ kpis, loading }) {
  // Format numbers for display
  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M'
    if (num >= 1000) return (num / 1000).toFixed(0) + 'k'
    return num.toLocaleString()
  }

  const formatCurrency = (num) => {
    return '$' + num.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })
  }

  return (
    <section className="hero">
      <h1 className="hero-title">Coffee Shop Sales Analysis</h1>
      <p className="hero-subtitle">
        Analyzing transactions from a NYC coffee shop to identify revenue patterns, 
        peak hours, and product performance.
      </p>
      <div className="hero-stats">
        <div className="stat">
          <span className="stat-value">
            {loading ? '...' : formatNumber(kpis?.totalTransactions || 149116)}
          </span>
          <span className="stat-label">Transactions</span>
        </div>
        <div className="stat">
          <span className="stat-value">
            {loading ? '...' : formatCurrency(kpis?.totalRevenue || 698812)}
          </span>
          <span className="stat-label">Total Revenue</span>
        </div>
        <div className="stat">
          <span className="stat-value">
            {loading ? '...' : formatCurrency(kpis?.avgRevenuePerTransaction || 4.69)}
          </span>
          <span className="stat-label">Avg per Transaction</span>
        </div>
      </div>
    </section>
  )
}
