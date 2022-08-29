import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Adverts from "./layouts/Adverts/Adverts";
import Login from "./layouts/Login/Login";
import RoutesApi from "./routes/index";
import Loader from "./core/components/Loader";

function App() {
  return (
    <>
      <RoutesApi />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/fr" element={<Adverts />} />
          <Route path="/fwe" element={<Login />} />
        </Routes>
        <RoutesApi />
      </Suspense>
    </>
  );
}

export default App;