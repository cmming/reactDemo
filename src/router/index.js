import React from 'react'

import {HashRouter as Router, Route, Switch} from "react-router-dom";

import Login from '../pages/login/index'

import Admin from '../pages/backstage/layout/index'
import NotMatch from "../pages/errorPage/404";


import asyncComponent from '../utils/asyncComponent'

// const RouterList = [
//     {path: "/admin/dashborad", component: "../pages/backstage/dashbord/index"},
//     // {path: "/admin/about", component: "../pages/backstage/about/index"},
//     // {path: "/admin/users", component: "../pages/backstage/users/index"},
// ]


class Routers extends React.Component {


    //TOD 动态生成菜单
    // renderRouter=(routerList)=>{
    //     return routerList.map(item=>{
    //         console.log(item.component)
    //         return <Route path={item.path}
    //                       key={item.path}
    //                       component={asyncComponent(() => import(item.component))}/>
    //     })
    // }

    render() {
        return <Router>
                <Switch>
                    <Route exact={true} path="/" component={Login}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" render={() =>
                        <Admin>
                            <Switch>

                                <Route path="/admin/dashborad/analysis"
                                       component={asyncComponent(() => import("../pages/backstage/dashbord/analysis"))}/>
                                <Route path="/admin/dashborad/monitor"
                                       component={asyncComponent(() => import("../pages/backstage/dashbord/monitor"))}/>
                                <Route path="/admin/dashborad/workplace"
                                       component={asyncComponent(() => import("../pages/backstage/dashbord/workplace"))}/>

                                <Route path="/admin/about"
                                       component={asyncComponent(() => import("../pages/backstage/about/index"))}/>
                                <Route path="/admin/users"
                                       component={asyncComponent(() => import("../pages/backstage/user/index"))}/>

                                <Route path="/admin/form/basic-form"
                                       component={asyncComponent(() => import("../pages/backstage/form/basic-form"))}/>

                                <Route path="/admin/redux/demo"
                                       component={asyncComponent(() => import("../pages/backstage/redux/demo"))}/>

                                <Route path="/admin/table/index"
                                       component={asyncComponent(() => import("../pages/backstage/table/index"))}/>

                                {/*{this.renderRouter(RouterList)}*/}
                                <Route component={NotMatch}/>
                            </Switch>
                        </Admin>
                    }/>
                    <Route component={NotMatch}/>
                </Switch>
        </Router>
    }
}


export default Routers
