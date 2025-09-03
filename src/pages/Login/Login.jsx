import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [form, setForm] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");

  useEffect(() => {
    const fromState = state?.email || "";
    const fromStore = localStorage.getItem("signupEmail") || "";
    setForm((s) => ({ ...s, email: fromState || fromStore }));
  }, [state]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");

    // ==== DEMO AUTH (no backend) ====
    const savedEmail = localStorage.getItem("signupEmail");
    const savedPw = localStorage.getItem("signupPassword");

    if (form.email === savedEmail && form.password === savedPw) {
      // mark as logged in
      localStorage.setItem("authToken", "demo-token");

      // ensure displayName exists for the dashboard greeting
      try {
        const authUser = JSON.parse(localStorage.getItem("authUser") || "{}");
        const displayName = authUser.fullName || authUser.username || "User";
        localStorage.setItem("displayName", displayName);
      } catch (_) {
        localStorage.setItem("displayName", "User");
      }

      // go to dashboard (no navbar/footer if you routed it outside Layout)
      navigate("/dashboard");
      return;
    }

    setErr("Invalid email or password");

    // ===== REAL API (replace demo with this) =====
    // try {
    //   const res = await fetch("http://localhost:5000/api/login", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(form),
    //   });
    //   const data = await res.json().catch(() => ({}));
    //   if (!res.ok) return setErr(data.message || "Login failed");
    //   localStorage.setItem("authToken", data.token);
    //   // Optionally save profile from API:
    //   // localStorage.setItem("authUser", JSON.stringify(data.user));
    //   // localStorage.setItem("displayName", data.user.fullName || data.user.username || "User");
    //   navigate("/dashboard");
    // } catch {
    //   setErr("Network error. Please try again.");
    // }
  };

  return (
    <div style={{ maxWidth: 420, margin: "80px auto" }}>
      <h2>Login</h2>
      {err && <p style={{ color: "crimson" }}>{err}</p>}
      <form onSubmit={onSubmit}>
        <label style={{ display: "block", marginBottom: 12 }}>
          <span style={{ display: "block", marginBottom: 6 }}>Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="name@email.com"
            style={{ width: "100%", padding: 10 }}
            required
          />
        </label>
        <label style={{ display: "block", marginBottom: 12 }}>
          <span style={{ display: "block", marginBottom: 6 }}>Password</span>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={onChange}
            placeholder="Your password"
            style={{ width: "100%", padding: 10 }}
            required
          />
        </label>
        <button type="submit" style={{ padding: "10px 16px" }}>
          Log in
        </button>
      </form>
    </div>
  );
}
