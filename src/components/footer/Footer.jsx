import React from 'react';
import { Container } from '../utils/Container';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footerOuter}>
      <Container>
        <div className={styles.footer}>
          <div className={styles.footerInner}>
            <div className={styles.titleDiv}>
              <h1>Your Company</h1>
              <p>Halimun Street 25 Jakarta, Indonesia 12850</p>
              <a href="#link">www.yourdomain.com</a>
            </div>
            <div className={styles.logoSite}>
              <img
                style={{ width: '50px' }}
                src="site/header/Logo.png"
                alt=""
              />
              <p>Copyright © 2020 Freepik</p>
              <p>Company S.L. All rights reserved.</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer
