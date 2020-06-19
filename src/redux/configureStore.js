import { combineReducers } from 'redux';
import { movieDetailsReducer } from './Movies/MovieReducer';

export default combineReducers({
    movielist: movieDetailsReducer
});