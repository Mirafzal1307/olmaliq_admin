import React from 'react';
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline"
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MainRoutes from "../../routes/routes";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Box from '@mui/material/Box';
import { Avatar, FormControl, Grid, MenuItem } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useTranslation } from "react-i18next";
import { routeText } from '../../core/theme/Drawer';

const useStyles = makeStyles({
  searchInput: {
    border: "none",
    padding: "11px 20px 11px",
    "&:focus": {
      outline: "none !important",
    },
  },
});

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const classes = useStyles()
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (event: SelectChangeEvent<unknown>) => {
    i18n.changeLanguage((event.target as HTMLInputElement).value);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };  

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar
          style={{ background: "white", justifyContent: "space-between" }}
        >
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
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <Select
                onChange={handleLanguageChange}
                value={i18n.language}
              >
                <MenuItem value="uz">
                  {t("admin.drawer.language_label.uzbek")}
                </MenuItem>
                <MenuItem value="ru">
                  {t("admin.drawer.language_label.russian")}
                </MenuItem>
                <MenuItem value="en">
                  {t("admin.drawer.language_label.english")}
                </MenuItem>
              </Select>
            </FormControl>
            <Avatar
              src={require("../../Img/Frame 50 1.png")}
              sx={{ marginLeft: "20px" }}
            />
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {MainRoutes.map((item) => (
            <ListItem
              disablePadding
              key={item?.path}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              component={RouterLink as any}
              to={item?.path}
            >
              <ListItemButton>
                <ListItemIcon>{item?.icon}</ListItemIcon>
                <ListItemText style={routeText}>
                  {item.title}
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
}