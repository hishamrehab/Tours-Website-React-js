import React from "react";
import { Container } from "react-bootstrap";

const Service = ({ icon, title, text }) => {
  return (
    <Container>
      <article className="service">
        <span className="service-icon">
          <i className={icon}></i>
        </span>
        <div className="service-info">
          <h4 className="service-title">{title}</h4>
          <p className="service-text">{text}</p>
        </div>
      </article>
    </Container>
  );
};

export default Service;
