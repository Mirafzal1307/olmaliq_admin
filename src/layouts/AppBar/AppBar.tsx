import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import React from "react";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, FormControl, Grid, IconButton, NativeSelect } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AvatarLogo from "../../images/Frame 50 1.png";
import { makeStyles } from "@mui/styles";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const useStyles = makeStyles({
  searchInput: {
    border: "none",
    padding: "11px 20px 11px",
    "&:focus": {
      outline: "none !important",
    },
  },
});

const AppBarComponent = () => {
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const classes = useStyles()

  return (
    <AppBar
      position="fixed"
      open={open}
      style={{ boxShadow: "none", borderBottom: "2px solid #EEEEEE" }}
    >
      <Toolbar style={{ background: "white", justifyContent: "space-between" }}>
        <Grid>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }), color: "#555555" }}
          >
            <MenuIcon />
          </IconButton>
          <input placeholder="Izlash..." className={classes.searchInput} />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Grid>
        <Grid sx={{ display: "flex" }}>
          <FormControl>
            <NativeSelect
              defaultValue="O’zbekcha"
              inputProps={{
                name: "language",
              }}
            >
              <option value="O’zbekcha">O’zbekcha</option>
              <option value="Ruscha">Ruscha</option>
              <option value="Inglizcha">Inglizcha</option>
            </NativeSelect>
          </FormControl>
          <Avatar src={AvatarLogo} sx={{ marginLeft: "20px" }} />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
