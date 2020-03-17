interface State {
  footer: boolean;
  navbar: "DEFAULT" | "SIGN";
}

export type SetState = React.Dispatch<React.SetStateAction<State>>;
