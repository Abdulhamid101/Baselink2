import React from "react";
import styles from "./Footer.module.css";
import Logo from "../../assets/Navlogo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaReact,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.site_footer}>
      <div className={styles.footer_wrap}>
        <div className={styles.brand}>
          <span className={styles.badge} aria-hidden="true">
            <img src={Logo} alt="" />
          </span>
          <div className={styles.brand_text}>
            <strong>Baselink</strong>
            <br />
            Academy
          </div>
        </div>

        <nav className={styles.links} aria-label="Footer navigation">
          <h4>Quick Links:</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div className={styles.contact}>
          <h4>Contact Information</h4>
          <ul>
            <li>Address</li>
            <li>
              <a href="mailto:hello@baselinks.ac">Email</a>
            </li>
            <li>
              <a href="tel:+2340000000000">Phone number</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footer_mid}>
        <p>Subscribe to our newsletter for updates and exclusive content</p>

        <div className={styles.socials} aria-label="Social media">
           <a href="#" aria-label="Facebook"><FaFacebookF size={18} /></a>
          <a href="#" aria-label="Twitter"><FaTwitter size={18} /></a>
          <a href="#" aria-label="Instagram"><FaInstagram size={18} /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedinIn size={18} /></a>
        </div>
      </div>

      <div className={styles.footer_bottom}>
        <p>Copyright: © {year} Baselinks Academy. All rights reserved.</p>
      </div>
    </footer>
  );
}
