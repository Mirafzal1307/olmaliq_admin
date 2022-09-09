import React, { useEffect } from "react";
import { FormControl, Grid, MenuItem, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  createButton,
  createMainText,
  selectCategoryText,
  selectValueCategory,
  selectValueCreate
} from "../../theme/CategoryStyle";
import { getCategory, getChildCategory, getSubChildCategory } from "../../../api/admin/AdminCategoryApi";
// import CategoryCreateList from "./CategoryCreateList";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import {styleCategory} from "./Style"

interface getCategory {
  category_id: string;
  category_name: string;
  category_image_id: string;
  category_description: string
}
interface subCategoryData {
  sub_category_id: string;
  parent_id: string;
  sub_category_name: string;
  img: string;
}

interface childSubCategory {
  child_category_id: string;
  child_category_name: string;
  child_category_image: string;
}

const CategoryCreate = (props: any) => {
  const { t } = useTranslation();

  const [selectCategory, setSelectCategory] = useState("");
  const [subCategory, setSubCategory] = useState<subCategoryData[]>([]);
  const [category, setCategory] = useState<getCategory[]>([]);
  const [child_sub_category, setSubCayegoryChild] = useState<
    childSubCategory[]
  >([]);
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

  useEffect(() => {
    getChildCategorySub();
    getData();
    getChildCategorytwo();
  }, []);

   const getData = async () => {
     const res: any = await getCategory();
     setCategory(res?.data?.data);
   };

  const getChildCategorytwo = async () => {
    const data: any = await getChildCategory();
    setSubCategory(data?.data?.data);
  };

  const getChildCategorySub = async () => {
    const child: any = await getSubChildCategory();
    console.log(child.data.data);
    setSubCayegoryChild(child?.data?.data)
  }

  return (
    <>
      <Grid sx={{ display: "flex", justifyContent: "space-between" }} xs={12}>
        <Grid item>
          <Paper
            sx={styleCategory.sx}
          >
            <Grid>
              <Typography style={createMainText}>
                {t("admin.category_page.category_create_side.create_main_text")}
              </Typography>
              <Grid>
                <Typography style={selectCategoryText}>
                  {t(
                    "admin.category_page.category_create_side.create_select_category"
                  )}
                </Typography>
                <FormControl
                  sx={{ m: 1, minWidth: "100%", margin: 0, padding: 0 }}
                >
                  <Select
                    value={selectCategory}
                    onChange={handleChangeCategory}
                    displayEmpty
                    style={{
                      height: "40px"
                    }}
                  >
                    {category?.map((item) => (
                      <MenuItem
                        key={item?.category_id}
                        value={item?.category_id}
                        style={selectValueCategory}
                      >
                        {item?.category_name}{" "}
                        <CheckCircleOutlineOutlinedIcon
                          sx={{
                            fontSize: "18px",
                            color: "green",
                            position: "absolute",
                            left: "270px",
                            top: "11px"
                          }}
                        />
                      </MenuItem>
                    ))}

                    <MenuItem
                      style={selectValueCreate}
                      onClick={props.handleClick}
                    >
                      <button style={createButton}>
                        <img src={require("../../../Img/Plus.png")} alt="" />
                        <Typography style={{ marginLeft: "10px" }}>
                          {t(
                            "admin.category_page.category_create_side.create_category_select"
                          )}
                        </Typography>
                      </button>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid>
                <Typography style={selectCategoryText}>
                  {t(
                    "admin.category_page.category_create_side.create_select_subcategory"
                  )}
                </Typography>
                <FormControl
                  sx={{ m: 1, minWidth: "100%", margin: 0, padding: 0 }}
                >
                  <Select
                    value={selectSubCategory}
                    onChange={handleChangeSubCategory}
                    displayEmpty
                    style={{
                      height: "40px"
                    }}
                  >
                    {subCategory?.map((item: any) => {
                      return (
                        <MenuItem
                          style={selectValueCategory}
                          key={item?.sub_category_id}
                          value={item?.sub_category_id}
                        >
                          {item?.sub_category_name}
                          <CheckCircleOutlineOutlinedIcon
                            sx={{
                              fontSize: "18px",
                              color: "green",
                              position: "absolute",
                              left: "270px",
                              top: "11px"
                            }}
                          />
                        </MenuItem>
                      );
                    })}
                    <MenuItem
                      style={selectValueCreate}
                      onClick={props.handleClick}
                    >
                      <button style={createButton}>
                        <img src={require("../../../Img/Plus.png")} alt="" />
                        <Typography style={{ marginLeft: "10px" }}>
                          {t(
                            "admin.category_page.category_create_side.create_category_select"
                          )}
                        </Typography>
                      </button>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid>
                <Typography style={selectCategoryText}>
                  {t(
                    "admin.category_page.category_create_side.create_select_new_subcategory"
                  )}
                </Typography>
                <FormControl
                  sx={{ m: 1, minWidth: "100%", margin: 0, padding: 0 }}
                >
                  <Select
                    value={selectNewSubCategory}
                    onChange={handleChangeNewSubCategory}
                    displayEmpty
                    style={{
                      height: "40px"
                    }}
                  >
                    {child_sub_category.map((child) => (
                      <MenuItem
                        key={child.child_category_id}
                        style={selectValueCategory}
                        value={child.child_category_id}
                      >
                        {child.child_category_name}
                        <CheckCircleOutlineOutlinedIcon
                          sx={{
                            fontSize: "18px",
                            color: "green",
                            position: "absolute",
                            left: "270px",
                            top: "11px"
                          }}
                        />
                      </MenuItem>
                    ))}
                    <MenuItem
                      style={selectValueCreate}
                      onClick={props.handleClick}
                    >
                      <button style={createButton}>
                        <img src={require("../../../Img/Plus.png")} alt="" />
                        <Typography style={{ marginLeft: "10px" }}>
                          {t(
                            "admin.category_page.category_create_side.create_category_select"
                          )}
                        </Typography>
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
