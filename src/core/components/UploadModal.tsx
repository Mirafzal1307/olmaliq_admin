import React, { useRef, useState } from 'react'
import { Box, Button, FormLabel, Grid, Modal, Toolbar } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from '@mui/styles';
import DeleteIcon from "@mui/icons-material/Delete";
import { uploadImageCategory } from '../theme/CategoryStyle';
import BackspaceIcon from "@mui/icons-material/Backspace";
import { style, uploadImageCancel, uploadImageStyle, uploadImageSuccess } from '../theme/UploadImage';
import { useTranslation } from 'react-i18next';

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
    right: "32%",
    top: "18%",
  },
});

const UploadModal = () => {
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
const fileInputRef = useRef<any>();
const classes = useStyles()
const { t } = useTranslation()

const [selectedImages, setSelectedImages] = useState<any>([]);

const onSelectedFile = (event: any) => {
  console.log(event.target.files.length);
  const selectedFiles = event.target.files;
  const selectedFilesArray: string[] = Array.from(selectedFiles);
  const imagesArray: string[] = selectedFilesArray.map((file: any) => {
    return URL.createObjectURL(file);
  });
  setSelectedImages(imagesArray);
  console.log(imagesArray);
};

return (
  <div>
    <Toolbar style={{ justifyContent: "space-between", padding: "0" }}>
      <Grid sx={{ display: "flex" }}>
        {selectedImages.map((image: any, id: any) => {
          return (
            <div
              key={id}
              style={{ paddingRight: "5px", position: "relative" }}
            >
              <img
                style={uploadImageCategory}
                className={classes.ClickedImage}
                src={image}
                alt=""
              />
              <Grid
                className={classes.positionImage}
              >
                <DeleteIcon style={{ color: "black" }} />
              </Grid>
            </div>
          );
        })}
      </Grid>
      <Grid>
        <img
          onClick={handleOpen}
          src={require("../../Img/save.png")}
          alt="save"
        />
      </Grid>
    </Toolbar>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid onClick={handleClose} style={{ textAlign: "end" }}>
          <CloseIcon />
        </Grid>
        <Grid
          sx={
            selectedImages.length === 0
              ? { height: "300px" }
              : { height: "auto" }
          }
        >
          {selectedImages.length === 0 ? (
            <form>
              <FormLabel
                htmlFor="file-input"
                onClick={(event: any) => {
                  event.preventDefault();
                  fileInputRef.current.click();
                }}
              >
                <img
                  style={{ display: "block", margin: "auto" }}
                  src={require("../../Img/UploadImage.png")}
                  alt=""
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
          ) : (
            <>
              {selectedImages.map((image: any) => {
                return (
                  <div key={image}>
                    <img
                      style={uploadImageStyle}
                      src={image}
                      alt=""
                    />
                  </div>
                );
              })}
            </>
          )}
        </Grid>
        <Grid sx={{ textAlign: "end" }}>
          <Button sx={{ textTransform: "none" }} style={uploadImageCancel}>
            <img
              src={require("../../Img/Cancel.png")}
              style={{ marginRight: "5px" }}
              alt=""
            />
            {t("admin.upload_image.cancel_button")}
          </Button>
          <Button sx={{ textTransform: "none" }} style={uploadImageCancel}>
            <BackspaceIcon style={{ marginRight: "5px" }} />
            {t("admin.upload_image.clear_button")}
          </Button>
          <Button onClick={handleClose} sx={{ textTransform: "none" }} style={uploadImageSuccess}>
            <img
              src={require("../../Img/Success.png")}
              style={{ marginRight: "5px" }}
              alt=""
            />
            {t("admin.upload_image.save_button")}
          </Button>
        </Grid>
      </Box>
    </Modal>
  </div>
);
}

export default UploadModal