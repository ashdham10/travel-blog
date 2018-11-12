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
            <div className="row" key={blog.id}>
                    <div className="card col-13">
                        <div className="card-body">
                            <h3 className="card-title">{blog.title}</h3>
                            <p>{blog.content}</p>
                            <Link to={`/blogs/${blog.id}`} className="btn btn-primary">Read More..</Link>
                        </div>
                    </div>
                </div>
        )
    })
}
};

export default Home;