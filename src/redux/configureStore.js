import { combineReducers } from 'redux';
import { movieDetailsReducer } from './MovieReducer';

export default combineReducers({
    //movieIds: movieIdReducer,
    movielist: movieDetailsReducer
});