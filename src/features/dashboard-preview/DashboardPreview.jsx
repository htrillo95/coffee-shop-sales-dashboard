export default function DashboardPreview() {
  // Placeholder images - user will drop actual screenshots into /public/images/
  const screenshots = [
    {
      src: "/images/dashboard-overview.png",
      alt: "Dashboard overview showing revenue and transaction metrics",
      caption: "Full dashboard view with revenue trends and key metrics"
    },
    {
      src: "/images/revenue-by-month.png",
      alt: "Line chart showing revenue by month",
      caption: "Revenue by month (line chart)"
    },
    {
      src: "/images/transactions-by-time.png",
      alt: "Column chart showing transactions by weekday and hour",
      caption: "Transactions by weekday and hour (column chart)"
    },
    {
      src: "/images/product-categories.png",
      alt: "Bar chart showing transactions by product category",
      caption: "Transactions by product category (bar chart)"
    }
  ]

  return (
    <section className="dashboard-preview">
      <h2 className="section-title">Dashboard Preview</h2>
      <div className="screenshot-gallery">
        {screenshots.map((screenshot, index) => (
          <div key={index} className="screenshot-item">
            <div className="screenshot-placeholder">
              <img 
                src={screenshot.src} 
                alt={screenshot.alt}
                onError={(e) => {
                  // Fallback to placeholder if image doesn't exist
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="placeholder-fallback">
                <span>Placeholder: {screenshot.caption}</span>
              </div>
            </div>
            <p className="screenshot-caption">{screenshot.caption}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
