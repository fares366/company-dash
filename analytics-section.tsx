import './analytics-section.css';

const CYAN="#00e5c8",CARD2="#0f1724",BORDER="#1e2d40",TEXT="#e2e8f0",MUTED="#64748b",GREEN="#22c55e",PURPLE="#8b5cf6",ORANGE="#f97316";

const offers=[
  {id:1,title:"Frontend Developer Intern",apps:14,views:234,status:"active"},
  {id:2,title:"Data Analyst Intern",apps:9,views:187,status:"active"},
  {id:3,title:"Mobile Developer Intern",apps:6,views:98,status:"active"},
  {id:4,title:"DevOps Intern",apps:21,views:410,status:"expired"},
];

const navItems=[
  {id:"dashboard",label:"Dashboard",icon:"⊞"},
  {id:"profile",label:"Company Profile",icon:"🏭"},
  {id:"offers",label:"My Offers",icon:"📋",badge:"3"},
  {id:"create-offer",label:"Post New Offer",icon:"＋"},
  {id:"applications",label:"Applications",icon:"👥",badge:"8",red:true},
  {id:"candidate-detail",label:"Candidate Detail",icon:"🔍"},
  {id:"messages",label:"Messages",icon:"💬",badge:"1",red:true},
  {id:"stats",label:"Analytics",icon:"📊"},
  {id:"eval-intern",label:"Evaluate Intern",icon:"⭐"},
];

const StatusBadge=({s}: { s: string })=>{
  const map: Record<string, string[]>={active:["tag-green","Active"],expired:["tag-muted","Expired"]};
  const[cls,label]=map[s]||["tag-muted",s];
  return <span className={`tag ${cls}`}>{label}</span>;
};

const Stats=()=>(
  <div>
    <div className="page-header">
      <div><h1 className="page-title">Recruitment Analytics</h1><p className="page-sub">Track your hiring performance and offer metrics</p></div>
      <button className="btn btn-outline">⬇ Export Report</button>
    </div>

    <div className="grid-4" style={{marginBottom:20}}>
      {[
        {label:"Total Applications",value:"50",sub:"Last 30 days",color:CYAN},
        {label:"Selection Rate",value:"38%",sub:"Accepted / Total",color:ORANGE},
        {label:"Avg. Match Score",value:"82%",sub:"All candidates",color:PURPLE},
        {label:"Time to Hire",value:"12d",sub:"Avg. per position",color:GREEN},
      ].map((s,i)=>(
        <div key={i} className="stat-card" style={{borderColor:s.color+"22"}}>
          <div className="stat-label">{s.label}</div>
          <div className="stat-value" style={{color:s.color}}>{s.value}</div>
          <div style={{fontSize:12,color:MUTED}}>{s.sub}</div>
        </div>
      ))}
    </div>

    <div className="grid-2" style={{marginBottom:20}}>
      <div className="card">
        <div className="section-title">Applications per Offer</div>
        <div className="section-sub">Volume and conversion per position</div>
        {offers.map(o=>(
          <div key={o.id} style={{marginBottom:14}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:5}}>
              <span style={{fontSize:13,fontWeight:500}}>{o.title}</span>
              <span style={{fontSize:12,color:ORANGE,fontWeight:700}}>{o.apps} apps</span>
            </div>
            <div className="progress-bar"><div className="progress-fill" style={{width:`${Math.min(o.apps/25*100,100)}%`}}/></div>
          </div>
        ))}
      </div>

      <div className="card">
        <div className="section-title">Candidate Quality Distribution</div>
        <div className="section-sub">AI match score breakdown</div>
        <div style={{display:"flex",gap:8,alignItems:"flex-end",height:120,padding:"0 8px",marginBottom:12}}>
          {[{label:"90–100%",val:80,count:8},{label:"80–89%",val:55,count:14},{label:"70–79%",val:40,count:18},{label:"60–69%",val:20,count:10}].map((b,i)=>(
            <div key={i} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4,height:"100%",justifyContent:"flex-end"}}>
              <div className="bar-chart-bar" style={{height:`${b.val}%`,width:"100%"}}>{b.count}</div>
              <div style={{fontSize:9,color:MUTED,textAlign:"center",whiteSpace:"nowrap"}}>{b.label}</div>
            </div>
          ))}
        </div>
        <div style={{display:"flex",justifyContent:"space-around",padding:"10px 0",borderTop:`1px solid ${BORDER}`}}>
          {[["50","Total Candidates",TEXT],["18","Best Match (90%+)",CYAN],["2","Hired",GREEN]].map(([v,l,c])=>(
            <div key={l} style={{textAlign:"center"}}>
              <div style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:20,color:c}}>{v}</div>
              <div style={{fontSize:11,color:MUTED}}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="grid-2">
      <div className="card">
        <div className="section-title">Top Skills in Applications</div>
        <div className="section-sub">Most common skills among your applicants</div>
        {[{skill:"React",pct:82},{skill:"JavaScript",pct:74},{skill:"Python",pct:61},{skill:"TypeScript",pct:55},{skill:"Node.js",pct:48}].map((s,i)=>(
          <div key={i} style={{marginBottom:12}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:5}}>
              <span style={{fontSize:13,fontWeight:500}}>{s.skill}</span>
              <span style={{fontSize:12,color:ORANGE,fontWeight:600}}>{s.pct}%</span>
            </div>
            <div className="progress-bar"><div className="progress-fill" style={{width:`${s.pct}%`}}/></div>
          </div>
        ))}
      </div>

      <div className="card">
        <div className="section-title">Offer Performance</div>
        <div className="section-sub">Views, apps and conversion per position</div>
        {offers.map(o=>(
          <div key={o.id} style={{padding:"12px 14px",background:CARD2,borderRadius:12,border:`1px solid ${BORDER}`,marginBottom:10}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
              <div style={{fontWeight:600,fontSize:13}}>{o.title}</div>
              <StatusBadge s={o.status}/>
            </div>
            <div style={{display:"flex",gap:16}}>
              <div style={{textAlign:"center"}}>
                <div style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:18,color:CYAN}}>{o.views}</div>
                <div style={{fontSize:10,color:MUTED}}>Views</div>
              </div>
              <div style={{textAlign:"center"}}>
                <div style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:18,color:ORANGE}}>{o.apps}</div>
                <div style={{fontSize:10,color:MUTED}}>Apps</div>
              </div>
              <div style={{textAlign:"center"}}>
                <div style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:18,color:GREEN}}>{Math.round(o.apps/o.views*100)}%</div>
                <div style={{fontSize:10,color:MUTED}}>CVR</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function AnalyticsSectionPage(){
  return(
    <>
      <div className="app">

        {/* ── Sidebar ── */}
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
              <div key={n.id} className={`nav-item ${n.id==="stats"?"active":""}`}>
                <span>{n.icon}</span>
                <span>{n.label}</span>
                {n.badge&&<span className={`nav-badge ${n.red?"red":""}`}>{n.badge}</span>}
              </div>
            ))}
          </div>
          <div className="sidebar-footer">
            <div className="user-mini">
              <div className="avatar">Y</div>
              <div><div style={{fontSize:13,fontWeight:600,color:TEXT}}>Yasmine B.</div><div style={{fontSize:11,color:MUTED}}>HR Manager</div></div>
            </div>
          </div>
        </div>

        {/* ── Analytics page ── */}
        <div className="main"><Stats/></div>
      </div>
    </>
  );
}
