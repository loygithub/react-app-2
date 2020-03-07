import { combineReducers } from 'redux';
import { FETCH_CHARACTERS, FETCH_CHARACTER_DETAILS, RESET_CHARACTER_DETAILS_STATE } from '../actions/types';


const charactersReducer = (state = null, action) => {
    switch (action.type) {
        case FETCH_CHARACTERS:
            return [...action.payload];
        default:
            return state
    }
}

const characterDetailsReducer = (state = null, action) => {
    switch (action.type) {
        case FETCH_CHARACTER_DETAILS:
            return { ...action.payload };
        case RESET_CHARACTER_DETAILS_STATE:
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    characters: charactersReducer,
    characterDetails: characterDetailsReducer
})