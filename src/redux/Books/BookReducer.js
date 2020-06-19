import { SET_SEARCH_FIELD, BOOKS_LOADING, BOOKS_FAILED, BOOKS_FETCHED } from '../Actions';

export const bookDetailsReducer = (state = {
    isLoading: true,
    errMess: null,
    searchTerm: null,
    books:[] }, action) => {
    switch(action.type){
        case SET_SEARCH_FIELD:
            return {...state, isLoading: true, errMess: null, searchTerm: action.payload, books: []};
        case BOOKS_LOADING:
            return {...state, isLoading: true, errMess: null, searchTerm: state.searchTerm, books: []}
        case BOOKS_FETCHED:
            return {...state, isLoading: false, errMess: null, searchTerm: state.searchTerm, books: action.payload};
        case BOOKS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, searchTerm: state.searchTerm}
        default:
            return state;
    }
}