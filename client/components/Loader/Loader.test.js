import React from "react";
import Loader from "./Loader";

import renderer from "react-test-renderer";
import LightTheme from "@config/themes/light";
import { ThemeProvider } from "styled-components";

describe("Loader", () => {
  test("should render", () => {
    const component = renderer.create(
      <ThemeProvider theme={LightTheme}>
        <Loader color="secondary" />{" "}
      </ThemeProvider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
