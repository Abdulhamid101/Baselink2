import React from "react";
import styles from "./OTP.module.css";
import logo from "../../assets/Navlogo.png";

export default function OtpStep({
  email,
  otp,
  setOtp,
  loading,
  error,
  info,
  onVerify,
  onResend,
  onBackHome,
  onChangeEmail,
}) {
  const masked = email
    ? email.replace(/(^.{3}).*(@.*$)/, (_, a, b) => `${a}****${b}`)
    : "";

  return (
    <section className={styles.auth}>
      <aside className={styles.rail}>
        <div className={styles.brand}>
          <img src={logo} alt="Baselink" />
          <div>
            <strong>Baselink</strong>
            <br />
            Academy
          </div>
        </div>

        <ol className={styles.steps}>
          <li className={styles.done}>Your details</li>
          <li className={styles.active}>Verify email</li>
          <li>Welcome to links academy</li>
        </ol>

        <div className={styles.wave} aria-hidden="true" />
        <button className={styles.back} onClick={onBackHome}>
          &larr; Return to home
        </button>
      </aside>
      <main className={styles.panel}>
        <h1 className={styles.title}>Welcome to Links Academy</h1>
        <p className={styles.helper}>
          Please enter the verification code sent to <b>{masked}</b>.{" "}
          {onChangeEmail && (
            <button className={styles.inlineLink} onClick={onChangeEmail}>
              Change email?
            </button>
          )}
        </p>

        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            onVerify();
          }}
          noValidate
        >
          <label>
            <span>Verification code</span>
            <input
              inputMode="numeric"
              autoComplete="one-time-code"
              placeholder="Enter 6-digit code"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\\D/g, ""))}
              maxLength={6}
            />
          </label>

          {error && <div className={styles.error}>{error}</div>}
          {info && <div className={styles.info}>{info}</div>}

          <button className={styles.primary} type="submit" disabled={loading}>
            {loading ? "Verifying..." : "Sign up"}
          </button>
          <div className={styles.resendRow}>
            Didn’t get code?{" "}
            <button
              type="button"
              className={styles.inlineLink}
              disabled={loading}
              onClick={onResend}
            >
              Resend
            </button>
          </div>
        </form>
        <div className={styles.progress}>
          <span className={styles.barDone} />
          <span className={styles.barActive} />
          <span />
        </div>
      </main>
    </section>
  );
}
