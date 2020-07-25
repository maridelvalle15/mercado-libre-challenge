import React from "react";
import themes from "@config/themes";
import ResetStyles from "@config/themes/core/reset";
import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";

function withGlobalStyles(storyFn) {
  return (
    <>
      <ResetStyles />
      {storyFn()}
    </>
  );
}

addDecorator(withGlobalStyles);
addDecorator(withThemesProvider(themes));
