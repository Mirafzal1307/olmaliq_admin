import React from "react";
import { Route, Routes } from "react-router-dom";
import Adverts from "./layouts/Adverts/Adverts";
import Login from "./layouts/Login/Login";
import RoutesApi from "./routes/index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Adverts />} />
      </Routes>
      <RoutesApi />
    </>
  );
}

export default App;