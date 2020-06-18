import { act } from "react-dom/test-utils";

export const movieDetailsReducer = (state = {
    isLoading: true,
    errMess: null,
    searchTerm: null,
    movies:[] }, action) => {
    switch(action.type){
        case 'SET_SEARCH_FIELD':
            return {...state, isLoading: true, errMess: null, searchTerm: action.payload, movies: [...state.movies, action.payload]};
        case 'MOVIES_LOADING':
            return {...state, isLoading: true, errMess: null, searchTerm: action.payload, searchTerm: null, movies: []}
        case 'MOVIES_FETCHED':
            return {...state, isLoading: false, errMess: null, searchTerm: action.payload, movies: [...state.movies, action.payload]};
        case 'MOVIES_FAILED':
            return {...state, isLoading: false, errMess: action.payload, searchTerm: action.payload}
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