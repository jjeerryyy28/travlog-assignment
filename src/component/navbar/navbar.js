'use-client';
import React from 'react';
import Link from 'next/link';
import StyledComponent from './styleComponent';
import styles from './Nav.module.css';
import Image from 'next/image';

const NavBar = () => {
  return (
    <div className={styles['nav-bar']}>
      <StyledComponent>
        <nav className={styles.nav}>
          <div className={styles.left}>
            <Link href='/'>
              <div>
                <img src="/vector.png" />
                <span className={styles.name}>Travlog</span>
              </div>
            </Link>
          </div>
          <div className={styles.center}>
            <ol>
              <li id={styles.home}>
                <Link href='#home' style={{color: "black"}}>Home</Link>
              </li>
              <li id={styles.discover}>
                <Link href='#Discover' style={{color: "black"}}>Discover</Link>
              </li>
              <li id={styles.specialDeals}>
                <Link href='#Special-deals' style={{color: "black"}}>Special Deals</Link>
              </li>
              <li id={styles.contact}>
                <Link href='#Contact' style={{color: "black"}}>Contact</Link>
              </li>
            </ol>
          </div>
          <div className={styles.btn}>
            <button>
              <span className={styles.login}>
                <Link href="#login" style={{color: "black"}}>
                  Log In
                </Link>
              </span>
            </button>
            <button>
              <span className={styles.signup}>
                <Link href="#sign-up" style={{color: "#fff"}}>
                  Sign Up
                </Link>
              </span>
            </button>
          </div>
        </nav>
      </StyledComponent>
    </div>
  );
};

export default NavBar;
