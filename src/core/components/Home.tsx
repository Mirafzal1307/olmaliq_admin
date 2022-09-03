import React from "react";
import { Container } from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getSubCategory } from "../../api/admin/AdminCategoryApi";
import MiniDrawer from "../../layouts/Drawer/Drawer";

const Home = () => {
  const getData = async () => {
    const res: unknown = await getSubCategory();
    console.log(res);
  };

  useEffect(() => {
    getData();
  });

  const { t } = useTranslation();

  return (
    <>
      <MiniDrawer />
      <Container>
        <h1>Home page</h1>
        <p>{t("admin.drawer.menu_title.dashboard")}</p>
        <p>Bu yerda hozircha hech narsa yoq. <Link to="/category">Bu yerga bosing</Link></p>
      </Container>
    </>
  );
};

export default Home;