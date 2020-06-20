import { combineReducers } from 'redux';
import { movieDetailsReducer } from './Movies/MovieReducer';
import { bookDetailsReducer } from './Books/BookReducer';
import { recipeDetailsReducer } from './Recipes/RecipeReducer';
import { weatherDetailsReducer } from './Weather/WeatherReducer'

export default combineReducers({
    movielist: movieDetailsReducer,
    booklist: bookDetailsReducer,
    recipelist: recipeDetailsReducer,
    weather: weatherDetailsReducer
});