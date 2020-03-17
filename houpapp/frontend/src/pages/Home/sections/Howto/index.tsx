import React from "react";
import { Element } from "react-scroll";
import {
  Typography,
  makeStyles,
  createStyles,
  Grid,
  Hidden,
  Theme
} from "@material-ui/core/";

import Image from "react-bootstrap/Image";

import desktop from "../../../../icons/desktop.svg";
import talking from "../../../../icons/talking.svg";
import architect from "../../../../icons/architect.svg";
import message from "../../../../icons/message.svg";
import dashedMobile from "../../../../icons/dashedmobile.svg";
import dashed1 from "../../../../icons/dashed1.svg";
import dashed2 from "../../../../icons/dashed2.svg";

import "./index.scss";

// import signup from '../../../../img/'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    howto: {
      alignItems: "center",
      backgroundColor: "#FFF",
      marginLeft: 150,
      marginRight: 150,
      [theme.breakpoints.up("lg")]: {
        marginLeft: 280,
        marginRight: 280
      },
      [theme.breakpoints.down("sm")]: {
        paddingTop: 80,
        paddingBottom: 80,
        marginLeft: 50,
        marginRight: 50
      },
      [theme.breakpoints.down("xs")]: {
        paddingTop: 80,
        paddingBottom: 80,
        marginLeft: 10,
        marginRight: 10
      }
    }
  })
);

const HowTo: React.FC = () => {
  const classes = useStyles();
  const smile = ":)";

  return (
    <Element name="HowTo">
      <section id="HowTo" className={classes.howto}>
        <div>
          <Typography
            variant="h3"
            style={{ fontWeight: 650, lineHeight: 1.5 }}
            gutterBottom
            align="center"
          >
            <span>Veja como funciona, </span>
            <span className="green">é tudo online! {smile}</span>
          </Typography>
        </div>
        <div>
          <Typography
            variant="subtitle1"
            style={{
              fontWeight: 400,
              fontSize: "1.15rem",
              color: "gray",
              marginBottom: 20
            }}
            align="center"
            gutterBottom
          >
            Deixe seu ambiente do jeito que você sempre quis!{" "}
            <span className="label">
              Na hoUp você vai encontrar o profissional ideal para o seu
              projeto.
            </span>
          </Typography>
        </div>

        {/* Images & text*/}
        <div className="Howto">
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={4}
          >
            <Grid item xs={12} md={3} className="gridTo">
              <Image className="imageTo" src={desktop} alt="desktop" />
            </Grid>
            <Grid item xs={12} sm={7} md={4}>
              <Typography
                variant="subtitle1"
                style={{
                  fontWeight: 400,
                  fontSize: "1.1rem",
                  color: "gray",
                  marginBottom: "30px"
                }}
                align="left"
                gutterBottom
              >
                <span className="label">Cadastre-se</span>, envie as medidas e
                fotos do ambiente que quer decorar e escolha o estilo visual que
                mais combina com você
              </Typography>
            </Grid>
          </Grid>

          <div className="d-flex justify-content-center">
            <Hidden smDown>
              <Image src={dashed1} className="line" alt="dashed" />
            </Hidden>
            <Hidden mdUp>
              <Image
                src={dashedMobile}
                style={{ height: 200, transform: "rotate(180deg)" }}
                alt="dashed"
                fluid
              />
            </Hidden>
          </div>

          <Grid
            container
            direction="row-reverse"
            alignItems="center"
            spacing={4}
          >
            <Grid item xs={12} md={3} className="gridTo">
              <Image className="imageTo" src={talking} alt="talking" />
            </Grid>
            <Grid item xs={12} sm={7} md={4}>
              <Typography
                variant="subtitle1"
                style={{
                  fontWeight: 400,
                  fontSize: "1.1rem",
                  color: "gray",
                  marginBottom: "30px"
                }}
                align="right"
                gutterBottom
              >
                Responda algumas perguntas sobre o ambiente a ser decorado.{" "}
                <span className="label">
                  Nós localizamos os arquitetos especializados no estilo que
                  você escolheu.
                </span>
              </Typography>
            </Grid>
          </Grid>

          <div className="d-flex justify-content-center">
            <Hidden smDown>
              <Image
                src={dashed2}
                className="line"
                style={{ transform: "scaleX(-1)" }}
                alt="dashed"
              />
            </Hidden>
            <Hidden mdUp>
              <Image
                src={dashedMobile}
                style={{ height: 200 }}
                alt="dashed"
                fluid
              />
            </Hidden>
          </div>

          <Grid container direction="row" alignItems="center" spacing={4}>
            <Grid item xs={12} md={3} className="gridTo">
              <Image
                className="imageTo"
                src={architect}
                style={{ transform: "scaleX(-1)" }}
                alt="architect"
              />
            </Grid>
            <Grid item xs={12} sm={7} md={5}>
              <Typography
                variant="subtitle1"
                style={{
                  fontWeight: 400,
                  fontSize: "1.1rem",
                  color: "gray",
                  marginBottom: "30px"
                }}
                align="left"
                gutterBottom
              >
                <span className="label">Seu projeto é iniciado!</span> Quando
                estiver pronto você receberá imagens 3D do seu ambiente
                decorado, planta baixa e a lista de compras.
              </Typography>
            </Grid>
          </Grid>

          <div className="d-flex justify-content-center">
            <Hidden smDown>
              <Image src={dashed1} className="line" fluid alt="dashed" />
            </Hidden>
            <Hidden mdUp>
              <Image
                src={dashedMobile}
                style={{ height: 200 }}
                alt="dashed"
                fluid
              />
            </Hidden>
          </div>

          <Grid
            container
            direction="row-reverse"
            alignItems="center"
            spacing={4}
          >
            <Grid item xs={12} md={3} className="gridTo">
              <Image className="imageTo" src={message} alt="message" />
            </Grid>
            <Grid item sm={7} md={4}>
              <Typography
                variant="subtitle1"
                style={{
                  fontWeight: 400,
                  fontSize: "1.1rem",
                  color: "gray",
                  marginTop: "30px",
                  marginBottom: "30px"
                }}
                align="right"
                gutterBottom
              >
                <span className="label">E pronto! </span>
                Um projeto completo em mãos para executar economizando muito e
                deixando o ambiente do seu jeito!
              </Typography>
            </Grid>
          </Grid>
        </div>
      </section>
    </Element>
  );
};

export default HowTo;
