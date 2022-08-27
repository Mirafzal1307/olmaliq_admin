import { Container } from "@mui/material";
import MiniDrawer from "../../layouts/Drawer/Drawer";
import { useTranslation } from "react-i18next"

const Product = () => {
  const { t } = useTranslation()

  return (
    <>
      <MiniDrawer />
      <Container>
        <h1>Product page</h1>
        {t("admin.drawer.menu_title.product")}
      </Container>
    </>
  );
};

export default Product;