import React from "react";
import styles from "./Hero.module.css";
import image2 from "../../assets/Heroimg.png";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_wrap}>
        <div className={styles.hero_text}>
          <h1>
            Empower Your <span className={styles.accent}>Future</span> with
            In-Demand <span className={styles.accent}>Creative</span> and
            Technical Skills
          </h1>
          <p>
            Join Baselinks Academy and unlock a world of opportunities with our
            robust and user-friendly online learning platform
          </p>

          <div className={styles.cta}>
            <a className={styles.btn_outline} href="#">Browse courses</a>
            <a className={styles.btn_primary} href="#">Sign up</a>
          </div>
        </div>

        <div className={styles.hero_art}>
          <div className={styles.pill}>
            <div className={styles.circle_img}>
              <img src={image2} alt="Person using a phone" />
            </div>
            <span className={styles.arc_tl} />
            <span className={styles.arc_br} />
          </div>
        </div>
      </div>
      <div className={styles.dots} />
    </section>
  );
}
