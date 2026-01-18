export default function Insights() {
  const takeaways = [
    "PivotTables and pivot charts make it way easier to work with large datasets than manually counting or filtering.",
    "Most transactions happen weekday mornings (7 to 9 AM) and lunch (12 to 2 PM). Coffee is the biggest seller, which makes sense.",
    "Revenue increased from around $80k in January to $160k in May, then leveled off. Weekday transactions are about 40% higher than weekends.",
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
