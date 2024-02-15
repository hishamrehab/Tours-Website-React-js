import React from "react";
import Title from "./Title";
import { services } from "../data";
import Service from "./service";
import image1 from "../images/images (1).jpg";
const Services = () => {
  return (
    <>
      <section className="section services" id="services">
        <Title title="our" subTitle="services" />
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
