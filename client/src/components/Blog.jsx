import React, { Component } from 'react';
import { render } from 'react-dom';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blog: {}
        };
    };
    async componentDidMount() {
        try {
            let res = await fetch(`/api/blogs/${this.props.match.params.id}`);
            let blog = await res.json();
            this.setState({ blog });
        } catch (e) {
            console.log(e);
        }
    };

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">{this.state.blog.title}</div>
                    <div className="card-body">
                        <p className="card-text">{this.state.blog.content}</p>
                        <p className="card-text">Created: {this.state.blog._created}</p>
                    </div>
                </div>
            </div>
        );

    };
};

export default Blog;