import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Root from "Root";
import App from "./components/App";

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route render={() => <div>Not Found</div>} />
      </Switch>
    </BrowserRouter>
  </Root>,
  document.getElementById("root")
);
