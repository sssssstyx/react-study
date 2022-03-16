import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import TableComponent from '../views/table'
const Router = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/table" component={TableComponent}></Route>
            </Switch>
        </HashRouter>
    )
}

export default Router