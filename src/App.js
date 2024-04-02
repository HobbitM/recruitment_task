import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//constants
import PAGES from "./constants/pages";

//pages
import TagBrowser from "./pages/TagBrowser/TagBrowser";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path={PAGES.HOME} element={<Home />} />
        <Route path={PAGES.TAG_BROWSER} element={<TagBrowser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
