import React from "react";
import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Features from "../components/Features/Features";
import Prices from "../components/Prices/Prices";
import Footer from "../components/Footer/Footer";

export default function IndexPage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <Prices />
      <Footer />
    </>
  );
}
