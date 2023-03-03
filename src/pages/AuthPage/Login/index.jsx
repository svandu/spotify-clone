import React from 'react'

// import { Link } from "react-router-dom"

//styles
import styles from "./login.module.css"

function LogIn() {
  return (
    <div className={styles.login__container}>
      <div className={styles.header__container}>
        <img src='../../public/assets/img/spotify.png' className={styles.spotify__img} />
        <h1 className={styles.spotify__name}>Spotify</h1>
      </div>

      <div className={styles.input__form}>
        <div className={styles.input__email}>
          <label className={styles.input__label} htmlFor='InputEmail'>
            Email address
          </label>
          <input type="email" id="InputEmail" className={styles.input__field} placeholder='Email address' />
        </div>

        <div className={styles.input__psswrd}>
          <label className={styles.input__label} htmlFor='InputPsswrd'>
            Password
          </label>
          <input type="password" id="InputPsswrd" className={styles.input__field} placeholder='Password' />
        </div>

        <div className={styles.btn__container}>
          <button className='btn btn--login'>LOG IN </button>

          {/* <Link to="/AuthPage/SignUp">
            <button className={styles.signup__btn}>Dont have an account?</button> 
          </Link> */}
        </div>
      </div>
      
    </div>
  )
}

export default LogIn