import React from "react";
import { Grid, Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import MiniDrawer from "../../../layouts/Drawer/Drawer";
import LandingTop from "../LandingTop";
import CategoryCreate from "./CategoryCreate";
import CategoryList from "./CategoryList";
import CategoryListNone from "./CategoryListNone";
import { categories } from "./CategoryList";
import { useTranslation } from "react-i18next";
import CategoryCreateList from "./CategoryCreateList";

const Category = () => {
  const { t } = useTranslation()

  return (
    <>
      <MiniDrawer />
      <LandingTop />
      <Container>
        <Toolbar style={{padding: 0}} sx={{ justifyContent: "space-between" }}>
          <CategoryCreate />
          {categories.length === 0 ? <CategoryListNone /> : <CategoryList />}
        </Toolbar>
        <LandingTop
          mainText={t("admin.category_page.category_landing_side.main_text")}
          dashboardText={t(
            "admin.category_page.category_landing_side.category_direction_home"
          )}
          pageText={t(
            "admin.category_page.category_landing_side.category_direction_category"
          )}
          pageTextSpan={t(
            "admin.category_page.category_landing_side.category_direction_create_category"
          )}
          createButton={t(
            "admin.category_page.category_landing_side.create_category"
          )}
        />
        <Grid container>
          <Grid item xs={5}>
            {/* <Toolbar sx={{ justifyContent: "space-beetwen" }}> */}
              <CategoryCreate />
              {/* {categories.length === 0 ? <CategoryListNone /> : <CategoryList />} */}
            {/* </Toolbar> */}
          </Grid>
          <Grid item xs={7}>
              <CategoryCreateList />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Category;
