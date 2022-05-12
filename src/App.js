import React from "react";
import "./App.css";
import NavBar from "./components/navbar";
import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "./components/sidebar";

function App() {
  return (
    <Router>
      <NavBar />
      <SideBar />
    </Router>
  );
}

export default App;
