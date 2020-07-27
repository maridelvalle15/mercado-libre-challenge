import React from "react";
import Home from "./Home";
import renderer from "react-test-renderer";
import LightTheme from "@config/themes/light";
import { ThemeProvider } from "styled-components";

describe("Home", () => {
  test("should render", () => {
    const component = renderer.create(
      <ThemeProvider theme={LightTheme}>
        <Home />
      </ThemeProvider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
