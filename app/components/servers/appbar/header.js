import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import ButtonControl from "../buttons";
import { useRouter } from "next/navigation";
import { auth } from "@/config/firebase";
import DrawerComponent from "./drawer";
import { useGlobalContext } from "@/provider/useContext";
import Image from "next/image";
import logo from "@/public/logo.png";
import { logout } from "@/app/api/authRoutes";

export default function Header() {
  const { setActiveFab } = useGlobalContext();
  const [isAuthenticated, setIsAuthenticated] = useState("");
  const route = useRouter();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  const handleLogout = async () => {
    await logout();
    route.push("/login");
    setActiveFab("");
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(user?.displayName);
      } else {
        setIsAuthenticated("");
      }
    });
  }, []);
  return (
    <AppBar className="white-bg">
      <Toolbar>
        <Image src={logo} alt=" Tasty Recipes logo" width={30} height={30} />
        <Typography
          variant="h6"
          component="p"
          onClick={() => {
            setActiveFab("");
            route.push("/");
          }}
        >
          &nbsp; Tasty Recipes
        </Typography>
        {isMatch ? (
          <DrawerComponent
            handleLogout={handleLogout}
            username={isAuthenticated}
          />
        ) : (
          <Box className="sidebar">
            <Typography variant="h6" component="p">
              Welcome | {isAuthenticated}
            </Typography>
            <ButtonControl
              btnType="loading-btn"
              text="LOGOUT"
              onClick={handleLogout}
            />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
