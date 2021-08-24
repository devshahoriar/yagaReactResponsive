import styled, { css } from 'styled-components';

export const FlexDiv = styled.div`
  display: flex;
  @media (max-width: 820px) {
    position: relative;
  }
`;

export const DfButton = styled.button`
  outline: none;
  border: none;
  background-color: #f1c9c4;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  color: #434e5b;
  padding: 10px 20px;
  cursor: pointer;
  @media (max-width: 820px) {
    padding: 10px 10px;
  }
`;

export const DfText = styled.h1`
  color: #434e5b;
  font-size: 45px;
  font-weight: bold;
  max-width: 400px;
  @media (max-width: 1175px) {
    max-width: 300px;
    font-size: 30px;
  }
`;

export const DfParag = styled.p`
  color: #434e5b;
`;

export const AbImageDiv = styled.div`
  position: absolute;
  z-index: -1;

  @media (max-width: 1175px) {
    max-width: 150px;
  }
  @media (max-width: 990px) {
    max-width: 80px;
  }

  ${(props) =>
    props.left
      ? css`
          left: ${props.left};
        `
      : ''}

  ${(props) =>
    props.right
      ? css`
          right: ${props.right};
        `
      : ''}

${(props) =>
    props.bottom
      ? css`
          bottom: ${props.bottom};
        `
      : ''}
      ${(props) =>
    props.zIndex
      ? css`
          z-index: ${props.zIndex};
        `
      : ''}

${(props) =>
    props.top
      ? css`
          top: ${props.top};
        `
      : ''}
`;
