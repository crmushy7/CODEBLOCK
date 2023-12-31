import { border } from "@chakra-ui/react";
import React from "react";
import { BsCart4, BsPerson } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Smalldiv from "../components/Smalldiv";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";

const Detailpage = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [count, setCount] = useState(1);
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  const Substraction = () => {
    if (count == 1) {
      setCount(1);
    } else {
      setCount((prevcount) => prevcount - 1);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "110vh",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "80%",
          width: "80%",
          backgroundColor: "whitesmoke",
        }}
      >
        {/* top div */}

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            height: "10%",
            alignItems: "center",
            width: "100%",
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
                alignItems: "center",
                width: "58%",
                color: "#345513",
              }}
            >
              <BsCart4
                style={{
                  fontWeight: "bolder",
                }}
              />
              <p
                style={{
                  marginLeft: "2%",
                  fontWeight: "bold",
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
              <BsPerson />
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
              <BsCart4 />
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
        {/* main div with two columns */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "90%",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              width: "48%",
              justifyContent: "space-between",
            }}
          >
            {/* main picture */}
            <div
              style={{
                display: "flex",
                height: "70%",
                backgroundColor: "#F5FFFA",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{
                  display: "flex",
                  height: "90%",
                  width: "90%",
                }}
                src={data?.thumbnail}
              />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill,minmax(70px,2fr))",
                // gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
                gap: "20px",
                height: "28%",
                width: "100%",
              }}
            >
              {data?.images.map((images, index) => {
                return <Smalldiv key={index} data={images} />;
              })}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              width: "48%",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "19%",
                justifyContent: "space-around",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontFamily: "sans-serif",
                  fontWeight: "bolder",
                }}
              >
                {data?.title}
              </div>
              <div
                style={{
                  display: "flex",
                }}
              >
                {data?.description}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  height: "10%",
                }}
              >
                <div>
                  <RiStarSFill />
                </div>
                <div>
                  <RiStarSFill />
                </div>
                <div>
                  <RiStarSFill />
                </div>
                <div>
                  <RiStarSFill />
                </div>
                <div>
                  <RiStarSLine />
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                height: "15%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  fontWeight: "bold",
                }}
              >
                <div>Price: ${data?.price}.00</div>
                <div
                  style={{
                    marginTop: "3%",
                  }}
                >
                  Discount: ${data?.discountPercentage}
                </div>
                <div>
                  <p>take advantage of our generous discounts!</p>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                height: "10%",
                justifyContent: "space-around",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  height: "60%",
                  width: "40%",
                  borderRadius: "20px",
                  justifyContent: "space-evenly",
                  backgroundColor: "#F5FFFA",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "35%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={Substraction}
                >
                  <h1>-</h1>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "20%",
                    alignItems: "center",

                    justifyContent: "center",
                  }}
                >
                  <h3>{count}</h3>
                </div>
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    width: "35%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={() => setCount((prevcount) => prevcount + 1)}
                >
                  <h1>+</h1>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "50%",
                  height: "30%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Only
                <p
                  style={{
                    display: "flex",
                    color: "#BAB826",
                  }}
                >
                  {data?.stock} items
                </p>
                left!
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                height: "12%",
                width: "70%",
              }}
            >
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

              <div>
                <button
                  style={{
                    borderRadius: "20px",
                  }}
                >
                  <p
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "20px",
                    }}
                  >
                    Add to Cart
                  </p>
                </button>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                height: "34%",
              }}
            >
              <div>
                <h4
                  style={{
                    color: "#8E9949 ",
                  }}
                >
                  FREE DELIVERY!
                </h4>
                <p>
                  "Experience the convenience of free delivery with our
                  exceptional services! We're delighted to bring our top-notch
                  solutions right to your doorstep without any additional cost.
                  Sit back, relax, and let us take care of the delivery, so you
                  can enjoy our premium services hassle-free. Your satisfaction
                  is our priority, and we're committed to making every step of
                  your experience seamless and enjoyable. Discover the joy of
                  free delivery today!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailpage;
