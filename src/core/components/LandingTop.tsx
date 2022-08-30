import React from "react";
import { Grid } from "@mui/material";
import { ButtonStyle, createCategoryDirection, createCategoryDirectionSpan, mainText } from "../theme/LandingTopStyle";

const LandingTop = (props: any) => {
  return (
    <>
        <Grid sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "32px" }}>
          <Grid>
            <h1 style={mainText}>
              {props.mainText}
            </h1>
            <Grid sx={{ display: "flex" }}>
              <p style={createCategoryDirection}>
                {props.dashboardText}
              </p>{" "}
              <p style={createCategoryDirection}>{">"}</p>
              <p style={createCategoryDirection}>
                {props.pageText}
              </p>
              <p style={createCategoryDirection}>{">"}</p>
              <p style={createCategoryDirectionSpan}>
                {props.pageTextSpan}
              </p>
            </Grid>
          </Grid>
          <Grid>
            <button style={ButtonStyle}>
              {props.createButton}
            </button>
          </Grid>
        </Grid>
    </>
  );
};

export default LandingTop;
