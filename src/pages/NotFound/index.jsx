import React from 'react';

import { Container, Row } from '../../components/Grid';
import imghandWithCards from '../../assets/images/hand_with_cards.svg';

import './styles.css';

function NotFount() {

  return(
    <Container id="notFound">
      <Row>
        <p> {'404'} </p>
        <p> {'Ops, nada embaixo das mangas!'} </p>
        <p> <img src={ imghandWithCards } alt="Ops, nada embaixo das mangas!" /></p>
      </Row>
    </Container>
  );
}

export default NotFount;
