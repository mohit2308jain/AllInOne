import { RECIPES_LOADING, RECIPES_FAILED, RECIPES_FETCHED } from '../Actions';

export const recipeDetailsReducer = (state = {
    isLoading: true,
    errMess: null,
    searchTerm: null,
    recipes:[] }, action) => {
    switch(action.type){
        case RECIPES_LOADING:
            return {...state, isLoading: true, errMess: null, searchTerm: action.payload, recipes: []}
        case RECIPES_FETCHED:
            return {...state, isLoading: false, errMess: null, searchTerm: state.searchTerm, recipes: action.payload};
        case RECIPES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, searchTerm: state.searchTerm}
        default:
            return state;
    }
}