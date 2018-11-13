import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            blogs: []
        }
    }
    
    componentDidMount(){
        fetch('/api/blogs')
            .then((res) => res.json())
            .then((blogs) => {
                this.setState({
                    blogs,
                })
            })
    }
render(){
    return this.state.blogs.map(blog => {
        return (
            <div className="row" key={blog.id} id="blogCard">
                    <div className="card col-12 mt-20">
                    <div className="card-header">{blog.title}</div>
                        <div className="card-body">
                            <p>{blog.content}</p>
                            <Link to={`/blogs/${blog.id}`} className="btn btn-success">Read More..</Link>
                        </div>
                    </div>
                </div>
        )
    })
}
};

export default Home;