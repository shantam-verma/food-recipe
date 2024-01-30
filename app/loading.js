import React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loading() {
  return (
    <Box className="loader">
      <CircularProgress/>
      <h1>Loading...</h1>
    </Box>
  );
}
