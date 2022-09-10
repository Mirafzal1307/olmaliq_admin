import React from "react";
import { Container } from "@mui/material";
import MiniDrawer from "../../../layouts/Drawer/Drawer";
import { useTranslation } from "react-i18next";
import LandingTop from "../LandingTop";
import { motion } from "framer-motion";

const Order = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MiniDrawer />
      <Container>
        <LandingTop
          mainText={t("admin.order_page.order_landing_side.main_text")}
          dashboardText={t(
            "admin.order_page.order_landing_side.order_direction_home"
          )}
          pageTextSpan={t(
            "admin.order_page.order_landing_side.order_direction"
          )}
          prevIcon={">"}
          createButton={t(
            "admin.order_page.order_landing_side.add_order"
          )}
        />
      </Container>
    </motion.div>
  );
};

export default Order;