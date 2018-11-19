import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import AddBlog from './AddBlog';
import Blog from './Blog';
import LoginIn from './LoginIn';
import PrivateRoute from './auth/PrivateRoute';
import AuthButton from './auth/authButton';
import Login from './auth/login';
import Logout from './auth/logout';



class Navigation extends Component {

    render() {
        return (
            <Router>
                <React.Fragment>
                    <div>
                        <Header />
                    </div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <PrivateRoute exact path="/AddBlog" component={AddBlog} />
                        <Route exact path="/blogs/:id" component={Blog} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/logout" component={Logout} />
                    </Switch>
                  
                </React.Fragment>
            </Router>
        );
    };
};

export default Navigation;