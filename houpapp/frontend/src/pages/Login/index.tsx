import React, { useEffect } from "react";
import {
  Container,
  Typography,
  FormControl,
  Button,
  Input,
  InputLabel,
  Paper,
  InputAdornment,
  TextField,
  Grid,
  Box,
  Hidden
} from "@material-ui/core";
import Image from "react-bootstrap/Image";
import Password from "@material-ui/icons/LockOutlined";
import Email from "@material-ui/icons/EmailOutlined";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ConstantsDispatch } from "../../store/reducers/constants/types";

import bed from "../../img/kitchen.png";

import "./index.scss";

const Login: React.FC = () => {
  const dispatch = useDispatch<ConstantsDispatch>();
  useEffect(() => {
    dispatch({
      type: "CHANGE_FOOTER",
      payload: false
    });
    dispatch({
      type: "CHANGE_NAVBAR",
      payload: "SIGN"
    });
  }, []);
  return (
    <Container>
      <Grid
        container
        sm={12}
        md={5}
        justify="center"
        alignItems="center"
        className="Login"
        style={{ borderRadius: 10 }}
      >
        <Box>
          <Grid item>
            <Typography
              variant="h3"
              style={{ color: "#00a290", marginBottom: 40, fontWeight: 700 }}
              className="title"
              gutterBottom
            >
              Faça o seu login na Ho-Up!
            </Typography>
          </Grid>
          <Grid item>
            <FormControl>
              <TextField
                id="email"
                label="Digite seu e-mail"
                variant="outlined"
                className="login-input"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email style={{ color: "#B2B2B2" }} />
                    </InputAdornment>
                  )
                }}
              />
              <TextField
                id="password"
                label="Digite sua senha"
                variant="outlined"
                className="login-input"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Password style={{ color: "#B2B2B2" }} />
                    </InputAdornment>
                  )
                }}
              />
            </FormControl>
          </Grid>
          <Grid item>
            <Link to="">
              <Typography
                variant="caption"
                style={{
                  color: "blue",
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: 10,
                  marginBottom: 20
                }}
                gutterBottom
              >
                Esqueci minha senha!
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link to="">
              <Button
                className="login-button"
                variant="contained"
                disableElevation
              >
                Entrar
              </Button>
            </Link>
          </Grid>
          <Grid item style={{ marginTop: 30 }}>
            <Typography
              variant="subtitle1"
              style={{ color: "gray" }}
              gutterBottom
            >
              Ainda não tem uma conta?
            </Typography>
            <a href="">Crie uma conta</a>
          </Grid>
        </Box>
      </Grid>
      <Hidden smDown>
        <Grid container md={5}>
          <Grid item>
            <Image src={bed} fluid alt="bed" />
          </Grid>
        </Grid>
      </Hidden>
    </Container>
  );
};

export default Login;
