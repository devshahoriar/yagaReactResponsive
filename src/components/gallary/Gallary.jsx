import React from 'react';
import Card from '../card/Card';
import { Container } from '../utils/Container';
import styles from './gallary.module.css';

const Gallary = () => {
  return (
    <div className={styles.fullDiv}>
      <div className={`${styles.imagediv} ${styles.bottom}`}>
        <img src="/site/body5/cor1.png" alt="" />
      </div>
      <div className={`${styles.imagediv} ${styles.top}`}>
        <img src="/site/body5/cor2.png" alt="" />
      </div>
      <div className={`${styles.imagediv} ${styles.down}`}>
        <img src="/site/body5/nun1.png" alt="" />
      </div>
      <div className={`${styles.imagediv} ${styles.up}`}>
        <img src="/site/body5/noon2.png" alt="" />
      </div>
      <Container>
        <div className={styles.GallaryText}>
          <h1>Gallery</h1>
          <p>
            Neque laoreet suspendisse interdum consectetur libero id faucibus
            nisl tincidunt. Dictum fusce ut placerat orci nulla pellentesque
            dignissim enim sit.
          </p>
        </div>
        <div className={styles.cardContainer}>
          <Card img="/site/body5/nini1.png" />
          <Card img="/site/body5/nini2.png" />
          <Card img="/site/body5/nini3.png" />
        </div>
      </Container>
    </div>
  );
}

export default Gallary
