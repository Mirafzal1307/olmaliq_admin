import { Button, FormLabel, Grid, Paper, TextField, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { cancelButton, forImagePreview, note, noteAll, smartphoneSmall, subCategory, successSaveButton } from "../../theme/CategoryStyle";

const useStyles = makeStyles({
  categoryInput: {
    color: "#444444",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontWeight: "400",
    padding: "2px 0 2px 0 !important",
    width: "320px",
  }
});

const CategoryCreateList = () => {
  const { t } = useTranslation();
  const classes = useStyles()
  const fileInputRef = useRef<any>();
  const [preview, setPreview] = useState<any>();
  const [image, setImage] = useState<any>();

  const handleInputChange = (e: any): void => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setImage(file);
    } else {
      setImage(null);
    }
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
              <Grid>
                <img
                  style={{ padding: "5px" }}
                  src={require("../../../Img/phone_img.png")}
                  alt=""
                />
                <img
                  style={{ padding: "5px" }}
                  src={require("../../../Img/phone_img.png")}
                  alt=""
                />
                <img
                  style={{ padding: "5px" }}
                  src={require("../../../Img/phone_img.png")}
                  alt=""
                />
                <img
                  style={{ padding: "5px" }}
                  src={require("../../../Img/korzinka.png")}
                  alt=""
                />
              </Grid>
              <Grid>
                <FormLabel
                  htmlFor="file-input"
                  onClick={(event) => {
                    event.preventDefault();
                    fileInputRef.current.click();
                  }}
                >
                  <img
                    src={require("../../../Img/save.png")}
                    alt="dddd"
                    style={forImagePreview}
                  />
                </FormLabel>
                <input
                  type="file"
                  style={{ display: "none" }}
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={handleInputChange}
                />
              </Grid>
            </Toolbar>
            <Typography style={note}>
              {t("admin.category_page.category_create_list.note_about")}
            </Typography>
            <Typography style={noteAll}>
              {t("admin.category_page.category_create_list.note_about_all")}
            </Typography>
            <div style={{ textAlign: "end", marginTop: "380px" }}>
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
