import React from 'react';
import { HashRouter,Route,Switch,Redirect } from 'react-router-dom';
import Home from "../Routes/Home";
import Movie from "../Routes/Movie";
import Tv from "../Routes/Tv";
import Header from "./Header";
import Character from "../Routes/Character";
import Search from "../Routes/Search";

function Router() {
    return(
        <HashRouter>
            <Header/>
            <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/movie' component={Movie} />
            <Route path='/tv' component={Tv} />
            <Route path='/character' component={Character} />
            <Route path='/search' component={Search} />
            <Redirect from='*' to='/'/>
            </Switch>
        </HashRouter>
    )
}

export default Router;