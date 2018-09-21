import React, { Component } from 'react'
import PostContent from '../components/post-content'

import { getPost } from '../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Post extends Component {
    
    componentWillMount () {
        this.props.getPost(this.props.params.id);
    }

    renderPostContent(){
        if(this.props.post){
            return (
                <PostContent post={this.props.post} />
            )
        }
    }
    
    render () {
        return (
            <div>
                <p>Post numéro : {this.props.params.id}</p>
                {this.renderPostContent()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        post: state.activePost
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getPost }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)