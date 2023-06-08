import React, { useState } from 'react';
import styles from './NavigationBar.module.css';
import Link from "next/link";
import { useRouter } from 'next/router';

const NavigationBar = () => {
  const [isGamesDropdownOpen, setGamesDropdownOpen] = useState(false);
  const [isBlogDropdownOpen, setBlogDropdownOpen] = useState(false);
  const router = useRouter();

  const handleGamesDropdownClick = () => {
    setGamesDropdownOpen(!isGamesDropdownOpen);
  };

  const handleBlogDropdownClick = () => {
    setBlogDropdownOpen(!isBlogDropdownOpen);
  };
  const handleHomeClick = () => {
    console.log("Home Clicked");
    router.push("/");
  }

  return (
    <>
    <h1>The-Bhoi-Wonder</h1>
    <nav>
      <ul className={styles['horizontal-list']}>
        <li>
          <button className={`${styles['nav-button']} ${styles['nav-button-home']}`} onClick={handleHomeClick}>
          Home
          </button>
        </li>
        <li className={`dropdown ${isGamesDropdownOpen ? 'open' : ''}`}>
          <button className={`${styles['dropdown-toggle']} ${styles['dropdown-toggle-games']}`} onClick={handleGamesDropdownClick}>
            Games
          </button>
          {isGamesDropdownOpen && (
            <div className={`${styles['dropdown-content']} ${styles['dropdown-content-games']}`}>
              <Link href="/games/tic-tac-toe">Tic-Tac-Toe</Link>
              <Link href="/games/sequence">Sequence</Link>
            </div>
          )}
        </li>
        <li className={`dropdown ${isBlogDropdownOpen ? 'open' : ''}`}>
          <button className={`${styles['dropdown-toggle']} ${styles['dropdown-toggle-blog']}`} onClick={handleBlogDropdownClick}>
            Blog
          </button>
          {isBlogDropdownOpen && (
            <div className={`${styles['dropdown-content']} ${styles['dropdown-content-blog']}`}>
              <Link href="/posts/first-post">First Post</Link>
              <a>More posts to be added</a>
            </div>
          )}
        </li>
        <li>
          <button className={`${styles['nav-button']} ${styles['nav-button-settings']}`} onClick={() => console.log('Settings clicked')}>
            Settings
          </button>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default NavigationBar;
