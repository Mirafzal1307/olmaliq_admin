import React from 'react';
import {
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next"
import SplitButton from '../Info';
import TableComponent from '../../../layouts/Table/Table';

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
    categoryName: "Telefon va gadjetlar",
    subCategoryName: "",
    mainCategoryName: "",
    name: "Telefon va gadjetlar",
    date: "30.03.2022",
  },
  {
    id: 2,
    photo: <CategoryNotebook />,
    categoryName: "Orgtexnika va Kompyuterlar",
    subCategoryName: "",
    mainCategoryName: "",
    name: "Orgtexnika va Kompyuterlar",
    date: "30.03.2022",
  },
  {
    id: 3,
    photo: <CategoryTV />,
    categoryName: "Televizor va videotexnikalar",
    subCategoryName: "",
    mainCategoryName: "",
    name: "Televizor va videotexnikalar",
    date: "30.03.2022",
  },
  {
    id: 4,
    photo: <CategoryTechno />,
    categoryName: "Maishiy texnikalar",
    subCategoryName: "",
    mainCategoryName: "",
    name: "Maishiy texnikalar",
    date: "30.03.2022",
  },
  {
    id: 5,
    photo: <CategoryAvto />,
    categoryName: "Avtojihozlar",
    subCategoryName: "",
    mainCategoryName: "",
    name: "Avtojihozlar",
    date: "30.03.2022",
  },
];

const CategoryList = () => {
  const { t } = useTranslation();
  const [countPerPage, setCountPerPage] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCountPerPage(event.target.value);
  };

  return (
    <>
      <Grid>
        <Paper sx={{ height: "789px", padding: "20px 30px 30px 30px" }}>
          <Toolbar>
            <Typography>{t("admin.category_page.category_list.text_per_page")}</Typography>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <Select
                value={countPerPage}
                onChange={handleChange}
                displayEmpty
                defaultValue="10"
              >
                <MenuItem value="">10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={30}>30</MenuItem>
              </Select>
            </FormControl>
          </Toolbar>
          <TableContainer>
            <Table>
              <TableComponent
                Photo={t(
                  "admin.category_page.category_list.category_list_photo"
                )}
                Name={t("admin.category_page.category_list.category_list_name")}
                CategoryName={t(
                  "admin.category_page.category_list.category_name_product"
                )}
                SubCategoryName={t(
                  "admin.category_page.category_list.subcategory_name_product"
                )}
                MainCategoryName={t(
                  "admin.category_page.category_list.landing_category_name_product"
                )}
                Date={t("admin.category_page.category_list.category_list_date")}
                Actions={t(
                  "admin.category_page.category_list.category_list_actions"
                )}
              />
              <TableBody>
                {categories.map((item) => (
                  <TableRow key={item?.id}>
                    {item?.photo ? (
                      <TableCell>{item?.photo}</TableCell>
                    ) : (
                      <TableCell>
                        {t("admin.category_page.category_list.photo_none")}
                      </TableCell>
                    )}
                    {item?.name ? (
                      <TableCell>{item?.name}</TableCell>
                    ) : (
                      <TableCell>
                        {t("admin.category_page.category_list.name_none")}
                      </TableCell>
                    )}
                    {item?.categoryName ? (
                      <TableCell>{item?.categoryName}</TableCell>
                    ) : (
                      <TableCell>
                        {t("admin.category_page.category_list.category_none")}
                      </TableCell>
                    )}
                    {item?.subCategoryName ? (
                      <TableCell>{item?.subCategoryName}</TableCell>
                    ) : (
                      <TableCell>
                        {t(
                          "admin.category_page.category_list.sub_category_none"
                        )}
                      </TableCell>
                    )}
                    {item?.mainCategoryName ? (
                      <TableCell>{item?.mainCategoryName}</TableCell>
                    ) : (
                      <TableCell>
                        {t(
                          "admin.category_page.category_list.main_category_none"
                        )}
                      </TableCell>
                    )}
                    {item?.date ? (
                      <TableCell>{item?.date}</TableCell>
                    ) : (
                      <TableCell>
                        {t("admin.category_page.category_list.date_none")}
                      </TableCell>
                    )}
                    <TableCell>
                      <Grid sx={{ display: "flex", alignItems: "center" }}>
                        <SplitButton />
                      </Grid>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </>
  );
}

export default CategoryList