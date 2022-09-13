import React from "react";
import Home from "../core/components/Home"
import Product from "../core/components/Product/Product"
import ProductIcon from "../Img/icons/ProductIcon";
import HomeIcon from "../Img/icons/Home";
import Category from "../core/components/Category/Category";
import Order from "../core/components/Order/Order";
import Settings from "../core/components/Settings";
import SettingsIcon from "../Img/icons/SettingsIcon";
import CategoryIcon from "../Img/icons/CategoryIcon"
import OrderIcon from "../Img/icons/OrderIcon";
import AdvertsIcon from "../Img/icons/AvertsIcon";
import Adverts from "../core/components/Adverts/Adverts";
import NotFoundPage from "../layouts/NotFound/404";
import ProductCreate from "../core/components/Product/ProductCreate";

const MainRoutes = [
  {
    icon: <HomeIcon />,
    title: "Boshqaruv paneli",
    path: "/dashboard",
    element: <Home />,
  },
  {
    icon: <ProductIcon />,
    title: "Mahsulot",
    path: "/product",
    element: <Product />,
  },
  {
    icon: <CategoryIcon />,
    title: "Turkum",
    path: "/category",
    element: <Category />,
  },
  {
    icon: <OrderIcon />,
    title: "Buyurtma",
    path: "/order",
    element: <Order />,
  },
  {
    icon: <SettingsIcon />,
    title: "Sozlamalar",
    path: "/settings",
    element: <Settings />,
  },
  {
    icon: <AdvertsIcon />,
    title: "Reklom",
    path: "/adverts",
    // element: <Adverts />
  },
  {
    icon: <ProductIcon />,
    title: "Mahsulot",
    path: "/productcreate",
    element: <ProductCreate />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default MainRoutes