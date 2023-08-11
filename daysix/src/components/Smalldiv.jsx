import React from "react";

const Smalldiv = (props) => {
  const { data } = props;
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "whitesmoke",
          height: "10vh",
          width: "10vw",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "90%",
            width: "90%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F5FFFA",
          }}
        >
          <div
            style={{
              display: "flex",
              height: "100%",
              width: "80%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#F5FFFA",
            }}
          >
            <img
              style={{
                display: "flex",
                height: "100%",
                width: "100%",
              }}
              src={data}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smalldiv;
