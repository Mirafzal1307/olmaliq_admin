import { Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from "react-i18next"

const useStyles = makeStyles({
    start_text: {
        fontFamily: "Montserrat",
        fontSize: "31px",
        fontWeight: "600",
        color: "#444444",
        textAlign: "center",
        paddingTop: "15px"
    }
})

const CategoryListNone = () => {
    const { t } = useTranslation()
    const classes = useStyles()

  return (
    <>
      <Grid item>
        <Paper sx={{ padding: "158px 253px" }}>
          <img src={require("../../../Img/Smartphone.png")} alt="" />
          <p className={classes.start_text}>{t("admin.category_page.category_list_none.start_text")}</p>
        </Paper>
      </Grid>
    </>
  );
}

export default CategoryListNone