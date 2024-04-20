import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import PacketPage from "./page/PacketPage";
import Contact from "./page/Contact";
function App() {
  return (
    <div className="App">
      {/* <h1>HArsh</h1> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packet" element={<PacketPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
