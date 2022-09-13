import { FormLabel, Grid, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useRef, useState } from "react";
import { deleteUploadImage, uploadImage } from "../../api/admin/AdminUploadApi";
import { uploadImageCategory } from "../theme/CategoryStyle";
import DeleteIcon from "@mui/icons-material/Delete";

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

const UploadImg = () => {
  const [upload, setUpload] = useState<any>("");
  const [status, setStatus] = useState();
  const fileInputRef = useRef<any>();
  const uploadId = upload.upload_id;
  const classes = useStyles()

  const postCategoryUploads = async (event: any) => {
    const evenSelect = event.target.files;
    const dataform = new FormData();
    dataform.append("upload_image", evenSelect[0]);
    const two: any = await uploadImage(dataform);
    setUpload(two?.data?.data);
    console.log(two?.data?.data);
  };

  const deletePhoto = async (id: string) => {
    await deleteUploadImage(id)
      .then((res: any) => {
        if (res.status === 200) {
          console.log("Successfully delete");
        }
        setStatus(res?.status);
      })
      .catch(() => {
        console.log("Something went wrong");
      });
  };

  return (
    <Toolbar style={{ justifyContent: "space-between", padding: "0" }}>
      {upload.length === 0 ? (
        <Grid></Grid>
      ) : (
        <Grid sx={{ display: "flex", position: "relative" }}>
          {status !== 200 ? (
            <>
              <img
                style={uploadImageCategory}
                className={classes.ClickedImage}
                src={
                  upload.length === 0
                    ? ""
                    : `http://192.168.100.4:9000/shop/${upload?.upload_data}`
                }
                alt=""
              />
              <Grid
                onClick={() => deletePhoto(uploadId)}
                className={classes.positionImage}
              >
                <DeleteIcon style={{ color: "black" }} />
              </Grid>
            </>
          ) : null}
        </Grid>
      )}
      <Grid>
        <form>
          <FormLabel
            htmlFor="file-input"
            onClick={(event: any) => {
              event.preventDefault();
              fileInputRef.current.click();
            }}
          >
            <img src={require("../../Img/save.png")} alt="save" />
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
  );
};

export default UploadImg;
