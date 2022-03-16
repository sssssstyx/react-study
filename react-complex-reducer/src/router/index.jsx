import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "@/views/login";

const Router  = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/login" component={Login} />
            </Switch>
        </HashRouter>
    )
}

export default Router