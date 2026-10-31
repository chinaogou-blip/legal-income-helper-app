* {
  box-sizing: border-box;
}

:root {
  --bg: #f5f7fb;
  --panel: #ffffff;
  --primary: #2d6cdf;
  --primary-dark: #1b4d9f;
  --secondary: #eaf0ff;
  --text: #122033;
  --muted: #58657a;
  --success: #21a67a;
  --warning: #f9b13c;
  --shadow: 0 20px 40px rgba(22, 34, 58, 0.08);
  --radius: 18px;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: linear-gradient(180deg, #edf4ff 0%, var(--bg) 30%, #fefefe 100%);
  color: var(--text);
}

img {
  max-width: 100%;
}

.page-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 20px 80px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 18px;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(112, 136, 180, 0.14);
  border-radius: 18px;
  box-shadow: var(--shadow);
  position: sticky;
  top: 12px;
  z-index: 10;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary), #73a6ff);
  color: white;
  font-weight: 800;
}

.brand strong,
.brand small {
  display: block;
}

.brand small {
  color: var(--muted);
}

nav {
  display: flex;
  gap: 18px;
  align-items: center;
}

nav a {
  color: var(--text);
  text-decoration: none;
  font-weight: 600;
}

.hero {
  display: grid;
  grid-template-columns: 1.5fr 0.9fr;
  gap: 28px;
  align-items: center;
  padding: 50px 0 30px;
}

.badge {
  display: inline-flex;
  padding: 8px 14px;
  border-radius: 999px;
  background: var(--secondary);
  color: var(--primary-dark);
  font-weight: 700;
  font-size: 0.82rem;
}

.hero h1 {
  font-size: clamp(2.5rem, 4vw, 4rem);
  line-height: 1.05;
  margin: 18px 0 12px;
}

.hero p {
  color: var(--muted);
  font-size: 1.07rem;
  max-width: 620px;
  line-height: 1.7;
}

.hero-stats {
  margin-top: 24px;
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
}

.hero-stats div {
  min-width: 140px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 14px;
  padding: 16px 18px;
  border: 1px solid rgba(75, 95, 142, 0.08);
}

.hero-stats strong {
  display: block;
  font-size: 1.4rem;
  margin-bottom: 4px;
}

.hero-stats span {
  color: var(--muted);
  font-size: 0.8rem;
}

.hero-card,
.panel {
  background: var(--panel);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  border: 1px solid rgba(83, 103, 146, 0.08);
}

.hero-card {
  padding: 26px 24px;
}

.hero-card h3 {
  margin-top: 0;
  margin-bottom: 16px;
}

.hero-card ul {
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
  line-height: 2;
}

.planner,
.panel {
  margin-top: 36px;
  padding: 28px 24px;
}

.section-head {
  margin-bottom: 18px;
}

.section-head p {
  margin: 0 0 8px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.7rem;
  color: var(--primary);
  font-weight: 700;
}

.section-head h2 {
  margin: 0;
  font-size: clamp(1.7rem, 2.5vw, 2.3rem);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(260px, 1fr));
  gap: 20px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.field label {
  font-weight: 600;
  color: var(--text);
}

.field select {
  width: 100%;
  height: 52px;
  border: 1px solid rgba(76, 90, 124, 0.18);
  background: #f9fbff;
  border-radius: 12px;
  padding: 0 14px;
  font: inherit;
  color: var(--text);
}

.primary-btn {
  grid-column: 1 / -1;
  width: 220px;
  height: 52px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
  box-shadow: 0 12px 24px rgba(45, 108, 223, 0.2);
}

.primary-btn:hover {
  transform: translateY(-1px);
}

.result-content {
  display: grid;
  gap: 18px;
}

.placeholder-box {
  border: 1px dashed #b8c6e0;
  background: #f7faff;
  border-radius: 16px;
  padding: 24px;
  color: var(--muted);
  text-align: center;
}

.result-card {
  background: linear-gradient(135deg, #f6f9ff 0%, #eef5ff 100%);
  border: 1px solid rgba(88, 120, 177, 0.12);
  border-radius: 18px;
  padding: 22px;
}

.result-top {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  margin-bottom: 18px;
}

.result-top h3 {
  margin: 0;
  font-size: 1.5rem;
}

.pill {
  display: inline-block;
  background: #e8f8f1;
  color: var(--success);
  border-radius: 999px;
  padding: 7px 12px;
  font-size: 0.8rem;
  font-weight: 700;
}

.metrics {
  display: grid;
  grid-template-columns: repeat(4, minmax(150px, 1fr));
  gap: 14px;
  margin-top: 18px;
}

.metric {
  background: rgba(255, 255, 255, 0.7);
  border-radius: 14px;
  padding: 18px 16px;
  border: 1px solid rgba(80, 104, 150, 0.08);
}

.metric span {
  display: block;
  color: var(--muted);
  font-size: 0.8rem;
  margin-bottom: 6px;
}

.metric strong {
  font-size: 1.1rem;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(260px, 1fr));
  gap: 18px;
  margin-top: 18px;
}

.detail-card {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(76, 95, 146, 0.08);
  border-radius: 14px;
  padding: 18px 16px;
}

.detail-card h4 {
  margin: 0 0 10px;
  font-size: 1rem;
}

.detail-card ul {
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
  line-height: 1.8;
}

.legal-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  gap: 18px;
}

.legal-card {
  background: #fbfcff;
  border: 1px solid rgba(109, 128, 163, 0.1);
  border-radius: 16px;
  padding: 18px;
}

.legal-card h3 {
  margin-top: 0;
  margin-bottom: 12px;
}

.legal-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

@media (max-width: 900px) {
  .hero,
  .form-grid,
  .detail-grid,
  .legal-grid,
  .metrics {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-direction: column;
    gap: 10px;
  }

  nav {
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media (max-width: 560px) {
  .page-shell {
    padding-left: 14px;
    padding-right: 14px;
  }

  .hero {
    padding-top: 28px;
  }

  .primary-btn {
    width: 100%;
  }
}
