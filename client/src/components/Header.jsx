import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import Home from './Home';
import AddBllog from './AddBlog';
import LoginIn from './LoginIn';

class Header extends Component {


    render() {
        return (
            <React.Fragment>
                <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                    <a class="navbar-brand" href="#">Travel Blog</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <Link to="/" class="nav-link" href="#">Home <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/AddBlog" class="nav-link" href="#">Post Blog</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/LoginIn" class="nav-link" href="#">Login In</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#">Sign Up</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/* JUMBOTRON */}
                <div className="jumbotron jumbotron-fluid text-center">
                    <div className="container">

                        <h1 className="display-4" style={{ fontFamily: 'Shadows Into Light' }} ><i class="fas fa-globe-americas"></i>Travel Blog</h1>
                        <p className="lead" style={{ fontFamily: 'Amatic SC, cursive, bold' }}>Tell us about your adventures!</p>
                    </div>
                </div>
            </React.Fragment>
        );
    };
};

export default Header;