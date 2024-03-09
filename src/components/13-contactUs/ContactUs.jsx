import React from "react";
import { Container } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Container>
      <div
        style={{
          background: "#40A2D8",
          paddingTop: "150px",
          paddingBottom: "150px",
        }}
      >
        <div
          className="contactUs"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <p>Call TO Action</p>
            <h1>READY FOR UNFORGATABLE TRAVEL. REMEMBER US!</h1>
            <p>
              Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec
              nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia
              tenetur, aptent.
            </p>
          </div>

          <div>
            <button
              style={{
                padding: "15px",
                border: "1px solid #fff",
                borderRadius: "20px",
                width: "200px",
                color: "#fff",
                backgroundColor: "#40A2D8",
                fontSize: "17px",
                paddingTop: "12px",
                marginTop: "20px",
                hover: {
                  backgroundColor: "#40A2E3",
                },
              }}
            >
              Contact Us!
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
