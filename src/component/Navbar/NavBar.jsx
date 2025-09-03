import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/Navlogo.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <Link to="/" className={styles.brand}>
          <img src={logo} alt="Baselink Academy logo" />
          <span className={styles.brandText}>
            <strong>Baselink</strong>
            <br />
            Academy
          </span>
        </Link>
        <button
          className={`${styles.burger} ${open ? styles.open : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`${styles.menu} ${open ? styles.show : ""}`}>
          <li>
            <Link to="#">Home</Link>
          </li>
          <li>
            <Link to="#">Courses</Link>
          </li>
          <li>
            <Link to="#">About us</Link>
          </li>
          <li>
            <Link to="#">Testimonial</Link>
          </li>
          <li>
            <Link to="#">Contact us</Link>
          </li>
          <li className={styles.ctaMobile}>
            <Link className={styles.btn} to="/signup">
              Register
            </Link>
          </li>
        </ul>
        <div className={styles.actions}>
          <Link className={styles.btn} to="/signup">
            Register
          </Link>
        </div>
      </nav>
      <div
        className={`${styles.scrim} ${open ? styles.show : ""}`}
        onClick={() => setOpen(false)}
      />
    </header>
  );
}
