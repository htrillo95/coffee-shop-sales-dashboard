export default function Filter({ storeLocations, selectedStore, onStoreChange }) {
  if (!storeLocations || storeLocations.length === 0) {
    return null
  }

  return (
    <div className="filter-container">
      <label htmlFor="store-filter" className="filter-label">
        Store Location:
      </label>
      <select
        id="store-filter"
        value={selectedStore}
        onChange={(e) => onStoreChange(e.target.value)}
        className="filter-select"
      >
        {storeLocations.map(store => (
          <option key={store} value={store}>
            {store}
          </option>
        ))}
      </select>
    </div>
  )
}
