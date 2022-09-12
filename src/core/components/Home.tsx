import React from "react";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import MiniDrawer from "../../layouts/Drawer/Drawer";
import { Typography } from "@mui/material"
import { motion } from "framer-motion";

const Home = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ width: "50%" }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
      transition={{
        delay: 0.5,
      }}
    >
      <MiniDrawer />
      <Container>
        <Typography variant="h1">Home page</Typography>
        <Typography>{t("admin.drawer.menu_title.dashboard")}</Typography>
        <Typography>
          Bu yerda hozircha hech narsa yoq.{" "}
          <Link to="/adverts">Bu yerga bosing</Link>
        </Typography>
      </Container>
    </motion.div>
  );
};

export default Home;