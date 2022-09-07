import React from "react";
import { Container, Grid } from "@mui/material";
import MiniDrawer from "../../../layouts/Drawer/Drawer";
import { useTranslation } from "react-i18next"
import LandingTop from "../LandingTop";
import ProductList from "./ProductList";

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
          toPage={`product/create`}
          createButton={t(
            "admin.product_page.product_landing_side.add_product"
          )}
        />
        <Grid xs={12}>
          <ProductList />
        </Grid>
      </Container>
    </>
  );
};

export default Product;