import React from "react";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import cTheme from "./constants/theme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { HOME, LOGIN } from "./constants/routes";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { AppState } from "./store";
import { ConstantsState } from "./store/reducers/constants/types";
import ReactGA from "react-ga";

ReactGA.initialize("UA-000000-01");
ReactGA.pageview(window.location.pathname + window.location.search);

const App: React.FC = () => {
  const { navbar, footer } = useSelector<AppState, ConstantsState>(
    store => store.constants
  );
  return (
    <MuiThemeProvider theme={cTheme}>
      <Router basename={process.env.PUBLIC_URL}>
        <CssBaseline />
        <Navbar which={navbar} />
        <Switch>
          <Route component={Home} exact path={HOME} />
          <Route component={Login} exact path={LOGIN} />
        </Switch>
        <Footer enabled={footer} />
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
