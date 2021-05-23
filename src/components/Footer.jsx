import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Column } from './Grid';

const styles = {
  footer: {
    padding: '1rem',
    width: '100%',
    // backgroundColor: 'var(--color-secondary)',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
  },
  link: {
    marginLeft: '1rem',
    textDecoration: 'none',
    textDecoration: 'inherit',
    color: 'inherit',
    fontSize: '1.25rem',
  },
}

function Footer() {
  return(
    <Container style={ styles.footer }>
      <Column>
        <Row style={ styles.center }>
          <p>Created by Fernando Henrique </p>
        </Row>
        <Row style={ styles.center }>
          <Link to="https://github.com/fernandohenriq" style={styles.link}>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
          </Link>

          <Link to="https://gitlab.com/fernandohenriq" style={styles.link}>
            <i className="fa fa-gitlab" aria-hidden="true"></i>
          </Link>

          <Link to="https://www.linkedin.com/in/fernando-henrique-silva-ba81a1b1/" style={styles.link}>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          </Link>
        </Row>
      </Column>
    </Container>
  )
}

export default Footer;