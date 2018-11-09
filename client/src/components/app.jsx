import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import AddBlog from './AddBlog';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <React.Fragment>
                <Header />
                    <Switch>
                        <Route exact path="/Home" component={Home} />
                        <Route path="/AddBlog" component={AddBlog} />
                    </Switch>
                </React.Fragment>
            </Router>
        );
    };
};

export default Navigation;