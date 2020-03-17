import React from "react";
import {
  Grid,
  Typography,
  Button,
  TextField,
  createStyles,
  makeStyles,
  Theme
} from "@material-ui/core";

import { Link as SmoothLink } from "react-scroll";
import { Link } from "react-router-dom";

import Image from "react-bootstrap/Image";

import Insta from "@material-ui/icons/Instagram";
import Facebook from "@material-ui/icons/Facebook";
import logo from "../../img/logo3.png";

import "./style.scss";

interface Props {
  enabled: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonRed: {
      fontWeight: 700,
      fontSize: "0.6rem",
      backgroundColor: "#DF5037",
      color: "#FFF",
      marginTop: 10,
      paddingLeft: 50,
      paddingRight: 50,
      borderRadius: 25,
      "&:hover": {
        backgroundColor: "#FAAC58"
      }
    },
    white: {
      color: "#FFF",
      marginTop: 10,
      marginBottom: 10
    }
  })
);

const Footer: React.FC<Props> = ({ enabled }) => {
  const img = logo;
  const classes = useStyles();

  if (!enabled) return null;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <footer>
        <div className="informations">
          <Grid container wrap="nowrap">
            <Grid item md={12} sm={6} xs={12}>
              <Image src={img} className="image-footer" fluid alt="logo2" />
            </Grid>
          </Grid>
          <br />

          <Grid
            container
            spacing={10}
            wrap="nowrap"
            justify="space-evenly"
            alignItems="center"
          >
            <Grid container direction="row" spacing={5}>
              <Grid item md={3} sm={6} xs={12}>
                <Typography variant="subtitle1" className="green">
                  Siga-nos
                </Typography>
                <a href="#">
                  <Insta className={classes.white} fontSize="large" />
                </a>
                <a href="#">
                  <Facebook className={classes.white} fontSize="large" />
                </a>
                <br />
                <br />
                <Typography variant="subtitle1" className="green">
                  Assine nosso newsletter
                </Typography>
                <br />
                <form action="#" method="POST">
                  <TextField
                    label="Email"
                    variant="outlined"
                    className="input"
                    InputLabelProps={{
                      shrink: true,
                      color: "primary"
                    }}
                  />
                  <br />
                  <Grid container justify="flex-end">
                    <Button
                      variant="contained"
                      disableElevation
                      className={classes.buttonRed}
                    >
                      <span>Assinar</span>
                    </Button>
                  </Grid>
                </form>
              </Grid>

              <Grid item md={3} sm={6} xs={12} style={{ paddingRight: 20 }}>
                <Typography variant="h6" style={{ color: "white" }}>
                  Precisa de ajuda?
                </Typography>
                <Typography variant="subtitle1" className="green">
                  Entre em contato com a gente!
                </Typography>
                <Typography variant="subtitle1" className={classes.white}>
                  Alameda Tocantins, 75 - Alphaville, Barueri - SP <br />
                  CEP: 06454-050
                </Typography>
                <a href="mailto:contato@houp.com">
                  <Typography
                    variant="subtitle1"
                    className={`${classes.white} email`}
                  >
                    contato@houp.com
                  </Typography>
                </a>
                <Typography variant="subtitle1" className={classes.white}>
                  (11) 99415-0773
                </Typography>
              </Grid>

              <Grid item md={3} sm={6} xs={6} className="text-sm-left">
                <SmoothLink
                  activeClass="section-active"
                  to="index"
                  spy
                  smooth
                  duration={500}
                  offset={-150}
                  style={{ cursor: "pointer" }}
                >
                  <Typography variant="subtitle1" className={classes.white}>
                    Ho Up
                  </Typography>
                </SmoothLink>
                <SmoothLink
                  activeClass="section-active"
                  to="HowTo"
                  spy
                  smooth
                  duration={500}
                  offset={-150}
                  style={{ cursor: "pointer" }}
                >
                  <Typography variant="subtitle1" className={classes.white}>
                    Como funciona
                  </Typography>
                </SmoothLink>
                <SmoothLink
                  activeClass="section-active"
                  to="Prices"
                  spy
                  smooth
                  duration={500}
                  offset={-150}
                  style={{ cursor: "pointer" }}
                >
                  <Typography variant="subtitle1" className={classes.white}>
                    Preços
                  </Typography>
                </SmoothLink>
                <SmoothLink
                  activeClass="section-active"
                  to="FAQ"
                  spy
                  smooth
                  duration={500}
                  offset={-150}
                  style={{ cursor: "pointer" }}
                >
                  <Typography variant="subtitle1" className={classes.white}>
                    Dúvidas frequentes
                  </Typography>
                </SmoothLink>
                <SmoothLink
                  activeClass="section-active"
                  to="index"
                  spy
                  smooth
                  duration={500}
                  offset={-150}
                  style={{ cursor: "pointer" }}
                >
                  <Typography variant="subtitle1" className={classes.white}>
                    Blog
                  </Typography>
                </SmoothLink>
                <a href="">
                  <Typography variant="subtitle1" className={classes.white}>
                    Fale conosco
                  </Typography>
                </a>
              </Grid>

              <Grid item md={3} sm={6} xs={6}>
                <Link to="">
                  <Typography variant="subtitle1" className={classes.white}>
                    Crie a sua conta
                  </Typography>
                </Link>
                <Link to="">
                  <Typography variant="subtitle1" className={classes.white}>
                    Faça o seu projeto
                  </Typography>
                </Link>
                <Link to="">
                  <Typography variant="subtitle1" className={classes.white}>
                    Seja um decorador Ho Up
                  </Typography>
                </Link>
                <Link to="">
                  <Typography variant="subtitle1" className={classes.white}>
                    Política de Privacidade
                  </Typography>
                </Link>
                <Link to="">
                  <Typography variant="subtitle1" className={classes.white}>
                    Termos de Uso
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div className="copyright">
          Copyright © Ho Up. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
