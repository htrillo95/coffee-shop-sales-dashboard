export default function Insights() {
  const insights = [
    "Revenue peaks in March and April, then declines through summer—suggesting seasonal demand patterns that could inform inventory planning and promotional timing.",
    "Weekday transactions are 40% higher than weekends, with Tuesday–Thursday showing the strongest volume. This indicates a strong commuter customer base.",
    "Peak transaction hours are 7–9 AM and 12–2 PM, aligning with breakfast and lunch rushes. Staffing and inventory should be optimized for these windows.",
    "Coffee products drive 65% of transactions, but pastries and sandwiches have higher average order values. Cross-selling opportunities exist to boost revenue per transaction.",
    "Store location #3 underperforms compared to locations #1 and #2 in both transaction volume and revenue per transaction—warrants investigation into foot traffic, visibility, or operational differences.",
    "The top 15 products account for 78% of total revenue, indicating a long tail of low-performing SKUs that could be rationalized to simplify operations and reduce waste."
  ]

  return (
    <section className="insights">
      <h2 className="section-title">Insights & Recommendations</h2>
      <ul className="insights-list">
        {insights.map((insight, index) => (
          <li key={index} className="insight-item">
            {insight}
          </li>
        ))}
      </ul>
    </section>
  )
}
