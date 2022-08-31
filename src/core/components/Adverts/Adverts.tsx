import React from "react";
import Modal from "../Modal";
import { Container } from "@mui/system";
import MiniDrawer from "../../../layouts/Drawer/Drawer";
import { useTranslation } from "react-i18next";
import LandingTop from "../LandingTop";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  PaperTitle: {
    fontFamily: "Montserrat",
    fontWeight: "600 !important",
    fontSize: "17px !important",
    color: "#2DA55F",
  },
  PaperText1: {
    fontFamily: "Montserrat",
    fontWeight: "600 !important",
    fontSize: "17px !important",
    color: "#444",
    margin: "10px 0 !important",
  },
  Grid: {
    margin: "-5px !important",

    "& Button": {
      margin: "5px",
      padding: "0",
      maxWidth: "45px",
      minWidth: "45px",
    },
  },
  Typography: {
    fontFamily: "Montserrat",
    fontSize: "11px !important",
    color: "#8C8C8C",
    marginTop: "10px !important",

    "& span": {
      fontWeight: "600 !important",
      color: "#2DA55F",
    },
  },
});
const Adverts = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <>
      <MiniDrawer />
      <Container>
      <LandingTop
        mainText={t(
          "admin.adverts_page.adverts_page_landingTop.adverts_page_landingTop_name"
        )}
        dashboardText={t(
          "admin.adverts_page.adverts_page_landingTop.adverts_page_landingTop_url1"
        )}
        pageText={t(
          "admin.adverts_page.adverts_page_landingTop.adverts_page_landingTop_url2"
        )}
        pageTextSpan={t(
          "admin.adverts_page.adverts_page_landingTop.adverts_page_landingTop_url3"
        )}
        createButton={t(
          "admin.adverts_page.adverts_page_landingTop.adverts_page_landingTop_button"
        )}
      />
        <Paper style={{ padding: "30px" }}>
          <Typography className={classes.PaperTitle}>
            {t(
              "admin.adverts_page.adverts_page_paper.adverts_page_paper_title"
            )}
            {" №1"}
          </Typography>
          <Grid container>
              <Typography className={classes.PaperText1}>
                {"1. "}
                {t(
                  "admin.adverts_page.adverts_page_paper.adverts_page_paper_categoryTitle"
                )}
              </Typography>
              <Grid container>
                <Grid item xs={6} className={classes.Grid}>
                  <Button>
                    <img
                      src={require("../../../Img/categoryImg1.png")}
                      alt=""
                    />
                  </Button>
                  <Button>
                    <img
                      src={require("../../../Img/categoryImg1.png")}
                      alt=""
                    />
                  </Button>
                  <Button>
                    <img
                      src={require("../../../Img/categoryImg1.png")}
                      alt=""
                    />
                  </Button>
                  <Button>
                    <img
                      src={require("../../../Img/categoryImg1.png")}
                      alt=""
                    />
                  </Button>
                  <Button>
                    <img
                      src={require("../../../Img/categoryImg1.png")}
                      alt=""
                    />
                  </Button>
                  <Button>
                    <img
                      src={require("../../../Img/categoryImg1.png")}
                      alt=""
                    />
                  </Button>
                  <Button>
                    <img
                      src={require("../../../Img/categoryImg1.png")}
                      alt=""
                    />
                  </Button>
                  <Button>
                    <img
                      src={require("../../../Img/categoryImg1.png")}
                      alt=""
                    />
                  </Button>
                  <Button>
                    <img
                      src={require("../../../Img/categoryImg1.png")}
                      alt=""
                    />
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={6}
                  style={{ display: "flex", justifyContent: "end" }}
                >
                  <Modal />
                </Grid>
                <Typography className={classes.Typography}>
                  <span>
                    {t(
                      "admin.adverts_page.adverts_page_paper.adverts_page_paper_noteSpan"
                    )}
                  </span>
                  {t(
                    "admin.adverts_page.adverts_page_paper.adverts_page_paper_note"
                  )}
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography className={classes.PaperText1}>
                  {"2. "}
                  {t(
                    "admin.adverts_page.adverts_page_paper.adverts_page_paper_categoryTitle2"
                  )}
                </Typography>
                <Box>
                  <img
                    style={{ width: "100%" }}
                    src={require("../../../Img/advertImg.png")}
                    alt=""
                  />
                </Box>
              </Grid>
          
            <Grid item xs={6} className={classes.Grid}>
              <Typography className={classes.PaperText1}>
                {"3. "}
                {t(
                  "admin.adverts_page.adverts_page_paper.adverts_page_paper_categoryTitle"
                )}
              </Typography>
              <Button>
                <img src={require("../../../Img/categoryImg1.png")} alt="" />
              </Button>
              <Button>
                <img src={require("../../../Img/categoryImg1.png")} alt="" />
              </Button>
              <Button>
                <img src={require("../../../Img/categoryImg1.png")} alt="" />
              </Button>
              <Button>
                <img src={require("../../../Img/categoryImg1.png")} alt="" />
              </Button>
              <Button>
                <img src={require("../../../Img/categoryImg1.png")} alt="" />
              </Button>
              <Button>
                <img src={require("../../../Img/categoryImg1.png")} alt="" />
              </Button>
              <Button>
                <img src={require("../../../Img/categoryImg1.png")} alt="" />
              </Button>
              <Button>
                <img src={require("../../../Img/categoryImg1.png")} alt="" />
              </Button>
              <Button>
                <img src={require("../../../Img/categoryImg1.png")} alt="" />
              </Button>
            </Grid>
            <Typography className={classes.Typography}>
              <span>
                {t(
                  "admin.adverts_page.adverts_page_paper.adverts_page_paper_noteSpan"
                )}
              </span>
              {t(
                "admin.adverts_page.adverts_page_paper.adverts_page_paper_note"
              )}
            </Typography>
            <Grid item xs={6} className={classes.Grid}>
              <Typography className={classes.PaperText1}>
                {"3. "}
                {t(
                  "admin.adverts_page.adverts_page_paper.adverts_page_paper_categoryTitle"
                )}
              </Typography>
              <Button>
                <img src={require("../../../Img/categoryImg1.png")} alt="" />
              </Button>
              <Button>
                <img src={require("../../../Img/categoryImg1.png")} alt="" />
              </Button>
              <Button>
                <img src={require("../../../Img/categoryImg1.png")} alt="" />
              </Button>
              <Button>
                <img src={require("../../../Img/categoryImg1.png")} alt="" />
              </Button>
            </Grid>
            <Typography className={classes.Typography}>
              <span>
                {t(
                  "admin.adverts_page.adverts_page_paper.adverts_page_paper_noteSpan"
                )}
              </span>
              {t(
                "admin.adverts_page.adverts_page_paper.adverts_page_paper_note"
              )}
            </Typography>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default Adverts;
