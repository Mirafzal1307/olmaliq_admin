import React from 'react';
import { FormControl, Grid, MenuItem, Paper, Select, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { useTranslation } from "react-i18next"
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { categoryListButton, categoryListInfo } from '../../theme/CategoryStyle';

const CategoryPhone = () => {
    return <img src={require("../../../Img/CategoryPhone.png")} alt="" />;
}
const CategoryNotebook = () => {
    return <img src={require("../../../Img/CategoryNotebook.png")} alt="" />;
}
const CategoryTV = () => {
    return <img src={require("../../../Img/CategoryTV.png")} alt="" />;
}
const CategoryTechno = () => {
  return <img src={require("../../../Img/CategoryTechno.png")} alt="" />;
};
const CategoryAvto = () => {
  return <img src={require("../../../Img/CategoryAvto.png")} alt="" />;
};

export const categories = [
  {
    id: 1,
    photo: <CategoryPhone />,
    name: "Telefon va gadjetlar",
    date: "30.03.2022",
  },
  {
    id: 2,
    photo: <CategoryNotebook />,
    name: "Orgtexnika va Kompyuterlar",
    date: "30.03.2022",
  },
  {
    id: 3,
    photo: <CategoryTV />,
    name: "Televizor va videotexnikalar",
    date: "30.03.2022",
  },
  {
    id: 4,
    photo: <CategoryTechno />,
    name: "Maishiy texnikalar",
    date: "30.03.2022",
  },
  {
    id: 5,
    photo: <CategoryAvto />,
    name: "Avtojihozlar",
    date: "30.03.2022",
  },
];

const BootstrapInput = styled(InputBase)(() => ({
  "& .MuiInputBase-input": {
    borderTopRightRadius: "5px",
    borderBottomRightRadius: "5px",
    position: "relative",
    border: "2px solid #2DA55F",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
  },
}));

const CategoryList = () => {
    const { t } = useTranslation()

  return (
    <>
      <Grid>
        <Paper sx={{ height: "789px", padding: "20px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#ID</TableCell>
                <TableCell>
                  {t("admin.category_page.category_list.category_list_photo")}
                </TableCell>
                <TableCell>
                  {t("admin.category_page.category_list.category_list_name")}
                </TableCell>
                <TableCell>
                  {t("admin.category_page.category_list.category_list_date")}
                </TableCell>
                <TableCell>
                  {t("admin.category_page.category_list.category_list_actions")}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((item) => (
                <TableRow key={item?.id}>
                  <TableCell>{item?.id}</TableCell>
                  <TableCell>{item?.photo}</TableCell>
                  <TableCell>{item?.name}</TableCell>
                  <TableCell>{item?.date}</TableCell>
                  <TableCell>
                    <Grid sx={{ display: "flex", alignItems: "center" }}>
                      <Typography style={categoryListInfo}>Info</Typography>
                      <FormControl variant="standard">
                        <Select
                          labelId="demo-customized-select-label"
                          id="demo-customized-select"
                          input={<BootstrapInput />}
                        >
                          <MenuItem>
                            <button style={categoryListButton}>
                              {t(
                                "admin.category_page.category_list.category_list_actions_edit"
                              )}
                            </button>
                          </MenuItem>
                          <MenuItem>
                            <button style={categoryListButton}>
                              {t(
                                "admin.category_page.category_list.category_list_actions_delete"
                              )}
                            </button>
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    </>
  );
}

export default CategoryList