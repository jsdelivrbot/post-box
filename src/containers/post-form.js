import React, { Component } from 'react'
import {Link} from 'react-router'
import {reduxForm} from 'redux-form'

import { createPost } from '../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {browserHistory} from 'react-router'

const formConfig = {
    form: "createPostForm",
    fields: ['title', 'content', 'author'],
    validate: validate,
    initialValues: {author: "Moi"}
}

class PostForm extends Component {
    render () {
        const {fields, handleSubmit, errors} = this.props;
        console.log(errors);
        return (
            <div>
                <h1>Nouveau post</h1>
                <form onSubmit={handleSubmit(this.createPost.bind(this))}>
                    <div className={`form-group ${(fields.title.touched && fields.title.invalid)?' has-danger':''}`}>
                        <label>Titre</label>
                        <input className="form-control" type="text" {...fields.title} />
                        <div className="error">{fields.title.touched && errors.title}</div>
                    </div>
                    <div className={`form-group ${(fields.content.touched && fields.content.invalid)?' has-danger':''}`}>
                        <label>Description</label>
                        <textarea className="form-control" {...fields.content}></textarea>
                        <div className="error">{fields.content.touched && errors.content}</div>
                    </div>
                    <div className={`form-group ${(fields.author.touched && fields.author.invalid)?' has-danger':''}`}>
                        <label>Auteur</label>
                        <input className="form-control" type="text" {...fields.author} />
                        <div className="error">{fields.author.touched && errors.author}</div>
                    </div>
                    <div style={{marginTop: '40px'}} className="text-center">
                        <Link className="btn btn-secondary" style={{marginRight: '20px'}} to={"/"}>Retour</Link>
                        <button className="btn btn-primary" type="submit" disabled={this.props.invalid}>Envoyer</button>
                    </div>
                </form>
            </div>
        )
    }
    createPost(post){
        this.props.createPost(post);
        browserHistory.push("/");
    }
}



function mapDispatchToProps(dispatch) {
    return bindActionCreators({ createPost }, dispatch)
}

function validate(values){
    const errors = {};
    if(!values.title){
        errors.title= "Veuillez remplir le champ titre";
    }
    if(!values.content){
        errors.content= "Veuillez remplir le champ description";
    }
    if(!values.author){
        errors.author= "Veuillez remplir le champ auteur";
    }
    return errors
}

export default connect(null, mapDispatchToProps)(reduxForm(formConfig)(PostForm))