export default function DataPreview() {
  // Convert Google Sheets edit URL to embed URL
  const sheetId = '1qDdqc0pxgzMPDhs6fFiE5AuWRY61hPpj'
  const embedUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/preview`

  return (
    <section className="data-preview">
      <h2 className="section-title">Dataset Preview</h2>
      <p className="data-preview-description">
        Browse the raw transaction data below. The dataset contains 149,116 transactions 
        with details on dates, times, products, categories, and store locations.
      </p>
      <div className="data-preview-container">
        <iframe
          src={embedUrl}
          className="data-preview-iframe"
          title="Coffee Shop Sales Dataset"
          allowFullScreen
        />
        <div className="data-preview-fallback">
          <p>Unable to load preview. <a href={`https://docs.google.com/spreadsheets/d/${sheetId}/edit`} target="_blank" rel="noopener noreferrer">Open in Google Sheets</a></p>
        </div>
      </div>
    </section>
  )
}
