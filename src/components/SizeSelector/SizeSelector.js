import React from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const SizeSelector = ({ itemsPerPage, onChange }) => {
  return (
    <FormControl>
      <InputLabel id="items-per-page-label">Size</InputLabel>
      <Select
        labelId="items-per-page-label"
        id="items-per-page"
        value={itemsPerPage}
        onChange={onChange}
      >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={50}>50</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SizeSelector;
