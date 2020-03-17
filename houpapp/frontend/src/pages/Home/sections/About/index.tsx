import React from "react";
import {
  Typography,
  makeStyles,
  createStyles,
  Hidden,
  Theme,
  Grid
} from "@material-ui/core";
import { Link as SmoothLink } from "react-scroll";

import { Element } from "react-scroll";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    about: {
      alignItems: "center",
      paddingTop: 80,
      paddingBottom: 80,
      [theme.breakpoints.up("lg")]: {
        marginLeft: 200,
        marginRight: 200
      },
      [theme.breakpoints.down("md")]: {
        marginLeft: 150,
        marginRight: 150
      },
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
        marginLeft: 30,
        marginRight: 20
      }
    },
    grid: {
      [theme.breakpoints.down("sm")]: {
        textAlign: "center !important"
      }
    },
    greenDarker: {
      color: "#125A7A"
    },
    span: {
      [theme.breakpoints.down("md")]: {
        fontSize: 30
      }
    }
  })
);

const smile = ":)";

const About: React.FC = () => {
  const classes = useStyles();

  return (
    <Element name="funciona">
      <section id="about" className={classes.about}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={4}
        >
          <Grid item xs={12} md={5} sm={12} className={classes.grid}>
            <Grid>
              <div>
                <Typography
                  variant="h3"
                  style={{ fontWeight: 650, lineHeight: 1.5 }}
                  gutterBottom
                >
                  <span className="green">
                    É sobre transformar vidas!&nbsp;
                  </span>
                  <Hidden mdUp>
                    <br />
                  </Hidden>
                  <span className={classes.span}>Conheça a Ho Up</span>
                </Typography>
              </div>
              <div>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  A plataforma que permite você a ter a{" "}
                  <b className={classes.greenDarker}>
                    decoração dos seus sonhos e economizando muito! {smile}
                  </b>
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} md={7} sm={12}>
            <div>
              <Typography
                variant="subtitle1"
                style={{ fontWeight: 400, fontSize: "1.125rem", color: "gray" }}
                gutterBottom
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore magna aliqua. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor indicidunt ut labore et dolore magna aliqua.
              </Typography>
            </div>
            <br />
            <SmoothLink
              activeClass="section-active"
              to="funciona"
              spy
              smooth
              duration={500}
              offset={-150}
            ></SmoothLink>
          </Grid>
        </Grid>
      </section>
    </Element>
  );
};

export default About;
