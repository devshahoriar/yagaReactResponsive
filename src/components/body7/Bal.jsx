import React from 'react';
import { Container } from '../utils/Container';
import { DfParag, DfText } from '../utils/utils';
import styles from './bal.module.css';
const Bal = () => {
  return (
    <div className={styles.main}>
      <Container>
        <div className={styles.body}>
          <div className={styles.video}>
            <div className={styles.innerVideo}>
              <div className={styles.imageDiv}>
                <img
                  className={styles.modelImg}
                  src="/site/body6/Image.png"
                  alt=""
                />
                <img
                  className={styles.playButton}
                  src="/site/body6/Shape.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className={styles.text}>
            <div className={styles.innerText}>
              <DfText>Yoga Training Video Showreel</DfText>
              <DfParag>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </DfParag>
              <div className={styles.sociAlLogo}>
                <img
                  style={{ width: '35px' }}
                  src="/site/body6/Facebook.png"
                  alt=""
                />
                <img
                  style={{ width: '35px' }}
                  src="/site/body6/Instagram.png"
                  alt=""
                />
                <img
                  style={{ width: '35px' }}
                  src="/site/body6/Twitter.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default  Bal;