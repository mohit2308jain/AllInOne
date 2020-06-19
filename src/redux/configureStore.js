import { combineReducers } from 'redux';
import { movieDetailsReducer } from './Movies/MovieReducer';
import { bookDetailsReducer } from './Books/BookReducer';

export default combineReducers({
    movielist: movieDetailsReducer,
    booklist: bookDetailsReducer
});