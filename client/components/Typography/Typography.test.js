import React from "react";
import Typography from "./Typography";
import { mount } from "enzyme";

import renderer from "react-test-renderer";
import LightTheme from "@config/themes/light";
import { ThemeProvider } from "styled-components";

describe("Typography", () => {
  test("should render h1 tag", () => {
    const component = renderer.create(
      <ThemeProvider theme={LightTheme}>
        <Typography type="h1">Example of Typography component</Typography>
      </ThemeProvider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("should render p tag", () => {
    const component = renderer.create(
      <ThemeProvider theme={LightTheme}>
        <Typography type="paragraph">
          Example of Typography component
        </Typography>
      </ThemeProvider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
