import { MOVIES_FAILED, MOVIES_FETCHED, MOVIES_LOADING, 
    MOVIES_DETAILS_LOADING, SELECTED_MOVIE_FETCHED } from '../Actions';

export const movieDetailsReducer = (state = {
    isLoading: true,
    errMess: null,
    searchTerm: null,
    isDetailsLoading: true,
    selectedMovie: null,
    movies:[] }, action) => {
    switch(action.type){
        case MOVIES_LOADING:
            return {...state, isLoading: true, errMess: null, searchTerm: action.payload, movies: []}
        case MOVIES_FETCHED:
            return {...state, isLoading: false, errMess: null, searchTerm: state.searchTerm, movies: [...state.movies, action.payload]};
        case MOVIES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, searchTerm: state.searchTerm, movies: []}
        case MOVIES_DETAILS_LOADING:
            return {...state, isLoading: false, errMess: null, selectedMovie: null, isDetailsLoading: true}
        case SELECTED_MOVIE_FETCHED:
            return {...state, isLoading: false, errMess: null, selectedMovie: action.payload,  isDetailsLoading: false}
        default:
            return state;
    }
}