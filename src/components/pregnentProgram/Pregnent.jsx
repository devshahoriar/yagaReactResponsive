import React from 'react';
import { Container } from '../utils/Container';
import { DfButton, DfParag, DfText } from '../utils/utils';
import style from './prgnent.module.css';

const Pregnent = () => {
  return (
    <div
      className={style.pregnent}
      style={{
        backgroundImage: "url('/site/body1/pregnent.jpg')",
      }}
    >
      <Container>
        <div className={style.text}>
          <DfText>Pregnant Women Program</DfText>
          <DfParag>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat.
          </DfParag>
          <DfButton>Join us now</DfButton>
        </div>
      </Container>
    </div>
  );
}

export default Pregnent;
