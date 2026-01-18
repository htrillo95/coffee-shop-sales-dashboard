export default function DataPreview({ filteredData, loading, filterComponent, kpis, error }) {
  // Show only key columns for readability
  const keyColumns = ['transaction_date', 'transaction_time', 'store_location', 'product_category', 'product_type', 'transaction_qty', 'unit_price', 'Revenue']
  
  // Show first 50 rows as a sample
  const sampleData = filteredData?.slice(0, 50) || []
  const allColumns = sampleData.length > 0 ? Object.keys(sampleData[0]) : []
  const columns = keyColumns.filter(col => allColumns.includes(col))

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M'
    if (num >= 1000) return (num / 1000).toFixed(0) + 'k'
    return num.toLocaleString()
  }

  const formatCurrency = (num) => {
    return '$' + num.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })
  }

  return (
    <section className="data-preview">
      <h2 className="section-title">Dataset Preview</h2>
      <p className="data-preview-description">
        Sample of cleaned transaction data (first 50 rows, key columns only). The cleaned dataset includes calculated fields like Revenue, Month, Weekday, and Hour.
      </p>
      {filterComponent}
      {kpis && (
        <div className="data-preview-kpis-wrapper">
          <p className="data-preview-kpis-note">Metrics for selected store:</p>
          <div className="data-preview-kpis">
            <div className="data-preview-kpi">
              <span className="data-preview-kpi-value">
                {loading ? '...' : formatNumber(kpis.totalTransactions)}
              </span>
              <span className="data-preview-kpi-label">Transactions</span>
            </div>
            <div className="data-preview-kpi">
              <span className="data-preview-kpi-value">
                {loading ? '...' : formatCurrency(kpis.totalRevenue)}
              </span>
              <span className="data-preview-kpi-label">Total Revenue</span>
            </div>
            <div className="data-preview-kpi">
              <span className="data-preview-kpi-value">
                {loading ? '...' : formatCurrency(kpis.avgRevenuePerTransaction)}
              </span>
              <span className="data-preview-kpi-label">Avg per Transaction</span>
            </div>
          </div>
        </div>
      )}
      {error ? (
        <div className="data-preview-error">
          <p>{error}</p>
        </div>
      ) : loading ? (
        <div className="data-preview-loading">Loading data...</div>
      ) : sampleData.length > 0 ? (
        <div className="data-preview-table-container">
          <table className="data-preview-table">
            <thead>
              <tr>
                {columns.map(col => (
                  <th key={col}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sampleData.map((row, index) => (
                <tr key={index}>
                  {columns.map(col => (
                    <td key={col}>{row[col] || ''}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="data-preview-empty">No data available</div>
      )}
    </section>
  )
}
