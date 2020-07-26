import React from "react";

import Button from "@components/Button/Button";

export default {
  title: "Global/Button",
  component: Button
};

export const Default = () => (
  <Button color="secondary" onClick={() => console.log("asd")}>
    Button component
  </Button>
);
