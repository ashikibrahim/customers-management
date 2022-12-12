import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import "../Pages/Home.css";
import { display } from "@mui/system";
function Home() {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default Home;
