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
import SignUpValidationSchema from "@/schema/signUpSchema";
import { updateProfile } from "firebase/auth";
import Toast from "../../components/servers/toast";
import { useGlobalContext } from "@/provider/useContext";
import Cookies from "js-cookie";
import Template from "../../template";
import { ACCESS_KEY } from "@/utils/constants";
import { googleSignIn, signUpAuth } from "@/app/api/authRoutes";

export default function SignUp() {
  const router = useRouter();
  const { openToast, setOpenToast, setToastType, toastType } =
    useGlobalContext();
  const handleSignUpAuth = async (values, actions) => {
    await signUpAuth(values.email, values.password)
      .then(async (res) => {
        setOpenToast("Register Successfull");
        setToastType("success");
        const user = res.user;
        await updateProfile(user, {
          displayName: values.username,
        });
        Cookies.set(ACCESS_KEY, true);
        router.replace("/");
        actions.setSubmitting(false);
        actions.resetForm();
      })
      .catch((error) => {
        setOpenToast(error.message);
        setToastType("error");
        actions.setSubmitting(false);
      });
  };

  const handleGoogleSignIn = async () => {
    await googleSignIn()
      .then(() => {
        setOpenToast("Login Successfull");
        setToastType("success");
        Cookies.set(ACCESS_KEY, true);
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
        setOpenToast(error?.code);
        setToastType("error");
      });
  };
  return (
    <Template>
      <CssBaseline />
      <Container maxWidth="sm">
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={SignUpValidationSchema}
          onSubmit={(values, actions) => {
            handleSignUpAuth(values, actions);
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
          }) => (
            <>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                className={styles.container}
              >
                <Box className={styles.innerBox}>
                  <Typography variant="h6" textAlign="center">
                    Sign Up
                  </Typography>
                  <InputControl
                    autoFocus
                    id="username"
                    name="username"
                    label="Username"
                    autoComplete="given-name"
                    placeholder="Enter your username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.username && Boolean(errors.username)}
                    helperText={touched.username && errors.username}
                  />
                  <InputControl
                    id="email"
                    name="email"
                    label="Email"
                    autoComplete="email"
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
                    autoComplete="new-password"
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
                    text="REGISTER"
                    type="submit"
                    loading={isSubmitting}
                    // disabled={
                    //   values.email === "" ||
                    //   values.password === "" ||
                    //   values.username === ""
                    // }
                  />
                  <Box className={styles.footer}>
                    <Typography variant="subtitle2" gutterBottom>
                      Already have an account?
                    </Typography>
                    <Link className={styles.link} href={"/login"}>
                      Login
                    </Link>
                  </Box>
                  <Box textAlign="center">
                    <button
                      type="button"
                      onClick={handleGoogleSignIn}
                      className="login-with-google-btn"
                    >
                      Sign in with Google
                    </button>
                  </Box>
                </Box>
              </Box>
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
