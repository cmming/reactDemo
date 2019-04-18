import React from 'react'

import {HashRouter as Router, Route, Switch} from "react-router-dom";
import App from '../App'

import Login from '../pages/login/index'

import Admin from '../pages/backstage/layout/index'
import NotMatch from "../pages/errorPage/404";

import Dashbord from '../pages/backstage/dashbord/index'
import About from '../pages/backstage/about/index'
import User from '../pages/backstage/user/index'

export default class Routers extends React.Component {

    render() {
        return <Router>
            <App>
                <Switch>
                    <Route exact={true} path="/" component={Login}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" render={() =>
                        <Admin>
                            <Switch>
                                <Route path="/admin/dashborad" component={Dashbord}/>
                                <Route path="/admin/about" component={About}/>
                                <Route path="/admin/users" component={User}/>
                                <Route component={NotMatch}/>
                            </Switch>
                        </Admin>
                    }/>
                    <Route component={NotMatch}/>
                </Switch>
            </App>
        </Router>
    }
}
