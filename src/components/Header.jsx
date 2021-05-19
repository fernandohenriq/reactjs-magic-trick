import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Container, Row, Column } from './Grid';

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

  return(
    <Container style={ styles.header }>
      <Row style={ styles.center }>
        <Link to="/" style={ styles.logoText }>
          {/* <span>Magic Trick App</span> */}
          <img src={logo} alt="Logo" />
        </Link>
      </Row>
    </Container>
  );
}

export default Header;
