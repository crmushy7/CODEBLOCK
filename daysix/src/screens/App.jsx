import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Detailpage from "./Detailpage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Detailpage/:id" element={<Detailpage />} />
    </Routes>
  );
};

export default App;
