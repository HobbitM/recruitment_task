//css
import "./App.css";
//imports
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchTags } from "./actions";
//components
import TagTable from "./components/TagTable/TagTable";
import SizeSelector from "./components/SizeSelector/SizeSelector";

function App() {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTags())
      .then(() => setLoading(false))
      .catch((error) => console.error("Error fetching data:", error));
  }, [dispatch]);

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(event.target.value);
  };

  return (
    <div className="main-container">
      <h1 className="title">Tag Browser</h1>
      <SizeSelector
        itemsPerPage={itemsPerPage}
        onChange={handleItemsPerPageChange}
      />
      {loading ? (
        <p>Content is loading...</p>
      ) : (
        <TagTable itemsPerPage={itemsPerPage} />
      )}
    </div>
  );
}

export default App;
