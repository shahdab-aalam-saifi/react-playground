import React from "react";
import Main from "../Main";
import MenuAppBar from "../Common";
import CssBaseline from "@material-ui/core/CssBaseline";

export const App = () => {
  return (
    <>
      <CssBaseline />
      <MenuAppBar />
      <Main />
    </>
  );
};
