import "./TagBrowser.css";
//dependencies
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../actions";
import { Pagination } from "@mui/material";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
//components
import TagTable from "../../components/TagTable/TagTable";
import SizeSelector from "../../components/SizeSelector/SizeSelector";
import SortSelector from "../../components/SortSelector/SortSelector";
//constants
import PAGES from "../../constants/pages";

function TagBrowser() {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortField, setSortField] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.tags);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  useEffect(() => {
    const newTotalPages = Math.ceil(tags.length / itemsPerPage);
    setTotalPages(newTotalPages);
  }, [tags, itemsPerPage]);

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(event.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (event) => {
    const [field, direction] = event.target.value.split(":");
    setSortField(field);
    setSortDirection(direction);
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div className="main-container">
      <div className="back-button-container">
        <Link to={PAGES.HOME}>
          <Button variant="contained" color="primary">
            Back
          </Button>
        </Link>
      </div>
      <h1 className="title">Tag Browser</h1>
      <div className="selectors">
        <SizeSelector
          itemsPerPage={itemsPerPage}
          onChange={handleItemsPerPageChange}
        />
        <SortSelector
          sortField={sortField}
          sortDirection={sortDirection}
          onSortChange={handleSortChange}
        />
      </div>
      {loading ? (
        <p>Content is loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <TagTable
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            sortField={sortField}
            sortDirection={sortDirection}
          />
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
            color="primary"
            size="large"
            siblingCount={1}
            boundaryCount={1}
          />
        </>
      )}
    </div>
  );
}

export default TagBrowser;
