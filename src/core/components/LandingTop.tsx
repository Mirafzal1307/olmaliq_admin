import { Button, Container, Grid, Typography } from "@mui/material";
import MiniDrawer from "../../layouts/Drawer/Drawer";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  main_text: {
    fontFamily: "Montserrat",
    fontSize: "31px !important",
    fontWeight: "600",
    color: "#444444 !important",
  },
  createCategoryDirection: {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "400",
    color: "#444444 !important",
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
    fontWeight: "700",
  },
});

const LandingTop = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <>
      <Container>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "32px",
          }}
        >
          <Grid>
            <Typography variant="h4" className={classes.main_text}>
              {t("admin.category_page.category_landing_side.main_text")}
            </Typography>
            <Grid sx={{ display: "flex" }}>
              <Typography className={classes.createCategoryDirection}>
                {t(
                  "admin.category_page.category_landing_side.category_direction_home"
                )}
              </Typography>
              <Typography style={{margin: "0 5px"}}>{">"}</Typography>
              <Typography className={classes.createCategoryDirection}>
                {t(
                  "admin.category_page.category_landing_side.category_direction_category"
                )}
              </Typography>
              <Typography style={{margin: "0 5px"}}>{">"}</Typography>
              <Typography className={classes.createCategoryDirectionSpan}>
                {t(
                  "admin.category_page.category_landing_side.category_direction_create_category"
                )}
              </Typography>
            </Grid>
          </Grid>
          <Grid>
            <Button className={classes.createButton}>
              {t("admin.category_page.category_landing_side.create_category")}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default LandingTop;
