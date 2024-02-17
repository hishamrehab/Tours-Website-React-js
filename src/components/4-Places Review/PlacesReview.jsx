import React from "react";
import { places } from "../../data";
import FrenchAutumn from "../../images/French Autumn.jpg";
import GrandSwitzerland from "../../images/Grand Switzerland.jpeg";
import DiscoverJapan from "../../images/Discover Japan.jpg";
import SeoulYour from "../../images/Seoul Your.jpg";
import Hongkong from "../../images/Hong Kong.jpg";
import GreatBritainTravel from "../../images/Great Britain Travel.jpg";
import { Container } from "react-bootstrap";

const PlacesReview = () => {
  return (
    <section className="section" id="placesReview">
      <h1 className="section-header">Places Review</h1>
      <Container>
        <div className="placeReviewRow1">
          <img
            src={FrenchAutumn}
            alt="FrenchAutumn"
            style={{
              width: "550px",
              height: "220px",
              borderRadius: "10px",
            }}
          />

          <img
            src={GrandSwitzerland}
            alt="GrandSwitzerland"
            style={{
              width: "220px",
              height: "220px",
              borderRadius: "10px",
            }}
          />

          <img
            src={SeoulYour}
            alt="SeoulYour"
            style={{
              width: "220px",
              height: "220px",
              borderRadius: "10px",
            }}
          />
        </div>
        <div className="placeReviewRow1">
          <img
            src={DiscoverJapan}
            style={{
              width: "550px",
              height: "220px",
              borderRadius: "10px",
            }}
          />
          <img
            src={Hongkong}
            style={{
              width: "220px",
              height: "220px",
              borderRadius: "10px",
            }}
          />

          <img
            src={GreatBritainTravel}
            style={{
              width: "220px",
              height: "220px",
              borderRadius: "10px",
            }}
          />
        </div>
      </Container>
    </section>
  );
};

export default PlacesReview;
