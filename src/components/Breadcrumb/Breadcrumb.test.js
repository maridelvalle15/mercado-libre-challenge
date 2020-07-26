import React from "react";
import Breadcrumb from "./Breadcrumb";
import renderer from "react-test-renderer";
import LightTheme from "@config/themes/light";
import { ThemeProvider } from "styled-components";

describe("Breadcrumb", () => {
  test("should render", () => {
    const component = renderer.create(
      <ThemeProvider theme={LightTheme}>
        <Breadcrumb
          categories={["Video juegos", "Nintendo", "Nintendo switch"]}
        />
      </ThemeProvider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
