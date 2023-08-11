import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Detailpage from "./Detailpage";
import Login from "./Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Detailpage/:id" element={<Detailpage />} />

      <Route path="/Homepage" element={<Homepage />} />
    </Routes>
  );
};

export default App;
