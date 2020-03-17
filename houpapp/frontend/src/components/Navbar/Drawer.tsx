import React from "react";
import { Link as SmoothLink } from "react-scroll";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  Divider
} from "@material-ui/core";

const useStyles = makeStyles({
  fullList: {
    width: "auto",
    height: "calc(100vh - 110px)"
  },
  drawer: {},
  overlay: {
    backgroundColor: "transparent"
  }
});

interface Props {
  open: boolean;
  toggleDrawer: (
    bool: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const SwipeableTemporaryDrawer: React.FC<Props> = ({ toggleDrawer, open }) => {
  const classes = useStyles();
  const fullList = () => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <SmoothLink
          activeClass="section-active"
          to="index"
          spy
          smooth
          duration={500}
          offset={-150}
        >
          <ListItem button>
            <ListItemText primary="A HO UP" />
          </ListItem>
        </SmoothLink>
        <SmoothLink
          activeClass="section-active"
          to="HowTo"
          spy
          smooth
          duration={500}
          offset={-150}
        >
          <ListItem button>
            <ListItemText primary="COMO FUNCIONA" />
          </ListItem>
        </SmoothLink>
        <SmoothLink
          activeClass="section-active"
          to="Prices"
          spy
          smooth
          duration={500}
          offset={-150}
        >
          <ListItem button>
            <ListItemText primary="PREÇOS" />
          </ListItem>
        </SmoothLink>
        <SmoothLink
          activeClass="section-active"
          to="Cases"
          spy
          smooth
          duration={500}
          offset={-150}
        >
          <ListItem button>
            <ListItemText primary="CASES" />
          </ListItem>
        </SmoothLink>
        <SmoothLink
          activeClass="section-active"
          to="FAQ"
          spy
          smooth
          duration={500}
          offset={-150}
        >
          <ListItem button>
            <ListItemText primary="FAQ" />
          </ListItem>
        </SmoothLink>
        <br />
        <Divider />
        <br />
        <ListItem button>
          <ListItemText primary="SEJA UM DECORADOR HO UP" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="LOGIN" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      classes={{
        modal: classes.overlay
      }}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      {fullList()}
    </SwipeableDrawer>
  );
};

export default SwipeableTemporaryDrawer;
