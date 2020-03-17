import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Index from "./sections/Index";
import About from "./sections/About";
import HowTo from "./sections/Howto";
import Prices from "./sections/Prices";
import Cases from "./sections/Cases";
import Clients from "./sections/Clients";
import FAQ from "./sections/FAQ";
import { ConstantsDispatch } from "../../store/reducers/constants/types";

const Home: React.FC = () => {
  const dispatch = useDispatch<ConstantsDispatch>();
  useEffect(() => {
    dispatch({
      type: "CHANGE_FOOTER",
      payload: true
    });
    dispatch({
      type: "CHANGE_NAVBAR",
      payload: "DEFAULT"
    });
  }, []);
  return (
    <>
      <Index />
      <div style={{ backgroundColor: "white" }}>
        <About />
        <HowTo />
      </div>
      <Prices />
      <div style={{ backgroundColor: "white" }}>
        <Cases />
        <Clients />
      </div>
      <FAQ />
    </>
  );
};

export default Home;
