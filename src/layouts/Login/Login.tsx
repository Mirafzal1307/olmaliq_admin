import React from "react";
import { Grid, Radio, TextField } from "@mui/material";
import "./style.css"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginStyle } from "../theme/LoginPage";

const Login = () => {
  const [selectedValue, setSelectedValue] = useState("a");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  const handleLogin = (email: string, password: string) => {
    console.log(email, password);
  }

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .typeError("Bunday ma'mur ro'yxatda yo'q")
        .required("Email address is required"),
      password: Yup.string()
        .min(8, "Password must be more than 8 symbols")
        .required("Password is required"),
    }),
    onSubmit: (values) => handleLogin(values.login, values.password),
  });

  return (
    <>
      <Grid sx={LoginStyle.loginPageMainGrid}>
        <Grid sx={LoginStyle.styleGrid}>
          <img
            style={LoginStyle.styleGridImg}
            src={require("../../Img/AllLogin.png")}
            alt=""
          />
        </Grid>
        <Grid sx={LoginStyle.loginChildGrid}>
          <h1 style={LoginStyle.mainText}>Boshqaruv paneli</h1>
          <TextField
            margin="normal"
            variant="outlined"
            required
            name="login"
            label="Ma'mur"
            type="string"
            id="login"
            sx={LoginStyle.loginForm}
            value={formik.values.login}
            onChange={formik.handleChange}
            error={formik.touched.login && Boolean(formik.errors.login)}
            helperText={formik.touched.login && formik.errors.login}
          />
          <TextField
            margin="normal"
            variant="outlined"
            required
            name="password"
            label="Parolni kiriting"
            type="password"
            id="password"
            sx={LoginStyle.loginForm}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Grid
            sx={LoginStyle.radioGrid}
          >
            <Radio {...controlProps("c")} color="success" />
            <p style={LoginStyle.rememberText}>Eslab qolinsinmi?</p>
          </Grid>
          <Link to="/dashboard">
            <button style={LoginStyle.loginButton}>Kirish</button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;