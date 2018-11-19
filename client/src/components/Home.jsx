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
                <div  key={blog.id} id="blogCard">
                <div className="card bg-dark col-6" style={{width: '18rem', maxWidth: '100%'}}>
                    <img className="card-img-top" src="/travel-me.jpg" alt="img-placeholder" />
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
