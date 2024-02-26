import React from "react";

const PopularDestionation1 = ({ image, nation, site, desc }) => {
  return (
    <div
      className="popularpackeges-content1"
      style={{
        position: "relative",
        margin: "auto",
      }}
    >
      <img
        src={image}
        alt="popularpackeges-content1-image"
        style={{
          width: "350px",
          height: "420px",
          borderRadius: "25px",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          backgroundColor: "white",
          padding: "13px",
          marginRight: "50px",
          marginLeft: "15px",
          borderRadius: "30px",
        }}
      >
        <p
          style={{
            color: "#40A2E3",
          }}
        >
          {nation}
        </p>
        <span
          style={{
            color: "#000",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          {site}
        </span>
        <p style={{ color: "#7D7C7C" }}>{desc}</p>
      </div>
    </div>
  );
};

export default PopularDestionation1;
