import OpenWeatherMapApi from '../../apis/OpenWeatherMapApi';
import { WEATHER_FAILED, WEATHER_FETCHED_FROM_CITY, 
    WEATHER_FETCHED_FROM_LOCATION, WEATHER_LOADING } from '../Actions';

const API_KEY = 'f21ae3ad3be48db005138522bd3477f6';
const invalidSearchTerm = 'PLEaSE ENTER CORRECT CITY NAME';
const searchTermEmpty = 'PLEASE ENTER SEARCH TERM';
const locationError = 'Error In Fetching Your Location';

export const fetchWeatherFromCityName = (term) => {
    return async (dispatch) => {
        if(!term){
            dispatch(weatherFailed(searchTermEmpty))
        }
        else{
            dispatch(weatherLoading());

            let response;
            try{
                response = await OpenWeatherMapApi.get(`/weather?q=${term}&units=metric&appid=${API_KEY}`);
                dispatch({
                    type: WEATHER_FETCHED_FROM_CITY,
                    payload: response.data
                })
            }
            catch(error){
                dispatch(weatherFailed(invalidSearchTerm));
            }
        }
    }
}

export const fetchWeatherByLocation = (lat, lon) => {
    return async (dispatch) => {
        if(!(lat && lon)){
            dispatch(weatherFailed(locationError));
        }
        else{
            dispatch(weatherLoading());

            const response = await OpenWeatherMapApi.get(`/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=${API_KEY}`);
            dispatch({
                type: WEATHER_FETCHED_FROM_LOCATION,
                payload: response.data
            })
        }
    }
}

const weatherLoading = () => ({
    type: WEATHER_LOADING
});

const weatherFailed = (errmess) => ({
    type: WEATHER_FAILED,
    payload: errmess
});

/*
const recipesFetch = (term) => {
    return async (dispatch) => {
        const response = await OpenWeatherMapApi.get(`/weather?q=${term}&appid=${API_KEY}`);
        console.log(response);
        /*
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
*/