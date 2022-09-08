import React, { useRef, useState } from "react";
import Modal from "../Modal";
import { Container } from "@mui/system";
import MiniDrawer from "../../../layouts/Drawer/Drawer";
import { useTranslation } from "react-i18next";
import LandingTop from "../LandingTop";
import { Box, Button, FormLabel, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  cancelButton, successSaveButton,
} from "../../theme/AdvertStyles";

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
  GridStyle: {
    "& Button": {
      marginRight: 10,
      padding: 0,
      maxWidth: 45,
      minWidth: 45,
      "&:hover": {
        background: "rgba(0, 0, 0, .5)",
      },
    },
  },
  TypographyStyle: {
    fontFamily: "Montserrat",
    fontSize: "11px !important",
    color: "#8C8C8C",
    marginTop: "10px !important",

    "& span": {
      fontWeight: "600 !important",
      color: "#2DA55F",
    },
  },
  ImgList: {
    marginRight: 10,
    width: 45,
    height: 45,

    "&:hover": {
      position: "relative",
    },

    "& img": {
      borderRadius: 5,
      width: "100%",
      height: "100%",
    },
  },
  successSaveButton: {
    background: "#2DA55F !important",
    color: "white",
    border: "none",
    alignItems: "center",
    padding: "15px 20px",
    fontFamily: "Arial",
    fontWeight: "600",
    fontSize: "17px",
    borderRadius: "5px",
    marginLeft: "10px"
  },
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
      <Container>
        <LandingTop
          mainText={t(
            "admin.adverts_page.adverts_page_landingTop.adverts_page_landingTop_name"
          )}
          prevIcon={">"}
          dashboardText={t(
            "admin.adverts_page.adverts_page_landingTop.adverts_page_landingTop_url1"
          )}
          prevIcon1={">"}
          dashboardText2={t(
            "admin.adverts_page.adverts_page_landingTop.adverts_page_landingTop_name"
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
              <Grid item xs={6} style={{ display: "flex" }}>
                {selectedImages.map((image) => {
                  return (
                    <>
                      <div key={image} className={classes.ImgList}>
                        <img src={image} alt="" />
                        <div
                          style={{
                            position: "absolute",
                            top: "0",
                            left: "0",
                          }}
                        >
                          <Modal
                            image2={require("../../../Img/Zoom.png")}
                            image1={image}
                            TooltipTitle={t("admin.modal.tooltip_title_delete")}
                            exitText={t(
                              "admin.adverts_page.adverts_page_modal.modal_green"
                            )}
                            successText={t(
                              "admin.adverts_page.adverts_page_modal.modal_red"
                            )}
                            style={cancelButton}
                            // deleteButton={"have"}
                          />
                        </div>
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
                  <img
                    src={preview}
                    style={{ display: preview ? "block" : "none" }}
                    alt="img"
                  />
                  <FormLabel
                    htmlFor="file-input"
                    onClick={(event: any) => {
                      event.preventDefault();
                      fileInputRef.current.click();
                    }}
                  >
                    <img src={require("../../../Img/save.png")} alt="dddd" />
                  </FormLabel>
                  <input
                    type="file"
                    multiple
                    style={{ display: "none" }}
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={onSelectedFile}
                  />
                </form>
              </Grid>
              <Typography className={classes.TypographyStyle}>
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

            <Grid item xs={8} className={classes.GridStyle}>
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
            <Typography className={classes.TypographyStyle}>
              <span>
                {t(
                  "admin.adverts_page.adverts_page_paper.adverts_page_paper_noteSpan"
                )}
              </span>
              {t(
                "admin.adverts_page.adverts_page_paper.adverts_page_paper_note"
              )}
            </Typography>
            <Grid item xs={8} className={classes.GridStyle}>
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
            <Typography className={classes.TypographyStyle}>
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
          <div style={{ textAlign: "end", marginTop: "400px" }}>
            <Modal
              image2={require("../../../Img/Exit.png")}
              TooltipTitle={t("admin.modal.tooltip_title_delete")}
              deleteButton={"have"}
              successText={t(
                "admin.adverts_page.adverts_page_modal.modal_green"
              )}
              exitText={t("admin.adverts_page.adverts_page_modal.modal_red")}
              style={cancelButton}
            />
            Bekor qilish
            <Button sx={{ textTransform: "none" }} style={successSaveButton}>
              <img
                src={require("../../../Img/Success.png")}
                style={{ marginRight: "10px" }}
                alt=""
              />
              {t("admin.category_page.category_create_list.createButton")}
            </Button>
          </div>
        </Paper>
      </Container>
    </>
  );
};

export default Adverts;
