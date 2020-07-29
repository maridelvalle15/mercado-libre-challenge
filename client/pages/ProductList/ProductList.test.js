import React from "react";
import App from "@config/app";
import ProductList from "./ProductList";
import renderer from "react-test-renderer";
import LightTheme from "@config/themes/light";

import { ThemeProvider } from "styled-components";

describe("ProductList", () => {
  test("should render", () => {
    App.boot();
    const component = renderer.create(
      <ThemeProvider theme={LightTheme}>
        <ProductList />
      </ThemeProvider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
