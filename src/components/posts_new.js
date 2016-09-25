import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
    render() {
        // shorthand for: const handleSubmit = this.props.handleSubmit
        // shorthand for: const title = this.props.fields.title
        // shorthand for: const categories = this.props.fields.categories
        // shorthand for: const content = this.props.fields.content
        const { fields: { title, categories, content }, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.props.createPost)}>
                <h3>Create A New Post</h3>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} /> {/* {...title} breaks down title and passes in all properites (onChange, onFocus, active, etc) */}
                        <div className="text-help">
                            {title.touched ? title.error : ''}
                        </div>
                </div>
                <div className="form-group">
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories} />
                        <div className="text-help">
                            {categories.touched ? categories.error : ''}
                        </div>
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <textarea className="form-control" {...content} />
                        <div className="text-help">
                            {content.touched ? content.error : ''}
                        </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Enter a username';
    }
    if (!values.categories) {
        errors.categories = 'Enter a category';
    }
    if (!values.content) {
        errors.content = 'Enter content';
    }

    return errors;
}

// connect: 1st argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content'],
    validate
}, null, { createPost })(PostsNew);
