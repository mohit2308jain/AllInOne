import { WEATHER_FAILED, WEATHER_FETCHED_FROM_CITY, 
    WEATHER_FETCHED_FROM_LOCATION, WEATHER_LOADING } from '../Actions';

export const weatherDetailsReducer = (state = {
    isLoading: true,
    errMess: null,
    weather: {} }, action) => {
    switch(action.type){
        case WEATHER_LOADING:
            return {...state, isLoading: true, errMess: null, weather:{}}
        case WEATHER_FETCHED_FROM_CITY:
            return {...state, isLoading: false, errMess: null, weather: action.payload};
        case WEATHER_FETCHED_FROM_LOCATION:
            return {...state, isLoading: false, errMess: null, weather: action.payload};
        case WEATHER_FAILED:
            return {...state, isLoading: false, errMess: action.payload}
        default:
            return state;
    }
}