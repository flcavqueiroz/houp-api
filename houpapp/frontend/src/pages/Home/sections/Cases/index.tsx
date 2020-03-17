import React from "react";
import { Element } from "react-scroll";
import Slider, { Settings } from "react-slick";
import {
  Box,
  Typography,
  makeStyles,
  createStyles,
  Theme
} from "@material-ui/core/";
import Image from "react-bootstrap/Image";
import NextArrow from "../../../../components/Arrows/NextArrow";
import PrevArrow from "../../../../components/Arrows/PrevArrow";
import slide1 from "../../../../img/livingroom1.jpg";
import slide2 from "../../../../img/livingroom2.jpg";
import slide3 from "../../../../img/livingroom3.jpg";
import slide4 from "../../../../img/livingroom4.jpg";
import slide5 from "../../../../img/livingroom5.jpg";
import slide6 from "../../../../img/livingroom6.jpg";
import slide7 from "../../../../img/livingroom7.jpg";
import slide8 from "../../../../img/livingroom8.jpg";
import slide9 from "../../../../img/livingroom9.jpg";
import slide10 from "../../../../img/livingroom10.jpg";

import "../../../../components/Item/style.scss";

import "./index.scss";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      height: 140,
      width: 100
    },
    control: {
      padding: theme.spacing(2)
    },
    cases: {
      alignItems: "center",
      backgroundColor: "#FFF",
      paddingTop: 80,
      [theme.breakpoints.up("md")]: {
        marginLeft: 150,
        marginRight: 150
      },
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
        marginLeft: 10,
        marginRight: 10
      }
    },
    text: {
      [theme.breakpoints.down("sm")]: {
        textAlign: "center"
      }
    }
  })
);

const Cases: React.FC = () => {
  const classes = useStyles();

  const Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      //@ts-ignore
      <NextArrow />
    ),
    prevArrow: (
      //@ts-ignore
      <PrevArrow />
    ),
    customPaging: () => <div className="myDots" />
  };

  return (
    <Element name="Cases">
      <section id="Cases" className={classes.cases}>
        <div>
          <Typography
            variant="h3"
            style={{ fontWeight: 650, lineHeight: 1.5, marginBottom: 80 }}
            align="center"
            gutterBottom
          >
            Conheça as transformações de ambientes <br />{" "}
            <span className="green">feitas aqui na ho-up!</span>
          </Typography>
        </div>
        <div className="carousel">
          <div>
            <Slider {...Settings} className="Slider">
              <div className="slide">
                <div className="slide">
                  <Box className="box-before">
                    <span>ANTES</span>
                  </Box>
                  <Image fluid src={slide1} alt="slide1" />
                </div>
                <div className="slide">
                  <Box className="box-after">
                    <span>DEPOIS</span>
                  </Box>
                  <Image fluid src={slide2} alt="slide2" />
                </div>
              </div>
              <div>
                <div className="slide">
                  <Box className="box-before">
                    <span>ANTES</span>
                  </Box>
                  <Image fluid src={slide3} alt="slide3" />
                </div>
                <div className="slide">
                  <Box className="box-after">
                    <span>DEPOIS</span>
                  </Box>
                  <Image fluid src={slide4} alt="slide4" />
                </div>
              </div>
              <div>
                <div className="slide">
                  <Box className="box-before">
                    <span>ANTES</span>
                  </Box>
                  <Image fluid src={slide5} alt="slide5" />
                </div>
                <div className="slide">
                  <Box className="box-after">
                    <span>DEPOIS</span>
                  </Box>
                  <Image fluid src={slide6} alt="slide6" />
                </div>
              </div>
              <div>
                <div className="slide">
                  <Box className="box-before">
                    <span>ANTES</span>
                  </Box>
                  <Image fluid src={slide7} alt="slide1" />
                </div>
                <div className="slide">
                  <Box className="box-after">
                    <span>DEPOIS</span>
                  </Box>
                  <Image fluid src={slide8} alt="slide2" />
                </div>
              </div>
              <div>
                <div className="slide">
                  <Box className="box-before">
                    <span>ANTES</span>
                  </Box>
                  <Image fluid src={slide9} alt="slide1" />
                </div>
                <div className="slide">
                  <Box className="box-after">
                    <span>DEPOIS</span>
                  </Box>
                  <Image fluid src={slide10} alt="slide2" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Cases;
