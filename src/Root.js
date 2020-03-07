import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

export default ({ children, initialState = {} }) => {
    return (
        <Provider store={createStore(reducers, initialState, applyMiddleware(thunk))}>
            {children}
        </Provider>
    );
};