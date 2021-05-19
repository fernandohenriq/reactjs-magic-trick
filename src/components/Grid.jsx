import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  //max-width: 1360px;
  max-width: 1024px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  &:before,
  &:after {
    content: " ";
    display: table;
  }
  &:after {
    clear: both;
  }
`;

export const Row = styled.div`
  width: 100%;
  height: auto;
  margin: .25rem 0;
  float: left;
  box-sizing: border-box;
  &:before,
  &:after {
    content: " ";
    display: table;
  }
  &:after {
    clear: both;
  }
`;

function getWidthGrid(value) {
  if (!value) return `width: 100%`;

  let width = value / 12 * 100;
  return `width: ${width}%`;
}

export const Column = styled.div`
  float: left;
  padding: .25rem;
  min-height: 1px;
  box-sizing: border-box;

  @media only screen and (max-width: 768px) {
    ${({ sm }) => sm && getWidthGrid(sm)}
    ${({ col }) => col && getWidthGrid(col)}
  }
  @media only screen and (min-width: 768px) {
    ${({ md }) => md && getWidthGrid(md)}
    ${({ col }) => col && getWidthGrid(col)}
  }
  @media only screen and (min-width: 1000px) {
    ${({ lg }) => lg && getWidthGrid(lg)}
    ${({ col }) => col && getWidthGrid(col)}
  }
  ${({ sm, md, lg }) => !sm && !md && !lg && getWidthGrid()}
`;