import {
  Button,
  FormLabel,
  Grid,
  Paper,
  TextField,
  Toolbar,
  Typography
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AnyARecord } from "dns";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  cancelButton,
  forImagePreview,
  note,
  noteAll,
  smartphoneSmall,
  subCategory,
  successSaveButton,
  uploadImageCategory
} from "../../theme/CategoryStyle";

const useStyles = makeStyles({
  categoryInput: {
    color: "#444444",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontWeight: "400",
    padding: "2px 0 2px 0 !important",
    width: "320px"
  },
  forImagePreview: {
    width: "95px",
    height: "95px",
    border: "none !important"
  }
});

const CategoryCreateList = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const fileInputRef = useRef<any>();
  const [preview, setPreview] = useState<any>();

  const [selectedImages, setSelectedImages] = useState<string[]>([]);

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
      <Grid container>
        <Grid xs={12} item>
          <Paper sx={{ padding: "30px 30px 20px" }}>
            <Typography style={smartphoneSmall}>
              {t("admin.category_page.category_create_list.data_name")}
            </Typography>
            <Typography style={subCategory}>
              {t("admin.category_page.category_create_list.small_categories")}
            </Typography>
            <TextField
              className={classes.categoryInput}
              placeholder={t(
                "admin.category_page.category_create_list.plaseholder_name"
              )}
            ></TextField>
            <Typography style={subCategory}>
              {t(
                "admin.category_page.category_create_list.small_categories_photos"
              )}
            </Typography>
            <Toolbar style={{ justifyContent: "space-between", padding: "0" }}>
              <Grid sx={{display: "flex",}}>
              {selectedImages.map((image) => {
                return (
                  <>
                    <div key={image} style={{ paddingRight: "5px" }}>
                      <img style={uploadImageCategory} src={image} alt="" />
                    </div>
                  </>
                );
              })}
              </Grid> 
              <Grid sx={{ display: "flex" }}>
                {selectedImages.map((image) => {
                  return (
                    <>
                      <div key={image} style={{ paddingRight: "5px" }}>
                        <img style={uploadImageCategory} src={image} alt="" />
                      </div>
                    </>
                  );
                })}
              </Grid>
              <Grid>
                <form style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={preview}
                    style={{ display: preview ? "block" : "none" }}
                    className={classes.forImagePreview}
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
            </Toolbar>
            <Typography style={note}>
              {t("admin.category_page.category_create_list.note_about")}
            </Typography>
            <Typography style={noteAll}>
              {t("admin.category_page.category_create_list.note_about_all")}
            </Typography>
            <div style={{ textAlign: "end", marginTop: "400px" }}>
              <Button sx={{ textTransform: "none" }} style={cancelButton}>
                <img
                  src={require("../../../Img/Cancel.png")}
                  style={{ marginRight: "10px" }}
                  alt=""
                />{" "}
                O`chirish
              </Button>
              <Button sx={{ textTransform: "none" }} style={successSaveButton}>
                <img
                  src={require("../../../Img/Success.png")}
                  style={{ marginRight: "10px" }}
                  alt=""
                />
                Saqlash
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default CategoryCreateList;
