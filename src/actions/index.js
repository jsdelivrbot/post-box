import {AT_POST} from './actions-types'
import axios from 'axios'
const END_POINT = "http://localhost:3000/"

export const getALLPosts = () => {
    return function(dispatch){
        axios(`${END_POINT}posts`).then((response)=>{
            dispatch({
                type: AT_POST.READ_ALL_POST,
                payload: response.data
            })
        })
    }
}

export const getPost = (id) => {
    return function(dispatch){
        axios(`${END_POINT}posts/${id}`).then((response)=>{
            dispatch({
                type: AT_POST.READ_POST,
                payload: response.data
            })
        })
    }
}

export const deletePost = (id) => {
    return function(dispatch){
        axios.delete(`${END_POINT}posts/${id}`).then((response)=>{
            dispatch({
                type: AT_POST.DELETE_POST,
                payload: id
            })
        })
    }
}

export const createPost = (post) => {
    return function(dispatch){
        axios.post(`${END_POINT}posts/`,
            {
                title: post.title,
                content: post.content,
                author: post.author
            }
        ).then((response)=>{
            dispatch({
                type: AT_POST.CREATE_POST,
                payload: response.data
            })
        })
    }
}

