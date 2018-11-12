import React, { Component } from 'react';
import { render } from 'react-dom';

class SingleBlog extends Component {
    constructor(props){
        super(props);
        this.state = {
            blog: {}
        };
    }
    componentDidMount(){
        fetch(`/api/blogs/${this.props.match.params.id}`)
        .then((res) => res.json())
        .then((blog) => {
            this.setState({
                blog
            });
        });
    }

    render(){
        console.log(this.state);
        return (
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{this.state.blog.title}</h5>
                    <p className="card-text">{this.state.blog.content}</p>
                    <p className="card-text">Created: {this.state.blog._created}</p>
                </div>
            </div>
        )

    }
}

export default SingleBlog;