export default function Links() {
  const links = [
    {
      label: "Live Excel Dashboard",
      href: "https://1drv.ms/x/c/2f1cf4eeb847817b/IQCf4B0CWCOsTaAIHBT3LrflAUuFsTVwGm9Q9_bEcLP1JGg?e=da791v",
      description: "View the interactive Excel dashboard"
    },
    {
      label: "GitHub Repository",
      href: "https://github.com/htrillo95/coffee-shop-sales-dashboard",
      description: "View the code and project files"
    },
    {
      label: "Raw Dataset",
      href: "https://docs.google.com/spreadsheets/d/1qDdqc0pxgzMPDhs6fFiE5AuWRY61hPpj/edit?usp=sharing&ouid=116278146157712374466&rtpof=true&sd=true",
      description: "Original dataset from Maven Analytics"
    }
  ]

  return (
    <section className="links">
      <h2 className="section-title">Links</h2>
      <div className="links-grid">
        {links.map((link, index) => (
          <a 
            key={index}
            href={link.href} 
            className="link-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="link-label">{link.label}</span>
            <span className="link-description">{link.description}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
