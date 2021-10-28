import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AppBarComponent from "./AppBarComponent";
import Bantuan from "./Bantuan";
import Daftar from "./Daftar";
import Diagnosa from "./Diagnosa";
import Informasi from "./Informasi";

const RouterConfig = () => {
  return (
    <div>
      <BrowserRouter>
        <AppBarComponent />
        <Switch>
          <Route exact path="/" component={Informasi} />
          <Route path="/diagnosa" component={Diagnosa} />
          <Route path="/Bantuan" component={Bantuan} />
          <Route path="/daftar" component={Daftar} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default RouterConfig;
