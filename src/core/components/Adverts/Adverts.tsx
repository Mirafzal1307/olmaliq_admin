import React, { useRef, useState } from "react";
import Modal from "../Modal";
import { Container } from "@mui/system";
import MiniDrawer from "../../../layouts/Drawer/Drawer";
import { useTranslation } from "react-i18next";
import LandingTop from "../LandingTop";
import {
  Box,
  Button,
  FormLabel,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
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
    "& Button": {
      marginRight: "10px",
      padding: "0",
      maxWidth: "45px",
      minWidth: "45px",
      "&:hover": {
        background: "rgba(0, 0, 0, .5)",
      },
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
  uploadImageCategory: {
    width: "45px",
    height: "45px",
    borderRadius: "5px",
    fontFamily: "Poppins",
  },
  // forImagePreview: {
  //   width: "95px",
  //   height: "95px",
  //   border: "none !important",
  // },
});
const Adverts = () => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [preview, setPreview] = useState<any>();
  const fileInputRef = useRef<any>();
  const { t } = useTranslation();
  const classes = useStyles();

  const onSelectedFile = (event: any) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray: string[] = Array.from(selectedFiles);

    const imagesArray: string[] = selectedFilesArray.map((file: any) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages(imagesArray);
  };

  return (
    <>
      <MiniDrawer />
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
      <Container>
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
                {selectedImages.map((image) => {
                  return (
                    <>
                      <div key={image} style={{ paddingRight: "10px" }}>
                        <img
                          className={classes.uploadImageCategory}
                          src={image}
                          alt=""
                        />
                      </div>
                    </>
                  );
                })}
              </Grid>
              <Grid
                item
                xs={6}
                style={{ display: "flex", justifyContent: "end" }}
              >
                <form style={{ display: "flex", alignItems: "center" }}>
                  <FormLabel
                    htmlFor="file-input"
                    onClick={(event: any) => {
                      event.preventDefault();
                      fileInputRef.current.click();
                    }}
                  >
                    <img src={require("../../../Img/save.png")} alt="dddd" />
                  </FormLabel>
                </form>
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
