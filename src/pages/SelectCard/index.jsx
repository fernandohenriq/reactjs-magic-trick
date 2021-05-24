import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deckActions } from '../../store/actions/deckActions';

import { Container, Row, Column } from '../../components/Grid';
import Button from '../../components/Button';

import cardBack from '../../assets/images/card_back.png';

import './styles.css';

const styles = {
  deckPlace: {
    padding: 20,
    backgroundColor: 'rgba(255,255,255,0.1)'
  },
  discartPlace: {
    minHeight: '30rem',
    height: 'auto',
    padding: 20,
    backgroundColor: 'rgba(255,255,255,0.1)'
  },
  dialogText: {
    minHeight: '20rem',
    padding: 20,
    fontSize: '28px',
    fontWeight: '700',
    textTransform: 'uppercase',
    color: 'var(--color-primary)',
    backgroundColor: 'rgba(255,255,255,0.1)'
  },
  center: {
    display: 'flex',
    padding: 20,
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  image: {
    maxWidth: '6rem',
    height: 'auto',
    cursor: 'pointer',
  },
}

function SelectCard(props) {
  
  const dispatch = useDispatch();
  const loading = useSelector(state => state.deckReducers.loading);
  const cards = useSelector(state => state.deckReducers.cards);
  const piles = useSelector(state => state.deckReducers.piles);
  const step = useSelector(state => state.deckReducers.step);

  const [dialog, setDialog] = useState('');

  useEffect(() => {
    switch (step) {
      case 0:
        // CREATE DECK OR RECICLE ONE
        dispatch(deckActions.createNewDeck())
        .then(() => dispatch(deckActions.nextStep()))
        break;
      case 1:
        // CHOOSE ONE CARD
        dispatch(deckActions.drawCards(21))
        setDialog(`Escolha uma carta, memorize e então clique em continuar`);
        break;
      case 2:
        // DO THE FIRST PILES SHUFFLE AND DISPLAY THE PILE TO CHOOSE
        dispatch(deckActions.addCardsToPileAndShuffle())
        .then(() => dispatch(deckActions.addCardsToLocalPiles()))
        .then(() => dispatch(deckActions.nextStep()));
        break;
      case 3:
        setDialog(`Escolha a coluna de cartas onde está a sua carta`);
        break;
      case 4:
        setDialog(`Escolha novamente a coluna de cartas onde está a sua carta`);
        break;
      case 5:
        setDialog(`Escolha novamente a coluna de cartas onde está a sua carta`);
        break;
      case 6:
        dispatch(deckActions.drawSelectedCard());
        setDialog(`Esta é a sua carta?`);
        break;
      default:
        // do nothing
        break;
    }
  }, [step, dispatch]);

  const nextStep = () => {
    dispatch(deckActions.nextStep());
  }

  const handleColumnClick = (column) => {
    dispatch(deckActions.shuffleCardsInLocalPiles(column))
    .then(() => nextStep())
  }

  const isCorrectCard = () => {
    setDialog(`Eu sabia!`);
    nextStep();
  }

  const isIncorrectCard = () => {
    setDialog(`Ops, algo de errado aconteceu...`);
    nextStep();
  }

  const reset = () => {
    dispatch(deckActions.reset());
    props.history.push('/');
  }

  return(
    <Container id="select-card">
      {/* DIALOG AND BUTTON */}
      <Row style={{ ...styles.center, ...styles.dialogText }}>
        {
          loading ? <p>{"Carregando..."}</p> : <Column>
            <Row style={styles.center}>
              <p>{ dialog && dialog }</p>
            </Row>
            {(function() {
                switch(step) {
                    case 1:
                        return <Row style={styles.center}>
                            <Button onClick={() => nextStep()}>{'Continuar'}</Button>
                          </Row>
                    case 6:
                      return <Row style={styles.center}>
                          <div style={{ marginRight: 20 }}>
                            <Button onClick={() => isCorrectCard()}>{'Sim'}</Button>
                          </div>
                          <div>
                            <Button onClick={() => isIncorrectCard()}>{'Não'}</Button>
                          </div>
                        </Row>
                    case 7:
                        return <Row style={styles.center}>
                          <Button onClick={() => reset()}>{'Jogar novamente'}</Button>
                        </Row>
                    default:
                        return null;
                }
            })()}
          </Column>
        }
      </Row>
      {/* SHOW CARDS AND PILES */}
      <Row style={{ ...styles.center, ...styles.discartPlace }}>
        {
          loading ? <p>{"Carregando..."}</p> : piles.length > 0 ?
            <Row>
              {
                piles.map((pile, index) => (
                  <Column col={4} onClick={() => handleColumnClick(index)}>
                    <div style={{ marginBottom: 20 }}>
                      <Button size={0.25}>{"Coluna " + (index+1)}</Button>
                    </div>
                    <Column col={12} >
                      {
                        pile.map(card =>
                          <img src={ card.image } alt={card.value + ' ' + card.suit} key={card.code} style={styles.image} title={card.code} />
                        )
                      }
                    </Column>
                  </Column>
                ))
              }
            </Row>
          :
            cards.length > 0 &&
            <Row>
              {
                cards.map((card, index) => (
                  <Column col={3}>
                    {
                    step === 6 ?
                      index !== 10 ?
                        <img src={ cardBack } alt={card.value + ' ' + card.suit} key={card.code} style={styles.image} title={card.code} />
                      :
                        <img src={ card.image } alt={card.value + ' ' + card.suit} key={card.code} style={styles.image} title={card.code} />
                    :
                      <img src={ card.image } alt={card.value + ' ' + card.suit} key={card.code} style={styles.image} title={card.code} />
                    }
                  </Column>
                ))
              }
            </Row>
        }
      </Row>
    </Container>
  );
}

export default SelectCard;
