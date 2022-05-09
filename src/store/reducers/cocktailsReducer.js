import {cocktailsRequests} from "../../api/cocktailsRequests";

const ADD_COCKTAILS = 'ADD_COCKTAILS';

let initialState= {};

const cocktailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COCKTAILS: {
            return {
               ...action.payload
            }
        }
        default: return state
    }
}

export default cocktailsReducer;


const addCocktails = (cocktails) => {
    return {
        type: ADD_COCKTAILS,
        payload: cocktails
    }
}

export const getCocktails = (letter) => {
    return async (dispatch) => {
     cocktailsRequests.getCocktailsAlphabet(letter)
        .then(data => dispatch(addCocktails(data)))
        .catch(e => console.log('qwe'))
    }
}