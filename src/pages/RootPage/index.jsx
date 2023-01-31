import React from "react";

//routing
import { Link } from "react-router-dom";

import styles from "./rootpage.module.css";

import logo from "../../../public/assets/img/spotify.png";

function RootPage() {
  return (
    <div className={styles.root_container}>
      <div className={styles.logo_container}>
        <img src={logo} className={styles.logo__img} />
        <span className={styles.logo__title}>Spotify</span>
      </div>
      <div className={styles.btn_container}>
        <Link to="/AuthPage/SignUp">
          <button className="btn btn--signup">SIGN UP</button>
        </Link>

        <Link to="/AuthPage/LogIn">
          <button className="btn btn--login">LOG IN</button>
        </Link>
      </div>
    </div>
  );  
}

export default RootPage;
