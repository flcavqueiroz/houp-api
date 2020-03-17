// import React from "react";
// import {
//   Typography,
//   makeStyles,
//   createStyles,
//   createMuiTheme,
//   Theme,
//   Button,
//   Container,
//   Grid,
//   Hidden
// } from "@material-ui/core";
// import Image from "react-bootstrap/Image";
// import { Link as SmoothLink } from "react-scroll";
// import { Element } from "react-scroll";

// import image from "../../../../img/faq.png";
// import "./index.scss";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     faq: {
//       alignItems: "center",
//       marginTop: 80,
//       marginBottom: 80,
//       [theme.breakpoints.up("lg")]: {
//         marginLeft: 200,
//         marginRight: 200
//       },
//       [theme.breakpoints.up("md")]: {
//         marginLeft: 100,
//         marginRight: 100
//       },
//       [theme.breakpoints.down("sm")]: {
//         justifyContent: "center",
//         align: "center",
//         marginLeft: 30,
//         marginRight: 20
//       }
//     },
//     grid: {
//       [theme.breakpoints.down("sm")]: {
//         fontSize: "1.5rem",
//         textAlign: "center !important"
//       }
//     }
//   })
// );

// const smile = ":)";

// const FAQ: React.FC = () => {
//   const classes = useStyles();
//   const faq = image;

//   return (
//       <Element name="FAQ">
//         <section id="FAQ" className={classes.faq}>
//           <Grid
//             container
//             direction="row-reverse"
//             className="sectionsImage"
//             alignItems="center"
//             spacing={4}
//           >
//             <Grid item md={5} lg={6}>
//               <Image src={faq} className="image" fluid />
//             </Grid>
//             <Grid item md={5} sm={12}>
//               <Grid>
//                 <div className={classes.grid}>
//                   <Typography
//                     variant="h3"
//                     style={{ fontWeight: 650, lineHeight: 1.5 }}
//                     gutterBottom
//                   >
//                     <b>Tem alguma dúvida?</b>
//                     <br />
//                     <span className="green">
//                       Acesse a nossa sessão de perguntas e respostas.
//                     </span>
//                 </Typography>
//                 </div>
//                 <div className="button-faq">
//                   <Button className="red" variant="contained" disableElevation>
//                     ACESSAR FAQ
//                   </Button>
//                 </div>
//               </Grid>
//             </Grid>
//           </Grid>
//         </section>
//       </Element>
//   );
// };

// export default FAQ;

import React from "react";
import {
  Typography,
  makeStyles,
  createStyles,
  Theme,
  Button,
  Grid
} from "@material-ui/core";
import Image from "react-bootstrap/Image";
import { Element } from "react-scroll";

import faq from "../../../../img/faq.png";
import "./index.scss";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    faq: {
      alignItems: "center",
      marginTop: 80,
      marginBottom: 80,
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
        align: "center",
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

const FAQ: React.FC = () => {
  const classes = useStyles();

  return (
    <Element name="FAQ">
      <section id="FAQ" className={classes.faq}>
        <Grid
          container
          direction="row-reverse"
          className="sectionsImage"
          alignItems="center"
          spacing={4}
        >
          <Grid item md={7} lg={6}>
            <Image src={faq} className="image" fluid />
          </Grid>
          <Grid item md={5} sm={12}>
            <Grid>
              <div className={classes.grid}>
                <Typography
                  variant="h3"
                  style={{ fontWeight: 650, lineHeight: 1.5 }}
                  gutterBottom
                >
                  <b>Tem alguma dúvida?</b>
                  <br />
                  <span className="green">
                    Acesse a nossa sessão de perguntas e respostas.
                  </span>
                </Typography>
              </div>
              <div className="button-faq">
                <Button className="red" variant="contained" disableElevation>
                  ACESSAR FAQ
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </section>
    </Element>
  );
};

export default FAQ;
