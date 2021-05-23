import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import { reducers } from './reducers/reducers';

export const Store = createStore(reducers, compose(applyMiddleware(thunk)));