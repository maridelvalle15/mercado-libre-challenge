import React from "react";
import ProductList from "./ProductList";
import renderer from "react-test-renderer";
import LightTheme from "@config/themes/light";
import { ThemeProvider } from "styled-components";

describe("ProductList", () => {
  test("should render", () => {
    const component = renderer.create(
      <ThemeProvider theme={LightTheme}>
        <ProductList />
      </ThemeProvider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
