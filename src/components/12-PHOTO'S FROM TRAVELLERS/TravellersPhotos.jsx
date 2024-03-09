import React from "react";
import image1 from "../../images/gallery-1.jpg";
import image2 from "../../images/gallery-2.jpg";
import image3 from "../../images/gallery-3.jpg";
import image4 from "../../images/gallery-4.jpg";
import image5 from "../../images/gallery-5.jpg";
import { Container } from "react-bootstrap";
const TravellersPhotos = () => {
  return (
    <Container>
      <div
        style={{
          marginTop: "150px",
          marginLeft: "7%",
          marginRight: "7%",
        }}
      >
        
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
            Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec
            nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia
            tenetur, aptent.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignContent: "center",
              gap: "30px",
              marginLeft: "25px",
            }}
          >
            <div>
              <img
                src={image4}
                alt="image"
                width={"280px"}
                height={"300px"}
                style={{
                  borderRadius: "25px",
                }}
              />
            </div>

            <div>
              <img
                src={image1}
                alt="image"
                width={"280px"}
                height={"300px"}
                style={{
                  borderRadius: "25px",
                }}
              />
            </div>

            <div>
              <img
                src={image5}
                width={"280px"}
                height={"300px"}
                style={{
                  borderRadius: "25px",
                }}
              />
            </div>

            <div>
              <img
                src={image2}
                width={"280px"}
                height={"300px"}
                style={{
                  borderRadius: "25px",
                }}
              />
            </div>
          </div>
     
      </div>
    </Container>
  );
};

export default TravellersPhotos;
