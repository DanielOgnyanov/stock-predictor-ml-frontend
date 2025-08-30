
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Features from "./components/Features/Features";
import Prices from "./components/Prices/Prices";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      
      <Header />
      <Hero />
      <HowItWorks />
      <Prices />
      <Features />
      <Footer />
      
    </div>
  );
}

export default App;
