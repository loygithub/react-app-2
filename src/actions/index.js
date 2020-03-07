import axios from 'axios';

import {
    FETCH_CHARACTERS,
    FETCH_CHARACTER_DETAILS,
    RESET_CHARACTER_DETAILS_STATE
} from './types';

const SWAPI_PEOPLE_BASE_URL = 'https://swapi.co/api/people';

/**
 * Action method: API to fetch star wars characters
 */
export const fetchCharacters = () => async dispatch => {
    const { data } = await axios.get(SWAPI_PEOPLE_BASE_URL);

    dispatch({
        type: FETCH_CHARACTERS,
        payload: data.results
    })
}

/**
 * Action method: API to fetch star wars character details based on the character id
 * @param { Integer } id - character id
 */
export const fetchCharacterDetail = (id) => async dispatch => {
    const { data } = await axios.get(`${SWAPI_PEOPLE_BASE_URL}/${id}/`);

    dispatch({
        type: FETCH_CHARACTER_DETAILS,
        payload: data
    })
}

/**
 * Action method: Reset character details to null
 */
export const resetCharacterDetails = () => {
    return {
        type: RESET_CHARACTER_DETAILS_STATE,
        payload: null
    }
}