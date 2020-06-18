import OMDBMovieApi from '../apis/OMDBMovieApi';

const key = '756abb2f';
export const fetchMoviesWithDetails = (term) => {
    return async (dispatch, getState) => {
        const movieslist = await dispatch(fetchMovies(term));
        
        if(!movieslist.Error){
            const movieIds = movieslist.Search.map((item) => {
                return(
                    item.imdbID
                )
            });
            movieIds.map((id) => dispatch(fetchDetails(id)));
        }
    }
}

const fetchMovies = (term) => {
    console.log(term)
    return async (dispatch) => { 
        const response = await OMDBMovieApi.get(`/?apikey=${key}&s=${term}`);

        return response.data;
    }
}

const fetchDetails = (id) => {
    return async (dispatch) => {
        const response = await OMDBMovieApi.get(`/?apikey=${key}&i=${id}`);

        dispatch({
            type: 'FETCH_DETAILS',
            payload: response.data
        })
    }
}