import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#fff"
    },
    secondary: {
      main: "#00A290"
    },
    text: {
      primary: "#000000",
      secondary: "#929299"
    }
  },
  typography: {
    fontFamily: "Open Sans",
    h3: {
      fontSize: "1.7rem",
      "@media  screen and (min-width: 768px)": {
        fontSize: "1.78rem"
      },
      "@media only screen and (min-width: 1281px)": {
        fontSize: "2.7rem"
      }
    },
    h4: {
      fontSize: "1.17rem",
      "@media only screen and (min-width: 1281px)": {
        fontSize: "2rem"
      }
    },
    h5: {
      fontSize: "0.9rem",
      "@media  screen and (min-width: 768px)": {
        fontSize: "1rem"
      },
      "@media only screen and (min-width: 1281px)": {
        fontSize: "2rem"
      }
    },
    h6: {
      fontSize: "0.9rem",
      "@media  screen and (min-width: 768px)": {
        fontSize: "1.1rem"
      },
      "@media only screen and (min-width: 1281px)": {
        fontSize: "1.5rem"
      }
    },
    subtitle1: {
      fontSize: "0.7rem",
      "@media  screen and (min-width: 768px)": {
        fontSize: "0.9rem"
      },
      "@media only screen and (min-width: 1281px)": {
        fontSize: "1.1rem"
      }
    },
    subtitle2: {
      fontSize: "0.5rem",
      "@media  screen and (min-width: 768px)": {
        fontSize: "0.7rem"
      },
      "@media only screen and (min-width: 1281px)": {
        fontSize: "0.9rem"
      }
    }
  },
  overrides: {
    MuiToolbar: {
      root: {
        margin: 20,
        marginLeft: 76,
        marginRight: 76,
        justifyContent: "space-between"
      }
    },
    MuiExpansionPanel: {
      root: {
        marginBottom: 10,
        width: "100%",
        paddingTop: 4,
        paddingBottom: 4,
        maxWidth: 690,
        border: "none",
        boxShadow: "0 0 8px rgba(0, 0, 0, 0.16)",
        "&:before": {
          display: "none"
        }
      },
      rounded: {
        borderRadius: 5,
        border: "none"
      }
    },
    MuiButton: {
      root: {
        padding: "12px 35px"
      },
      contained: {
        borderRadius: 50,
        padding: "10px 0"
      },
      outlined: {
        borderRadius: 50
      },
      label: {
        fontWeight: 500
      }
    }
  }
});

export default theme;
