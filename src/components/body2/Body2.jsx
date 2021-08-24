import React from 'react';
import { Container } from '../utils/Container';
import style from './body2.module.css';
const Body2 = () => {
  return (
    <div className={style.body2}>
      <Container>
        <div className={style.innerBody2}>
          <div className={style.card}>
            <div className={style.cardImage}>
              <img className={style.top} src="/site/body2/b1.png" alt="" />
              <img
                className={style.bottom}
                src="/site/body2/back1.png"
                alt=""
              />
            </div>
            <div className={style.cardText}>
              <h1>Program 1</h1>
              <p>sint occaecat cupidatat non </p>
            </div>
          </div>

          <div className={style.card}>
            <div className={style.cardImage}>
              <img className={style.top} src="/site/body2/b2.png" alt="" />
              <img
                className={style.bottom}
                src="/site/body2/back2.png"
                alt=""
              />
            </div>
            <div className={style.cardText}>
              <h1>Program 2</h1>
              <p>sint occaecat cupidatat non </p>
            </div>
          </div>

          <div className={style.card}>
            <div className={style.cardImage}>
              <img className={style.top} src="/site/body2/b3.png" alt="" />
              <img
                className={style.bottom}
                src="/site/body2/back3.png"
                alt=""
              />
            </div>
            <div className={style.cardText}>
              <h1>Program 3</h1>
              <p>sint occaecat cupidatat non </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Body2;
