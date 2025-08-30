import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage/IndexPage";
import Header from "../src/components/Header/Header"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<IndexPage />} />
      </Routes>
    </Router>
  );
}

export default App;
