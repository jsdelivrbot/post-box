import React, { Component } from 'react'
import { getALLPosts, deletePost } from '../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import PostsListItem from '../components/post-list-item'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

class PostsList extends Component {
    constructor(props) {
        super(props)
        this.state = { displayOnlyMine: false }
    }
    componentWillMount() {
        this.props.getALLPosts();
    }

    deletePost(post) {
        this.props.deletePost(post.id);
    }

    filterPost() {
        if (this.props.postsList) {
            return this.props.postsList.filter((post) => {
                if (post.author == "Moi") {
                    return true
                } else {
                    return false
                }
            });
        }
    }

    handleChangeFilter(e) {
        this.setState({ displayOnlyMine: e.target.checked });
    }


    render() {
        //console.log(this.props.postsList);
        let postsList;
        if (this.state.displayOnlyMine) {
            postsList = this.filterPost();
        } else {
            postsList = this.props.postsList;
        }
        return (
            <div>
                <h1>Liste de post</h1>
                <div style={{"marginBottom": "50px"}}>
                    <input type="checkbox" onChange={(e) => { this.handleChangeFilter(e) }} /> Moi
                </div>
                <div className="add-btn">
                    <Link to={"create-post"}><button className="btn btn-primary btn-circle">+</button></Link>
                </div>
                {
                    (postsList) ?
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th className="col-md-6">Titre</th>
                                    <th className="col-md-6">Action</th>
                                </tr>
                            </thead>
                            <ReactCSSTransitionGroup component="tbody"
                                transitionEnterTimeout={500}
                                transitionLeaveTimeout={300}
                                transitionName="fade">
                                {postsList.map((post) => {
                                    return (
                                        <PostsListItem deletePostCallback={(post) => { this.deletePost(post) }} key={post.id} data={post} />
                                    )
                                })}
                            </ReactCSSTransitionGroup>
                        </table>
                        : null
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        postsList: state.postsList
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getALLPosts, deletePost }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)