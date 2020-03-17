import React from "react";
import {
  Typography,
  makeStyles,
  createStyles,
  Theme,
  Button,
  Grid,
  Hidden
} from "@material-ui/core";
import Image from "react-bootstrap/Image";
import { Element } from "react-scroll";

import house from "../../../../img/house.png";
import "./index.scss";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    index: {
      alignItems: "center",
      marginTop: 80,
      marginBottom: 80,
      [theme.breakpoints.up("lg")]: {
        paddingTop: 120,
        marginLeft: 200,
        marginRight: 200
      },
      [theme.breakpoints.down("md")]: {
        marginLeft: 150,
        marginRight: 150
      },
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center !important",
        textAlign: "center",
        marginLeft: 30,
        marginRight: 20
      }
    },
    grid: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.5rem",
        textAlign: "center !important"
      }
    }
  })
);

const Index: React.FC = () => {
  const classes = useStyles();

  return (
    <Element name="index">
      <section id="Index" className={classes.index}>
        <Grid
          container
          direction="row-reverse"
          className="sectionsImage"
          alignItems="center"
          spacing={4}
        >
          <Grid item md={7} lg={6} className={classes.grid}>
            <Image src={house} className="image" fluid />
          </Grid>
          <Grid item md={5} sm={12}>
            <Grid>
              <div>
                <Typography
                  variant="h3"
                  style={{ fontWeight: 650, lineHeight: 1.5 }}
                  className="title"
                  gutterBottom
                >
                  <span className="green">
                    A decoração dos seus sonhos,&nbsp;
                    <Hidden smUp>
                      <br />
                    </Hidden>
                  </span>
                  <b>acessível e tudo online!</b>
                </Typography>
              </div>
              <div className={classes.grid}>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontWeight: 400,
                    fontSize: "1.15rem",
                    color: "gray"
                  }}
                  gutterBottom
                >
                  Faça o projeto de decoração do seu ambiente totalmente online
                  com arquitetos de diferentes estilos para dar{" "}
                  <b style={{ color: "#000" }}>
                    o match perfeito com a decoração que você sempre quis
                  </b>
                </Typography>
              </div>
              <div className="button-label">
                <Button className="red" variant="contained" disableElevation>
                  COMECE AGORA O SEU PROJETO
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </section>
    </Element>
  );
};

export default Index;
