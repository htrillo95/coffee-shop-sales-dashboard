export default function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-title">Coffee Shop Sales Analysis</h1>
      <p className="hero-subtitle">
        Analyzing transactions from a NYC coffee shop to identify revenue patterns, 
        peak hours, and product performance.
      </p>
      <div className="hero-stats">
        <div className="stat">
          <span className="stat-value">149,116</span>
          <span className="stat-label">Transactions</span>
        </div>
        <div className="stat">
          <span className="stat-value">NYC</span>
          <span className="stat-label">Location</span>
        </div>
        <div className="stat">
          <span className="stat-value">Maven Analytics</span>
          <span className="stat-label">Dataset Source</span>
        </div>
      </div>
    </section>
  )
}
