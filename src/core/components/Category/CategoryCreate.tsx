import { FormControl, Grid, MenuItem, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const useStyles = makeStyles({
  createMainText: {
    fontFamily: "Montserrat",
    fonstSize: "17px",
    fontWeight: "600",
    color: "#2DA55F !important",
  },
  selectCategoryText: {
    fontFamily: "Montserrat",
    fontSize: "16px",
    fontWeight: "500",
    color: "#444444 !important",
    paddingBottom: "10px",
    marginTop: "20px",
  },
  selectValue: {
    fontFamily: "Montserrat !important",
    fontSize: "16px !important",
    fontWeight: "400 !important",
    color: "#8C8C8C !important",
    padding: "0 76px 0 20px !important",
  },
  selectValueCreate: {
    background: "#2DA55F !important",
  },
  createButton: {
    background: "transparent",
    border: "none",
    color: "white",
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: "14px",
    alignItems: "center !important",
    display: "flex",
  },
});


const CategoryCreate = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  const [selectCategory, setSelectCategory] = useState("");
  const [selectSubCategory, setSelectSubCategory] = useState("");
  const [selectNewSubCategory, setSelectNewSubCategory] = useState("");
  const handleChangeCategory = (event: SelectChangeEvent) => {
    setSelectCategory(event.target.value as string);
  };

  const handleChangeSubCategory = (event: SelectChangeEvent) => {
    setSelectSubCategory(event.target.value as string);
  };

  const handleChangeNewSubCategory = (event: SelectChangeEvent) => {
    setSelectNewSubCategory(event.target.value as string);
  };

  return (
    <>
      <Grid sx={{ display: "flex", justifyContent: "space-between" }} xs={12}>
        <Grid item>
          <Paper sx={{ padding: "30px 30px 454px", width: "380px" }}>
            <Grid>
              <p className={classes.createMainText}>
                {t("admin.category_page.category_create_side.create_main_text")}
              </p>
              <Grid>
                <p className={classes.selectCategoryText}>
                  {t(
                    "admin.category_page.category_create_side.create_select_category"
                  )}
                </p>
                <FormControl
                  sx={{ m: 1, minWidth: "100%", margin: 0, padding: 0 }}
                >
                  <Select
                    value={selectCategory}
                    onChange={handleChangeCategory}
                    displayEmpty
                    style={{
                      height: "40px",
                    }}
                  >
                    <MenuItem className={classes.selectValue} value={10}>
                      Twenty
                    </MenuItem>
                    <MenuItem className={classes.selectValue} value={20}>
                      Thirty
                    </MenuItem>
                    <MenuItem className={classes.selectValueCreate}>
                      <button className={classes.createButton}>
                        <img src={require("../../../Img/Plus.png")} alt="" />
                        <p style={{ marginLeft: "10px" }}>
                          {t(
                            "admin.category_page.category_create_side.create_category_select"
                          )}
                        </p>
                      </button>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid>
                <p className={classes.selectCategoryText}>
                  {t(
                    "admin.category_page.category_create_side.create_select_subcategory"
                  )}
                </p>
                <FormControl
                  sx={{ m: 1, minWidth: "100%", margin: 0, padding: 0 }}
                >
                  <Select
                    value={selectSubCategory}
                    onChange={handleChangeSubCategory}
                    displayEmpty
                    style={{
                      height: "40px",
                    }}
                  >
                    <MenuItem className={classes.selectValue} value={10}>
                      Twenty
                    </MenuItem>
                    <MenuItem className={classes.selectValue} value={20}>
                      Thirty
                    </MenuItem>
                    <MenuItem className={classes.selectValueCreate}>
                      <button className={classes.createButton}>
                        <img src={require("../../../Img/Plus.png")} alt="" />
                        <p style={{ marginLeft: "10px" }}>
                          {t(
                            "admin.category_page.category_create_side.create_category_select"
                          )}
                        </p>
                      </button>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid>
                <p className={classes.selectCategoryText}>
                  {t(
                    "admin.category_page.category_create_side.create_select_new_subcategory"
                  )}
                </p>
                <FormControl
                  sx={{ m: 1, minWidth: "100%", margin: 0, padding: 0 }}
                >
                  <Select
                    value={selectNewSubCategory}
                    onChange={handleChangeNewSubCategory}
                    displayEmpty
                    style={{
                      height: "40px",
                    }}
                  >
                    <MenuItem className={classes.selectValue} value={10}>
                      Twenty
                    </MenuItem>
                    <MenuItem className={classes.selectValue} value={20}>
                      Thirty
                    </MenuItem>
                    <MenuItem className={classes.selectValueCreate}>
                      <button className={classes.createButton}>
                        <img src={require("../../../Img/Plus.png")} alt="" />
                        <p style={{ marginLeft: "10px" }}>
                          {t(
                            "admin.category_page.category_create_side.create_category_select"
                          )}
                        </p>
                      </button>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default CategoryCreate;
