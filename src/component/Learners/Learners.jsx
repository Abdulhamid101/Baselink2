import React, { useRef } from "react";
import styles from "./Learners.module.css";
import image1 from "../../assets/Learnerimg1.png";
import image2 from "../../assets/Learnerimg2.png";
import image3 from "../../assets/Learnerimg3.png";

export default function Learners() {
  const trackRef = useRef(null);

  const scrollByCard = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(`.${styles.t_card}`);
    const gap = parseInt(getComputedStyle(track).gap || 16, 10);
    const width = card ? card.getBoundingClientRect().width + gap : 320;
    track.scrollBy({ left: dir * width, behavior: "smooth" });
  };

  return (
    <section className={styles.Learner_section}>
      <div className={styles.header}>
        <h1>What Our Learners Say</h1>
        <p>Success Stories from Our Community</p>
      </div>

      <div className={styles.slider_shell}>
        <button
          className={`${styles.navBtn} ${styles.prev}`}
          aria-label="Previous testimonial"
          onClick={() => scrollByCard(-1)}
        />
        <div className={styles.t_grid} ref={trackRef}>
          <article className={styles.t_card}>
            <div className={styles.t_top}>
              <div className={styles.avatar}>
                <img src={image1} alt="Hassan Jamal" />
              </div>
            </div>
            <div className={styles.t_body}>
              <h3>Hassan Jamal</h3>
              <p>
                "Baselinks Academy transformed my career. The courses are broad
                and easy to follow."
              </p>
            </div>
          </article>

          <article className={styles.t_card}>
            <div className={styles.t_top}>
              <div className={styles.avatar}>
                <img src={image2} alt="Blaire Thompson" />
              </div>
            </div>
            <div className={styles.t_body}>
              <h3>Blaire Thompson</h3>
              <p>
                "The flexibility of learning at my own pace made all the
                difference. Highly recommend!"
              </p>
            </div>
          </article>

          <article className={styles.t_card}>
            <div className={styles.t_top}>
              <div className={styles.avatar}>
                <img src={image3} alt="John Dee" />
              </div>
            </div>
            <div className={styles.t_body}>
              <h3>John Dee</h3>
              <p>
                "Baselinks Academy transformed my career. The courses are broad
                and easy to follow."
              </p>
            </div>
          </article>
        </div>

        <button
          className={`${styles.navBtn} ${styles.next}`}
          aria-label="Next testimonial"
          onClick={() => scrollByCard(1)}
        />
      </div>
    </section>
  );
}
