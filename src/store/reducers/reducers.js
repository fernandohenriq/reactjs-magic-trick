import { combineReducers } from 'redux';

import { counterReducers } from './counterReducers';
import { deckReducers } from './deckReducers';

const reducers = combineReducers ({
  counterReducers,
  deckReducers
})

export { reducers }