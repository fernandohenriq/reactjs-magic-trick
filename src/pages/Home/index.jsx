import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Row } from '../../components/Grid';
import Button from '../../components/Button';

import './styles.css';

const styles = {
  main: {
    height: '65%',
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
  },
}

function Home() {

  return(
    <Container id="home">
      <Row style={styles.main}>
          <Link to='/selectCard'>
            <Button size={2}>Começar</Button>
          </Link>
      </Row>
    </Container>
  );
}

export default Home;
