// import React from "react";
// import { AppBar, Toolbar, Button, makeStyles } from "@material-ui/core";
// import { Link } from "react-router-dom";
// import logo from "../../img/logo.png";
// import { HOME } from "../../constants/routes";

// const useStyles = makeStyles(() => {
//   return {
//     project: {
//       fontWeight: 700,
//       padding: "12px 35px",
//       marginRight: 5,
//       marginLeft: 100,
//       borderWidth: 1.5,
//       borderColor: "#3EB8AA",
//       color: "#3EB8AA"
//     },
//     label: {
//       fontWeight: 700
//     }
//   };
// });

// const NavSign: React.FC = () => {
//   const classes = useStyles();
//   return (
//     <Navbar expand="lg" sticky="top" className={classes.navbar}>
//       <Toolbar>
//         <Link to={HOME}>
//           <img src={logo} alt="Logo" />
//         </Link>
//         <div className="header">
//           <Link to="/sejadecorador">
//             <Button
//               className={classes.project}
//               classes={{ label: classes.label }}
//               variant="outlined"
//               disableElevation
//             >
//               SEJA UM DECORADOR HO-UP
//             </Button>
//           </Link>
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default NavSign;

import React from "react";
import { Button, makeStyles, createStyles, Theme } from "@material-ui/core";
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
      boxShadow: "0 1px 3px #EDEDED",
      justifyContent: "right"
    },
    span: {
      [theme.breakpoints.down("md")]: {
        fontSize: 10
      }
    },
    image: {
      marginLeft: 40,
      [theme.breakpoints.down("md")]: {
        width: 120
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
      },
      [theme.breakpoints.down("sm")]: {
        width: "80vw",
        marginRight: 0,
        marginLeft: 0,
        marginTop: 20
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

const NavSign: React.FC = () => {
  const classes = useStyles();

  return (
    <Navbar expand="lg" sticky="top" className={classes.navbar}>
      <Navbar.Brand className="ml-5">
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
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavSign;
