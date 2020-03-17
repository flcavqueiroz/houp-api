import React from "react";
import {
  Typography,
  makeStyles,
  createStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Button,
  Card,
  CardContent,
  CardActions,
  Theme,
  Box,
  Hidden
} from "@material-ui/core";

import CheckIcon from "@material-ui/icons/Check";

import Image from "react-bootstrap/Image";
import { Element } from "react-scroll";

import kitchen from "../../../../img/kitchen.png";
import "./index.scss";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    prices: {
      alignItems: "center",
      paddingTop: 80,
      paddingBottom: 80,
      [theme.breakpoints.down("lg")]: {
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
        fontSize: "1.5rem",
        textAlign: "center !important"
      }
    },
    green: {
      color: "#00a290"
    }
  })
);

const Prices: React.FC = () => {
  const classes = useStyles();

  return (
    <Element name="Prices">
      <section id="Prices" className={classes.prices}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
          style={{ marginBottom: 50 }}
        >
          <Grid item xs={12} md={5} sm={12}>
            <Grid>
              <div className={classes.grid}>
                <Typography
                  variant="h3"
                  style={{ fontWeight: 650, lineHeight: 1.5 }}
                  gutterBottom
                >
                  <b>Você com um projeto completo </b>
                  <span className="green">em mãos!</span>
                </Typography>
              </div>
              <div>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        color: "textSecondary"
                      }}
                      primary="Você escolhe como quer a decoração"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        color: "textSecondary"
                      }}
                      primary="Escolhe o decorador que mais combina com seu gosto e projeto"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        color: "textSecondary"
                      }}
                      primary="Pode tirar dúvidas e dar sugestões ao arquiteto"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        color: "textSecondary"
                      }}
                      primary="Recebe as imagens realistas do seu ambiente decorado, a planta baixa e a lista de compras para tornar o seu projeto realidade"
                    />
                  </ListItem>
                </List>
              </div>
            </Grid>
          </Grid>
          <Hidden smDown>
            <Grid item md={7}>
              <Image src={kitchen} className="image" fluid />
            </Grid>
          </Hidden>
        </Grid>

        <Grid container justify="center" alignItems="center" spacing={4}>
          <Grid item xs={12} md={4}>
            <Card className="CardPrices">
              <CardContent>
                <Typography
                  variant="h4"
                  style={{ fontWeight: 700, marginBottom: "-3px" }}
                  gutterBottom
                  align="center"
                >
                  <span>Projeto de decoração para</span>
                </Typography>
                <Typography
                  variant="h4"
                  style={{
                    fontWeight: 700,
                    color: "#df5037",
                    marginBottom: 20
                  }}
                  align="center"
                >
                  1 ambiente
                </Typography>
                <Typography variant="subtitle2" align="center">
                  Por apenas
                </Typography>
                <Typography variant="subtitle1" align="center">
                  R$ <span className="label labelPrices">000,00</span>
                </Typography>
                <CardActions className="button-prices">
                  <Button className="red" variant="contained" disableElevation>
                    <span className="buttonPricesLabel">CONTRATAR PACOTE</span>
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card className="CardPrices">
              <Box className="boxEconomic">
                <span>+econômico!</span>
              </Box>
              <CardContent>
                <Typography
                  variant="h4"
                  style={{ fontWeight: 700, marginBottom: "-3px" }}
                  gutterBottom
                  align="center"
                >
                  <span>Projeto de decoração para</span>
                </Typography>
                <Typography
                  variant="h4"
                  style={{
                    fontWeight: 700,
                    lineHeight: 1.5,
                    color: "#00A290",
                    marginBottom: 10
                  }}
                  align="center"
                >
                  2 ambiente
                </Typography>
                <Typography variant="subtitle2" align="center">
                  Por apenas
                </Typography>
                <Typography variant="subtitle1" align="center">
                  R$ <span className="label labelPrices">000,00</span>
                </Typography>
                <Typography
                  variant="subtitle2"
                  align="center"
                  style={{ color: "#17B67E", fontWeight: 600 }}
                >
                  Economia de R$ xx,xx!
                </Typography>
                <CardActions className="button-prices">
                  <Button className="red" variant="contained" disableElevation>
                    <span className="buttonPricesLabel">CONTRATAR PACOTE</span>
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card className="CardPrices">
              <CardContent>
                <Typography
                  variant="h4"
                  style={{ fontWeight: 700, marginBottom: "-3px" }}
                  gutterBottom
                  align="center"
                >
                  <span>Projeto de decoração para</span>
                </Typography>
                <Typography
                  variant="h4"
                  style={{
                    fontWeight: 700,
                    lineHeight: 1.5,
                    color: "#125A7A",
                    marginBottom: 20
                  }}
                  align="center"
                >
                  3 ambiente
                </Typography>
                <Typography variant="subtitle2" align="center">
                  Por apenas
                </Typography>
                <Typography variant="subtitle1" align="center">
                  R$ <span className="label labelPrices">000,00</span>
                </Typography>
                <CardActions className="button-prices">
                  <Button className="red" variant="contained" disableElevation>
                    <span className="buttonPricesLabel">CONTRATAR PACOTE</span>
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </section>
    </Element>
  );
};

export default Prices;
