import React from 'react';
import { Container, Row } from '../../components/Grid';

import './styles.css';

function NotFount() {

  return(
    <Container id="notFound">
      <Row className="container">
        <p>404</p>
        <p>Oops! Something is wrong :</p>
      </Row>
    </Container>
  );
}

export default NotFount;
