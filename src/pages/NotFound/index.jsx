import React from 'react';

import { Container, Row } from '../../components/Grid';
import imgHandWithCards from '../../assets/images/hand_with_cards.png';

import './styles.css';

const styles = {
  image: {
    width: '25%',
    height: 'auto',
    margin: 30,
  }
}

function NotFount() {

  return(
    <Container id="notFound">
      <Row>
        <p> <img style={styles.image} src={ imgHandWithCards } alt="Ops, nada embaixo das mangas!" /></p>
        <p> {'Ops, nada embaixo das mangas!'} </p>
      </Row>
    </Container>
  );
}

export default NotFount;
