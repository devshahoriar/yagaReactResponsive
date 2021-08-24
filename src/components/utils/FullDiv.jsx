import styled, { css } from 'styled-components';

const FullDiv = styled.div`
  ${(props) =>
    props.relative &&
    css`
      position: relative;
    `}

`;

export default FullDiv;
