import React from "react";
import { places } from "../data";
import Title from "./Title";

const PlacesReview = () => {
  return (
    <section className="section" id="about">
      <h1 className="section-header">Places Review</h1>
      <div className="section-center about-center">
        {places.map((place) => {
          return (
            <div className="row">
              <div className="column">
                <img src={place.image} height={"400px"} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PlacesReview;
