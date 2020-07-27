import React from "react";
import SearchBar from "./SearchBar";
import { mount } from "enzyme";

import renderer from "react-test-renderer";
import LightTheme from "@config/themes/light";
import { ThemeProvider } from "styled-components";

describe("SearchBar", () => {
  test("should render", () => {
    const component = renderer.create(
      <ThemeProvider theme={LightTheme}>
        <SearchBar
          logo={"potato.png"}
          placeholder="Nunca dejes de buscar"
          onSearch={value => console.log(value)}
        />
      </ThemeProvider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("should call onClick event", () => {
    const spy = jest.fn();
    const wrapper = mount(
      <ThemeProvider theme={LightTheme}>
        <SearchBar
          logo={"potato.png"}
          placeholder="Nunca dejes de buscar"
          onSearch={value => spy(value)}
        />
      </ThemeProvider>
    );

    const input = wrapper.find("input");
    input.simulate("change", { target: { value: "potato" } });
    input.simulate("keyPress", {
      which: 13
    });
    expect(spy).toHaveBeenCalled();
  });
});
