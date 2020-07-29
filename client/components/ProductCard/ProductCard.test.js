import React from "react";
import ProductCard from "./ProductCard";
import { mount } from "enzyme";

import renderer from "react-test-renderer";
import LightTheme from "@config/themes/light";
import { ThemeProvider } from "styled-components";

describe("ProductCard", () => {
  test("should render with freeShipping", () => {
    const component = renderer.create(
      <ThemeProvider theme={LightTheme}>
        <ProductCard
          id="123"
          image="https://picsum.photos/id/180/180/180"
          price={1980}
          title="Macbook pro retina 2020 casi nuevo completo unico fabuloso!"
          location="Mendoza"
          freeShipping={true}
          onClick={id => console.log(id)}
        />
      </ThemeProvider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("should render without freeShipping", () => {
    const component = renderer.create(
      <ThemeProvider theme={LightTheme}>
        <ProductCard
          id="1223"
          image="https://picsum.photos/id/180/180/180"
          price={1980}
          title="Macbook pro retina 2020 casi nuevo completo unico fabuloso!"
          location="Mendoza"
          freeShipping={false}
          onClick={id => console.log(id)}
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
        <ProductCard
          id="1f23"
          image="https://picsum.photos/id/180/180/180"
          price={1980}
          title="Macbook pro retina 2020 casi nuevo completo unico fabuloso!"
          location="Mendoza"
          freeShipping={false}
          onClick={id => spy(id)}
        />
      </ThemeProvider>
    );
    wrapper
      .find("div")
      .first()
      .simulate("click");
    expect(spy).toHaveBeenCalled();
  });
});
