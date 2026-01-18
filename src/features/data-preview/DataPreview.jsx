export default function DataPreview() {
  const sheetId = '1qDdqc0pxgzMPDhs6fFiE5AuWRY61hPpj'
  const editUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/edit?usp=sharing`
  // Use the preview URL - for large files, might need to be published to web first
  const embedUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/preview`

  return (
    <section className="data-preview">
      <h2 className="section-title">Dataset Preview</h2>
      <p className="data-preview-description">
        Browse the raw transaction data below. If the preview doesn't load, <a href={editUrl} target="_blank" rel="noopener noreferrer">open in Google Sheets</a>.
      </p>
      <div className="data-preview-container">
        <iframe
          src={embedUrl}
          className="data-preview-iframe"
          title="Coffee Shop Sales Dataset"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </section>
  )
}
