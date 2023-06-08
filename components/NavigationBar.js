import React, { useState } from 'react';
import styles from './NavigationBar.module.css';

const NavigationBar = () => {
  const [isGamesDropdownOpen, setGamesDropdownOpen] = useState(false);
  const [isBlogDropdownOpen, setBlogDropdownOpen] = useState(false);

  const handleGamesDropdownClick = () => {
    setGamesDropdownOpen(!isGamesDropdownOpen);
  };

  const handleBlogDropdownClick = () => {
    setBlogDropdownOpen(!isBlogDropdownOpen);
  };

  return (
    <nav>
      <ul className={styles['horizontal-list']}>
        <li>
          <button className={`${styles['nav-button']} ${styles['nav-button-home']}`} onClick={() => console.log('Home clicked')}>
          Home
          </button>
        </li>
        <li className={`dropdown ${isGamesDropdownOpen ? 'open' : ''}`}>
          <button className={`${styles['dropdown-toggle']} ${styles['dropdown-toggle-games']}`} onClick={handleGamesDropdownClick}>
            Games
          </button>
          {isGamesDropdownOpen && (
            <div className={`${styles['dropdown-content']} ${styles['dropdown-content-games']}`}>
              <a href="/games/tic-tac-toe">Tic-Tac-Toe</a>
              <a>Add more games</a>
            </div>
          )}
        </li>
        <li className={`dropdown ${isBlogDropdownOpen ? 'open' : ''}`}>
          <button className={`${styles['dropdown-toggle']} ${styles['dropdown-toggle-blog']}`} onClick={handleBlogDropdownClick}>
            Blog
          </button>
          {isBlogDropdownOpen && (
            <div className={`${styles['dropdown-content']} ${styles['dropdown-content-blog']}`}>
              <a href="/posts/first-post">First Post</a>
              <a>Add more posts</a>
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
  );
};

export default NavigationBar;
