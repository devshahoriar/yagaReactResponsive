import React from 'react';
import { Container } from '../utils/Container';
import { AbImageDiv, DfButton, DfParag, DfText } from '../utils/utils';
import style from './join.module.css';

const JoinNow = () => {
  return (
    <div className={style.mainJoin}>
      <Container>
        <div className={style.innerJoin}>
          <div className={style.imgDiv}>
            <img src="/site/body4/fuMd.png" alt="" />
          </div>
          <div className={style.textDiv}>
            <div className={style.textBa}>
              <DfText>Join Now and Get 50% Off</DfText>
              <AbImageDiv zIndex='0' top='0'>
                <img src="/site/body4/brush.png" alt="" />
              </AbImageDiv>
            </div>

            <DfParag>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </DfParag>
            <DfButton>Join Now</DfButton>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default JoinNow
