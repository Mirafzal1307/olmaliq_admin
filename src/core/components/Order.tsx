import { Container } from "@mui/material";
import MiniDrawer from "../../layouts/Drawer/Drawer";
import { useTranslation } from "react-i18next";

const Order = () => {
  const { t } = useTranslation();
  return (
    <>
      <MiniDrawer />
      <Container>
        <h1>Order page</h1>
        {t("admin.drawer.menu_title.order")}
      </Container>
    </>
  );
};

export default Order;