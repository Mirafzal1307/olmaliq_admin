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
import { getCategory } from "../../../api/admin/AdminCategoryApi";
import CategoryCreateList from "./CategoryCreateList";

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

const CategoryCreate = () => {
  const { t } = useTranslation();

  const [selectCategory, setSelectCategory] = useState("");
  const [subCategory, setSubCategory] = useState<subCategoryData[]>([]);
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

  const getCategoryData = async () => {
    const res: any = await getCategory();
    setCategory(res?.data?.data);
    console.log(res?.data?.data);
  };

  useEffect(() => {
    getData();
    getSubChildCategory();
  });

  const getSubChildCategory = async () => {
    const data: any = await getChildCategory();
    setSubCayegoryChild(data?.data?.data);
  };

  const SubCategories = () => {
    alert("msg");
    return (
      <>
        <Select
          value={selectNewSubCategory}
          onChange={handleChangeNewSubCategory}
          displayEmpty
          style={{
            height: "40px"
          }}
        >
          {child_sub_category?.map((childs) => {
            return (
              <MenuItem
                key={childs.child_category_id}
                style={selectValueCategory}
                value={childs.child_category_id}
              >
                {childs.child_category_name}
              </MenuItem>
            );
          })}
          <MenuItem style={selectValueCreate}>
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
      </>
    );
  };

  return (
    <>
      <Grid sx={{ display: "flex", justifyContent: "space-between" }} xs={12}>
        <Grid item>
          <Paper sx={{ padding: "30px 30px 454px", width: "380px" }}>
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
                      >
                        {item?.category_name}
                      </MenuItem>
                    ))}
                    <MenuItem style={selectValueCreate}>
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
                        </MenuItem>
                      );
                    })}
                    <MenuItem
                      style={selectValueCreate}
                      onClick={() => SubCategories()}
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
                ></FormControl>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default CategoryCreate;
