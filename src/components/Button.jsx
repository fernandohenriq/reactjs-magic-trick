import React from 'react';
import styled from 'styled-components';

const Button = props => {
  const size = props.size || 1;

  const ButtonStyled = styled.div`
    button {
      width: 100%;
      padding: ${1 * size}rem ${4 * size}rem;
      font-size: 1.25rem;
      font-weight: 700;
      text-transform: uppercase;
      border: 3px solid var(--color-primary);
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
  return ( 
    <ButtonStyled>
      <button {...props}>
        {props.children}
      </button>
    </ ButtonStyled>
  )
}

export default Button;