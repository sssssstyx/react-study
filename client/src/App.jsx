import React from 'react'
// import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router,Route,Switch} from "react-router-dom"
import routes from "./router"
import { ConfigProvider } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import 'zarm/dist/zarm.css';


function App() {
  return (
    <Router>
      <ConfigProvider  locale={zhCN}>
        <Switch>
        {
          routes.map(route => <Route key={route.path} path={route.path} component={route.component} />)
        }
        </Switch>
      </ConfigProvider>
    </Router>
  )
}

export default App
