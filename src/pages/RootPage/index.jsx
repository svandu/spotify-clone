import React from 'react'

import styles from './rootpage.module.css';

import logo from '../../../public/assets/img/spotify.png';

function RootPage() {
  return (
    <div className={styles.root_container}>
      <div className={styles.logo_container}>
          <img src={logo} className={styles.logo__img} />
          <span className={styles.logo__title}>Spotify</span>
      </div>
      <div className={styles.btn_container}>                      
          <button className='btn btn--signup'>SIGN UP</button>
          <button className='btn btn--login'>LOG IN</button>
      </div>
    </div>
  );
}

export default RootPage;