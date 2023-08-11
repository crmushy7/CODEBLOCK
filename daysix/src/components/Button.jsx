import React from "react";

const CustomizedButton = (props) => {
  const { title, length, onPress } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // marginTop: " 05.90%",
        // // width: { length },
        // backgroundColor: "green",
        // borderRadius: 10,
        // padding: 8,
      }}
    >
      <button
        onClick={onPress}
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: " 05.90%",
          // width: { length },
          backgroundColor: "green",
          borderRadius: 10,
          padding: 8,
        }}
      >
        <span>{title}</span>
      </button>
    </div>
  );
};

export default CustomizedButton;
