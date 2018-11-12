import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import Home from './Home';
import AddBllog from './AddBlog';

class Header extends Component {


    render(){
    return (
        <React.Fragment>
            {/* NAVBAR */}
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
                <a className="navbar-brand" href="#">Blog</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/AddBlog" className="nav-link" href="#">Add Blog</Link>
                        </li>
                    </ul>
                </div>
            </nav> 

            {/* JUMBOTRON */}
            <div className="jumbotron jumbotron-fluid text-center">
                <div className="container">
                   
                    <h1 className="display-4" style={{fontFamily:'Shadows Into Light'}} > <i class="fas fa-globe-americas"></i> Travel Blog...</h1>
                    <p className="lead" style={{fontFamily:'Amatic SC, cursive, bold'}}>Tell us about your adventures!</p>
                </div>
            </div>
        </React.Fragment>
    );
};
};

export default Header;