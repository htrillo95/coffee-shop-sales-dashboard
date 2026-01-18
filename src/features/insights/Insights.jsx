export default function Insights() {
  const takeaways = [
    "Learned how to use PivotTables to summarize 149k rows of data, way easier than manually counting.",
    "Built calculated fields for revenue (price × quantity) and extracted date/time parts. Making use of Excel formulas.",
    "Made pivot charts to visualize revenue trends, transaction patterns, and product performance. Charts make the data way easier to understand.",
    "Most transactions happen weekday mornings (7 to 9 AM) and lunch (12 to 2 PM). Coffee is the biggest seller, which makes sense.",
    "This was good practice for cleaning data, building dashboards, and thinking about what the numbers actually mean."
  ]

  return (
    <section className="insights">
      <h2 className="section-title">What I Learned</h2>
      <ul className="insights-list">
        {takeaways.map((item, index) => (
          <li key={index} className="insight-item">
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
