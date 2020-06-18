/*
export const movieIdReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_MOVIES':
            return action.payload;
        default:
            return state;
    }
} 
*/

export const movieDetailsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_DETAILS':
            return [...state, action.payload];
        default:
            return state;
    }
}