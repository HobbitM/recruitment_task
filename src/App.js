import "./App.css";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

//constants
import PAGES from "./constants/pages";

//pages
import TagBrowser from "./pages/TagBrowser/TagBrowser";
import Home from "./pages/Home/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
          <Route path={PAGES.HOME} element={<Home />} />
          <Route path={PAGES.TAG_BROWSER} element={<TagBrowser />} />
      </>
    )
  );


  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
