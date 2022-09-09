import React from "react";
import { Container, Typography } from "@mui/material";
import MiniDrawer from "../../layouts/Drawer/Drawer";
import { useTranslation } from "react-i18next";

const Settings = () => {
  const { t } = useTranslation();
  return (
    <>
      <MiniDrawer />
      <Container>
        <Typography variant="h1">Settings page</Typography>
        {t("admin.drawer.menu_title.settings")}
      </Container>
    </>
  );
};

export default Settings;