import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import AddBlog from './AddBlog';
import Blog from './Blog';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <React.Fragment>
                <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/AddBlog" component={AddBlog} />
                        <Route exact path="/blogs/:id" component={Blog} />
                    </Switch>
                </React.Fragment>
            </Router>
        );
    };
};

export default Navigation;