import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import StorePicker from "./StorePicker";
import App from "./App";
import NotFound from "./NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/*index route takes an "exact path"*/}
        <Route exact path="/" component={StorePicker} />
        {/*other routes take a path*/}
        <Route path="/store/:id" component={App} />
        {/*a catch-all route takes no paths*/}
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;