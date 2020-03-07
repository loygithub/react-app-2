import React from 'react';
import { Router } from 'react-router-dom';
import { mount } from 'enzyme';

import Root from '../../../Root';
import CharacterDetails from '../CharacterDetails';
import history from '../../../history';

let wrapped;

beforeEach(() => {
    const initialState = {
        characterDetails: {
            name: "Beru Whitesun lars",
            height: "165",
            mass: "75",
            hair_color: "brown",
            skin_color: "light",
            eye_color: "blue",
            birth_year: "47BBY",
            gender: "female"
        }
    };
    wrapped = mount(
        <Root initialState={initialState}>
            <Router history={history}>
                <CharacterDetails match={{ params: 1 }} />
            </Router>
        </Root>
    );
});

it('Should show the character details', () => {
    expect(wrapped.render().text()).toContain('Beru Whitesun larsHeight165Mass75Hair');
})
