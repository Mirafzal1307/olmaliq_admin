import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  cancelButton,
  note,
  noteAll,
  smartphoneSmall,
  subCategory,
  successSaveButton,
} from "../../theme/CategoryStyle";
import Modal from "../Modal";
import UploadModal from "../UploadModal";

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
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [selectedImages, setSelectedImages] = useState<any>([]);

  // const deleteFile = (id: any) => {
  //   selectedImages.filter((user: any) => user.id !== id);
  //   setSelectedImages(selectedImages);
  //   console.log(selectedImages);
  // };

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
              <Grid sx={{ textAlign: "end" }}>
                <UploadModal />
                {/* {selectedImages == false ? null : <button style={saveButton}>
                  Save
                </button>} */}

              </Grid>
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
