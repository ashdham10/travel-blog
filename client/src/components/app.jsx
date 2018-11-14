import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import AddBlog from './AddBlog';
import Blog from './Blog';
// import Footer from './Footer';

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
                        <Route exact path="/AddBlog" component={AddBlog} />
                        <Route exact path="/blogs/:id" component={Blog} />
                        {/* <Route exact path="/" component={Footer} /> */}
                    </Switch>
                    {/* <div>
                        <Footer />
                    </div> */}
                </React.Fragment>
            </Router>
        );
    };
};

export default Navigation;