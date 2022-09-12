import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Toolbar,
  FormLabel
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  cancelButton,
  note,
  noteAll,
  smartphoneSmall,
  subCategory,
  successSaveButton,
  uploadImageCategory,
} from "../../theme/CategoryStyle";
import Modal from "../Modal";
import DeleteIcon from "@mui/icons-material/Delete";
import { styleCategory } from "./Style";

const useStyles = makeStyles({
  ClickedImage: {
    "&:hover": {
      width: "100%",
      height: "100%",
      background: "gray",
      opacity: 1,
    },
  },
  positionImage: {
    position: "absolute",
    right: "23%",
    top: "20%",
  },
});

const CategoryCreateList = () => {
  const { t } = useTranslation();
  const [selectedImages, setSelectedImages] = useState<any>("");
  const fileInputRef = useRef<any>();
  const classes = useStyles();

  const onSelectedFile = async (event: any) => {
    const selectedFiles = event.target.files;
    const data = new FormData();
    data.append("upload_image", selectedFiles[0])
    const res: any = await fetch(
      "http://192.168.100.4:3000/api/uploads/create",
      {
        method: "POST",
        body: data
      }
    )
    const file = await res.json()
    console.log(file);
    setSelectedImages(file)
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
              sx={styleCategory.categoryInput}
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
              {selectedImages.length === 0 ? <Grid></Grid> : <Grid sx={{ display: "flex", position: "relative" }}>
                <img
                  style={uploadImageCategory}
                  className={classes.ClickedImage}
                  src={selectedImages.length === 0 ? "" : `http://192.168.100.4:9000/shop/${selectedImages?.data?.upload_data}`}
                  alt=""
                />
                {selectedImages.length === 0 ? "" : <Grid className={classes.positionImage}>
                  <DeleteIcon style={{ color: "black" }} />
                </Grid>}
              </Grid>}
              <Grid>
                <form>
                  <FormLabel
                    htmlFor="file-input"
                    onClick={(event: any) => {
                      event.preventDefault();
                      fileInputRef.current.click();
                    }}
                  >
                    <img
                      src={require("../../../Img/save.png")}
                      alt="save"
                    />
                  </FormLabel>
                  <input
                    type="file"
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
              <Modal
                TooltipTitle={t("admin.modal.tooltip_title_delete")}
                deleteButton={"have"}
                successText={t(
                  "admin.adverts_page.adverts_page_modal.modal_green"
                )}
                exitText={t("admin.adverts_page.adverts_page_modal.modal_red")}
                style={cancelButton}
              />
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
        </Grid>
      </Grid>
    </>
  );
};

export default CategoryCreateList;
