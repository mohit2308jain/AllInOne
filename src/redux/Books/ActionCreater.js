import OMDBMovieApi from '../../apis/OMDBMovieApi';
import { SET_SEARCH_FIELD, BOOKS_LOADING, BOOKS_FAILED, BOOKS_FETCHED } from '../Actions';
import { MOVIES_FAILED, MOVIES_FETCHED, MOVIES_LOADING } from '../Actions';

const key = '756abb2f';
export const fetchMoviesWithDetails = (term) => {
    return async (dispatch) => {
        dispatch(setSearchField(term));

        dispatch(moviesLoading());

        const movieslist = await dispatch(fetchMovieIds(term));
        
        if(!movieslist.Error){
            const movieIds = movieslist.Search.map((item) => {
                return(
                    item.imdbID
                )
            });
            movieIds.map((id) => dispatch(moviesFetch(id)));
        }
        else{
            dispatch(moviesFailed(movieslist.Error));
        }
    }
}

const fetchMovieIds = (term) => {
    console.log(term)
    return async (dispatch) => { 
        const response = await OMDBMovieApi.get(`/?apikey=${key}&s=${term}`);

        return response.data;
    }
}

const moviesFetch = (id) => {
    return async (dispatch) => {
        const response = await OMDBMovieApi.get(`/?apikey=${key}&i=${id}`);
        console.log(response.data);
        dispatch({
            type: MOVIES_FETCHED,
            payload: response.data
        })
    }
}

const setSearchField = (term) => {
    return (dispatch) => {

        dispatch({
            type: SET_SEARCH_FIELD,
            payload: term
        })
    }
}

const moviesLoading = () => ({
    type: MOVIES_LOADING
});

const moviesFailed = (errmess) => ({
    type: MOVIES_FAILED,
    payload: errmess
});
