import React from 'react'
import {AT_POST} from '../actions/actions-types'

export default (state=[], action) => {
    switch(action.type){
        case AT_POST.READ_ALL_POST :
        return action.payload
        case AT_POST.DELETE_POST :
        return state.filter((post)=>{
            if(post.id === action.payload){
                return false
            }else{
                return true
            }
        })
        case AT_POST.CREATE_POST :
        return [...state, action.payload]
    }
    return state;
}