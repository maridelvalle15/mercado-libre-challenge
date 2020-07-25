import React from "react";

import Typography from "@components/Typography/Typography";
import Container from "@components/Container/Container";
import Logo from "@assets/images/logo.png";

export default {
  title: "Global/Container",
  component: Container
};

export const Default = () => (
  <Container>
    <Typography style={{ margin: "0 auto" }} type="h3">
      1200px
    </Typography>
  </Container>
);
