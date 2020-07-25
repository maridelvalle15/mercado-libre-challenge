import React from "react";
import themes from "@config/themes";
import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";

function withGlobalStyles(storyFn) {
  return <>{storyFn()}</>;
}

addDecorator(withGlobalStyles);
addDecorator(withThemesProvider(themes));
