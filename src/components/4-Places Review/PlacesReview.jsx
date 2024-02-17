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
          <div
            className="placeReviewRow1-image"
            style={{
              position: "relative",
            }}
          >
            <img
              src={FrenchAutumn}
              alt="FrenchAutumn"
              style={{
                width: "550px",
                height: "220px",
                borderRadius: "10px",
              }}
            />
            <p
              style={{
                fontSize: "30px",
                "text-align": "center",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
              }}
            >
              North America
            </p>
          </div>

          <div
            className="placeReviewRow1-image"
            style={{
              position: "relative",
            }}
          >
            <img
              src={GrandSwitzerland}
              alt="GrandSwitzerland"
              style={{
                width: "220px",
                height: "220px",
                borderRadius: "10px",
              }}
            />
            <p
              style={{
                fontSize: "30px",
                "text-align": "center",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
              }}
            >
              South America
            </p>
          </div>

          <div
            className="placeReviewRow1-image"
            style={{
              position: "relative",
            }}
          >
            <img
              src={SeoulYour}
              alt="SeoulYour"
              style={{
                width: "220px",
                height: "220px",
                borderRadius: "10px",
              }}
            />
            <p
              style={{
                fontSize: "30px",
                "text-align": "center",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
              }}
            >
              Asia
            </p>
          </div>
        </div>

        <div className="placeReviewRow1">
          <div
            className="placeReviewRow1-image"
            style={{
              position: "relative",
            }}
          >
            <img
              src={DiscoverJapan}
              style={{
                width: "550px",
                height: "220px",
                borderRadius: "10px",
              }}
            />
            <p
              style={{
                fontSize: "30px",
                "text-align": "center",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
              }}
            >Australia</p>
          </div>

          <div
            className="placeReviewRow1-image"
            style={{
              position: "relative",
            }}
          >
            <img
              src={Hongkong}
              style={{
                width: "220px",
                height: "220px",
                borderRadius: "10px",
              }}
            />
            <p
              style={{
                fontSize: "30px",
                "text-align": "center",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
              }}
            >
              Africa
            </p>
          </div>

          <div
            className="placeReviewRow1-image"
            style={{
              position: "relative",
            }}
          >
            <img
              src={GreatBritainTravel}
              style={{
                width: "220px",
                height: "220px",
                borderRadius: "10px",
              }}
            />
            <p
              style={{
                fontSize: "30px",
                "text-align": "center",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
              }}
            >
             Aurope
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PlacesReview;
