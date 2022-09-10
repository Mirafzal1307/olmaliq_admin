import React from "react";
import { Container, Typography } from "@mui/material";
import MiniDrawer from "../../layouts/Drawer/Drawer";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Settings = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MiniDrawer />
      <Container>
        <Typography variant="h1">Settings page</Typography>
        {t("admin.drawer.menu_title.settings")}
      </Container>
    </motion.div>
  );
};

export default Settings;