import React, { useEffect, useState } from 'react';
import { Container } from '../utils/Container';
import FullDiv from '../utils/FullDiv';
import { BarHandler, HeaderM } from './Header.com';
import style from './header.module.css';

const Header = () => {
  const [mobilOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fun = () => {
      var w = window.innerWidth;
      if (w < 830) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('resize', fun);

    return () => {
      window.removeEventListener('resize', fun);
    };
  }, []);

  return (
    <FullDiv relative>
      <div className={style.mobileMenu} style={mobilOpen ? { top: 0 } : {}}>
        <ul>
          <li>
            <a onClick={() => setMobileOpen(false)} href="#home">
              Home
            </a>
          </li>
          <li>
            <a onClick={() => setMobileOpen(false)} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={() => setMobileOpen(false)} href="#blog">
              Blog
            </a>
          </li>
          <li>
            <a onClick={() => setMobileOpen(false)} href="#training">
              Training
            </a>
          </li>
          <li>
            <a onClick={() => setMobileOpen(false)} href="#event">
              Event
            </a>
          </li>
          <li>
            <a onClick={() => setMobileOpen(false)} href="#shop">
              Shop
            </a>
          </li>
          <li>
            <a onClick={() => setMobileOpen(false)} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <Container>
        <HeaderM>
          <img className={style.logo} src="/site/header/logo.png" alt="logo" />
          <button
            className={style.handeler}
            onClick={() => setMobileOpen(true)}
          >
            <BarHandler />
            <BarHandler />
            <BarHandler />
          </button>

          <nav className={style.navBar}>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#training">Training</a>
              </li>
              <li>
                <a href="#event">Event</a>
              </li>
              <li>
                <a href="#shop">Shop</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </HeaderM>
      </Container>
    </FullDiv>
  );
};

export default Header;
