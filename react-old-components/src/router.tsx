import * as React from 'react';
import { HashRouter,Route, Switch } from 'react-router-dom';
import { App } from './app';
import { About,MembersPage } from './components';
// AppRouter 报错void 0 @types/react
// StatelessComponent 无状态组件  FC FunctionComponent
// <{}>  泛型
export const AppRouter:React.FC<{}> = () => {
    return (
        <HashRouter>
            <div className="container-fluid">
                <Route component={App}></Route>
                <Switch>
                    <Route exact path="/" component={About} />
                    <Route path="/about" component={About} />
                    <Route path="/members" component={MembersPage} />
                </Switch>
            </div>
        </HashRouter>
    )
}