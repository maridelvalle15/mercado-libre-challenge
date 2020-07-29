import React, { useState, useEffect } from "react";
import LightTheme from "@config/themes/light";
import DarkTheme from "@config/themes/dark";

import ResetStyles from "@config/themes/core/reset";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "@config/app";
import Home from "@pages/Home/Home";
import Footer from "@components/Footer/Footer";
import ProductList from "@pages/ProductList/ProductList";
import ProductDetail from "@pages/ProductDetail/ProductDetail";

const RootComponent = () => {
  const [isReady, setIsReady] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(LightTheme);

  useEffect(() => {
    App.boot().then(() => {
      setIsReady(true);
    });
  }, []);

  const toggleTheme = () => {
    selectedTheme == LightTheme
      ? setSelectedTheme(DarkTheme)
      : setSelectedTheme(LightTheme);
  };

  if (isReady) {
    return (
      <ThemeProvider theme={selectedTheme}>
        <ResetStyles />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/items" component={ProductList} />
            <Route exact path="/items/:id" component={ProductDetail} />
          </Switch>
        </Router>
        <Footer copy="Jonathan Buitrago - Bogotá D.C" onClick={toggleTheme} />
      </ThemeProvider>
    );
  }
  return <></>;
};

export default RootComponent;
