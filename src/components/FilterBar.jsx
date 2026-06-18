function FilterBar({ filters, setFilters }) {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search title"
        value={filters.title}
        onChange={(e) =>
          setFilters({
            ...filters,
            title: e.target.value,
          })
        }
      />

      <select
        value={filters.category}
        onChange={(e) =>
          setFilters({
            ...filters,
            category: e.target.value,
          })
        }
      >
        <option value="">All Categories</option>
        <option>Food</option>
        <option>Transport</option>
        <option>Shopping</option>
        <option>Bills</option>
        <option>Entertainment</option>
        <option>Other</option>
      </select>

      <input
        type="date"
        value={filters.from}
        onChange={(e) =>
          setFilters({
            ...filters,
            from: e.target.value,
          })
        }
      />

      <input
        type="date"
        value={filters.to}
        onChange={(e) =>
          setFilters({
            ...filters,
            to: e.target.value,
          })
        }
      />
    </div>
  );
}

export default FilterBar;