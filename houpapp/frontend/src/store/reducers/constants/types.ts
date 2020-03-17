import { AnyAction, Dispatch } from "redux";

type Types = "CHANGE_FOOTER" | "CHANGE_NAVBAR";
export type Which = "DEFAULT" | "SIGN";

export interface ConstantsTypes extends AnyAction {
  type: Types;
  payload: boolean | Which;
}

export type ConstantsDispatch = Dispatch<ConstantsTypes>;

export interface ConstantsState {
  footer: boolean;
  navbar: Which;
}
