import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin: auto;
  max-width: 1140px;

  ${(props) =>
    props.relative &&
    css`
      position: relative;
    `}

  @media (max-width: 1180px) {
    max-width: 1000px;
  }

  @media (max-width: 1020px) {
    max-width: 800px;
  }
  @media (max-width: 810px) {
    max-width: 600px;
  }
  @media (max-width: 610px) {
    max-width: 450px;
  }
`;
