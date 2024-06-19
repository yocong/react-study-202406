import React from 'react'
import styles from './Navigation.module.css';

const Navigation = ({ onLogout, isLoggedIn }) => {

  let renderPage = (
    <>
      <li>
        <a href="/">MyPage</a>
      </li>

      <li>
        <a href="/">Admin</a>
      </li>

      <li>
        <button onClick={onLogout}>Logout</button>
      </li>
    </>

  );

  if (!isLoggedIn) {
    renderPage = <li><button>Sign Up</button></li>
  }

  return (
    <nav className={styles.nav}>
      <ul>
        {renderPage}
      </ul>
    </nav>
  )
}

export default Navigation