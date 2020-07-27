import React from "react";
import Button from "./Button";
import { mount } from "enzyme";

import renderer from "react-test-renderer";
import LightTheme from "@config/themes/light";
import { ThemeProvider } from "styled-components";

describe("Button", () => {
  test("should render", () => {
    const component = renderer.create(
      <ThemeProvider theme={LightTheme}>
        <Button color="secondary" onClick={() => console.log("asd")}>
          Button
        </Button>
      </ThemeProvider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("should call onClick event", () => {
    const spy = jest.fn();
    const wrapper = mount(
      <ThemeProvider theme={LightTheme}>
        <Button color="secondary" onClick={spy}>
          Button
        </Button>
      </ThemeProvider>
    );
    wrapper.find("button").simulate("click");
    expect(spy).toHaveBeenCalled();
  });
});
