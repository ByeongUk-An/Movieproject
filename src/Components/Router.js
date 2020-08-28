import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "../Routes/Home";
import Movie from "../Routes/Movie";
import Tv from "../Routes/Tv";
import Header from "./Header";
import Character from "../Routes/Character";
import Search from "../Routes/Search";
import Detail from "../Routes/Detail";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie" component={Movie} />
        <Route path="/tv" component={Tv} />
        <Route path="/character" component={Character} />
        <Route path="/search" component={Search} />
        <Route path="/detail/:id" component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
