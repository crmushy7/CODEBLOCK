import React from "react";
import Cart from "../images/Cart.png";
import Carttwo from "../images/Carttwo.png";
import Personicon from "../images/Personicon.png";
import Headph from "../images/Headph.png";
import Customizeddiv from "../components/Customizeddiv";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const Homepage = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      console.log(res.data.products);
      setData(res.data.products);
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        width: "100%",
        backgroundColor: "whitesmoke",
        fontFamily: "sans-serif",
        justifyContent: "space-between",
      }}
    >
      {/* first top div */}
      {/* <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "5%",
          width: "88%",
          border: "1px solid black",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            width: "10%",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "58%",
            }}
          >
            <img
              style={{
                display: "flex",
                height: "20%",
              }}
              src={Cart}
              alt=""
            />
            <p
              style={{
                fontWeight: "bolder",
              }}
            >
              Shopcart
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "20%",
            justifyContent: "space-evenly",
            marginTop: "-20%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "70%",
            }}
          >
            <img
              src={Personicon}
              style={{
                height: "10%",
              }}
            />
            <button
              style={{
                fontSize: "0.8em",
                border: "none",
              }}
            >
              Account
            </button>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "45%",
            }}
          >
            <img
              src={Carttwo}
              style={{
                display: "flex",
                height: "10%",
              }}
            />
            <button
              style={{
                border: "none",
              }}
            >
              Cart
            </button>
          </div>
        </div>
      </div> */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "5vh",
          width: "88%",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            width: "10%",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "58%",
            }}
          >
            <img
              style={{
                display: "flex",
                height: "70%",
              }}
              src={Cart}
              alt=""
            />
            <p
              style={{
                fontWeight: "bolder",
              }}
            >
              Shopcart
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "20%",
            justifyContent: "space-evenly",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "70%",
            }}
          >
            <img
              src={Personicon}
              style={{
                height: "50%",
              }}
            />
            <button
              style={{
                fontSize: "0.8em",
                border: "none",
              }}
            >
              Account
            </button>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "45%",
            }}
          >
            <img
              src={Carttwo}
              style={{
                display: "flex",
                height: "50%",
              }}
            />
            <button
              style={{
                border: "none",
              }}
            >
              Cart
            </button>
          </div>
        </div>
      </div>

      {/*below header*/}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          height: "20vh",
          width: "88%",
          marginTop: "1%",
          backgroundColor: "#FFEFD5",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontWeight: "bold",
            fontSize: "1.5em",
            width: "60%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>Grab upto 50% off on selected product</div>
          <div>
            <button
              style={{
                backgroundColor: "#2F4F4F",
                borderRadius: "20px",
              }}
            >
              <p
                style={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                Buy Now
              </p>
            </button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "40%",
            height: "100%",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              height: "100%",
              width: "100%",
            }}
          >
            <img
              style={{
                display: "flex",
                width: "100%",
                maxWidth: "100%",
              }}
              src={Headph}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "88%",
          height: "3%",
          marginTop: "1%",
        }}
      >
        <h3>Best products for you!!</h3>
      </div>

      {/*main div*/}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
          gap: "20px",
          marginTop: "3%",
          height: "70%",
          width: "88%",
        }}
      >
        {data?.map((post, index) => {
          return <Customizeddiv data={post} />;
        })}
      </div>
    </div>
  );
};

export default Homepage;
