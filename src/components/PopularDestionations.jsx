import React from "react";
import Title from "./Title";
import { destionations } from "../data";

const PopularDestionations = () => {
  return (
    <section
      className="section teams"
      id="teams"
      style={{
        width: "90%",
        marginRight: "5%",
        marginLeft: "5%",
      }}
    >
      <Title title="Our" subTitle="Team" />
      <p
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "20px",
        }}
      >
        Tours give you the opportunity to see a lot,within a time frame
      </p>
      {destionations.map((service) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div>
              <h3>{service.title1}</h3>
              <p
                style={{
                  Width: "60%",
                  paddingRight: "10%",
                }}
              >
                {service.desc1}
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
                src={service.image1}
                alt=""
                style={{
                  paddingBottom: "30px",
                  width: "220px",
                }}
              />

              <img
                src={service.image2}
                alt=""
                style={{
                  paddingTop: "40px",
                  width: "220px",
                }}
              />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default PopularDestionations;
