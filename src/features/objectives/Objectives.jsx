export default function Objectives() {
  const objectives = [
    {
      number: 1,
      title: "Prepare the data",
      description: "Looked through the dataset, checked for issues, and added calculated fields for revenue and date parts like month and hour."
    },
    {
      number: 2,
      title: "Explore with PivotTables",
      description: "Used pivot tables to see revenue by month, transactions by time of day, and which product categories sell the most."
    },
    {
      number: 3,
      title: "Build dashboard",
      description: "Put together an Excel dashboard with charts showing revenue trends, transaction patterns, and product performance."
    }
  ]

  return (
    <section className="objectives">
      <h2 className="section-title">What I Built</h2>
      <div className="objectives-grid">
        {objectives.map(obj => (
          <div key={obj.number} className="objective-card">
            <div className="objective-number">0{obj.number}</div>
            <h3 className="objective-title">{obj.title}</h3>
            <p className="objective-description">{obj.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
