import React from "react";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import { Container, Typography } from "@material-ui/core";

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth={"md"}>
          <Typography variant={"h6"}>Shopping List</Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
