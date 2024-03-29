//css
import "./App.css";
//imports
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "./actions";
import { Pagination } from "@mui/material";
//components
import TagTable from "./components/TagTable/TagTable";
import SizeSelector from "./components/SizeSelector/SizeSelector";
import SortSelector from "./components/SortSelector/SortSelector";

function App() {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortField, setSortField] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const totalPages = useSelector((state) => state.totalPages);

  useEffect(() => {
    dispatch(fetchTags())
      .then(() => setLoading(false))
      .catch((error) => console.error("Error fetching data:", error));
  }, [dispatch]);

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

export default App;
