import React from "react";
import {
  Button,
  makeStyles,
  createStyles,
  Theme,
  Divider,
  Hidden
} from "@material-ui/core";
import { Nav, Navbar, Image } from "react-bootstrap";
import { Link as SmoothLink } from "react-scroll";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { HOME, LOGIN } from "../../constants/routes";
import Menu from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navbar: {
      backgroundColor: "#FFF",
      boxShadow: "0 1px 3px #EDEDED"
    },
    span: {
      [theme.breakpoints.down("md")]: {
        fontSize: 10
      }
    },
    image: {
      marginLeft: 40,
      [theme.breakpoints.down("md")]: {
        width: 120,
        justifyContent: "center"
      }
    },
    project: {
      fontWeight: 700,
      width: "250px",
      padding: 15,
      marginRight: 15,
      marginLeft: 15,
      borderWidth: 1.5,
      borderColor: "#3EB8AA",
      color: "#3EB8AA",
      [theme.breakpoints.down("md")]: {
        width: 150,
        fontSize: 8,
        padding: 10
        // marginRight: 20,
      },
      [theme.breakpoints.down("sm")]: {
        width: "80vw",
        marginRight: 0,
        marginLeft: 0,
        marginTop: 20
      }
    },
    login: {
      fontWeight: 700,
      width: "250px",
      padding: 15,
      marginRight: 150,
      borderWidth: 1.5,
      backgroundColor: "#125A7A",
      borderColor: "#125A7A",
      color: "#FFF",
      "&:hover": {
        backgroundColor: "#135F80"
      },
      [theme.breakpoints.down("md")]: {
        width: 150,
        fontSize: 8,
        marginRight: 0,
        padding: 10
      },
      [theme.breakpoints.down("sm")]: {
        width: "80vw",
        marginRight: 0,
        marginLeft: 0,
        marginTop: 10
      }
    },
    label: {
      fontWeight: 700
    },
    label2: {
      fontWeight: 600
    }
  })
);

const NavDefault: React.FC = () => {
  const classes = useStyles();

  return (
    <Navbar expand="lg" sticky="top" className={classes.navbar}>
      <Navbar.Brand>
        <Link to={HOME}>
          <Image src={logo} alt="Logo" className={classes.image} />
        </Link>
      </Navbar.Brand>
      <Nav>
        <Navbar.Toggle
          aria-controls="nav"
          className="hidden-md mr-auto ml-auto"
        >
          <Menu />
        </Navbar.Toggle>
      </Nav>
      <Navbar.Collapse>
        <Hidden mdUp>
          <Divider light />
        </Hidden>
        <Nav className="ml-auto">
          <Hidden mdUp>
            <Divider light />
          </Hidden>
          <SmoothLink
            activeClass="section-active"
            to="index"
            spy
            smooth
            duration={500}
            offset={-150}
          >
            <Button fullWidth className={classes.span}>
              A HO UP
            </Button>
          </SmoothLink>
          <Hidden mdUp>
            <Divider light />
          </Hidden>
          <SmoothLink
            activeClass="section-active"
            to="HowTo"
            spy
            smooth
            duration={500}
            offset={-150}
          >
            <Button fullWidth className={classes.span}>
              COMO FUNCIONA
            </Button>
          </SmoothLink>
          <Hidden mdUp>
            <Divider light />
          </Hidden>
          <SmoothLink
            activeClass="section-active"
            to="Prices"
            spy
            smooth
            duration={500}
            offset={-50}
          >
            <Button fullWidth className={classes.span}>
              PREÇOS
            </Button>
          </SmoothLink>
          <Hidden mdUp>
            <Divider light />
          </Hidden>
          <SmoothLink
            activeClass="section-active"
            to="Cases"
            spy
            smooth
            duration={500}
          >
            <Button fullWidth className={classes.span}>
              CASES
            </Button>
          </SmoothLink>
          <Hidden mdUp>
            <Divider light />
          </Hidden>
          <SmoothLink
            activeClass="section-active"
            to="FAQ"
            spy
            smooth
            duration={500}
          >
            <Button fullWidth className={classes.span}>
              FAQ
            </Button>
          </SmoothLink>
          <Hidden mdUp>
            <Divider light />
          </Hidden>
          <Link to={HOME}>
            <Button fullWidth className={classes.span}>
              BLOG
            </Button>
          </Link>
          <Hidden mdUp>
            <Divider light />
          </Hidden>
        </Nav>
        <Hidden mdUp>
          <Divider light />
        </Hidden>
        <Nav className="d-flex align-items-center text-center">
          <Link to={HOME}>
            <Button
              fullWidth
              className={classes.project}
              classes={{ label: classes.label }}
              variant="outlined"
              disableElevation
            >
              SEJA UM DECORADOR HO UP
            </Button>
          </Link>
          <Link to={LOGIN}>
            <Button
              fullWidth
              className={classes.login}
              classes={{ label: classes.label2 }}
              variant="contained"
              disableElevation
            >
              LOGIN
            </Button>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavDefault;
