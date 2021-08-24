import React from 'react';
import { Container } from '../utils/Container';
import FullDiv from '../utils/FullDiv';
import { AbImageDiv, DfButton, DfParag, DfText, FlexDiv } from '../utils/utils';
import style from './hero.module.css';

const Hero = () => {
  return (
    <FullDiv relative>
      
      <AbImageDiv left="0px" top="0px">
        <img src="/site/header/back_2.png" alt="" />
      </AbImageDiv>

      <AbImageDiv right="0px" top="0px">
        <img src="/site/header/back_1.png" alt="" />
      </AbImageDiv>

      <AbImageDiv bottom="0px" right="0px">
        <img src="/site/header/back_3.png" alt="" />
      </AbImageDiv>

      <AbImageDiv top="70%" left="30%">
        <img src="/site/header/back_4.png" alt="" />
      </AbImageDiv>

      <Container>
        <FlexDiv>
          <div className={style.imageDiv}>
            <img src="/site/header/model_1.png" alt="Hero Model." />
          </div>
          <div className={style.textDiv}>
            <DfText>Balance Your Body and Mind</DfText>
            <DfParag>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </DfParag>
            <DfButton>Join us now</DfButton>
          </div>
        </FlexDiv>
      </Container>
    </FullDiv>
  );
};

export default Hero;
