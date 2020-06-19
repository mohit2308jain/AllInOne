import { SET_SEARCH_FIELD, BOOKS_LOADING, BOOKS_FAILED, BOOKS_FETCHED } from '../Actions';

export const movieDetailsReducer = (state = {
    isLoading: true,
    errMess: null,
    searchTerm: null,
    movies:[] }, action) => {
    switch(action.type){
        case SET_SEARCH_FIELD:
            return {...state, isLoading: true, errMess: null, searchTerm: action.payload, movies: []};
        case BOOKS_LOADING:
            return {...state, isLoading: true, errMess: null, searchTerm: state.searchTerm, movies: []}
        case BOOKS_FETCHED:
            return {...state, isLoading: false, errMess: null, searchTerm: state.searchTerm, movies: [...state.movies, action.payload]};
        case BOOKS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, searchTerm: state.searchTerm}
        default:
            return state;
    }
}
/*
export const movieDetailsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_DETAILS':
            return [...state, action.payload];
        default:
            return state;
    }
}
*/