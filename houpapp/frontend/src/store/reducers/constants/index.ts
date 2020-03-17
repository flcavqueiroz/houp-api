import { Reducer } from "redux";
import { ConstantsState, ConstantsTypes } from "./types";

const INITIAL_STATE: ConstantsState = {
  footer: true,
  navbar: "DEFAULT"
};

const constantsReducer: Reducer<ConstantsState, ConstantsTypes> = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case "CHANGE_FOOTER":
      return {
        ...state,
        footer: typeof payload === "boolean" ? payload : state.footer
      };
    case "CHANGE_NAVBAR":
      return {
        ...state,
        navbar: typeof payload === "string" ? payload : state.navbar
      };
    default:
      return state;
  }
};

export default constantsReducer;
