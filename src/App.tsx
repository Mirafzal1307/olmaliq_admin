import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Adverts from "./core/components/Adverts/Adverts";
import Login from "./layouts/Login/Login";
import RoutesApi from "./routes/index";
import Loader from "./core/components/Loader";
import ProductCreate from "./core/components/Product/ProductCreate";
import NotFoundPage from "./layouts/NotFound/404";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* <Route path="/fr" element={<Adverts />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/adverts" element={<Adverts />} />
          <Route path="/product/create" element={<ProductCreate />} />
          <Route path="/404" element={<NotFoundPage />} />
        </Routes>
        <RoutesApi />
      </Suspense>
    </>
  );
}

export default App;