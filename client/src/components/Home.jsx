import React, { Component } from 'react';
import { render } from 'react-dom';

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
                            <h5 className="card-title">{blog.title}</h5>
                            <p className="card-text">Written by {blog.author}</p>
                            <p>{blog.content}</p>
                            {/* <Link to={`/Movies/${film.id}`} className="btn btn-primary">Movie Details</Link> */}
                        </div>
                    </div>
                </div>
        )
    })
}
};

export default Home;