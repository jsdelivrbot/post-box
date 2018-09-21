import React from 'react'
import {AT_POST} from '../actions/actions-types'

export default (state=null, action) => {
    switch(action.type){
        case AT_POST.READ_POST :
        return action.payload
    }
    return state;
}