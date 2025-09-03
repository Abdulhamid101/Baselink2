import React from "react";
import styles from "./WhyBaselinks.module.css";
import image1 from "../../assets/whyimg.png";

const WhyBaselinks = () => {
  return (
    <section className={styles.WhyBaselinks_section}>
      <h1>Why baselinks Academy?</h1>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src={image1} alt="" />
        </div>
        <div className={styles.right}>
          <ul className={styles.benefits}>
            <li className={styles.benefit}>
              <span className={styles.icon} aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M9 3h6a2 2 0 0 1 2 2v1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1V5a2 2 0 0 1 2-2Zm0 3V5h6v1H9Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
              <div>
                <h3>Expert Instructors</h3>
                <p>Learn from industry experts with real-world experience.</p>
              </div>
            </li>

            <li  className={styles.benefit}>
              <span className={styles.icon} aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M4 7h12M4 12h16M4 17h10" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>
              </span>
              <div>
                <h3>Flexible Learning</h3>
                <p>
                  Access courses anytime, anywhere, and learn at your own pace.
                </p>
              </div>
            </li>

            <li  className={styles.benefit}>
              <span className={styles.icon} aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M12 3l2.3 4.7L20 8.4l-3.9 3.8.9 5.4-4.9-2.6-4.9 2.6.9-5.4L4 8.4l5.7-.7L12 3z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>
              </span>
              <div>
                <h3>Certification</h3>
                <p>Earn recognized certificates to showcase your new skills.</p>
              </div>
            </li>

            <li  className={styles.benefit}>
              <span className={styles.icon} aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M15 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM4 19a5 5 0 0 1 10 0M14 19a5 5 0 0 1 9-3" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
              <div>
                <h3>Community</h3>
                <p>Join a vibrant community of learners and professionals.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyBaselinks;
