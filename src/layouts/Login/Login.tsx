import { FormControlLabel, Grid, Radio, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./style.css"
import AllLogin from "../../images/AllLogin.png"
import { useFormik } from "formik"
import * as Yup from "yup"

const useStyles = makeStyles({
  styleGrid: {
    background: "#2DA55F",
    width: "50%",
    height: "975px",
  },
  styleGridImg: {
    display: "block",
    margin: "auto",
    marginTop: "30px"
  },
  loginForm: {
    width: "540px"
  }
})

const Login = () => {
  const classes = useStyles()

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
          <img className={classes.styleGridImg} src={AllLogin} alt="" />
        </Grid>
        <Grid>
          <h1>Boshqaruv paneli</h1>
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
          {/* <FormControlLabel value="remember" control={<Radio />} /> */}
        </Grid>
      </Grid>
    </>
  );
};

export default Login;