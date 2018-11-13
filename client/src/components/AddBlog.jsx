import React, { Component } from 'react';
import { render } from 'react-dom';

class AddBlog extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {},
            title: '',
            content: ''
        }
    }

    async componentDidMount(){
        try {
           let res = await fetch('/api/blogs');
           let data = await res.json();
           this.setState(data)
        
        } catch (error) {
            console.log(error)
        }
    }

    async handleSubmit(e){
        e.preventDefault();

        let blog = {
            title: this.state.title,
            content: this.state.content
        }
        try{
            let res = await fetch('/api/blogs', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(blog)
            });
            this.props.history.replace('/');
        } catch (err){
            console.log(err);
        }
    }

    render(){
    return (
        <div id="addBlog">
        <form>
            <div className="form-group">
                <label for="blogTitle">Title</label>
                <input type="title" className="form-control" id="blogTitleInput" placeholder="Enter Blog Title" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })}/>
            </div>
            <div className="form-group">
                <label for="blogContent">Content..</label>
                <input type="content" className="form-control" id="blogContentInput" placeholder="Enter Blog Content" value={this.state.content} onChange={(e) => this.setState({ content: e.target.value })}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={(e) => this.handleSubmit(e)}>Submit</button>
        </form>
        </div>
    )};
};

export default AddBlog;