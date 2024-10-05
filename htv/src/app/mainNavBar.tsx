"use client"; 
import React from "react";
import styles from '../styles/style.module.css';  
import { useState } from 'react'; 

export default function MainNav() {
  const [isSticky, setIsSticky] = useState(false);

  React.useEffect(() => {

    // Handle scroll for sticky nav
    const handleScroll = () => {
      const threshold = window.innerHeight / 2;
      setIsSticky(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);

  }, []);

  return (
    <nav className={`${styles.Titlebar} ${isSticky ? styles.sticky : ''}`}>
      <img className={styles.logo} alt="logo" />
      <a className={styles.title} href="/">Bit by Bit</a>
      <div className={styles.menu}>

        <ul className={styles.menuItems}>
          <li><a href="/about">About</a></li>
          <li><a href="/admin">Admin</a></li>
          <li><a href="/upload">Upload</a></li>
          <li><a href="/request">Request</a></li>
        </ul>
        
      </div>
    </nav>
  );

}