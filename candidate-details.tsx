import './candidate-details.css';

const CYAN="#00e5c8",CARD2="#0f1724",BORDER="#1e2d40",TEXT="#e2e8f0",MUTED="#64748b",GREEN="#22c55e",RED="#ef4444",YELLOW="#f59e0b",ORANGE="#f97316";

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

export default function CandidateDetailsPage(){
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
              <div key={n.id} className={`nav-item ${n.id==="candidate-detail"?"active":""}`}>
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
            <div><h1 className="page-title">Candidate Profile</h1><p className="page-sub">Review full profile before making a decision</p></div>
            <div style={{display:"flex",gap:10}}>
              <button className="btn btn-cyan btn-sm">💬 Message</button>
              <button className="btn btn-success">✓ Accept</button>
              <button className="btn btn-danger">✗ Reject</button>
            </div>
          </div>

          <div style={{display:"flex",gap:20}}>

            {/* ── LEFT: candidate card ── */}
            <div style={{width:280,flexShrink:0,display:"flex",flexDirection:"column",gap:16}}>
              <div className="card" style={{textAlign:"center"}}>
                <div style={{display:"flex",justifyContent:"center",marginBottom:12}}>
                  <div className="cand-avatar lg">AB</div>
                </div>
                <div style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:17,color:"#fff"}}>Amira Benali</div>
                <div className="verified-badge" style={{margin:"6px auto 10px",width:"fit-content",background:CYAN+"15",borderColor:CYAN+"30",color:CYAN}}>✓ Verified Profile</div>
                <div style={{color:MUTED,fontSize:12,marginBottom:4}}>Master 2 · Computer Science</div>
                <div style={{color:MUTED,fontSize:12,marginBottom:14}}>University of Oran 1</div>
                <div style={{display:"flex",justifyContent:"center",marginBottom:14}}>
                  <MatchRing score={91}/>
                </div>
                <div style={{display:"flex",gap:8}}>
                  <button className="btn btn-outline btn-sm" style={{flex:1}}>⬇ CV</button>
                  <button className="btn btn-cyan btn-sm" style={{flex:1}}>💬 Chat</button>
                </div>
              </div>

              <div className="card">
                <div style={{fontWeight:600,fontSize:13,marginBottom:12}}>Preferences</div>
                {[
                  ["Work Type",   "Hybrid / Remote"],
                  ["Location",    "Algiers, Algeria"],
                  ["Duration",    "4–6 months"],
                  ["Start",       "Sept 2025"],
                  ["Compensation","Paid preferred"],
                ].map(([k,v])=>(
                  <div key={k} style={{display:"flex",justifyContent:"space-between",marginBottom:9,paddingBottom:9,borderBottom:`1px solid ${BORDER}22`}}>
                    <span style={{fontSize:12,color:MUTED}}>{k}</span>
                    <span style={{fontSize:12.5,fontWeight:500}}>{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: details ── */}
            <div style={{flex:1,display:"flex",flexDirection:"column",gap:16}}>

              {/* AI Compatibility */}
              <div className="card card-cyan">
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:14,alignItems:"center"}}>
                  <div>
                    <div className="section-title">AI Compatibility Analysis</div>
                    <div style={{fontSize:12,color:MUTED}}>vs. Frontend Developer Intern</div>
                  </div>
                  <span className="ai-label">✦ AI Powered</span>
                </div>
                <div className="grid-2">
                  {[
                    ["Skills Match",   94, "cyan"],
                    ["Level Match",   100, "green"],
                    ["Preference Fit", 85, "cyan"],
                    ["Experience",     75, "yellow"],
                  ].map(([label,val,type])=>(
                    <div key={label} style={{padding:14,background:CARD2,borderRadius:12,border:`1px solid ${BORDER}`}}>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
                        <span style={{fontSize:12.5,fontWeight:600}}>{label}</span>
                        <span style={{fontFamily:"'Syne',sans-serif",fontWeight:800,color:type==="green"?GREEN:type==="yellow"?YELLOW:CYAN}}>{val}%</span>
                      </div>
                      <div className="progress-bar">
                        <div className={`progress-fill ${type}`} style={{width:`${val}%`}}/>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="card">
                <div className="section-title">Skills Assessment</div>
                <div className="section-sub">Required skills for the position vs. candidate's profile</div>
                <div style={{marginBottom:14}}>
                  <div style={{fontSize:12,fontWeight:600,color:MUTED,textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>Matched Skills</div>
                  <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                    {["React","TypeScript","CSS/Tailwind","JavaScript","Git","Figma"].map(s=>(
                      <span key={s} style={{display:"inline-flex",alignItems:"center",gap:5,padding:"5px 10px",background:GREEN+"15",border:`1px solid ${GREEN}30`,borderRadius:8,fontSize:12.5,fontWeight:500,color:GREEN}}>✓ {s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div style={{fontSize:12,fontWeight:600,color:MUTED,textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>Missing Skills</div>
                  <div style={{display:"flex",gap:8}}>
                    {["Docker","GraphQL"].map(s=>(
                      <span key={s} style={{display:"inline-flex",alignItems:"center",gap:5,padding:"5px 10px",background:RED+"15",border:`1px solid ${RED}30`,borderRadius:8,fontSize:12.5,fontWeight:500,color:RED}}>✗ {s}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Experience & Education */}
              <div className="card">
                <div className="section-title">Experience & Education</div>
                {[
                  {type:"exp",title:"Frontend Intern",         org:"Sonatrach Digital",    period:"Jan–Jun 2024", desc:"Developed internal React dashboards for the operational team."},
                  {type:"exp",title:"Web Dev Project",         org:"University of Oran 1", period:"2023",         desc:"Built a full-stack event management platform as graduation project."},
                  {type:"edu",title:"Master 2 – Computer Science",  org:"University of Oran 1", period:"2024–2026"},
                  {type:"edu",title:"Licence – Software Engineering",org:"University of Oran 1", period:"2021–2024"},
                ].map((e,i)=>(
                  <div key={i} style={{display:"flex",gap:14,paddingBottom:14,marginBottom:14,borderBottom:`1px solid ${BORDER}22`}}>
                    <div style={{width:34,height:34,borderRadius:10,background:(e.type==="exp"?ORANGE:CYAN)+"18",border:`1px solid ${(e.type==="exp"?ORANGE:CYAN)}33`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,flexShrink:0}}>
                      {e.type==="exp"?"💼":"🎓"}
                    </div>
                    <div>
                      <div style={{fontWeight:600,fontSize:13.5}}>{e.title}</div>
                      <div style={{fontSize:12,color:MUTED,marginBottom:e.desc?4:0}}>{e.org} · {e.period}</div>
                      {e.desc&&<div style={{fontSize:12.5,color:MUTED,lineHeight:1.5}}>{e.desc}</div>}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  );
}
