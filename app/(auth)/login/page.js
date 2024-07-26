"use client";
import React from "react";
import styles from "@/styles/form.module.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import InputControl from "../../components/servers/inputs";
import ButtonControl from "../../components/servers/buttons";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Formik } from "formik";
import LoginValidationSchema from "@/schema/loginSchema";
import { useGlobalContext } from "@/provider/useContext";
import Toast from "../../components/servers/toast";
import Cookies from "js-cookie";
import Template from "../../template";
import { ACCESS_KEY } from "@/utils/constants";
import { loginAuth } from "@/app/api/authRoutes";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@emotion/react";

export default function Login() {
  const { openToast, setOpenToast, toastType, setToastType } =
    useGlobalContext();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const router = useRouter();
  const handleLoginAuth = async (values) => {
    await loginAuth(values.email, values.password)
      .then((res) => {
        setOpenToast("Login Successfull");
        setToastType("success");
        Cookies.set(ACCESS_KEY, true);
        router.push("/");
      })
      .catch((error) => {
        setOpenToast(error?.code);
        setToastType("error");
      });
  };
  return (
    <Template>
      <CssBaseline />
      <Container maxWidth={matches ? "sm" : "xl"}>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginValidationSchema}
          onSubmit={(values) => {
            handleLoginAuth(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            dirty,
            isValid,
          }) => (
            <>
              <form onSubmit={handleSubmit}>
                <Box className={styles.container}>
                  <Box className={styles.innerBox}>
                    <Typography variant="h6" textAlign="center">
                      Login Page
                    </Typography>
                    <InputControl
                      id="email"
                      name="email"
                      label="Email"
                      placeholder="Enter your email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                    />
                    <InputControl
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                      placeholder="Enter your password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.password && Boolean(errors.password)}
                      helperText={touched.password && errors.password}
                    />

                    <ButtonControl
                      className={styles.btn}
                      btnType="loading-btn"
                      text="LOGIN"
                      type="submit"
                      loading={isSubmitting}
                      disabled={!(dirty && isValid)}
                    />
                    <Box className={styles.footer}>
                      <Typography variant="subtitle2" gutterBottom>
                        Create new account?
                      </Typography>
                      <Link className={styles.link} href={"/sign-up"}>
                        Sign up
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </form>
              <Toast
                openToast={openToast}
                setOpenToast={setOpenToast}
                toastType={toastType}
              />
            </>
          )}
        </Formik>
      </Container>
    </Template>
  );
}
