import { Button, Grid, Paper, TextField, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useTranslation } from "react-i18next";
import { note, noteAll, smartphoneSmall, subCategory } from "../../theme/CategoryStyle";

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
                <img src={require("../../../Img/save.png")} alt="" />
              </Grid>
            </Toolbar>

            <Typography style={note}>
              {t("admin.category_page.category_create_list.note_about")}
            </Typography>
            <Typography style={noteAll}>
              {t("admin.category_page.category_create_list.note_about_all")}
            </Typography>

            <div style={{textAlign: "end", marginTop: "400px"}}>
              <Button className="success">O`chirish</Button>
              <Button className="success">Saqlash</Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default CategoryCreateList;
