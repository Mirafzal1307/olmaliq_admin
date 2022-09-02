import React from 'react';
import { Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useTranslation } from "react-i18next"
import SplitButton from '../Info';

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
                      <SplitButton />
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