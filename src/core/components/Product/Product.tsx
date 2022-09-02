import React from "react";
import { Container } from "@mui/material";
import MiniDrawer from "../../../layouts/Drawer/Drawer";
import { useTranslation } from "react-i18next"
import LandingTop from "../LandingTop";

const Product = () => {
  const { t } = useTranslation()

  return (
    <>
      <MiniDrawer />
      <Container>
        <LandingTop
          mainText={t("admin.product_page.product_landing_side.main_text")}
          dashboardText={t(
            "admin.product_page.product_landing_side.product_direction_home"
          )}
          pageTextSpan={t(
            "admin.product_page.product_landing_side.product_direction"
          )}
          prevIcon={">"}
          createButton={t(
            "admin.product_page.product_landing_side.add_product"
          )}
        />
      </Container>
    </>
  );
};

export default Product;