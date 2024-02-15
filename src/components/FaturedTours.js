import React from "react";
import Title from "./Title";
import { tours } from "../data";
import FeturedTour from "./FeturedTour";
const FatureTours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />
      <h1 className="section-header">FeaturedTours</h1>
      <div className="section-center featured-center">
        {tours.map((tour) => {
          return <FeturedTour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default FatureTours;
