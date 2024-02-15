import React from "react";
import { teams } from "../data";

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
      <h1 className="section-header">OurTeam</h1>
      <p
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "20px",
        }}
      >
        Tours give you the opportunity to see a lot,within a time frame
      </p>
      {teams.map((service) => {
        return (
          <div className="teams-section">
          
            <div className="teams-content">
              <div>
                <img src={service.image1} alt="" className="teams-image" />
                <h4>{service.name1}</h4>
              </div>
              <div>
                <p>{service.desc1}</p>
              </div>
            </div>

            <div className="teams-content">
              <div>
                <img src={service.image2} alt="" className="teams-image" />
                <h4>{service.name2}</h4>
              </div>
              <div>
                <p>{service.desc2}</p>
              </div>
            </div>

            <div className="teams-content">
              <div>
                <img src={service.image3} alt="" className="teams-image" />
                <h4>{service.name3}</h4>
              </div>
              <div>
                <p>{service.desc3}</p>
              </div>
            </div>
            
          </div>
        );
      })}
    </section>
  );
};

export default Teams;
