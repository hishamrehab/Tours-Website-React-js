import React from "react";
import image1 from "../../images/gallery-1.jpg";
import image2 from "../../images/gallery-2.jpg";
import image3 from "../../images/gallery-3.jpg";
import image4 from "../../images/gallery-4.jpg";
import image5 from "../../images/gallery-5.jpg";
import { Container } from "react-bootstrap";
const TravellersPhotos = () => {
  return (
    <div
      style={{
        marginTop: "150px",
      }}
    >
      <Container>
        <h1
          style={{
            textAlign: "center",
          }}
        >
          PHOTO'S FROM TRAVELLERS
        </h1>
        <p
          style={{
            textAlign: "center",
            color: "#777",
            fontSize: "16px",
            marginBottom: "60px",
          }}
        >
          Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo,
          rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur,
          aptent.
        </p>
        <ul
          style={{
            display: "grid",
            columnGap: "30px",
            "grid-template-columns": "auto auto auto ",
            "grid-template-rows": "300px 300px",
          }}
        >
          <li style={{
            marginBottom:"30px"
          }}>
            <img
              src={image1}
              alt="image"
              width={"300px"}
              height={"300px"}
              style={{
                borderRadius: "25px",
              
              }}
            />
          </li>

          <li>
            <img
              src={image2}
              width={"300px"}
              height={"300px"}
              style={{
                borderRadius: "25px",
              }}
            />
          </li>

          <li>
            <img
              src={image3}
              width={"300px"}
              height={"600px"}
              style={{
                borderRadius: "25px",
              }}
            />
          </li>
          <li>
            <img
              src={image4}
              width={"300px"}
              height={"300px"}
              style={{
                borderRadius: "25px",
              }}
            />
          </li>

          <li>
            <img
              src={image5}
              width={"300px"}
              height={"300px"}
              style={{
                borderRadius: "25px",
              }}
            />
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default TravellersPhotos;
