# Coffee Shop Sales Dashboard

A portfolio case study analyzing 149,116 transactions from a NYC coffee shop. This project demonstrates data analysis, visualization, and dashboard development skills.

## Project Overview

This project is based on the Maven Analytics "Coffee Shop Sales" dataset and is organized into three objectives:

1. **Prepare the data for analysis** - Data exploration, profiling, and calculated field creation
2. **Explore the data with PivotTables** - Revenue analysis, transaction patterns, and product performance
3. **Build a dynamic dashboard** - Interactive Excel dashboard with charts, filters, and insights

## Tech Stack

- React 18
- Vite
- JavaScript (no TypeScript)
- Plain CSS (no UI libraries)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
  features/
    hero/           # Hero section with title and stats
    objectives/     # Three objective cards
    dashboard-preview/  # Screenshot gallery
    insights/       # Insights & recommendations
    links/          # External links section
    v2-plan/        # Collapsible v2 plan section
    footer/         # Footer component
  App.jsx           # Main app component
  main.jsx          # Entry point
  index.css         # Global styles
```

## Adding Screenshots

Drop your dashboard screenshots into `/public/images/` with these filenames:
- `dashboard-overview.png`
- `revenue-by-month.png`
- `transactions-by-time.png`
- `product-categories.png`

## Updating Links

Edit `/src/features/links/Links.jsx` to update the placeholder hrefs for:
- Live Excel Dashboard
- GitHub Repository
- Dataset Source

## Future Enhancements (v2)

- Load CSV locally and render charts in React
- Add store location filter with client-side metric recomputation
