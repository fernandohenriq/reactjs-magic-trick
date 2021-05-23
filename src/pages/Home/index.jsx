import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Column } from '../../components/Grid';
import Button from '../../components/Button';

import './styles.css';

const styles = {
  main: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
  },
}

function Home() {

  return(
    <Container id="home">
      <Row style={ styles.main }>
        <Column col='12' style={ styles.main }>
          <Link to='/selectCard'>
            <Button>Começar</Button>
          </Link>
        </Column>
      </Row>
    </Container>
  );
}

export default Home;
