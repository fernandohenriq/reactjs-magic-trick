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

export const setStep = (step) => {
  return {
    type: actionsTypes.SET_STEP,
    step: step
  }
}

export const savePiles = (piles) => {
  return {
    type: actionsTypes.SAVE_PILES,
    piles: piles
  }
}

export const deckActions = {
  nextStep: () => async (dispatch, getState) => {
    try {
      // Change to next step
      let { step } = getState().deckReducers;
      step += 1;
      dispatch(setStep(step));
      return (step);
    } catch(err) {
      alert("ERROR: ", err)
      dispatch(getDeckFail(err));
      return err;
    }
  },
  createNewDeck: () => async (dispatch, getState) => {
    try {
      // set loading = true and declare the deck info variables
      dispatch(setLoading(true));
      dispatch(savePiles([]));
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
      dispatch(getCards([]));
      dispatch(setStep(0));
      if (canCreateNewDeck) {
        dispatch(createDeck(res.data.deck_id));
      } else {
        dispatch(setLoading(true));
      }
      dispatch(setLoading(false));
      return res;
    } catch(err) {
      alert("ERROR: ", err)
      dispatch(getDeckFail(err));
      dispatch(setLoading(false));
      return err;
    }
  },
  drawCards: (count) => async (dispatch, getState) => {
    // draw cards from api pile
    try {
      dispatch(setLoading(true));
      const { deck_id } = getState().deckReducers;
      const res = await api.get(`/api/deck/${ deck_id }/pile/pile_a/draw/?count=${count || 21}`);
      dispatch(getCards(res.data.cards));
      dispatch(setLoading(false));
      return res;
    } catch (err) {
      alert("ERROR: ", err)
      dispatch(getDeckFail(err));
      dispatch(setLoading(false));
      return err;
    }
  },
  addCardsToPileAndShuffle: () => async (dispatch, getState) => {
    // Create pile, add and draw cards from API pile
    try {
      dispatch(setLoading(true));
      const { deck_id } = getState().deckReducers;
      let res = null;
      res = await api.get(`/api/deck/${ deck_id }/pile/pile_a/add/?cards=KS,AH,AS,AD,AC,2S,2D,2C,2H,3S,3D,3C,3H,4S,4D,4C,4H,5S,5D,5C,5H`);
      res = await api.get(`/api/deck/${ deck_id }/pile/pile_a/shuffle`);
      res = await api.get(`/api/deck/${ deck_id }/pile/pile_a/draw/?count=${ 21 }`);
      dispatch(getCards(res.data.cards));
      dispatch(setLoading(false));
      return res.data;
    } catch (err) {
      alert("ERROR: ", err)
      dispatch(getDeckFail(err));
      dispatch(setLoading(false));
      return err;
    }
  },
  addCardsToLocalPiles: () => async (dispatch, getState) => {
    // Create and add cards in local piles
    try {
      dispatch(setLoading(true));
      let { cards } = getState().deckReducers;
      let count = 0;
      let piles = [[],[],[]];
      cards.map(card => {
        piles[count].push(card)
        count += 1;
        if (count > 2) count = 0;
        return true;
      });
      dispatch(getCards([]));
      dispatch(savePiles(piles));
      dispatch(setLoading(false));
      return piles;
    } catch (err) {
      alert("ERROR: ", err)
      dispatch(getDeckFail(err));
      dispatch(setLoading(false));
      return err;
    }
  },
  shuffleCardsInLocalPiles: (middle_pile) => async (dispatch, getState) => {
    // shuffle piles and display cards
    try {
      dispatch(setLoading(true));
      let { piles } = getState().deckReducers;
      middle_pile = piles[middle_pile];
      piles = piles.filter(pile => pile !== middle_pile);
      piles.sort(() => Math.random() - 0.5);
      piles.splice(1,0,middle_pile);
      let nPiles = [[],[],[]];
      let count = 0;
      piles.map(pile => {
        pile.map(card => {
          nPiles[count].push(card);
          count++;
          if (count >= 3) count = 0;
          return true;
        })
        return true;
      });
      piles = nPiles;
      dispatch(savePiles(piles));
      dispatch(setLoading(false));
      return piles;
    } catch (err) {
      alert("ERROR: ", err)
      dispatch(getDeckFail(err));
      dispatch(setLoading(false));
      return err;
    }
  },
  drawSelectedCard: () => async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
      let { piles } = getState().deckReducers;
      let cards = [];
      piles.map(pile => {
        pile.map(card => {
          cards.push(card);
          return true;
        })
        return true;
      })
      dispatch(savePiles([]));
      dispatch(getCards(cards));
      dispatch(setLoading(false));
      return piles[1][3];
    } catch (err) {
      alert("ERROR: ", err)
      dispatch(getDeckFail(err));
      // return
      dispatch(setLoading(false));
      return err;
    }
  },
  reset: () => async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
      dispatch(setStep(0));
      dispatch(savePiles([],[],[]));
      dispatch(getCards([]));
      dispatch(setLoading(false));
    } catch (err) {
      alert("ERROR: ", err)
      dispatch(getDeckFail(err));
      dispatch(setLoading(false));
      return err;
    }
  }
}

