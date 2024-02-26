import React from "react";

import FrenchAutumn from "../../images/French Autumn.jpg";
import GrandSwitzerland from "../../images/Grand Switzerland.jpeg";
import DiscoverJapan from "../../images/Discover Japan.jpg";
import SeoulYour from "../../images/Seoul Your.jpg";
import Hongkong from "../../images/Hong Kong.jpg";
import GreatBritainTravel from "../../images/Great Britain Travel.jpg";
import { Container } from "react-bootstrap";
import { Box } from "@mui/material";

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
              className="palces-img"
              src={FrenchAutumn}
              alt="FrenchAutumn"
              style={{
                width: {
                  md: "550px",
                  xs: "100%",
                  sm: "100%",
                },

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
              width: {
                md: "220px",
                sm: "100%",
                xa: "100%",
              },
            }}
          >
            <img
              className="palces-img"
              src={GrandSwitzerland}
              alt="GrandSwitzerland"
              style={{
                width: {
                  md: "100%",
                  sm: "100%",
                  xa: "100%",
                },
                height: "220px",
                borderRadius: "10px",
              }}
            />
            <p
              style={{
                fontSize: "35px",
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
              width: {
                md: "220px",
                sm: "100%",
                xa: "100%",
              },
            }}
          >
            <img
              className="palces-img"
              src={SeoulYour}
              alt="SeoulYour"
              style={{
                width: {
                  md: "100%",
                  sm: "100%",
                  xa: "100%",
                },
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

        <div
          className="placeReviewRow1"
          style={{
            marginLeft: {
              md: "30px",
              xs: "10px",
              sm: "10px",
            },
          }}
        >
          <div
            className="placeReviewRow1-image"
            style={{
              position: "relative",
              width: {
                xs: "100%",
                sm: "100%",
                md: "550px",
              },
            }}
          >
            <img
              className="palces-img"
              src={DiscoverJapan}
              style={{
                width: {
                  md: "100%",
                  sm: "100%",
                  xa: "100%",
                },
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
              Australia
            </p>
          </div>

          <div
            className="placeReviewRow1-image"
            style={{
              position: "relative",
            }}
          >
            <img
              className="palces-img"
              src={Hongkong}
              style={{
                width: {
                  md: "220px",
                  sm: "100%",
                  xa: "100%",
                },

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
              className="palces-img"
              src={GreatBritainTravel}
              style={{
                width: {
                  md: "220px",
                  sm: "100%",
                  xa: "100%",
                },
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
