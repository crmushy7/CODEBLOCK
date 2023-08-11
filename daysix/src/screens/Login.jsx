import React from "react";
import Coloured from "../images/Coloured.jpg";
import Picused from "../images/Picused.jpg";
import Textinput from "../components/Textinput";
import CustomizedButton from "../components/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        height: "100vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "50%",
          width: "90%",
          border: "1px solid black",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "52%",
            height: "100%",
          }}
        >
          <img
            src={Picused}
            alt=""
            style={{
              flex: 1,
              borderTopLeftRadius: "20px",
              borderBottomLeftRadius: "20px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            width: "100%",

            backgroundColor: "#e5f1de",
            justifyContent: "center",
            alignItems: "center",
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
        >
          <h1
            style={{
              fontWeight: "bold",
              fontSize: 30,
            }}
          >
            Welcome
          </h1>
          <Textinput label="Usename" placeholder="Input name" length="80%" />
          <Textinput
            label="password"
            placeholder="Input password"
            length="90%"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "90%",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <span style={{ paddingTop: 10 }}>Forgot password?</span>
            <CustomizedButton
              length="10%"
              title="Login"
              onPress={() => navigate("/Homepage")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
