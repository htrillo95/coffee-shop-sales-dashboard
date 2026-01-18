export default function Objectives() {
  const objectives = [
    {
      number: 1,
      title: "Prepare the data",
      description: "Explored and profiled the dataset, performed basic QA, and created calculated fields for revenue, month, day of week, and hour extraction."
    },
    {
      number: 2,
      title: "Explore with PivotTables",
      description: "Built pivot tables to analyze revenue by month, transaction patterns by weekday and hour, and product category performance."
    },
    {
      number: 3,
      title: "Build dynamic dashboard",
      description: "Created an interactive Excel dashboard with pivot charts, store location slicers, and actionable insights for operations improvement."
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
