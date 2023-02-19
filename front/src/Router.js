import BookDetail from "./page/Bookdetail";
import LoginPage from "./page/loginPage";
import MyCart from "./page/Mycart";
import HomePage from "./page/page";
import Users from "./page/Users"
import Myorder from "./page/Myorder";
import {Route, HashRouter} from 'react-router-dom';
import React, {Component} from 'react'
import RegisterPage from "./page/registerPage";
import OrderInfo from "./page/OrderInfo";
import BookManage from "./page/BookManage";
import OrderManage from "./page/OrderManage";
import dateSelector from "./js/dateSelector";
import BookRange from "./page/BookRange";
import UserRange from "./page/UserRange";
import Record from "./page/Record";

class Router extends React.Component{
    render() {
        return (
            <HashRouter>
                <switch>
                    <Route path= "/Login" component={HomePage}/>
                    <Route path= "/BookDetail/:bookId" component={BookDetail} />
                    <Route path= "/" component={LoginPage} exact/>
                    <Route path= "/Register" component={RegisterPage}/>
                    <Route path= "/MyCart" component={MyCart}/>
                    <Route path= "/MyOrder" component={Myorder}/>
                    <Route path= "/Order/:orderId" component={OrderInfo} />
                    <Route path= "/UserManage" component={Users} />
                    <Route path= "/BookManage" component={BookManage} />
                    <Route path= "/OrderManage" component={OrderManage} />
                    <Route path= "/BookRange" component={BookRange}/>
                    <Route path= "/UserRange" component={UserRange}/>
                    <Route path= "/Record" component={Record}/>
                </switch>
            </HashRouter>
        )
    }
}

export default Router;