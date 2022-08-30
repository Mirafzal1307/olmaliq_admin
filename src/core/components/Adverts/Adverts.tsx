import React from 'react';
import Modal from '../Modal';
import { Container } from "@mui/system";
import MiniDrawer from "../../../layouts/Drawer/Drawer";
import { useTranslation } from "react-i18next";
import LandingTop from '../LandingTop';
import { Grid, Paper, Typography } from '@mui/material';
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
});
const Adverts = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <>
      <MiniDrawer />

      <LandingTop />
      <Container>
        <Paper style={{ padding: "30px" }}>
          <Typography className={classes.PaperTitle}>
            {t(
              "admin.adverts_page.adverts_page_paper.adverts_page_paper_title"
            )}
            {" №1"}
          </Typography>
          <Typography className={classes.PaperText1}>
            {"1. "}
            {t(
              "admin.adverts_page.adverts_page_paper.adverts_page_paper_categoryTitle"
            )}
          </Typography>
          <Grid item>
            <Grid item xs={6}>
              <img src={require("../../../Img/Download.png")} alt="" />
            </Grid>
          </Grid>
          <Modal/>
        </Paper>
      </Container>
    </>
  );
};


export default Adverts;