import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography
} from "@mui/material";
import React from "react";
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
import { styleCategory } from "./Style";

const CategoryCreateList = () => {
  const { t } = useTranslation();

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
              <Grid sx={{ textAlign: "end" }}>
                <UploadModal />
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
