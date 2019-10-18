import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/authTOken";
import {setCurrentUser, logoutUser} from "./action/auth";

import {Provider} from "react-redux";
import store from "./store/store";

import PrivateRoute from "./config/privateRoute";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Signin from "./pages/signin/signIn";
import Signup from "./pages/signup/signUp";

import ProductList from "./components/details-product/productDetails";

import NavMenu from './components/navbar/navbar'

// Check for token to keep user logged in
if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
    // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());
        // Redirect to login
        window.location.href = "./signin";
    }
}

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <NavMenu/>
                    </div>
                    <div>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/signup" component={Signup}/>
                        <Route exact path="/signin" component={Signin}/>
                        <Route exact path="/about" component={About}/>
                        <Switch>
                            <PrivateRoute exact path="/details/detail/:id" component={ProductList}/>
                        </Switch>
                    </div>
                </Router>
            </Provider>
        )
    }
}
