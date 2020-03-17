import React from "react";
import NavDefault from "./NavDefault";
import NavSign from "./NavSign";

interface Props {
  which: "DEFAULT" | "SIGN";
}

const Navbar: React.FC<Props> = ({ which }) => {
  switch (which) {
    case "DEFAULT":
      return <NavDefault />;
    case "SIGN":
      return <NavSign />;
    default:
      return null;
  }
};

export default Navbar;
