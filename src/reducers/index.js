import { combineReducers } from 'redux';
import { FETCH_CHARACTERS, FETCH_CHARACTER_DETAILS } from '../actions/types';


const charactersReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_CHARACTERS:
            return [...state, ...action.payload];
        default:
            return state
    }
}

const characterIdReducer = (state = null, action) => {
    switch (action.type) {
        case FETCH_CHARACTER_DETAILS:
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    characters: charactersReducer,
    selectedId: characterIdReducer
})