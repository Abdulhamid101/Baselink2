import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";
import logo from "../../assets/Navlogo.png";

const TABS = {
  OVERVIEW: "overview",
  BROWSE: "browse",
  MYCOURSES: "mycourses",
  PROFILE: "profile",
  QA: "qa",
};

export default function Dashboard() {
  const nav = useNavigate();
  const [tab, setTab] = useState(TABS.OVERVIEW);
  const user = useMemo(
    () => ({ name: localStorage.getItem("displayName") || "Sandra" }),
    []
  );

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) nav("/login", { replace: true });
  }, [nav]);

  const logout = () => {
    localStorage.removeItem("authToken");
    nav("/login", { replace: true });
  };

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <img src={logo} alt="Baselink Academy" />
          <span>Baselink Academy</span>
        </div>

        <nav className={styles.nav}>
          <button
            className={tab === TABS.OVERVIEW ? styles.active : ""}
            onClick={() => setTab(TABS.OVERVIEW)}
          >
            Overview
          </button>
          <button
            className={tab === TABS.BROWSE ? styles.active : ""}
            onClick={() => setTab(TABS.BROWSE)}
          >
            Browse courses
          </button>
          <button
            className={tab === TABS.MYCOURSES ? styles.active : ""}
            onClick={() => setTab(TABS.MYCOURSES)}
          >
            My courses
          </button>
          <button
            className={tab === TABS.PROFILE ? styles.active : ""}
            onClick={() => setTab(TABS.PROFILE)}
          >
            Profile
          </button>
        </nav>

        <div className={styles.bottom}>
          <button
            className={tab === TABS.QA ? styles.active : ""}
            onClick={() => setTab(TABS.QA)}
          >
            Q & A
          </button>
          <button className={styles.logout} onClick={logout}>
            Logout
          </button>
        </div>
      </aside>
      <main className={styles.main}>
        {tab === TABS.OVERVIEW && <Overview user={user} />}
        {tab === TABS.BROWSE && <Browse />}
        {tab === TABS.MYCOURSES && <MyCourses />}
        {tab === TABS.PROFILE && <Profile />}
        {tab === TABS.QA && <QA />}
      </main>
    </div>
  );
}

function Overview({ user }) {
  return (
    <section className="page">
      <h1>Welcome, {user.name}!</h1>
      <p>Here’s what we have for you</p>

      <div className="grid2">
        <div className="card center">
          <div className="metric">00</div>
          <div className="meta">Enrolled courses</div>
        </div>
        <div className="card center">
          <div className="metric">00</div>
          <div className="meta">Progress</div>
        </div>
      </div>

      <div className="card">
        <div className="cardTitle">Recommended courses</div>
        <ul className="list">
          <li><a href="#!">Project management</a> – application of knowledge, skills, tools…</li>
          <li><a href="#!">Front end</a> – HTML, CSS, JS frameworks…</li>
          <li><a href="#!">Photography</a> – camera basics, lighting…</li>
          <li><a href="#!">UI/UX Design</a> – research, wireframes, prototyping…</li>
          <li><a href="#!">Sales & Marketing</a> – funnels, positioning…</li>
          <li><a href="#!">Animation</a> – motion principles…</li>
        </ul>
      </div>
    </section>
  );
}

function Browse() {
  const [cat, setCat] = useState("Creative");
  const rows = [
    { course: "Video editing", syllabus: 12, reading: 20, video: 24 },
    { course: "Animation", syllabus: 22, reading: 40, video: 40 },
    { course: "Graphic design", syllabus: 15, reading: 40, video: 30 },
  ];
  return (
    <section className="page">
      <h1>Welcome, Sandra!</h1>
      <p>Here’s what we have for you</p>

      <div className="tabs">
        {["Creative", "Technical", "Business", "Personal development"].map((t) => (
          <button key={t} className={cat === t ? "tab active" : "tab"} onClick={() => setCat(t)}>
            {t} courses
          </button>
        ))}
      </div>

      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Course description</th>
              <th>Syllabus</th>
              <th>Reading material url</th>
              <th>Tutorial videos url</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                <td>{r.course}</td>
                <td>{r.syllabus}</td>
                <td>{r.reading}</td>
                <td>{r.video}</td>
                <td><button className="btn">Enroll</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function MyCourses() {
  const [subtab, setSubtab] = useState("New");
  const rows = [
    { course: "Video editing", syllabus: "9/12", reading: "2/02", video: "2/04" },
    { course: "Animation", syllabus: "9/22", reading: "0/40", video: "0/40" },
    { course: "Graphic design", syllabus: "0/15", reading: "0/14", video: "0/30" },
  ];

  return (
    <section className="page">
      <h1>Welcome, Sandra!</h1>
      <p>Here’s are your course</p>

      <div className="tabs">
        {["New courses", "Completed courses", "Certificates"].map((t) => (
          <button
            key={t}
            className={subtab === t ? "tab active" : "tab"}
            onClick={() => setSubtab(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Course description</th>
              <th>Syllabus</th>
              <th>Reading material url</th>
              <th>Tutorial videos url</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                <td>{r.course}</td>
                <td>{r.syllabus}</td>
                <td>{r.reading}</td>
                <td>{r.video}</td>
                <td>
                  <button className="btn">
                    {subtab === "Certificates" ? "Download" : "View"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {subtab === "Certificates" && (
        <div className="ribbons">
          <span className="ribbon">New</span>
          <span className="ribbon active">completed</span>
          <span className="ribbon">Certified</span>
        </div>
      )}
    </section>
  );
}

function Profile() {
  return (
    <section className="page">
      <h1>Personal information</h1>

      <div className="card">
        <div className="cardTitle">Personal information</div>
        <div className="grid2">
          <input placeholder="Full name" defaultValue="Sam Jordan" />
          <input placeholder="Username name" defaultValue="Sandra" />
          <input placeholder="Password" type="password" defaultValue="Shangrila@44" />
          <input placeholder="Email" type="email" defaultValue="samjordan@outlook.com" />
        </div>

        <div className="cardTitle" style={{ marginTop: 18 }}>Contact information</div>
        <div className="grid2">
          <input placeholder="Phone" defaultValue="090387345948" />
          <input placeholder="Home address (optional)" />
          <select defaultValue="Nigeria">
            <option>Nigeria</option>
            <option>Ghana</option>
          </select>
          <input placeholder="City (optional)" defaultValue="Lagos" />
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button className="btn primary">Save changes</button>
        </div>
      </div>
    </section>
  );
}

function QA() {
  return (
    <section className="page">
      <h1>Q & A</h1>
      <p>Ask your question and check back for your answers!</p>
      <div className="card">
        <label className="fieldLabel">Input question</label>
        <textarea className="textarea" rows={8} placeholder="question" />
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 12 }}>
          <button className="btn primary">Send</button>
        </div>
      </div>
    </section>
  );
}
