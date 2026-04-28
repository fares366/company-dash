import { useState } from 'react';
import './my-offers.css';

const CYAN="#00e5c8",TEXT="#e2e8f0",MUTED="#64748b",PURPLE="#8b5cf6",ORANGE="#f97316";

const offers=[
  {id:1,title:"Frontend Developer Intern", domain:"Engineering",posted:"2 Jul 2025",  apps:14,status:"active",  views:234},
  {id:2,title:"Data Analyst Intern",       domain:"Data",       posted:"10 Jul 2025", apps:9, status:"active",  views:187},
  {id:3,title:"Mobile Developer Intern",   domain:"Mobile",     posted:"18 Jun 2025", apps:6, status:"active",  views:98},
  {id:4,title:"DevOps Intern",             domain:"Engineering",posted:"1 May 2025",  apps:21,status:"expired", views:410},
];

const navItems=[
  {id:"dashboard",       label:"Dashboard",        icon:"⊞"},
  {id:"profile",         label:"Company Profile",   icon:"🏭"},
  {id:"offers",          label:"My Offers",         icon:"📋", badge:"3"},
  {id:"create-offer",    label:"Post New Offer",    icon:"＋"},
  {id:"applications",    label:"Applications",      icon:"👥", badge:"8", red:true},
  {id:"candidate-detail",label:"Candidate Detail",  icon:"🔍"},
  {id:"messages",        label:"Messages",          icon:"💬", badge:"1", red:true},
  {id:"stats",           label:"Analytics",         icon:"📊"},
  {id:"eval-intern",     label:"Evaluate Intern",   icon:"⭐"},
];

const StatusBadge=({s}: { s: string })=>{
  const map: Record<string, string[]>={active:["tag-green","Active"],expired:["tag-muted","Expired"]};
  const[cls,label]=map[s]||["tag-muted",s];
  return <span className={`tag ${cls}`}>{label}</span>;
};

export default function MyOffersPage(){
  const[tab,setTab]=useState("active");
  const filtered=tab==="all"?offers:offers.filter(o=>o.status===tab);

  return(
    <>
      <div className="app">

        {/* ── SIDEBAR ── */}
        <div className="sidebar">
          <div className="logo">
            <div className="logo-icon"><span style={{color:ORANGE,fontWeight:800,fontSize:14}}>T</span></div>
            <div><div className="logo-text">Ta3k</div><div className="logo-sub">Smart Internship Finder</div></div>
          </div>

          <div className="company-header">
            <div className="company-logo-sm">📡</div>
            <div>
              <div style={{fontSize:13,fontWeight:700,color:TEXT}}>Djezzy</div>
              <div className="verified-badge">✓ Verified</div>
            </div>
          </div>

          <div className="nav-section">
            <div className="nav-label">Company Portal</div>
            {navItems.map(n=>(
              <div key={n.id} className={`nav-item ${n.id==="offers"?"active":""}`}>
                <span>{n.icon}</span>
                <span>{n.label}</span>
                {n.badge&&<span className={`nav-badge ${n.red?"red":""}`}>{n.badge}</span>}
              </div>
            ))}
          </div>

          <div className="sidebar-footer">
            <div className="user-mini">
              <div className="avatar">Y</div>
              <div>
                <div style={{fontSize:13,fontWeight:600,color:TEXT}}>Yasmine B.</div>
                <div style={{fontSize:11,color:MUTED}}>HR Manager</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── MAIN ── */}
        <div className="main">
          <div className="page-header">
            <div><h1 className="page-title">My Offers</h1><p className="page-sub">Manage all your posted internship positions</p></div>
            <button className="btn btn-primary">+ Post New Offer</button>
          </div>

          {/* ── STAT CARDS ── */}
          <div className="grid-4" style={{marginBottom:20}}>
            {([
              ["Active",     offers.filter(o=>o.status==="active").length,          ORANGE],
              ["Total Apps", offers.reduce((a,o)=>a+o.apps,0),                      CYAN],
              ["Total Views",offers.reduce((a,o)=>a+o.views,0),                     PURPLE],
              ["Expired",    offers.filter(o=>o.status==="expired").length,          MUTED],
            ] as [string, number, string][]).map(([label,val,color])=>(
              <div key={label} className="card" style={{textAlign:"center",borderColor:color+"22"}}>
                <div style={{fontFamily:"'Syne',sans-serif",fontSize:26,fontWeight:800,color}}>{val}</div>
                <div style={{fontSize:12,color:MUTED}}>{label}</div>
              </div>
            ))}
          </div>

          {/* ── TABLE CARD ── */}
          <div className="card">
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18}}>
              <div className="tabs">
                {["all","active","expired"].map(t=>(
                  <div key={t} className={`tab ${tab===t?"active":""}`} onClick={()=>setTab(t)}>
                    {t.charAt(0).toUpperCase()+t.slice(1)}
                  </div>
                ))}
              </div>
              <div className="search-wrap" style={{width:260}}>
                <span className="search-icon">🔍</span>
                <input className="search-input" placeholder="Search offers…"/>
              </div>
            </div>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Position</th>
                    <th>Domain</th>
                    <th>Posted</th>
                    <th>Views</th>
                    <th>Applications</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map(o=>(
                    <tr key={o.id}>
                      <td><span style={{fontWeight:600}}>{o.title}</span></td>
                      <td><span className="tag tag-orange">{o.domain}</span></td>
                      <td><span style={{color:MUTED,fontSize:12.5}}>{o.posted}</span></td>
                      <td><span style={{color:MUTED}}>{o.views}</span></td>
                      <td>
                        <div style={{display:"flex",alignItems:"center",gap:8}}>
                          <span style={{fontWeight:700,color:CYAN}}>{o.apps}</span>
                          <div className="progress-bar" style={{width:60}}>
                            <div className="progress-fill cyan" style={{width:`${Math.min(o.apps/25*100,100)}%`}}/>
                          </div>
                        </div>
                      </td>
                      <td><StatusBadge s={o.status}/></td>
                      <td>
                        <div style={{display:"flex",gap:6}}>
                          <button className="btn btn-outline btn-sm">👥 Apps</button>
                          <button className="btn btn-outline btn-sm">✏️</button>
                          {o.status==="active"&&<button className="btn btn-danger btn-sm">⏸</button>}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
