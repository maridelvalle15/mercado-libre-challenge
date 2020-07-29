import React from "react";

import Footer from "@components/Footer/Footer";

export default {
  title: "Global/Footer",
  component: Footer
};

export const Default = () => (
  <Footer copy="Texto de prueba" onClick={() => console.log("cambio")} />
);
