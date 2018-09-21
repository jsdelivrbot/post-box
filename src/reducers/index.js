import { combineReducers } from 'redux';
import postsListReducer from './posts-list-reducer'
import activePostReducer from './active-post-reducer'
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  postsList: postsListReducer,
  activePost: activePostReducer,
  form: formReducer
});

export default rootReducer;
