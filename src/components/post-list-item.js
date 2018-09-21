import React from 'react'
import {Link} from 'react-router'
import {deletePost} from '../actions/index'


const PostListItem = (props) => {
    const {data} = props
    return (
        <tr>
            <td className="col-md-6"><Link to={`/post/${data.id}`}>{data.title}</Link></td>
            <td className="col-md-6"><button onClick={()=>{deletePost(data)}} className="btn btn-danger">Supprimer</button></td>
        </tr>
    )
    function deletePost(data){
        props.deletePostCallback(data);
    }
}

export default PostListItem