import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/services";
import FatureTours from "./components/FaturedTours";
import Footer from "./components/Footer";
import PlacesReview from "./components/PlacesReview";
import PopularDestionations from "./components/PopularDestionations";
import Teams from "./components/Teams";

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <PlacesReview />
      <Services />
      <FatureTours />
      <PopularDestionations />
      <Teams />
      <Footer />
    </>
  );
}

export default App;
