import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  makeStyles,
  Theme,
  Grid,
  Hidden,
  IconButton
} from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";
import { Link as SmoothLink } from "react-scroll";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { HOME, LOGIN } from "../../constants/routes";
import SwipeableTemporaryDrawer from "./Drawer";

const useStyles = makeStyles((theme: Theme) => {
  return {
    project: {
      fontWeight: 700,
      padding: "10px 15px",
      marginRight: 5,
      borderWidth: 1.5,
      borderColor: "#3EB8AA",
      color: "#3EB8AA"
    },
    image: {
      marginLeft: 40,
      [theme.breakpoints.down("md")]: {
        width: 120,
        justifyContent: "center"
      }
    },
    button: {
      color: theme.palette.text.secondary,
      fontWeight: 700,
      transition:
        "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 0.1s ease-in-out, font-weight 0.2s ease-in-out",
      "&:hover": {
        color: "#000 !important",
        backgroundColor: "transparent"
      }
    },
    appbar: {
      boxShadow: "0 1px 3px #EDEDED",
      backgroundColor: "#FFF",
      [theme.breakpoints.down("md")]: {
        height: 52
      }
    },
    toolbar: {
      [(theme.breakpoints.only("xl"), theme.breakpoints.up("xl"))]: {
        marginRight: 76 + 158
      },
      [theme.breakpoints.down("md")]: {
        margin: "12px 0",
        marginTop: "-5px"
      },
      [theme.breakpoints.down("sm")]: {
        margin: "12px 0",
        marginTop: 0
      }
    },
    button2: {
      "&:hover": {
        color: "#000 !important",
        backgroundColor: "transparent"
      }
    },
    label: {
      fontWeight: 700
    },
    label2: {
      fontWeight: 600,
      color: "white"
    },
    login: {
      fontWeight: 700,
      padding: "12px 50px",
      color: "#125A7A",
      backgroundColor: "#125A7A",
      "&:hover": {
        backgroundColor: "#135F80"
      }
    }
  };
});

const NavDefault: React.FC = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const toggleDrawer = (bool: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setOpen(bool);
  };
  return (
    <>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Link to={HOME}>
            <img src={logo} className={classes.image} alt="Logo" />
          </Link>
          <Hidden lgUp>
            <IconButton onClick={() => setOpen(!open)}>
              <Menu />
            </IconButton>
          </Hidden>
          <Hidden mdDown>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="space-between"
            >
              <Grid item xs={7} style={{ paddingLeft: "23%" }}>
                <SmoothLink
                  activeClass="section-active"
                  to="index"
                  spy
                  smooth
                  duration={500}
                  offset={-150}
                >
                  <Button disableRipple className={classes.button}>
                    A HO UP
                  </Button>
                </SmoothLink>
                <SmoothLink
                  activeClass="section-active"
                  to="HowTo"
                  spy
                  smooth
                  duration={500}
                  offset={-150}
                >
                  <Button disableRipple className={classes.button}>
                    COMO FUNCIONA
                  </Button>
                </SmoothLink>
                <SmoothLink
                  activeClass="section-active"
                  to="Prices"
                  spy
                  smooth
                  duration={500}
                  offset={-50}
                >
                  <Button className={classes.button} disableRipple>
                    PREÇOS
                  </Button>
                </SmoothLink>
                <SmoothLink
                  activeClass="section-active"
                  to="Cases"
                  spy
                  smooth
                  duration={500}
                >
                  <Button className={classes.button} disableRipple>
                    CASES
                  </Button>
                </SmoothLink>
                <SmoothLink
                  activeClass="section-active"
                  to="FAQ"
                  spy
                  smooth
                  duration={500}
                  offset={-100}
                >
                  <Button className={classes.button} disableRipple>
                    FAQ
                  </Button>
                </SmoothLink>
                <Link to="">
                  <Button className={classes.button} disableRipple>
                    BLOG
                  </Button>
                </Link>
              </Grid>
              <Grid
                item
                container
                xs={5}
                spacing={4}
                justify="flex-end"
                alignItems="center"
              >
                <Grid item xs={6}>
                  <Button
                    className={classes.project}
                    classes={{ label: classes.label }}
                    variant="outlined"
                    fullWidth
                    disableElevation
                  >
                    SEJA UM DECORADOR HO UP
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Link to={LOGIN}>
                    <Button
                      fullWidth
                      className={classes.login}
                      color="inherit"
                      classes={{ label: classes.label2 }}
                      variant="contained"
                      disableElevation
                    >
                      LOGIN
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Hidden lgUp>
        <SwipeableTemporaryDrawer open={open} toggleDrawer={toggleDrawer} />
      </Hidden>
    </>
  );
};

export default NavDefault;
