import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import MiniDrawer from "../../../layouts/Drawer/Drawer";
import LandingTop from "../LandingTop";
import CategoryCreate from "./CategoryCreate";
// import CategoryList from "./CategoryList";
import CategoryListNone from "./CategoryListNone";
// import { categories } from "./CategoryList";
import { useTranslation } from "react-i18next";
import CategoryCreateList from "./CategoryCreateList";
// import SplitButton from "../Info";
import { motion } from "framer-motion";
import ParentCategoryCreate from "./ParentCategoryCreate";

const Category = () => {
  const { t } = useTranslation();

  const [clickedone, setClickedOne] = useState(false);
  const [parentClick, setParentClick] = useState(false);

  const handleClick = () => {
    if (!clickedone) {
      setClickedOne(true);
    }
  };

  const handleParentCategoryClick = () => {
    if (!parentClick) {
      setParentClick(true);
    }
  };

  return (
    <motion.div
      initial={{ width: "50%" }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      <MiniDrawer />
      <Container>
        <LandingTop
          mainText={t("admin.category_page.category_landing_side.main_text")}
          dashboardText={t(
            "admin.category_page.category_landing_side.category_direction_home"
          )}
          prevIcon={">"}
          prevIcon2={">"}
          pageTextSpan={t(
            "admin.category_page.category_landing_side.category_direction_category"
          )}
          createButton={t(
            "admin.category_page.category_landing_side.create_category"
          )}
        />
        <Grid container>
          <Grid item xs={5}>
            <CategoryCreate
              handleParentClick={handleParentCategoryClick}
              handleClick={handleClick}
            />
          </Grid>
          <Grid item xs={7}>
            {/* {categories?.length === 0 ?  : <CategoryList />} */}
            {parentClick ? (
              <ParentCategoryCreate />
            ) : null || clickedone ? (
              <CategoryCreateList />
            ) : (
              <CategoryListNone />
            )}
            {/* <CategoryList /> */}
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
};

export default Category;
