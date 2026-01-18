# Coffee Shop Sales Dashboard

A portfolio case study analyzing 149,116 transactions from a NYC coffee shop.

## Project Overview

This project is based on the Maven Analytics Coffee Shop Sales dataset and is organized into three objectives:

1. Prepare the data for analysis
2. Explore the data with PivotTables
3. Build a dynamic dashboard

## Tech Stack

React 18, Vite, JavaScript, CSS

## Getting Started

```bash
npm install
npm run dev
npm run build
```

## Project Structure

```
src/
  features/
    hero/
    about/
    objectives/
    dashboard-preview/
    insights/
    data-preview/
    links/
    footer/
  hooks/
    useCoffeeShopData.js
  utils/
    calculateKPIs.js
  App.jsx
  main.jsx
  index.css
```

## CSV Data

Place your cleaned CSV file at `/public/coffee_shop_sales.csv`. The file should include calculated fields like Revenue, Month, Weekday, and Hour.

## Screenshots

Drop dashboard screenshots into `/public/images/`:
- dashboard-overview.png
- revenue-by-month.png
- transactions-by-time.png
- product-categories.png
