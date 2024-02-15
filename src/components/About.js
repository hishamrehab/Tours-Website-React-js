import React from "react";
import aboutImg from "../images/palce3.jpg";
import { Container } from "react-bootstrap";


const About = () => {
  return (
    <section className="section about-section" id="about">

    
      <h1 className="about-section-header section-header">AboutUs</h1>

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <div className="about-desc">
            <h3>Our History</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
          </div>

          <div>
            <h3>Our Mission</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
          </div>

          <div>
            <h3>Our Vision</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
          </div>

          <a href="#" className="btn about-btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
