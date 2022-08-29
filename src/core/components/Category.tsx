import { FormControl, Grid, InputLabel, MenuItem, Paper } from '@mui/material'
import { Container } from '@mui/system'
import MiniDrawer from '../../layouts/Drawer/Drawer'
import LandingTop from './LandingTop'
import { useTranslation } from "react-i18next"
import { makeStyles } from '@mui/styles'
import { useState } from 'react'
import Select, { SelectChangeEvent } from "@mui/material/Select";

const useStyles = makeStyles({
  createMainText: {
    fontFamily: "Montserrat",
    fonstSize: "17px",
    fontWeight: "600",
    color: "#2DA55F !important",
    paddingBottom: "20px",
  },
  selectCategoryText: {
    fontFamily: "Montserrat",
    fontSize: "16px",
    fontWeight: "500",
    color: "#444444 !important",
    paddingBottom: "10px",
  },
  categoryInput: {
    fontFamily: "Montserrat !important",
    fontSize: "16px !important",
    fontWeight: "400 !important",
    color: "#8C8C8C !important",
    padding: "0 10px 0 184px !important"
  },
  selectValue: {

  }
});
 
const Category = () => {
    const { t } = useTranslation()
    const classes = useStyles()

    const [age, setAge] = useState("");
    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string);
    };

  return (
    <>
      <MiniDrawer />
      <Container>
        <LandingTop />
        <Grid sx={{ display: "flex", justifyContent: "space-between" }} xs={12}>
          <Grid item xs={5}>
            <Paper sx={{ padding: "30px 30px 454px" }}>
              <p className={classes.createMainText}>
                {t("admin.category_page.category_create_side.create_main_text")}
              </p>
              <Grid>
                <p className={classes.selectCategoryText}>
                  {t(
                    "admin.category_page.category_create_side.create_select_category"
                  )}
                </p>
                {/* <TextField
                    className={classes.categoryInput}
                  placeholder={t(
                    "admin.category_page.category_create_side.create_select_category_input"
                  )}
                /> */}
                {/* <FormControl fullWidth>
                  <InputLabel>
                    {t(
                      "admin.category_page.category_create_side.create_select_category_input"
                    )}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl> */}
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-helper-label">
                    {t(
                      "admin.category_page.category_create_side.create_select_category_input"
                    )}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    className={classes.categoryInput}
                  >
                    <MenuItem className={classes.selectValue} value={10}>
                      Ten
                    </MenuItem>
                    <MenuItem className={classes.selectValue} value={20}>
                      Twenty
                    </MenuItem>
                    <MenuItem className={classes.selectValue} value={30}>
                      Thirty
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={7}>
            <Paper></Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Category