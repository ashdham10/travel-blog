import React, { Component } from 'react';
import { render } from 'react-dom';

class LoginIn extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <React.Fragment>
                <form id="loginIn">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" class="btn btn-dark">Submit</button>
                </form>
            </React.Fragment>
        );
    };
};

export default LoginIn;