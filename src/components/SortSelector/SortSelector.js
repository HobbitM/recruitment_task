import React from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const SortSelector = ({ sortField, sortDirection, onSortChange }) => {
  return (
    <FormControl>
      <InputLabel id="sort-label">Sort By</InputLabel>
      <Select
        labelId="sort-label"
        id="sort"
        value={`${sortField}:${sortDirection}`}
        onChange={onSortChange}
      >
        <MenuItem value="name:asc">Name (A-Z)</MenuItem>
        <MenuItem value="name:desc">Name (Z-A)</MenuItem>
        <MenuItem value="count:asc">Count (Low to High)</MenuItem>
        <MenuItem value="count:desc">Count (High to Low)</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortSelector;