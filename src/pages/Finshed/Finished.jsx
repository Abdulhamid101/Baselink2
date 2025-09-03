import React from "react";
import styles from "./Finished.module.css";
import logo from "../../assets/Navlogo.png";
// import confettiImg from "../../assets/congrats.png"; 

export default function Finished() {
  const goHome = () => (window.location.href = "/");
  const continueApp = () => (window.location.href = "/dashboard");

  return (
    <section className={styles.auth}>
      <aside className={styles.rail}>
        <div className={styles.brand}>
          <img src={logo} alt="Baselink" />
          <div>
            <strong>Baselink</strong><br />Academy
          </div>
        </div>

        <ol className={styles.steps}>
          <li className={styles.done}>Your details</li>
          <li className={styles.done}>Verify email</li>
          <li className={styles.active}>Welcome to links academy</li>
        </ol>

        <div className={styles.wave} aria-hidden="true" />
        <button className={styles.back} onClick={goHome}>
          &larr; Return to home
        </button>
      </aside>

      <main className={styles.panel}>
        <h1 className={styles.title}>Welcome to Links Academy</h1>

        <div className={styles.card}>
          <img className={styles.thumb}/>
        </div>

        <button className={styles.primary} onClick={continueApp}>
          Finished
        </button>
        <p className={styles.caption}>Congrats, welcome to the community</p>

        <div className={styles.progress}>
          <span className={styles.barDone} />
          <span className={styles.barDone} />
          <span className={styles.barActive} />
        </div>
      </main>
    </section>
  );
}
