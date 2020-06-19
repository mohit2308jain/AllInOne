import { MOVIES_FAILED, MOVIES_FETCHED, MOVIES_LOADING } from '../Actions';

export const movieDetailsReducer = (state = {
    isLoading: true,
    errMess: null,
    searchTerm: null,
    movies:[] }, action) => {
    switch(action.type){
        case MOVIES_LOADING:
            return {...state, isLoading: true, errMess: null, searchTerm: action.payload, movies: []}
        case MOVIES_FETCHED:
            return {...state, isLoading: false, errMess: null, searchTerm: state.searchTerm, movies: [...state.movies, action.payload]};
        case MOVIES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, searchTerm: state.searchTerm}
        default:
            return state;
    }
}