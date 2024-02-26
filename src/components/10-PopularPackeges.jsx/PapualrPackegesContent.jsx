import React from "react";

import { FaClock } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Container } from "react-bootstrap";

const PapualrPackegesContent = ({ image, reviews, price, title }) => {
  return (
    <Container>
      <div
        style={{
          marginTop: "40px",
          borderRadius: "25px",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "50px",
          flexWrap: "wrap",
          paddingRight: "5%",
          paddingLeft: "5%",
        }}
      >
        <div style={{ flex: "1", height: "300px" }}>
          <img
            src={image}
            alt="package"
            style={{
              borderRadius: "15px",
              width: "100%",
              height: "100%",
            }}
          />
        </div>

        <div
          style={{
            flex: "1",
            flexGrow: "1",
            height: "100%",
            paddingTop: "30px",
          }}
        >
          <h4>{title}</h4>
          <p
            style={{
              color: "#777",
            }}
          >
            Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo
            maiores, est aliquet porttitor! Eaque, cras, aspernatur.
          </p>

          <div
            style={{
              width: "330px",
              height: "50px",
              display: "flex",
              // justifyContent: "space-between",

              border: "1px solid #777",
              alignItems: "center",
              borderRadius: "20px",
              backgroundColor: "#FFF",
              color: "#000",
              boxShadow: "3px 3px #888888",
            }}
          >
            <div
              style={{
                borderRight: "1px solid #777",
                marginLeft: "15px",
                paddingRight: "10px",
              }}
            >
              <span
                style={{
                  color: "#40A2D8",
                  marginRight: "3px",
                  paddingRight: "2px",
                }}
              >
                <FaClock />
              </span>
              <span>7D/6N</span>
            </div>

            <div
              style={{
                borderRight: "1px solid #777",
                marginLeft: "15px",
                paddingRight: "10px",
              }}
            >
              <span
                style={{
                  color: "#40A2D8",
                  marginRight: "3px",
                  paddingRight: "5px",
                }}
              >
                <IoPersonSharp />
              </span>
              <span>pax: 10</span>
            </div>

            <div
              style={{
                marginLeft: "15px",
                paddingRight: "10px",
              }}
            >
              <span
                style={{
                  color: "#40A2D8",
                  marginRight: "3px",
                  paddingRight: "5px",
                }}
              >
                <FaMapMarkerAlt />
              </span>
              <span
                style={{
                  marginRight: "10px",
                  paddingRight: "5px",
                }}
              >
                Malaysia
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#40A2D8",
            height: "300px",
            borderRadius: "25px",
            position: "relative",
            flex: "1",
          }}
        >
          <p
            style={{
              fontSize: "17px",
              position: "absolute",
              top: "40px",
              left: "50px",
            }}
          >
            ({reviews} reviews)
          </p>
          <p
            style={{
              fontSize: "43px",
              position: "absolute",
              top: "90px",
              left: "60px",
              fontWeight: "900",
            }}
          >
            ${price}
          </p>
          <p
            style={{
              position: "absolute",
              top: "155px",
              left: "120px",
              fontSize: "15px",
            }}
          >
            / per person
          </p>
          <button
            style={{
              position: "absolute",
              bottom: "20px",
              right: "20px",
              padding: "10px ",
              color: "#fff",
              backgroundColor: "#40A2D8",
              borderRadius: "30px",
              border: "1px solid #fff",
              fontSize: "20px",
              width: "150px",
              hover: {
                backgroundColor: "#6895D2",
              },
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </Container>
  );
};

export default PapualrPackegesContent;
