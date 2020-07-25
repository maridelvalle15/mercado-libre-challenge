import React from "react";

import SearchBar from "@components/SearchBar/SearchBar";
import Logo from "@assets/images/logo.png";

export default {
  title: "Custom/SearchBar",
  component: SearchBar
};

export const Default = () => (
  <SearchBar
    logo={Logo}
    placeholder="Nunca dejes de buscar"
    onSearch={value => console.log(value)}
  />
);
