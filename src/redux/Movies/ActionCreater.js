import OMDBMovieApi from '../../apis/OMDBMovieApi';
import { MOVIES_FAILED, MOVIES_FETCHED, MOVIES_LOADING } from '../Actions';

const key = '756abb2f';
export const fetchMoviesWithDetails = (term) => {
    return async (dispatch) => {
        dispatch(moviesLoading(term));

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
    return async (dispatch) => { 
        const response = await OMDBMovieApi.get(`/?apikey=${key}&s=${term}`);

        return response.data;
    }
}

const moviesFetch = (id) => {
    return async (dispatch) => {
        const response = await OMDBMovieApi.get(`/?apikey=${key}&i=${id}`);
        //console.log(response.data);
        dispatch({
            type: MOVIES_FETCHED,
            payload: response.data
        })
    }
}

const moviesLoading = (term) => ({
    type: MOVIES_LOADING,
    payload: term
});

const moviesFailed = (errmess) => ({
    type: MOVIES_FAILED,
    payload: errmess
});
