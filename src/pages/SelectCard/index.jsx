import React, { useState, useEffect } from 'react';
import { Container, Row, Column } from '../../components/Grid';
import Button from '../../components/Button';

import deckEmpty from '../../assets/images/deck_empty.png';
import deckFull from '../../assets/images/deck_full.png';

import './styles.css';

const styles = {
  deckPlace: {
    padding: 20,
    backgroundColor: 'rgba(255,255,255,0.1)'
  },
  discartPlace: {
    height: '50%',
    padding: 20,
    backgroundColor: 'rgba(255,255,255,0.1)'
  },
  dialogText: {
    minHeight: '10rem',
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
}

const Dialog = 'Teste';

function SelectCard() {

  const [deck, setDeck] = useState(deckFull);

  const [dialog, setDialog] = useState('Escolha uma carta, memorize-a e aperte em continuar');

  useEffect(() => {
    
  }, [])

  return(
    <Container id="select-card">
      <Row style={{ ...styles.center, ...styles.deckPlace }}>
        <img src={deck} alt="Deck" />
      </Row>
      <Row style={{ ...styles.center, ...styles.discartPlace }}>
        <img src={deckEmpty} alt="Deck" />
      </Row>
      <Row style={{ ...styles.center, ...styles.dialogText }}>
        <Column>
          <Row style={styles.center}>
            <p>{ dialog }</p>
          </Row>
          <Row style={styles.center}>
            <Button>Continuar</Button>
          </Row>
        </Column>
      </Row>
    </Container>
  );
}

export default SelectCard;
