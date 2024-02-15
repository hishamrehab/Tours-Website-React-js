import React from "react";
import { team } from "../data";
import Title from "./Title";
const Teams = () => {
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
      {team.map((service) => {
        return (
          <div>
            <div>
              <img src={service.image} alt="" />
              <h4>{service.name}</h4>
            </div>
            <div>
              <p>{service.desc}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Teams;
