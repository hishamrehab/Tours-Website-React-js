import React from "react";
import "./index.css";
import Navbar from "./components/1-navbar/navbar";
import Hero from "./components/2-Hero/Hero";
import About from "./components/3-About/About";
import Services from "./components/5-Servises/services";
import FatureTours from "./components/6-FeaturedTours/FaturedTours";
import Footer from "./components/14-Footer/Footer";
import PlacesReview from "./components/4-Places Review/PlacesReview";
import PopularDestionations from "./components/7-Popular Destionations/PopularDestionations";
import Teams from "./components/8-Teams/Teams";
import FeaturedTestimonials from "./components/9-FeaturedTestimonials/FeaturedTestimonials";
import ContactUs from "./components/13-contactUs/ContactUs";
import PopularPackeges from "./components/10-PopularPackeges.jsx/PopularPackeges";
import PopularDestionation from "./components/11-PopularDestionation/PopularDestionation";
import TravellersPhotos from "./components/12-PHOTO'S FROM TRAVELLERS/TravellersPhotos";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <PlacesReview />
      {/* <Services /> */}
      {/* <FatureTours /> */}
      {/* <PopularDestionations /> */}
      {/* <PopularDestionation /> */}
      {/* <PopularPackeges /> */}
      {/* <TravellersPhotos /> */}
      {/* <Teams /> */}
      {/* <FeaturedTestimonials /> */}
      {/* <ContactUs /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
