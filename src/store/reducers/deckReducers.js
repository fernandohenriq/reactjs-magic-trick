import { actionsTypes } from '../actions/actionsTypes';
import moment from 'moment';

const INITIAL_STATE = {
  loading: false,
  step: 0,
  deck_id: JSON.parse(localStorage.getItem("deck_id")),
  deck_date: JSON.parse(localStorage.getItem("deck_date")),
  cards: [],
  piles: [[],[],[]],
  error: null,
}

const deckReducers = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case actionsTypes.GET_DECK_ID:
      const deck_date = moment();
      localStorage.setItem('deck_id', JSON.stringify(action.deck_id));
      localStorage.setItem('deck_date', JSON.stringify(deck_date));
      return ({
        ...state,
        deck_date: deck_date,
        deck_id: action.deck_id,
        error: null,
      });
    case actionsTypes.GET_CARDS:
      return ({
        ...state,
        cards: action.cards,
        error: null,
      });
    case actionsTypes.SAVE_PILES:
      return ({
        ...state,
        piles: action.piles,
        error: null,
      });
    case actionsTypes.GET_DECK_FAIL:
      return ({
        ...state,
        error: action.error,
      });
    case actionsTypes.LOADING:
      return ({
        ...state,
        loading: action.laoding,
      });
      case actionsTypes.SET_STEP:
        return ({
          ...state,
          step: action.step,
        });
    default:
        return state;
  }
};

export { deckReducers };