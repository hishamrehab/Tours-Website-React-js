import React from "react";

import { FaClock } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";

const PapualrPackegesContent = ({ image, reviews, price, title }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "50px",
      }}
    >
      <div
        style={{
          height: "300px",
          marginTop: "40px",
          borderRadius: "25px",
          backgroundColor: "#161A30",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "50px",
          }}
        >
          <div>
            <img
              src={image}
              alt="package"
              style={{
                borderRadius: "15px",
              }}
            />
          </div>

          <div>
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
                width: "300px",
                height: "35px",
                display: "flex",
                justifyContent: "space-between",
                border: "1px solid #777",
                alignItems: "center",
                borderRadius: "20px",
                backgroundColor: "#FFF",
                color: "#000",
                boxShadow: " 5px 10px #888888;",
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
              width: "600px",
              height: "300px",
              borderRadius: "25px",
              position: "relative",
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
                bottom: "50px",
                right: "70px",
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
      </div>
    </div>
  );
};

export default PapualrPackegesContent;
