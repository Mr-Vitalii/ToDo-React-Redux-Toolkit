import React from 'react';
import "./FilterPanel.scss";

import { useDispatch } from "react-redux";
import { statusFilters } from "../../redux/constants";
import { setStatusFilter } from "../../redux/filtersSlice";

export const FilterPanel = () => {

    const dispatch = useDispatch();

    const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));


  return (
    <div>
      <button
        className="filter-button"
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </button>
      <button
        className="filter-button"
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </button>
      <button
        className="filter-button"
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </button>
    </div>
  );
}
