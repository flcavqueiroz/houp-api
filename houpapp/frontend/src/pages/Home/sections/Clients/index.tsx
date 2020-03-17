import React from "react";
import Slider, { Settings } from "react-slick";
import { Element } from "react-scroll";
import { makeStyles, Theme, createStyles, Typography } from "@material-ui/core";
import "./index.scss";
import ClientComponent from "../../../../components/Client";
import items from "./items";

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
    clients: {
      alignItems: "center",
      backgroundColor: "#FFF",
      paddingTop: 80,
      paddingBottom: 80,
      [theme.breakpoints.up("lg")]: {
        marginLeft: 200,
        marginRight: 200
      },
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
        marginLeft: 20,
        marginRight: 20
      }
    },
    text: {
      [theme.breakpoints.down("sm")]: {
        textAlign: "center"
      }
    }
  })
);

const settings: Settings = {
  dots: true,
  centerMode: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  customPaging: () => <div className="myDots" />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
};

const Clients: React.FC = () => {
  const classes = useStyles();

  return (
    <Element name="Clients">
      <section id="Clients" className={classes.clients}>
        <div className="container-client">
          <div>
            <Typography
              variant="h3"
              style={{ fontWeight: 650, lineHeight: 1.5, marginBottom: 50 }}
              gutterBottom
              align="center"
            >
              Veja o que nossos{" "}
              <span className="green">clientes estão falando</span>
            </Typography>
          </div>
          <Slider {...settings} className="client-slider">
            {items.map(props => (
              <ClientComponent {...props} />
            ))}
          </Slider>
        </div>
      </section>
    </Element>
  );
};

export default Clients;
