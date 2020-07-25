import React, { useState, useEffect } from "react";
import LightTheme from "@config/themes/light";
import { ThemeProvider } from "styled-components";
import ResetStyles from "@config/themes/core/reset";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "@config/app";
import Home from "@pages/Home/Home";
import ProductList from "@pages/ProductList/ProductList";
import ProductDetail from "@pages/ProductDetail/ProductDetail";

const RootComponent = () => {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    App.boot().then(() => {
      console.log(App.api);
      setIsReady(true);
    });
  }, []);
  if (isReady) {
    return (
      <ThemeProvider theme={LightTheme}>
        <ResetStyles />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/items" component={ProductList} />
            <Route exact path="/items/:id" component={ProductDetail} />
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
  return <></>;
};

export default RootComponent;
