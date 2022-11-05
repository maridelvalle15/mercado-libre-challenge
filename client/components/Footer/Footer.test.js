import React from "react";
import Footer from "./Footer";

import renderer from "react-test-renderer";
import LightTheme from "@config/themes/light";
import { ThemeProvider } from "styled-components";

describe("Footer", () => {
  test("should render", () => {
    const component = renderer.create(
      <ThemeProvider theme={LightTheme}>
        <Footer copy="Texto de prueba" onClick={() => console.log("cambio")} />
      </ThemeProvider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
