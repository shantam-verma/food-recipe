"use client";
import React, { useEffect, useState } from "react";
import Header from "./components/servers/appbar/header";
import { Container, Toolbar } from "@mui/material";
import Cookies from "js-cookie";
import PublicHeader from "./components/servers/appbar/publicHeader";
import { ACCESS_KEY } from "@/utils/constants";
import SearchInput from "./components/servers/search";
import Category from "./components/servers/category";
import PropTypes from "prop-types";

export default function Template({ children }) {
  const [template, setTemplate] = useState(Cookies.get(ACCESS_KEY));

  const AuthLayout = () => (
    <>
      <Header />
      <Toolbar />
      <SearchInput />
      <Category />
      <Container maxWidth="xxl">{children}</Container>
    </>
  );

  const PublicLayout = () => (
    <>
      <PublicHeader />
      <Toolbar />
      <Container maxWidth="xxl">{children}</Container>
    </>
  );
  useEffect(() => {
    const isLoggedIn = Cookies.get(ACCESS_KEY);
    setTemplate(isLoggedIn);
  }, []);

  return template ? <AuthLayout /> : <PublicLayout />;
}
Template.propTypes = {
  children: PropTypes.node,
};
