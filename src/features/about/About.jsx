export default function About() {
  return (
    <section className="about">
      <h2 className="section-title">About This Project</h2>
      <div className="about-content">
        <p className="about-text">
          I chose this dataset to practice working with real transaction data and learn Excel's pivot table functionality. 
          The coffee shop context is relatable and the dataset size (149k rows) was a good challenge for learning how to 
          summarize and visualize data efficiently.
        </p>
        <p className="about-text">
          <strong>Tools used:</strong> Excel (web version, used for accessibility), React, Vite, JavaScript, CSS
        </p>
      </div>
    </section>
  )
}
