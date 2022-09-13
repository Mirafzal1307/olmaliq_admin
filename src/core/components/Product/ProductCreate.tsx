import React, { useRef, useState } from 'react'
import MiniDrawer from '../../../layouts/Drawer/Drawer'
import { motion } from "framer-motion";
import { Container, FormLabel, Grid, MenuItem, Paper, Select, Toolbar } from '@mui/material';
import LandingTop from '../LandingTop';
import { makeStyles } from "@mui/styles";
import { useTranslation } from 'react-i18next';
import { box, inputCharacter, inputDiscountStyle, inputPriceStyle, inputSelectStyle, inputStyle, leftText, rightText, selectStyle, uploadImageCategory } from '../../theme/ProductCreateStyle';


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

const ProductCreate = () => {
  const [selectedImages, setSelectedImages] = useState<any>("");
  const fileInputRef = useRef<any>();
  const { t } = useTranslation();
  const classes = useStyles();

  const onSelectedFile = async (event: any) => {
    const selectedFiles = event.target.files;
    const data = new FormData();
    data.append("upload_image", selectedFiles[0]);
    const res: any = await fetch(
      "http://192.168.100.4:3000/api/uploads/create",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(file);
    setSelectedImages(file);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MiniDrawer />
      <Container>
        <LandingTop
          mainText={t("admin.category_page.category_landing_side.main_text")}
          dashboardText={t(
            "admin.category_page.category_landing_side.category_direction_home"
          )}
          prevIcon={">"}
          prevIcon2={">"}
          pageTextSpan={t(
            "admin.category_page.category_landing_side.category_direction_category"
          )}
          createButton={t(
            "admin.category_page.category_landing_side.create_category"
          )}
        />
        <Paper style={{ padding: 30 }}>
          <Grid container>
            <Grid item xs={3}>
              <h3 style={leftText}>1.General info</h3>
            </Grid>
            <Grid item xs={9}>
              <div style={box}>
                <h3 style={rightText}>Product title</h3>
                <input style={inputStyle} placeholder="iPhone 13 Pro" />
              </div>
              <div style={box}>
                <h3 style={rightText}>Shot name</h3>
                <input style={inputStyle} placeholder="type" />
              </div>
              <div style={box}>
                <h3 style={rightText}>Brand name</h3>
                <Select id="select" style={selectStyle}>
                  <MenuItem value="10">Ten</MenuItem>
                  <MenuItem value="20">Twenty</MenuItem>
                  <MenuItem value="30">Thirty</MenuItem>
                </Select>
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={3}>
              <h3 style={leftText}>2.Pricing</h3>
            </Grid>
            <Grid item xs={9}>
              <div style={box}>
                <div style={{ display: "flex" }}>
                  <div>
                    <h3 style={rightText}>Price</h3>
                    <input
                      style={inputPriceStyle}
                      placeholder="iPhone 13 Pro"
                    />
                  </div>
                  <div style={{ marginLeft: 25 }}>
                    <h3 style={rightText}>Discount</h3>
                    <input style={inputDiscountStyle} placeholder="20" />
                    <span style={{ marginLeft: 15 }}>%</span>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={3}>
              <h3 style={leftText}>3.Category</h3>
            </Grid>
            <Grid item xs={9}>
              <div style={box}>
                <h3 style={rightText}>Parrent</h3>
                <Select id="select" style={inputSelectStyle}>
                  <MenuItem value="1">Telefon va gadjetlar</MenuItem>
                  <MenuItem value="20">Twenty</MenuItem>
                  <MenuItem value="30">Thirty</MenuItem>
                </Select>
              </div>
              <div style={box}>
                <h3 style={rightText}>Sub-Parrent</h3>
                <Select style={inputSelectStyle}>
                  <MenuItem value="1">Maishiy texnikalari</MenuItem>
                  <MenuItem value="20">Twenty</MenuItem>
                  <MenuItem value="30">Thirty</MenuItem>
                </Select>
              </div>
              <div style={box}>
                <h3 style={rightText}>Category</h3>
                <Select id="select" style={inputSelectStyle}>
                  <MenuItem value="1">Artel Maishiy texnikalari</MenuItem>
                  <MenuItem value="20">Twenty</MenuItem>
                  <MenuItem value="30">Thirty</MenuItem>
                </Select>
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={3}>
              <h3 style={leftText}>4.Media</h3>
            </Grid>
            <Grid item xs={9}>
              <div style={box}>
                <h3 style={rightText}>Photos</h3>
                <Toolbar style={{ padding: "0" }}>
                  {selectedImages.length === 0 ? (
                    <Grid></Grid>
                  ) : (
                    <Grid sx={{ display: "flex", position: "relative" }}>
                      <img
                        style={uploadImageCategory}
                        className={classes.ClickedImage}
                        src={
                          selectedImages.length === 0
                            ? ""
                            : `http://192.168.100.4:9000/shop/${selectedImages?.data?.upload_data}`
                        }
                        alt=""
                      />
                    </Grid>
                  )}
                  <form style={{ width: 100, height: 100 }}>
                    <FormLabel
                      htmlFor="file-input"
                      onClick={(event: any) => {
                        event.preventDefault();
                        fileInputRef.current.click();
                      }}
                    >
                      <img
                        style={{ width: 108, height: 108, marginTop: -4 }}
                        src={require("../../../Img/UploadProduct.png")}
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
                </Toolbar>
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={3}>
              <h3 style={leftText}>5.Character property</h3>
            </Grid>
            <Grid item xs={7} style={{ display: "flex" }}>
              <div>
                <h3 style={rightText}>Name</h3>
                <input style={inputCharacter} placeholder="SSD" />
                <input style={inputCharacter} placeholder="Birbalo" />
              </div>
              <div>
                <h3 style={rightText}>Qiymat</h3>
                <input style={inputCharacter} placeholder="256" />
                <input style={inputCharacter} placeholder="256" />
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </motion.div>
  );
}

export default ProductCreate



