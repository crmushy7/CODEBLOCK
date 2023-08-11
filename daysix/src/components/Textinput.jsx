import React from "react";

const Textinput = (props) => {
  const { length, placeholder, label } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        color: "black",
        fontSize: 20,
      }}
    >
      <span style={{ marginBottom: 7 }}>{label}</span>
      <input
        placeholder={placeholder}
        style={{
          width: { length },
          backgroundColor: "whitesmoke",
          color: "black",
          borderRadius: 10,
          height: "1.5em",
        }}
      />
    </div>
  );
};

export default Textinput;
