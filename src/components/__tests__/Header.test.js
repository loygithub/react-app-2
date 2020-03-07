import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';

let wrapped;

beforeEach(() => {
    wrapped = shallow(<Header />);
});

it('Should show the header component', () => {
    expect(wrapped.find('.header-container').length).toEqual(1);
})