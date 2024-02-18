import React from "react";
import { Container } from "react-bootstrap";
import PapualrPackegesContent from "./PapualrPackegesContent";
import { papualrpackegescontent } from "../../data";
const PopularPackeges = () => {
  return (
    <div
      style={{
        marginTop: "170px",
      }}
    >
      <Container>
        <h1
          style={{
            textAlign: "center",
          }}
        >
          CHECKOUT OUR PACKEGES
        </h1>
        <p
          style={{
            color: "#777",
            textAlign: "center",
            fontSize: "17px",
            marginBottom: "30px",
          }}
        >
          Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo,
          rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur,
          aptent.
        </p>
        {papualrpackegescontent.map((content) => {
          return (
            <div>
              <PapualrPackegesContent
                image={content.image1}
                title={content.title1}
                reviews={content.reviews1}
                price={content.price1}
              />
              <PapualrPackegesContent
                image={content.image2}
                title={content.title2}
                reviews={content.reviews2}
                price={content.price2}
              />
              <PapualrPackegesContent
                image={content.image3}
                title={content.title3}
                reviews={content.reviews3}
                price={content.price3}
              />
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default PopularPackeges;
