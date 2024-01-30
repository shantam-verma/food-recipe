import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import logo from "@/public/logo.png";
export default function PublicHeader() {
  return (
    <React.Fragment>
      <AppBar className="white-bg">
        <Toolbar>
          <Image src={logo} alt=" Tasty Recipes logo" width={30} height={30} />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
