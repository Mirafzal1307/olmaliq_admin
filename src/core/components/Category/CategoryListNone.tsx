import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { useTranslation } from "react-i18next"
import { styleCategory } from './Style';

const CategoryListNone = () => {
    const { t } = useTranslation()

  return (
    <>
      <Grid item>
        <Paper sx={{ padding: "158px 253px" }}>
          <img src={require("../../../Img/Smartphone.png")} alt="" />
          <Typography sx={styleCategory.start_text}>
            {t("admin.category_page.category_list_none.start_text")}
          </Typography>
        </Paper>
      </Grid>
    </>
  );
}

export default CategoryListNone