import React from "react";
import { places } from "../data";


const PlacesReview = () => {
  return (
    <section className="section" id="about">
      <h1 className="section-header">Places Review</h1>
      <div className="section-center about-center">
        {places.map((place) => {
          return (
            <div className="places-review-row">
              <div className="places-review-column">
                <img src={place.image} height={"350px"} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PlacesReview;
