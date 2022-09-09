import React from "react";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import MiniDrawer from "../../layouts/Drawer/Drawer";
import { Typography } from "@mui/material"

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <MiniDrawer />
      <Container>
        <Typography variant="h1">Home page</Typography>
        <Typography>{t("admin.drawer.menu_title.dashboard")}</Typography>
        <Typography>Bu yerda hozircha hech narsa yoq. <Link to="/category">Bu yerga bosing</Link></Typography>
      </Container>
    </>
  );
};

export default Home;