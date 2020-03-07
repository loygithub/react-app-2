import { FETCH_CHARACTERS, FETCH_CHARACTER_DETAILS } from './types';

import history from '../history';
import swapi from '../apis/swapi';

export const fetchCharacters = () => async dispatch => {
    const { data } = await swapi.get(`/people`);

    console.log('data: ', data);

    dispatch({
        type: FETCH_CHARACTERS,
        payload: data.results
    })
}

