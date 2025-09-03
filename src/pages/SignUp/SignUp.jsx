import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";
import logo from "../../assets/Navlogo.png";

export default function SignUp() {
  const navigate = useNavigate();
  const [showPw, setShowPw] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    username: "",
    location: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [pwRules, setPwRules] = useState({ len: false, mix: false });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));

    if (name === "password") {
      setPwRules({
        len: value.length >= 8,
        mix: /[A-Za-z]/.test(value) && /\d/.test(value),
      });
    }
  };

  const validate = () => {
    const next = {};
    if (!form.fullName.trim()) next.fullName = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email";
    if (!/^\+?\d[\d\s\-()]{6,}$/.test(form.phone))
      next.phone = "Enter a valid phone";
    if (!form.username.trim()) next.username = "Required";
    if (!form.location.trim()) next.location = "Required";
    if (
      !(
        form.password.length >= 8 &&
        /[A-Za-z]/.test(form.password) &&
        /\d/.test(form.password)
      )
    ) {
      next.password = "PASSWORD NOT VALID";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    // --- DEMO storage (so Login/Dashboard can read real user info) ---
    localStorage.setItem("signupEmail", form.email);
    localStorage.setItem("signupPassword", form.password); // demo only; do NOT store plaintext in prod
    localStorage.setItem(
      "authUser",
      JSON.stringify({
        fullName: form.fullName,
        username: form.username,
        email: form.email,
        phone: form.phone,
        location: form.location,
      })
    );
    localStorage.setItem(
      "displayName",
      form.fullName || form.username || "User"
    );

    // Redirect to login and prefill email
    navigate("/login", { state: { email: form.email } });

    // --- REAL API (replace demo with this) ---
    // try {
    //   const res = await fetch("http://localhost:5000/api/signup", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(form),
    //   });
    //   if (!res.ok) {
    //     const data = await res.json().catch(() => ({}));
    //     return setErrors((s) => ({ ...s, global: data.message || "Sign up failed" }));
    //   }
    //   navigate("/login", { state: { email: form.email } });
    // } catch (err) {
    //   setErrors((s) => ({ ...s, global: "Network error. Please try again." }));
    // }
  };

  return (
    <section className={styles.auth}>
      <aside className={styles.rail}>
        <div className={styles.brand}>
          <img src={logo} alt="" />
          <div>
            <strong>Baselink</strong>
            <br />
            Academy
          </div>
        </div>

        <ol className={styles.steps}>
          <li className={styles.done}>Your details</li>
          <li>Verify email</li>
          <li>Welcome to links academy</li>
        </ol>

        <div className={styles.wave} aria-hidden="true" />
        <a className={styles.back} href="#">
          &larr; Return to home
        </a>
      </aside>

      <main className={styles.panel}>
        <div className={styles.header}>
          <h1>Welcome to Links Academy</h1>
          <span className={styles.sub}>Get set up in 2 minutes</span>
        </div>

        {errors.global && (
          <div className={styles.globalError}>{errors.global}</div>
        )}
        {errors.password && (
          <div className={styles.globalError}>PASSWORD NOT VALID</div>
        )}

        <form className={styles.form} onSubmit={onSubmit} noValidate>
          <label>
            <span>Full name</span>
            <input
              name="fullName"
              value={form.fullName}
              onChange={onChange}
              className={errors.fullName ? styles.error : ""}
              placeholder="Enter your name"
            />
            {errors.fullName && <small>{errors.fullName}</small>}
          </label>

          <label>
            <span>Email</span>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              className={errors.email ? styles.error : ""}
              placeholder="name@email.com"
            />
            {errors.email && <small>{errors.email}</small>}
          </label>

          <label>
            <span>Phone</span>
            <input
              name="phone"
              value={form.phone}
              onChange={onChange}
              className={errors.phone ? styles.error : ""}
              placeholder="+234..."
            />
            {errors.phone && <small>{errors.phone}</small>}
          </label>

          <label>
            <span>Username</span>
            <input
              name="username"
              value={form.username}
              onChange={onChange}
              className={errors.username ? styles.error : ""}
              placeholder="username"
            />
            {errors.username && <small>{errors.username}</small>}
          </label>

          <label>
            <span>Location</span>
            <input
              name="location"
              value={form.location}
              onChange={onChange}
              className={errors.location ? styles.error : ""}
              placeholder="e.g., Lagos"
            />
            {errors.location && <small>{errors.location}</small>}
          </label>

          <label className={styles.pwRow}>
            <span>Password</span>
            <div className={styles.pwWrap}>
              <input
                name="password"
                type={showPw ? "text" : "password"}
                value={form.password}
                onChange={onChange}
                className={errors.password ? styles.error : ""}
                placeholder="Create a password"
              />
              <button
                type="button"
                className={styles.eye}
                onClick={() => setShowPw((v) => !v)}
                aria-label={showPw ? "Hide password" : "Show password"}
              >
                {showPw ? "🙈" : "👁️"}
              </button>
            </div>
            {errors.password && (
              <ul className={styles.pwRules}>
                <li className={pwRules.len ? styles.ok : styles.bad}>
                  8+ characters
                </li>
                <li className={pwRules.mix ? styles.ok : styles.bad}>
                  Letters and numbers
                </li>
              </ul>
            )}
          </label>

          <button className={styles.submit} type="submit">
            Sign up
          </button>
        </form>

        <div className={styles.progress}>
          <span className={styles.barActive} />
          <span />
          <span />
        </div>

        <div className={styles.terms}>
          By signing up you accept our <a href="#">terms</a>.
        </div>
      </main>
    </section>
  );
}
