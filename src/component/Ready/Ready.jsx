import React from "react";
import styles from "./Ready.module.css";

const Ready = () => {
  return (
    <section className={styles.Ready_secction}>
      <div className={styles.main_txt}>
        <h1>Ready to Get Started?</h1>
        <p>
          Join Baselinks Academy today and start your journey towards mastering
          creative and technical skills.
        </p>
      </div>
      <div className={styles.btn}>
          <a href=""><button>Sign up now!</button></a>
      </div>
    </section>
  );
};

export default Ready;
