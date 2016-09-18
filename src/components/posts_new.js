import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
    render() {
        // shorthand for: const handleSubmit = this.props.handleSubmit
        // shorthand for: const title = this.props.fields.title
        // shorthand for: const categories = this.props.fields.categories
        // shorthand for: const content = this.props.fields.content
        const { fields: { title, categories, content }, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <h3>Create A New Post</h3>
                <div className="form-group">
                    <label>Title</label>
                    <input type="test" className="form-control" {...title} /> // {...title} breaks down title and passes in all properites (onChange, onFocus, active, etc)
                </div>
                <div className="form-group">
                    <label>Categories</label>
                    <input type="test" className="form-control" {...categories} />
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <textarea className="form-control" {...content} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content']
})(PostsNew);
