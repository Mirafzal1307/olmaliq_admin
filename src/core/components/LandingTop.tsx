import React from "react";
import { Button, FormControl, Grid, MenuItem, Typography } from "@mui/material";
import { ButtonStyle, createCategoryDirection, createCategoryDirectionSpan, mainText } from "../theme/LandingTopStyle";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const LandingTop = (props: any) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

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
              {props.prevIcon}
            </Typography>
            <Typography style={createCategoryDirection}>
              {props.dashboardText2}
            </Typography>
            <Typography style={createCategoryDirection}>
              {props.prevIcon1}
            </Typography>
            <Typography style={createCategoryDirectionSpan}>
              {props.pageTextSpan}
            </Typography>
          </Grid>
        </Grid>
        <Grid>
          <Button sx={{ textTransform: "none" }} style={ButtonStyle}>
            {props.createButton}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default LandingTop;
