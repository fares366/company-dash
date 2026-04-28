import { useState } from 'react';
import './company-applications.css';

const CYAN="#00e5c8",BORDER="#1e2d40",TEXT="#e2e8f0",MUTED="#64748b",GREEN="#22c55e",RED="#ef4444",YELLOW="#f59e0b",ORANGE="#f97316";

const candidates=[
  {id:1,name:"Amira Benali", university:"Univ. of Oran 1",    level:"Master 2",  specialty:"Computer Science",    match:91,skills:["React","TypeScript","Node.js","Git"],    offer:"Frontend Developer Intern",date:"12 Jul 2025",status:"new"},
  {id:2,name:"Karim Meziani",university:"USTHB Algiers",      level:"Master 1",  specialty:"Software Eng.",       match:84,skills:["Python","Django","PostgreSQL"],           offer:"Data Analyst Intern",      date:"14 Jul 2025",status:"review"},
  {id:3,name:"Sara Hamidi",  university:"ESI Algiers",        level:"Master 2",  specialty:"Information Systems", match:76,skills:["React Native","JavaScript","Firebase"],   offer:"Mobile Developer Intern",  date:"9 Jul 2025", status:"accepted"},
  {id:4,name:"Yacine Boudali",university:"Univ. Constantine 2",level:"Licence 3",specialty:"Networks",            match:68,skills:["Linux","Docker","Python"],               offer:"DevOps Intern",            date:"5 Jul 2025", status:"rejected"},
  {id:5,name:"Nadia Kaci",   university:"Univ. of Bejaia",    level:"Master 2",  specialty:"Artificial Intelligence",match:88,skills:["PyTorch","Python","SQL","R"],        offer:"Data Analyst Intern",      date:"15 Jul 2025",status:"new"},
];

const offers=[
  {id:1,title:"Frontend Developer Intern"},
  {id:2,title:"Data Analyst Intern"},
  {id:3,title:"Mobile Developer Intern"},
  {id:4,title:"DevOps Intern"},
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

const MatchRing=({score,size=56}: { score: number; size?: number })=>{
  const r=22,c=28,stroke=4,circ=2*Math.PI*r,prog=(score/100)*circ;
  const color=score>=80?CYAN:score>=65?YELLOW:RED;
  return(
    <div className="match-ring" style={{width:size,height:size}}>
      <svg width={c*2} height={c*2}>
        <circle cx={c} cy={c} r={r} fill="none" stroke={BORDER} strokeWidth={stroke}/>
        <circle cx={c} cy={c} r={r} fill="none" stroke={color} strokeWidth={stroke} strokeDasharray={`${prog} ${circ}`} strokeLinecap="round"/>
      </svg>
      <div className="match-score-text">
        <span className="pct" style={{color}}>{score}%</span>
        <span className="lbl">AI match</span>
      </div>
    </div>
  );
};

const StatusBadge=({s}: { s: string })=>{
  const map: Record<string, string[]>={new:["tag-cyan","New"],review:["tag-yellow","In Review"],accepted:["tag-green","Accepted"],rejected:["tag-red","Rejected"]};
  const[cls,label]=map[s]||["tag-muted",s];
  return <span className={`tag ${cls}`}>{label}</span>;
};

export default function CompanyApplicationsPage(){
  const[tab,setTab]=useState("all");
  const[offerFilter,setOfferFilter]=useState("all");
  const filtered=candidates.filter(c=>(tab==="all"||c.status===tab)&&(offerFilter==="all"||c.offer===offerFilter));

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
              <div key={n.id} className={`nav-item ${n.id==="applications"?"active":""}`}>
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
            <div><h1 className="page-title">Received Applications</h1><p className="page-sub">Review and manage all candidate applications</p></div>
            <button className="btn btn-outline">⬇ Export CSV</button>
          </div>

          {/* ── STAT CARDS ── */}
          <div className="grid-4" style={{marginBottom:20}}>
            {([
              ["Total",     candidates.length,                                    CYAN],
              ["New",       candidates.filter(c=>c.status==="new").length,        ORANGE],
              ["In Review", candidates.filter(c=>c.status==="review").length,     YELLOW],
              ["Accepted",  candidates.filter(c=>c.status==="accepted").length,   GREEN],
            ] as [string, number, string][]).map(([l,v,c])=>(
              <div key={l} className="card" style={{textAlign:"center",borderColor:c+"22",cursor:"pointer"}}
                onClick={()=>setTab(l === "Total" ? "all" : l === "In Review" ? "review" : l.toLowerCase())}>
                <div style={{fontFamily:"'Syne',sans-serif",fontSize:26,fontWeight:800,color:c}}>{v}</div>
                <div style={{fontSize:12,color:MUTED}}>{l}</div>
              </div>
            ))}
          </div>

          {/* ── CANDIDATES LIST ── */}
          <div className="card">
            <div style={{display:"flex",gap:12,alignItems:"center",marginBottom:18,flexWrap:"wrap"}}>
              <div className="tabs">
                {["all","new","review","accepted","rejected"].map(t=>(
                  <div key={t} className={`tab ${tab===t?"active":""}`} onClick={()=>setTab(t)}>
                    {t.charAt(0).toUpperCase()+t.slice(1)}
                  </div>
                ))}
              </div>
              <select className="filter-select" value={offerFilter} onChange={e=>setOfferFilter(e.target.value)} style={{marginLeft:"auto"}}>
                <option value="all">All Offers</option>
                {offers.map(o=><option key={o.id} value={o.title}>{o.title}</option>)}
              </select>
            </div>

            <div style={{display:"flex",flexDirection:"column",gap:12}}>
              {filtered.map(c=>(
                <div key={c.id} className="cand-card">
                  <div style={{display:"flex",gap:14,alignItems:"center"}}>
                    <div className="cand-avatar">{c.name.split(" ").map(x=>x[0]).join("")}</div>
                    <div style={{flex:1}}>
                      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                        <div>
                          <div style={{fontWeight:700,fontSize:15,color:"#fff"}}>{c.name}</div>
                          <div style={{fontSize:13,color:MUTED}}>{c.university} · {c.level} · {c.specialty}</div>
                        </div>
                        <MatchRing score={c.match}/>
                      </div>
                      <div style={{display:"flex",gap:6,marginTop:8,flexWrap:"wrap"}}>
                        {c.skills.slice(0,3).map(s=><span key={s} className="tag tag-green" style={{fontSize:10}}>✓ {s}</span>)}
                        <span className="tag tag-red" style={{fontSize:10}}>✗ Docker</span>
                      </div>
                      <div style={{display:"flex",gap:10,marginTop:10,alignItems:"center"}}>
                        <StatusBadge s={c.status}/>
                        <span style={{fontSize:12,color:MUTED}}>Applied: {c.date} · {c.offer}</span>
                        <div style={{marginLeft:"auto",display:"flex",gap:8}}>
                          <button className="btn btn-outline btn-sm" onClick={e=>e.stopPropagation()}>👁 View</button>
                          <button className="btn btn-success btn-sm" onClick={e=>e.stopPropagation()}>✓ Accept</button>
                          <button className="btn btn-danger btn-sm" onClick={e=>e.stopPropagation()}>✗ Reject</button>
                          <button className="btn btn-cyan btn-sm" onClick={e=>e.stopPropagation()}>💬 Contact</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
