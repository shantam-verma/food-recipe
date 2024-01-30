import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
export default function InputControl({ label, placeholder, ...rest }) {
  return (
    <Box className="formChild">
      <Typography variant="subtitle1">{label}</Typography>
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        placeholder={placeholder}
        {...rest}
        
      />
    </Box>
  );
}
