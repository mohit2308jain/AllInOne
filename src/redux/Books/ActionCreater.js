import GoogleBooksApi from '../../apis/GoogleBooksApi';
import { SET_SEARCH_FIELD, BOOKS_LOADING, BOOKS_FAILED, BOOKS_FETCHED } from '../Actions';

const maxResults = 20;
const startIndex = 1;
const invalidSearchTerm = 'NO RESULTS FOR THIS QUERY';
const searchTermEmpty = 'PLEASE ENTER SEARCH TERM';

export const fetchBooksWithDetails = (term) => {
    return async (dispatch) => {
        if(!term){
            dispatch(booksFailed(searchTermEmpty))
        }
        else{
            dispatch(setSearchField(term));

            dispatch(booksLoading());

            await dispatch(booksFetch(term));
        }
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

const booksLoading = () => ({
    type: BOOKS_LOADING
});

const booksFetch = (term) => {
    return async (dispatch) => {
        const response = await  GoogleBooksApi.get(`/volumes?q=${term}&maxResults=${maxResults}&startIndex=${startIndex}`);
        //console.log(response.data.items);
        if(response.data.totalItems===0){
            dispatch(booksFailed(invalidSearchTerm));
        }
        else{
            dispatch({
                type: BOOKS_FETCHED,
                payload: response.data.items
            })
        }
    }
}

const booksFailed = (errmess) => ({
    type: BOOKS_FAILED,
    payload: errmess
});
