import React from "react";
import { Container } from "react-bootstrap";
import { featuredtestimonials } from "../../data";
const FeaturedTestimonials = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
      }}
    >
      <Container>
        <h1>Featured Testimonials</h1>
        <p>DISCOVER YOUR NEXT EXPERIENCES, AND PLACES.</p>
        {featuredtestimonials.map((timonial) => {
          return (
            <div className="timonials-section">
              <div className="timonials-content">
                <div>
                  <h4 className="timonial-name">{timonial.name1}</h4>
                </div>

                <p className="timonial-desc">{timonial.desc1}</p>
              </div>
              <div className="timonials-content">
                <div>
                  <h4 className="tetimonial-name">{timonial.name2}</h4>
                </div>

                <p className="timonial-desc">{timonial.desc2}</p>
              </div>

              <div className="timonials-content">
                <div>
                  <h4 className="timonial-name">{timonial.name3}</h4>
                </div>

                <p className="team-desc">{timonial.desc2}</p>
              </div>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default FeaturedTestimonials;
