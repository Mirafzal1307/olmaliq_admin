import { FormControl, Grid, MenuItem, Paper, Select, SelectChangeEvent, Table, TableBody, TableCell, TableContainer, TableRow, Toolbar } from '@mui/material';
import React from 'react'
import { useTranslation } from 'react-i18next';
import TableComponent from '../../../layouts/Table/Table';
import { statusProduct } from '../../theme/Table';
import SplitButton from '../Info';

const IphonePhoto = () => {
  return <img src={require("../../../Img/Iphone.png")} alt="" />;
};

export const products = [
  {
    id: 1,
    photo: <IphonePhoto />,
    price: "155 000 so`m",
    discount: "99%",
    count: "10 000",
    status: "Bor",
    name: "Iphone 13 pro max",
    date: "30.03.2022",
  },
  {
    id: 2,
    photo: <IphonePhoto />,
    price: "155 000 so`m",
    discount: "99%",
    count: "10 000",
    status: "Bor",
    name: "Iphone 13 pro max",
    date: "30.03.2022",
  },
  {
    id: 3,
    photo: <IphonePhoto />,
    price: "155 000 so`m",
    discount: "99%",
    count: "10 000",
    status: "Bor",
    name: "Iphone 13 pro max",
    date: "30.03.2022",
  },
  {
    id: 4,
    photo: <IphonePhoto />,
    price: "155 000 so`m",
    discount: "99%",
    count: "10 000",
    status: "Bor",
    name: "Iphone 13 pro max",
    date: "30.03.2022",
  },
  {
    id: 5,
    photo: <IphonePhoto />,
    price: "155 000 so`m",
    discount: "99%",
    count: "10 000",
    status: "Bor",
    name: "Iphone 13 pro max",
    date: "30.03.2022",
  },
];

const ProductList = () => {
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
            <p>{t("admin.category_page.category_list.text_per_page")}</p>
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
                PriceProduct={t(
                  "admin.category_page.category_list.price_product"
                )}
                SaleProduct={t(
                  "admin.category_page.category_list.sale_product"
                )}
                CountProduct={t(
                  "admin.category_page.category_list.count_product"
                )}
                StatusProduct={t(
                  "admin.category_page.category_list.status_product"
                )}
                Date={t("admin.category_page.category_list.category_list_date")}
                Actions={t(
                  "admin.category_page.category_list.category_list_actions"
                )}
              />
              <TableBody>
                {products.map((item) => (
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
                    {item?.price ? (
                      <TableCell>{item?.price}</TableCell>
                    ) : (
                      <TableCell>
                        {t("admin.category_page.category_list.name_none")}
                      </TableCell>
                    )}
                    {item?.discount ? (
                      <TableCell>{item?.discount}</TableCell>
                    ) : (
                      <TableCell>
                        {t("admin.category_page.category_list.name_none")}
                      </TableCell>
                    )}
                    {item?.count ? (
                      <TableCell>{item?.count}</TableCell>
                    ) : (
                      <TableCell>
                        {t("admin.category_page.category_list.name_none")}
                      </TableCell>
                    )}
                    {item?.status ? (
                      <TableCell>
                        <div style={statusProduct}>{item?.status}</div>
                      </TableCell>
                    ) : (
                      <TableCell>
                        {t("admin.category_page.category_list.name_none")}
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

export default ProductList