import React from "react";
import { Container } from "react-bootstrap";
import { popularpackeges } from "../../data";
import PopularRpackeges1 from "./PopularRpackeges1";
const PopularRpackeges = () => {
  return (
    <div>
      <Container>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          POPULAR DESTINATION
        </h1>
        <p
          style={{
            color: "#777",
            marginBottom: "30px",
            textAlign: "center",
            fontSize: "17px",
          }}
        >
          Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo,
          rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur,
          aptent.
        </p>

        {popularpackeges.map((packege) => {
          return (
            <div
              className="popularpackeges-content"
              style={{
                display: "flex",
                gap: "30px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <PopularRpackeges1
                image={packege.image1}
                desc={packege.desc1}
                nation={packege.nation1}
                site={packege.site1}
              />

              <PopularRpackeges1
                image={packege.image2}
                desc={packege.desc2}
                nation={packege.nation2}
                site={packege.site2}
              />

              <PopularRpackeges1
                image={packege.image3}
                desc={packege.desc3}
                nation={packege.nation3}
                site={packege.site3}
              />
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default PopularRpackeges;
