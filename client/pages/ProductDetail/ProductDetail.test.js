import React from "react";
import App from "@config/app";
import ProductDetail from "./ProductDetail";
import renderer from "react-test-renderer";
import LightTheme from "@config/themes/light";
import { ThemeProvider } from "styled-components";

describe("ProductDetail", () => {
  test("should render", () => {
    App.boot();
    const component = renderer.create(
      <ThemeProvider theme={LightTheme}>
        <ProductDetail />
      </ThemeProvider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
