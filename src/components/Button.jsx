import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.div`
  button {
    width: auto;
    maxWidth: 100%;
    padding: 2rem 8rem;
    font-size: 28px;
    font-weight: 700;
    text-transform: uppercase;
    border: 4px solid var(--color-primary);
    border-radius: 40px;
    background-color: rgba(255,255,255,0);
    color: var(--color-primary);
  }
  button:hover {
    background-color: rgba(255,255,255,0.25);
    border-color: rgba(255,255,255,0.25);
    cursor: pointer;
  }
`;

const Button = props => {
  return ( 
    <ButtonStyled>
      <button {...props}>
        {props.children}
      </button>
    </ ButtonStyled>
  )
}

export default Button;