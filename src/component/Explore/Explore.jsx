import React from 'react'
import styles from "./Explore.module.css"

const Explore = () => {
  return (
    <section className={styles.courses}>
  <div className={styles.courses_head}>
    <h2>Explore Our Courses</h2>
    <p>Find the Perfect Course for You</p>
  </div>

  <div className={styles.course_grid}>
    <article className={styles.course_card}>
      <span className={styles.tab}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 4h12v14H6zM9 4v14M6 8h12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      <h3>Creative Skills</h3>
      <ul>
        <li>Video editing</li>
        <li>Animation</li>
        <li>Graphic design</li>
      </ul>
    </article>

    <article className={styles.course_card}>
      <span className={styles.tab}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 4h12v14H6zM9 4v14M6 8h12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      <h3>Technical Skills</h3>
      <ul>
        <li>Front end</li>
        <li>UI UX Design</li>
        <li>Programming</li>
        <li>Photography</li>
      </ul>
    </article>
    <article className={styles.course_card}>
      <span className={styles.tab}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 4h12v14H6zM9 4v14M6 8h12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      <h3>Business Skills</h3>
      <ul>
        <li>Project management</li>
        <li>Digital marketing</li>
        <li>Sales and marketing</li>
      </ul>
    </article>
    <article className={styles.course_card}>
      <span className={styles.tab}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 4h12v14H6zM9 4v14M6 8h12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      <h3>Personal dev.</h3>
      <ul>
        <li>Communication skills</li>
        <li>Leadership</li>
      </ul>
    </article>
  </div>
</section>
  )
}

export default Explore
