import React from "react";
import { Container } from "react-bootstrap";
import packege from "../../images/packege-1 (1).jpg";
import { CiClock1 } from "react-icons/ci";
import { IoPersonSharp } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";

const PopularPackeges = () => {
  return (
    <div>
      <Container>
        <h1>CHECKOUT OUR PACKEGES</h1>
        <p>
          Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo,
          rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur,
          aptent.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "50px",
            backgroundColor: "red",
            height: "1000px",
          }}
        >
          <div
            style={{
              backgroundColor: "blue",
              height: "300px",
              marginTop: "40px",
              borderRadius: "25px",
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
                  src={packege}
                  alt="package"
                  style={{
                    borderRadius: "25px",
                  }}
                />
              </div>

              <div>
                <h3>EXPERIENCE THE GREAT HOLIDAY ON BEACH</h3>
                <p>
                  Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo
                  maiores, est aliquet porttitor! Eaque, cras, aspernatur.
                </p>
                <div
                  style={{
                    width: "300px",
                    height: "50px",
                    display: "flex",
                    justifyContent: "space-between",
                    border: "1px solid #777",
                    alignItems: "center",
                    borderRadius: "20px",
                    backgroundColor: "#FFF",
                    color: "#000",
                  }}
                >
                  <div
                    style={{
                      borderRight: "1px solid #777",
                    }}
                  >
                    <span>
                      <CiClock1 />
                    </span>
                    <span>7D/6N</span>
                  </div>
                  <div>
                    <span>
                      <IoPersonSharp />
                    </span>
                    <span>pax: 10</span>
                  </div>
                  <div>
                    <span>
                      <FaMapMarkerAlt />
                    </span>
                    <span>Malaysia</span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "#40A2D8",
                  width: "400px",
                  height: "300px",
                  borderRadius: "25px",
                }}
              >
                <p>(25 reviews)</p>
                <p>$750</p>
                <p>/ per person</p>
                <button>Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PopularPackeges;
