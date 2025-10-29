import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage/IndexPage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Header from "./components/Header/Header";
import { AuthProvider } from "./context/AuthContext"; 
import Homepage from "./pages/Homepage/Homepage"
import Predict from "./pages/Predict/Predict"
import GlobalBackground from "./components/GlobalBackground/GlobalBackground";
import LivePrices from "./pages/LivePrices/LivePrices";
import PriceHistory from "./components/PriceHistory/PriceHistory";
import Footer from "./components/Footer/Footer";
import News from "./pages/News/News";

function App() {
  return (
    <AuthProvider>
      <Router>
        <GlobalBackground />
        <div className="app-wrapper">
          <Header />
          <main className="app-content">
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/homepage" element={<Homepage />} />
              <Route path="/predict" element={<Predict />} />
              <Route path="/livePrices" element={<LivePrices />} />
              <Route path="/price-history/:symbol" element={<PriceHistory />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
