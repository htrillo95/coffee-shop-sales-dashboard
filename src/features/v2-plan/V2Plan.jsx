import { useState } from 'react'

export default function V2Plan() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="v2-plan">
      <button 
        className="v2-plan-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="v2-plan-title">v2 Plan</span>
        <span className="v2-plan-icon">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="v2-plan-content">
          <p className="v2-plan-item">
            <strong>Next step:</strong> Load CSV locally and render charts + filters in React
          </p>
          <p className="v2-plan-item">
            Add store location filter and recompute metrics client-side
          </p>
        </div>
      )}
    </section>
  )
}
