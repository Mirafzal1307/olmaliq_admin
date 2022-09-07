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
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  cancelButton,
  note,
  noteAll,
  smartphoneSmall,
  subCategory,
  successSaveButton,
  uploadImageCategory
} from "../../theme/CategoryStyle";
import Modal from "../Modal";

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
  },
  bigFatherPosition: {
    position: "relative"
  },
  ClickedImage: {
    "&:hover": {
      width: "100%",
      height: "100%",
      background: "gray",
      opacity: 1
    }
  },
  positionImage: {
    position: "absolute",
    right: "32%",
    top: "18%"
  }
});

const CategoryCreateList = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const fileInputRef = useRef<any>();
  const [preview, setPreview] = useState<any>();

  const [selectedImages, setSelectedImages] = useState<any>([]);
  const [file, setFile] = useState<any>([]);
  const onSelectedFile = (event: any) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray: string[] = Array.from(selectedFiles);

    const imagesArray: string[] = selectedFilesArray.map((file: any) => {
      return URL.createObjectURL(file)
    });
    setSelectedImages([...imagesArray]);
  };

  const deleteUser = (id: any) => (e: any) => {
    setSelectedImages(selectedImages.filter((todo: any) => todo.id !== id));
  };

  function deleteFile(e: any) {
    const s = selectedImages.filter((index: any) => index !== e);
    setSelectedImages(s);
    console.log(s);
  }

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
              <Grid sx={{ display: "flex" }}>
                {selectedImages.map((image: any, id: any) => {
                  return (
                    <div
                      key={id}
                      style={{ paddingRight: "5px" }}
                      className={classes.bigFatherPosition}
                    >
                      <img
                        style={uploadImageCategory}
                        className={classes.ClickedImage}
                        src={image}
                        alt=""
                      />
                      {/* <Grid
                        className={classes.positionImage}
                        onClick={() => deleteFile(id)}
                      >
                        <DeleteIcon style={{ color: "black" }} />
                      </Grid> */}
                      <button onClick={() => deleteFile(id)}>
                        Delete
                      </button>
                    </div>
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
