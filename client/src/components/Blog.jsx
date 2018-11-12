import React, { Component } from 'react';
import { render } from 'react-dom';

class Blog extends Component {
    constructor(props){
        super(props);
        this.state = {
            blog: {}
        };
    };
   async componentDidMount(){
       try { let res = await fetch(`/api/blogs/${this.props.match.params.id}`);
        let blog = await res.json();
            this.setState({ blog });
        } catch (e) {
            console.log(e);
        }
    };

    render(){
        return (
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">{this.state.blog.title}</h5>
                    <p className="card-text">{this.state.blog.content}</p>
                    <p className="card-text">Created: {this.state.blog._created}</p>
                </div>
            </div>
        );

    };
};

export default Blog;