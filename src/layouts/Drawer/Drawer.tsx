import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List'
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link as RouterLink } from 'react-router-dom';
import MainRoutes from '../../routes/routes'
import { makeStyles } from "@mui/styles"
import { Avatar, FormControl, Grid, NativeSelect, Toolbar } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

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

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const useStyles = makeStyles({
  select: {
    border: "none !important",
    "&:focus": {
      outline: "none !important",
    },
  },
  routeText: {
    color: "#444444",
  },
  searchInput: {
    border: "none",
    padding: "11px 20px 11px",
    "&:focus": {
      outline: "none !important",
    },
  },
});

export default function MiniDrawer() {
  const classes = useStyles()
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        style={{ boxShadow: "none", borderBottom: "2px solid #EEEEEE" }}
      >
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
            <Avatar src={require("../../Img/Frame 50 1.png")} sx={{ marginLeft: "20px" }} />
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {MainRoutes.map((item) => (
            <ListItem
              disablePadding
              key={item.path}
              component={RouterLink as any}
              to={item.path}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText className={classes.routeText}>
                  {item.title}
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
