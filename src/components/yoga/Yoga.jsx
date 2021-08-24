import React from 'react';
import { Container } from '../utils/Container';
import { AbImageDiv, DfButton, DfParag, DfText } from '../utils/utils';
import style from './yoga.module.css';

const Yoga = () => {
  return (
    <div className={style.mainYoga}>
      <AbImageDiv top="0" left="0">
        <img src="/site/body3/topBack.png" alt="back" />
      </AbImageDiv>
      <AbImageDiv bottom="0" left="0">
        <img src="/site/body3/bottomBack.png" alt="back" />
      </AbImageDiv>
      <Container>
        <div className={style.yogaMainDiv}>
          <div className={style.yogaText}>
            <DfText>Yoga Breathing or Pranayama</DfText>
            <DfParag>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </DfParag>
            <DfButton>Learn More</DfButton>
          </div>
          <div className={style.yogaImg}>
            <div className={style.innerYagoImg}>
              <img src="/site/body3/model.png" alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Yoga
