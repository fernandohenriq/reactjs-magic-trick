import React from 'react';
import { Container, Row, Column } from './Grid';

const styles = {
  footer: {
    padding: '1rem',
    width: '100%',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
  },
  link: {
    marginLeft: '1rem',
    textDecoration: 'none',
    color: 'inherit',
    fontSize: '1.25rem',
    cursor: 'pointer',
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
          <p onClick={() => window.open("https://github.com/fernandohenriq")} style={styles.link}>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
          </p>
          <p onClick={() => window.open("https://gitlab.com/fernandohenriq")} style={styles.link}>
            <i className="fa fa-gitlab" aria-hidden="true"></i>
          </p>
          <p onClick={() => window.open("https://www.linkedin.com/in/fernando-henrique-silva-ba81a1b1/")} style={styles.link}>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          </p>
        </Row>
      </Column>
    </Container>
  )
}

export default Footer;