import React from "react";
import { Container, Grid } from "@mui/material";
import MiniDrawer from "../../../layouts/Drawer/Drawer";
import { useTranslation } from "react-i18next"
import LandingTop from "../LandingTop";
import ProductList from "./ProductList";
import { motion } from "framer-motion";

const Product = () => {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
    </motion.div>
  );
};

export default Product;