import React from "react";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import PropTypes from "prop-types";

const Outlined = ({ text, ...rest }) => (
  <Button variant="outlined" {...rest}>
    {text}
  </Button>
);
const Contained = ({ text, ...rest }) => (
  <Button variant="contained" {...rest}>
    {text}
  </Button>
);
const LoadingBtn = ({ text, ...rest }) => (
  <LoadingButton
    size="small"
    loadingIndicator="Loading…"
    variant="contained"
    {...rest}
  >
    {text}
  </LoadingButton>
);

export default function ButtonControl({ btnType, text, ...rest }) {
  let ButtonComponent;
  if (btnType === "outlined") {
    ButtonComponent = Outlined;
  } else if (btnType === "contained") {
    ButtonComponent = Contained;
  } else if (btnType === "loading-btn") {
    ButtonComponent = LoadingBtn;
  } else {
    return null; // Handle the case where btnType does not match any known type
  }

  return <ButtonComponent text={text} {...rest} />;
}

Outlined.prototype = {
  text: PropTypes.string.isRequired,
};
Contained.prototype = {
  text: PropTypes.string.isRequired,
};
LoadingBtn.prototype = {
  text: PropTypes.string.isRequired,
};
ButtonControl.prototype = {
  text: PropTypes.string.isRequired,
  btnType: PropTypes.string.isRequired,
};
