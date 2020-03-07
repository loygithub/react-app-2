import React from 'react';
import { Router } from 'react-router-dom';
import { mount } from 'enzyme';

import Root from '../../../Root';
import CharacterList from '../CharacterList';
import history from '../../../history';

let wrapped;

beforeEach(() => {
    const initialState = {
        characters: [{ name: 'Luke Skywalker', url: 'https://swapi.co/api/people/1/' }, { name: 'R2-D2', url: 'https://swapi.co/api/people/2/' }]
    };
    wrapped = mount(
        <Root initialState={initialState}>
            <Router history={history}>
                <CharacterList />
            </Router>
        </Root>
    );
});

it('Should show the character list header', () => {
    expect(wrapped.render().text()).toContain('STAR WARS: CHARACTERS');
})

it('Should show the character names', () => {
    expect(wrapped.render().text()).toContain('Luke Skywalker');
})