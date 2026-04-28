import './ta3k-company-dashboard.css';

const markup = `
<aside>
  <div class="logo-wrap">
    <div class="logo-icon">T</div>
    <div class="logo-text"><h1>Ta3k</h1><span>Smart Internship Finder</span></div>
  </div>

  <div class="company-card">
    <div class="company-logo-box">D</div>
    <div class="company-info">
      <strong>Djezzy</strong>
      <div class="verified-badge">✓ Verified</div>
    </div>
  </div>

  <p class="nav-label">Company Portal</p>
  <nav><ul>
    <li><a href="#" class="active">Dashboard</a></li>
    <li><a href="#">Company Profile</a></li>
    <li><a href="#">My Offers <span class="nav-badge badge-orange">3</span></a></li>
    <li><a href="#">Post New Offer</a></li>
    <li><a href="#">Applications <span class="nav-badge badge-orange">8</span></a></li>
    <li><a href="#">Candidate Detail</a></li>
    <li><a href="#">Messages <span class="nav-badge badge-red">1</span></a></li>
    <li><a href="#">Analytics</a></li>
  </ul></nav>

  <div class="user-card">
    <div class="avatar">Y</div>
    <div class="user-info"><p>Yasmine B.</p><span>HR Manager</span></div>
  </div>
</aside>

<main>
  <div class="topbar">
    <span class="verified-pill">Verified Company</span>
    <button class="post-btn">+ Post New Offer</button>
  </div>

  <div class="page-header">
    <h2>Welcome back, <span>Amina</span></h2>
    <p>Here's your recruitment activity overview</p>
  </div>

  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-icon icon-orange">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f0a500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
      </div>
      <div class="stat-label">Active Offers</div>
      <div class="stat-value">3</div>
      <div class="stat-sub">+1 this month</div>
    </div>
    <div class="stat-card">
      <div class="stat-icon icon-teal">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00e5c3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      </div>
      <div class="stat-label">Total Applications</div>
      <div class="stat-value">50</div>
      <div class="stat-sub teal">+12 this week</div>
    </div>
    <div class="stat-card">
      <div class="stat-icon icon-purple">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8250ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      </div>
      <div class="stat-label">New Profiles</div>
      <div class="stat-value">8</div>
      <div class="stat-sub teal">AI-detected today</div>
    </div>
    <div class="stat-card">
      <div class="stat-icon icon-green">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00c896" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      </div>
      <div class="stat-label">Hired This Month</div>
      <div class="stat-value">2</div>
      <div class="stat-sub green">Stages confirmed</div>
    </div>
  </div>

  <div class="metrics-row">
    <div class="metric-cell"><div class="metric-val orange">234</div><div class="metric-label">Profile views (30d)</div></div>
    <div class="metric-cell"><div class="metric-val teal">38%</div><div class="metric-label">Selection rate</div></div>
    <div class="metric-cell"><div class="metric-val green">4.2</div><div class="metric-label">Avg. intern rating</div></div>
    <div class="metric-cell"><div class="metric-val purple">82%</div><div class="metric-label">Avg. AI match score</div></div>
  </div>

  <div class="bottom-grid">
    <div class="panel">
      <div class="panel-head"><div><h3>Recent Applications</h3></div><a href="#" class="view-all">View all →</a></div>
      <p class="panel-sub">Sorted by AI match</p>

      <div class="app-row">
        <div class="cand-avatar av-teal">AB</div>
        <div class="cand-info"><strong>Amira Benali</strong><span>Univ. of Oran · Master 2</span></div>
        <div class="cand-right"><div class="status-badge s-new">New</div><div class="match-pct">91% match</div></div>
      </div>
      <div class="app-row">
        <div class="cand-avatar av-orange">KM</div>
        <div class="cand-info"><strong>Karim Meziani</strong><span>USTHB Algiers · Master 1</span></div>
        <div class="cand-right"><div class="status-badge s-review">In Review</div><div class="match-pct">84% match</div></div>
      </div>
      <div class="app-row">
        <div class="cand-avatar av-purple">SH</div>
        <div class="cand-info"><strong>Sara Hamidi</strong><span>ESI Algiers · Master 2</span></div>
        <div class="cand-right"><div class="status-badge s-accepted">Accepted</div><div class="match-pct">76% match</div></div>
      </div>
      <div class="app-row">
        <div class="cand-avatar av-red">YB</div>
        <div class="cand-info"><strong>Yacine Boudali</strong><span>Univ. Constantine 2 · Licence 3</span></div>
        <div class="cand-right"><div class="status-badge s-rejected">Rejected</div><div class="match-pct">68% match</div></div>
      </div>
    </div>

    <div class="right-col">
      <div class="panel">
        <div class="panel-head"><h3>Active Offers</h3><a href="#" class="view-all">Manage →</a></div>
        <div style="height:14px"></div>
        <div class="offer-row">
          <div class="offer-info"><strong>Frontend Developer Intern</strong><span>14 applications · 234 views</span></div>
          <span class="offer-tag tag-eng">Engineering</span>
        </div>
        <div class="offer-row">
          <div class="offer-info"><strong>Data Analyst Intern</strong><span>9 applications · 187 views</span></div>
          <span class="offer-tag tag-data">Data</span>
        </div>
        <div class="offer-row">
          <div class="offer-info"><strong>Mobile Developer Intern</strong><span>6 applications · 98 views</span></div>
          <span class="offer-tag tag-mobile">Mobile</span>
        </div>
      </div>

      <div class="panel">
        <div class="panel-head"><h3>AI Profile Alerts</h3><span class="ai-badge">✦ Auto-detected</span></div>
        <div style="height:14px"></div>
        <div class="alert-row">
          <div class="cand-avatar av-teal" style="width:36px;height:36px;font-size:11px">LT</div>
          <div class="alert-info"><strong>Lyes Touati</strong><span>Matches Frontend offer perfectly</span></div>
          <div class="alert-pct">93%</div>
        </div>
        <div class="alert-row">
          <div class="cand-avatar av-orange" style="width:36px;height:36px;font-size:11px">MA</div>
          <div class="alert-info"><strong>Meriem Ait</strong><span>Strong Python + SQL profile</span></div>
          <div class="alert-pct">87%</div>
        </div>
        <div class="alert-row">
          <div class="cand-avatar av-purple" style="width:36px;height:36px;font-size:11px">BC</div>
          <div class="alert-info"><strong>Bilal Chouiref</strong><span>Mobile dev with React Native</span></div>
          <div class="alert-pct">84%</div>
        </div>
      </div>
    </div>
  </div>
</main>
`;

export default function Ta3kCompanyDashboardPage() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
