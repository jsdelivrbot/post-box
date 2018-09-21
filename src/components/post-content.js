import React from 'react'

const PostContent = ({post}) => {
    console.log(post);
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>{post.author}</p>
        </div>
    )
}

export default PostContent