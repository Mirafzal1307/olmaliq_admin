import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./layouts/Login/Login";
import RoutesApi from "./routes/index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <RoutesApi />
    </>
  );
}

export default App;