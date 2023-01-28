import React from 'react'

//routing 
import { Routes, Route } from "react-router-dom"

import styles from './rootpage.module.css';

import logo from '../../../public/assets/img/spotify.png';

//authentication page 
import LogIn from "./AuthPage/Login/index.jsx"
import SignUp from "./AuthPage/SignUp/index.jsx"

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
      <Routes>
      <Route path="./AuthPage/Login/index" element={<LogIn />}></Route>
     </Routes>
    </div>
  );
}

export default RootPage;