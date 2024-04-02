import "./Home.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import PAGES from "../../constants/pages";

export default function Home() {
  return (
    <div className="home-page-container">
      <h1 className="menu-text"> Menu </h1>
      <div className="open-tag-browser-button-container">
        <Link to={PAGES.TAG_BROWSER}>
          <Button variant="contained" color="primary">
            Open Tag Browser
          </Button>
        </Link>
      </div>
    </div>
  );
}
