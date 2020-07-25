import React from "react";

import Breadcrumb from "@components/Breadcrumb/Breadcrumb";

export default {
  title: "Global/Breadcrumb",
  component: Breadcrumb
};

export const Default = () => (
  <Breadcrumb categories={["Video juegos", "Nintendo", "Nintendo switch"]} />
);
