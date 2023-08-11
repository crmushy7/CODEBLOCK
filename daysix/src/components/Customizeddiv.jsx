import React from "react";
import Detailpage from "../screens/Detailpage";

const Customizeddiv = (props) => {
  const { data } = props;
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "whitesmoke",
          height: "50vh",
          width: "100%",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "90%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F5FFFA",
          }}
        >
          <a
            style={{
              display: "flex",
              height: "90%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#F5FFFA",
            }}
            href={`/Detailpage/${data.id}`}
          >
            <img
              style={{
                display: "flex",
                height: "100%",
                width: "100%",
              }}
              src={data.thumbnail}
            />
          </a>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "50%",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div>{data.title}</div>
            <div>${data.price}.00</div>
          </div>

          <div>Get with a discount of {data.discountPercentage}%</div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              style={{
                borderRadius: "25px",
                backgroundColor: "#1B4136",
              }}
            >
              <p>Add to cart</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customizeddiv;
