import React from "react";
import { Typography } from "@material-ui/core";

export const ErrorModal = ({ errMsg }) => {
  return (
    <Typography variant="h5" component="h2" center="true">
      {errMsg}
    </Typography>
  );
};
