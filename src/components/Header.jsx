import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { deckActions } from '../store/actions/deckActions';

import { Container, Row } from './Grid';
import logo from '../assets/images/logo_1.png';

const styles = {
  header: {
    width: '100%',
    // backgroundColor: '#c2c2c2',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    cursor: 'pointer',
  },
  icon: {
    fontSize: '4rem',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: '700',
    marginLeft: '1rem',
  },
}

function Header() {
  let history = useHistory();
  const dispatch = useDispatch();

  const reset = () => {
    dispatch(deckActions.reset());
    history.push('/');
  }

  return(
    <Container style={ styles.header }>
      <Row onClick={() => reset()} style={ styles.center }>
          <img src={logo} alt="Logo" />
      </Row>
    </Container>
  );
}

export default Header;
