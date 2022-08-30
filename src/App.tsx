import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Adverts from "./core/components/Adverts/Adverts";
import Login from "./layouts/Login/Login";
import RoutesApi from "./routes/index";
import Loader from "./core/components/Loader";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* <Route path="/fr" element={<Adverts />} /> */}
          <Route path="/" element={<Login />} />
        </Routes>
        <RoutesApi />
      </Suspense>
    </>
  );
}

export default App;