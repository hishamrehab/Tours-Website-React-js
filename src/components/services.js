import React from "react";
import { services } from "../data";
import Service from "./service";

const Services = () => {
  return (
    <>
      <section className="section services" id="services">
     <h1 className="section-header">Our Services</h1>
        <div className="main-services service-center">
          {services.map((service) => {
            return <Service key={service.id} {...service} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Services;
