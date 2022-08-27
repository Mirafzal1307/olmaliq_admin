import { Container, Grid, Paper } from "@mui/material";
import MiniDrawer from "../../layouts/Drawer/Drawer";
import { useTranslation } from "react-i18next"
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  main_text: {
    fontFamily: "Montserrat",
    fontSize: "31px",
    fontWeight: "600",
    color: "#444444 !important",
  },
  createCategoryDirection: {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "400",
    color: "#444444 !important",
    marginRight: "6px",
  },
  createCategoryDirectionSpan: {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "400",
    color: "#2DA55F !important",
  },
  createButton: {
    background: "#2DA55F !important",
    color: "white !important",
    border: "none",
    borderRadius: "5px",
    padding: "13px 28px",
    fontFamily: "Poppins",
    fontSize: "17px",
    fontWeight: "700"
  }
});

const LandingTop = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <>
      <Container>
        <Grid sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "32px" }}>
          <Grid>
            <h1 className={classes.main_text}>
              {t("admin.category_page.category_landing_side.main_text")}
            </h1>
            <Grid sx={{ display: "flex" }}>
              <p className={classes.createCategoryDirection}>
                {t(
                  "admin.category_page.category_landing_side.category_direction_home"
                )}
              </p>{" "}
              <p className={classes.createCategoryDirection}>{">"}</p>
              <p className={classes.createCategoryDirection}>
                {t(
                  "admin.category_page.category_landing_side.category_direction_category"
                )}
              </p>
              <p className={classes.createCategoryDirection}>{">"}</p>
              <p className={classes.createCategoryDirectionSpan}>
                {t(
                  "admin.category_page.category_landing_side.category_direction_create_category"
                )}
              </p>
            </Grid>
          </Grid>
          <Grid>
            <button className={classes.createButton}>
              {t("admin.category_page.category_landing_side.create_category")}
            </button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default LandingTop;
