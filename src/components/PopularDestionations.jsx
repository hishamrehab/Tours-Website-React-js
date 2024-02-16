import React from "react";

import { destionations } from "../data";

const PopularDestionations = () => {
  return (
    <section
      className="section destinations-section"
      id="destination"
      style={{
        width: "90%",
        marginRight: "5%",
        marginLeft: "5%",
      }}
    >
      <h1 className="section-header popular-header">Popular Destionations</h1>
      <p
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "20px",
        }}
      >
        Tours give you the opportunity to see a lot,within a time frame
      </p>
      {destionations.map((destination) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
            className="destinationContent"
          >
            <div>
              <h3
                style={{
                  color: "#98ABEE",
                }}
              >
                {destination.title1}
              </h3>
              <p
                style={{
                  Width: "60%",
                  paddingRight: "10%",
                }}
                className="destination-desc"
              >
                {destination.desc1}
              </p>
            </div>

            <div
              style={{
                display: "flex",
                gap: "10px",
                height: "400px",
              }}
            >
              <img
                src={destination.image1}
                alt=""
                style={{
                  paddingBottom: "30px",
                  width: "220px",
                }}
                className="destination-image"
              />

              <img
                src={destination.image2}
                alt=""
                style={{
                  paddingTop: "40px",
                  width: "220px",
                }}
                className="destination-image"
              />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default PopularDestionations;
