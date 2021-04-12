import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import Contact from "./components/other/Contact";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const Test = () => {
    return (
             <BrowserRouter>
    <Switch>
            <Route exact path="/" component={App}></Route>
            <Route path="/Contact" component={Contact}></Route>
          </Switch>
    </BrowserRouter>
    )
}

export default Test
