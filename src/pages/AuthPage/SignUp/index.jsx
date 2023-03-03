import React from 'react'

//styles
import styles from './signup.module.css'

//routing
// import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className={styles.signup__container}>
      <div className={styles.header__container}>
        <img src='../../public/assets/img/spotify.png' className={styles.spotify__img} />
        <h1 className={styles.spotify__name}>Spotify</h1>
      </div>

      <div className={styles.input__form}>
        <div className={styles.input__email}>
          <label className={styles.input__label} htmlFor='InputEmail'>
            What's your email?
          </label>
          <input type="email" id="InputEmail" className={styles.input__field} placeholder='Enter your email' />
        </div>

        <div className={styles.input__confirmemail}>
          <label className={styles.input__label} htmlFor='InputEmail'>
            Confirm your email
          </label>
          <input type="email" id="InputEmail" className={styles.input__field} placeholder='Enter your email again' />
        </div>

        <div className={styles.input__psswrd}>
          <label className={styles.input__label} htmlFor='InputPsswrd'>
            Password
          </label>
          <input type="password" id="InputPsswrd" className={styles.input__field} placeholder='Create password' />
        </div>

        <div className={styles.input__nickname}>
          <label className={styles.input__label} htmlFor='InputNickName'>
            What we call you?
          </label>
          <input type="text" id="InputNickName" className={styles.input__field} placeholder='Enter your profile name' />
        </div>

        <div className={styles.input__gender}>
          <p className={styles.gender__inputfield}>What's your gender?</p>

          <input type="radio" value='Male' id="InputMale" name="gender" className={styles.gender__input}></input>
          <label className={styles.gender__label} htmlFor="InputMale">
            Male
          </label>

          <input type="radio" value='Female' id="InputFemale" name='gender' className={styles.gender__input}></input>
          <label className={styles.gender__label} htmlFor="InputFemale">
            Female
          </label>

          <input type="radio" value='Other' id="InputOther" name='gender' className={styles.gender__input}></input>
          <label className={styles.gender__label} htmlFor="InputOther">
            Other
          </label>
        </div>

        <button className='btn btn--login'>SIGN UP </button>

        {/* <Link to="/AuthPage/LogIn">
          <button className={styles.login__btn}>Have an account?</button> 
        </Link> */}
      </div>
    </div>
  )
}

export default SignUp;