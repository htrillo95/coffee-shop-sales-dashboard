# V2 Enhancement Notes

## CSV File Location
Place your cleaned CSV file at:
```
/public/coffee_shop_sales.csv
```

The CSV should have headers matching the original dataset:
- `transaction_id`
- `transaction_date`
- `transaction_time`
- `transaction_qty`
- `store_id`
- `store_location`
- `product_id`
- `unit_price`
- `product_category`
- `product_type`
- `product_detail`
- `revenue` (calculated field, or will be computed from unit_price × transaction_qty)

## Current Implementation

**Data Loading:**
- CSV is loaded once on mount via `useCoffeeShopData` hook
- Parsed in browser (no backend needed)
- Data stored in React state

**Filtering:**
- Store location filter replaces Excel slicer functionality
- Uses `useMemo` to avoid unnecessary recomputation
- Filtered data updates KPIs dynamically

**KPIs:**
- Total Transactions
- Total Revenue
- Average Revenue per Transaction

## Extending for Charts (v3)

To add charts later, you can:

1. **Use the filtered data** from the hook:
   ```jsx
   const { filteredData } = useCoffeeShopData()
   ```

2. **Add chart components** in a new section or enhance existing `DashboardPreview`

3. **Chart libraries to consider:**
   - Recharts (React-friendly)
   - Chart.js (lightweight)
   - D3.js (more control, more work)

4. **Example chart data preparation:**
   ```jsx
   // Group by month for revenue chart
   const revenueByMonth = useMemo(() => {
     // Process filteredData to group by month
   }, [filteredData])
   ```

The data structure is ready - just add visualization components when needed.
