import { actionsTypes } from './actionsTypes';
import moment from 'moment';

import api from '../../service/api'

export const createDeck = (deck_id) => {
  return {
    type: actionsTypes.GET_DECK_ID,
    deck_id: deck_id
  }
}

export const getCards = (cards) => {
  return {
    type: actionsTypes.GET_CARDS,
    cards: cards
  }
}

export const getDeckFail = (error) => {
  return {
    type: actionsTypes.GET_DECK_FAIL,
    error: error
  }
}

export const setLoading = (loading) => {
  return {
    type: actionsTypes.LOADING,
    loading: loading
  }
}

export const deckActions = {
  createNewDeck: () => async (dispatch, getState) => {
    try {
      // set loading = true and declare the deck info variables
      dispatch(setLoading(true));
      const { deck_date, deck_id } = getState().deckReducers;
      // check if the deck was created more than 2 weeks ago (14 days)
      let canCreateNewDeck = true;
      if (deck_date && deck_id) {
        let date = moment(deck_date);
        let today = moment();
        let diff = moment(today).diff(date, 'days');
        canCreateNewDeck = (diff >= 14 || !deck_id);
      }
      // create a new deck or shuffle an existing one
      let res = null;
      res = await api.get(`/api/deck/${canCreateNewDeck ? 'new' : deck_id }/shuffle/?cards=KS,AH,AS,AD,AC,2S,2D,2C,2H,3S,3D,3C,3H,4S,4D,4C,4H,5S,5D,5C,5H`);
      // get cards from deck_id
      res = await api.get(`/api/deck/${ res.data.deck_id }/draw/?count=21`);
      // create a pile to work with it
      res = await api.get(`/api/deck/${ res.data.deck_id }/pile/pile_a/add/?cards=KS,AH,AS,AD,AC,2S,2D,2C,2H,3S,3D,3C,3H,4S,4D,4C,4H,5S,5D,5C,5H`);
      // store deck info
      if (canCreateNewDeck) {
        dispatch(createDeck(res.data.deck_id));
      } else dispatch(setLoading(true));
      // debug
      console.log(`DECK ${ canCreateNewDeck ? "CRIADO E EMBARALHADO" : "EMBARALHADO" }`, res.data);
      // return
      return res;
    } catch(err) {
      console.log("ERROR: ", err);
      dispatch(getDeckFail(err));
      // return
      return err;
    }
  },
  // createNewDeck: () => async (dispatch, getState) => {
  //   try {
      
  //   } catch (err) {
      
  //   }
  // },
}

