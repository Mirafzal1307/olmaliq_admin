import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import Login from '../../layouts/Login/Login';
import NotFoundPage from '../../layouts/NotFound/404';
import Adverts from './Adverts/Adverts';
import ProductCreate from './Product/ProductCreate';
import { AnimatePresence } from 'framer-motion';
import RoutesApi from '../../routes';


const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Login />} />
        <Route path="/adverts" element={<Adverts />} />
        <Route path="/product/create" element={<ProductCreate />} />
        <Route path="/404" element={<NotFoundPage />} />
      </Routes>
      <RoutesApi />
    </AnimatePresence>
  );
};

export default AnimatedRoutes;