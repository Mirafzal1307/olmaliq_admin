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
import { postCategoryUpload } from "../../../api/admin/AdminCategoryApi";



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

// interface postCategory{}


const CategoryCreateList = () => {
  const [upload, setUpload] = useState<any>("");
  const [uploadtwo, setUploadtwo] = useState<any>("");


  const postCategoryUploads = async (event: any) => {
    const selectedFiles = event.target.files;
    const data = new FormData();
    data.append("upload_image", selectedFiles[0])
    const child: any = await postCategoryUpload(data);
    setUpload(child?.data?.data)
    console.log(child?.data?.data);
  }

  const postCategoryUploadsTwo = async (event: any) => {
    const evenSelect = event.target.files;
    const dataform = new FormData();
    dataform.append("upload_image", evenSelect[0])
    const two: any = await postCategoryUpload(dataform);
    setUploadtwo(two?.data?.data)
    console.log(two?.data?.data);

  }

  const { t } = useTranslation();
  const fileInputRef = useRef<any>();
  const fileInputRefTwo = useRef<any>();
  const classes = useStyles();




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
              {upload.length === 0 ? <Grid></Grid> : <Grid sx={{ display: "flex", position: "relative" }}>
                <img
                  style={uploadImageCategory}
                  className={classes.ClickedImage}
                  src={upload.length === 0 ? "" : `http://192.168.100.4:9000/shop/${upload?.upload_data}`}
                  alt=""
                />
                {upload.length === 0 ? "" : <Grid className={classes.positionImage}>
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
                    onChange={postCategoryUploads}
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
            <Grid sx={{paddingTop: '10px'}}>
            <Typography style={subCategory}>
              {t("admin.category_page.category_create_list.small_categories")}
            </Typography>
              <Toolbar style={{ justifyContent: "space-between", padding: "0" }}>
                {uploadtwo.length === 0 ? <Grid></Grid> : <Grid sx={{ display: "flex", position: "relative" }}>
                  <img
                    style={uploadImageCategory}
                    className={classes.ClickedImage}
                    src={uploadtwo.length === 0 ? "" : `http://192.168.100.4:9000/shop/${uploadtwo?.upload_data}`}
                    alt=""
                  />
                  {uploadtwo.length === 0 ? "" : <Grid className={classes.positionImage}>
                    <DeleteIcon style={{ color: "black" }} />
                  </Grid>}
                </Grid>}
                
                <Grid>
                  
                  <form>
                    <FormLabel
                      htmlFor="file-input"
                      onClick={(event: any) => {
                        event.preventDefault();
                        fileInputRefTwo.current.click();
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
                      ref={fileInputRefTwo}
                      accept="image/*"
                      onChange={postCategoryUploadsTwo}
                    />
                  </form>
                  
                </Grid>
              </Toolbar>
              <Typography style={noteAll}>
              {t("admin.category_page.category_create_list.note_about_all")}
            </Typography>
            </Grid>
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
