import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { ButtonStyle, createCategoryDirection, createCategoryDirectionSpan, mainText } from "../theme/LandingTopStyle";
import { Link } from "react-router-dom";

const LandingTop = (props: any) => {  
  return (
    <>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "32px",
        }}
      >
        <Grid>
          <Typography variant="h3" style={mainText}>
            {props.mainText}
          </Typography>
          <Grid sx={{ display: "flex" }}>
            <Typography style={createCategoryDirection}>
              {props.dashboardText}
            </Typography>{" "}
            <Typography style={createCategoryDirection}>
              {props.prevIcon ? <>{props.prevIcon}</> : null}
            </Typography>
            <Typography style={createCategoryDirectionSpan}>
              {props.pageTextSpan}
            </Typography>
          </Grid>
        </Grid>
        <Grid>
          <Link style={{ textDecoration: "none" }} to={props.toPage ? `/${props.toPage}` : `/dashboard`}>
          <Button sx={{ textTransform: "none" }} style={ButtonStyle}>
            {props.createButton}
          </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default LandingTop;
