import React from "react";
import { Container } from "@mui/material";
import MiniDrawer from "../../layouts/Drawer/Drawer";
import { useTranslation } from "react-i18next";

const Settings = () => {
  const { t } = useTranslation();
  return (
    <>
      <MiniDrawer />
      <Container>
        <h1>Settings page</h1>
        {t("admin.drawer.menu_title.settings")}
      </Container>
    </>
  );
};

export default Settings;