import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
// import Footer from './Footer';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: []
        };
    };

    componentDidMount() {
        fetch('/api/blogs')
            .then((res) => res.json())
            .then((blogs) => {
                this.setState({
                    blogs,
                });
            });
    };
    render() {
        return this.state.blogs.map(blog => {
            return (
                <div className="row" key={blog.id} id="blogCard">
                <div className="card bg-dark" style={{width: '18rem'}}>
                    <img className="card-img-top" src="/road-trip.jpg" alt="img-placeholder" />
                    <div className="card-body">
                        <h5 className="card-title">{blog.title}</h5>
                        <Link to={`/blogs/${blog.id}`} className="btn btn-secondary btn-sm">Read More..</Link>
                    </div>
                </div>
                </div>
            );
        });
        // return <Footer />
    };
};

export default Home;
