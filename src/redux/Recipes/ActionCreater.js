import EDAMAMRecipeApi from '../../apis/EDAMAMRecipeApi';
import { RECIPES_LOADING, RECIPES_FAILED, RECIPES_FETCHED } from '../Actions';

const APP_ID = 'afb40015';
const APP_KEY = 'ea2ef14607b092a79cc4b02f52d90878';
const invalidSearchTerm = 'NO RESULTS FOR THIS QUERY';
const searchTermEmpty = 'PLEASE ENTER SEARCH TERM';

export const fetchRecipesWithDetails = (term) => {
    return async (dispatch) => {
        if(!term){
            dispatch(recipesFailed(searchTermEmpty))
        }
        else{
            dispatch(recipesLoading(term));

            await dispatch(recipesFetch(term));
        }
    }
}

const recipesLoading = (term) => ({
    type: RECIPES_LOADING,
    payload: term
});

const recipesFetch = (term) => {
    return async (dispatch) => {
        const response = await EDAMAMRecipeApi.get(`/search?q=${term}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        if(response.data.hits.length<1){
            dispatch(recipesFailed(invalidSearchTerm));
        }
        else{
            dispatch({
                type: RECIPES_FETCHED,
                payload: response.data.hits
            })
        }
    }
}

const recipesFailed = (errmess) => ({
    type: RECIPES_FAILED,
    payload: errmess
});
