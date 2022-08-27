import { Grid, Radio, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./style.css"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useState } from "react";

const useStyles = makeStyles({
  styleGrid: {
    background: "#2DA55F",
    width: "50%",
    height: "975px",
  },
  styleGridImg: {
    display: "block",
    margin: "auto",
    marginTop: "30px",
  },
  loginForm: {
    width: "540px",
  },
  mainText: {
    color: "#2DA55F",
    fontFamily: "Montserrat !important",
    fontSize: "43px",
    fontWeight: "700"
  },
  rememberText: {
    fontFamily: "Montserrat",
    fontSize: "14px",
    fontWeight: "400",
    color: "#444444",
  },
  loginButton: {
    color: "white",
    background: "#2DA55F",
    border: "1px solid #2DA55F",
    borderRadius: "5px",
    padding: "11px 250px",
    fontFamily: "Montserrat",
    fontSize: "14px",
    fontWeight: "600",
  },
});

const Login = () => {
  const classes = useStyles()

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
      <Grid sx={{ display: "flex", margin: "0" }}>
        <Grid className={classes.styleGrid}>
          <img className={classes.styleGridImg} src={require("../../Img/AllLogin.png")} alt="" />
        </Grid>
        <Grid sx={{ textAlign: "center", margin: "auto" }}>
          <h1 className={classes.mainText}>Boshqaruv paneli</h1>
          <TextField
            margin="normal"
            variant="outlined"
            required
            name="login"
            label="Ma'mur"
            type="string"
            id="login"
            className={classes.loginForm}
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
            className={classes.loginForm}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Grid sx={{ display: "flex", alignItems: "center", marginLeft: "22%" }}>
            <Radio {...controlProps("c")} color="success" />
            <p className={classes.rememberText}>Eslab qolinsinmi?</p>
          </Grid>
          <button
            className={classes.loginButton}
          >Kirish</button>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;