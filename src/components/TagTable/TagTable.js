import React from "react";
import { useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const TagTable = ({ itemsPerPage }) => {
  const tags = useSelector((state) => state.tags);
  const startIndex = 0;
  const endIndex = startIndex + itemsPerPage - 1;
  const displayedTags = tags.slice(startIndex, endIndex);

  return (
    <TableContainer component={Paper} variant="outlined">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displayedTags.map((tag) => (
            <TableRow key={tag.name}>
              <TableCell component="th" scope="row">
                {tag.name}
              </TableCell>
              <TableCell align="right">{tag.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TagTable;
