import { useState } from 'react';
import './evaluate-intern-section.css';

const CARD2="#0f1724",BORDER="#1e2d40",TEXT="#e2e8f0",MUTED="#64748b",GREEN="#22c55e",YELLOW="#f59e0b",ORANGE="#f97316";

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

const initialRatings = {technical:0,autonomy:0,communication:0,punctuality:0,overall:0};
type RatingKey = keyof typeof initialRatings;

const EvalIntern=()=>{
  const [ratings,setRatings]=useState(initialRatings);
  const set=(k: RatingKey, v: number)=>setRatings(r=>({...r,[k]:v}));

  const RatingRow=({label,k}: { label: string; k: RatingKey })=>(
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 0",borderBottom:`1px solid ${BORDER}22`}}>
      <span style={{fontSize:13.5,fontWeight:500}}>{label}</span>
      <div style={{display:"flex",gap:4}}>
        {[1,2,3,4,5].map(n=>(
          <span key={n} onClick={()=>set(k,n)} style={{fontSize:22,cursor:"pointer",color:n<=ratings[k]?YELLOW:BORDER,transition:"color .15s"}}>★</span>
        ))}
      </div>
    </div>
  );

  return(
    <div>
      <div className="page-header">
        <div><h1 className="page-title">Evaluate Intern</h1><p className="page-sub">Submit your feedback after internship completion</p></div>
      </div>
      <div className="grid-2">

        {/* Left column */}
        <div style={{display:"flex",flexDirection:"column",gap:16}}>

          {/* Intern info */}
          <div className="card">
            <div style={{display:"flex",gap:14,alignItems:"center",marginBottom:16}}>
              <div className="cand-avatar lg">AB</div>
              <div>
                <div style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:18,color:"#fff"}}>Amira Benali</div>
                <div style={{color:MUTED,fontSize:13,marginBottom:6}}>Master 2 · Computer Science · Univ. of Oran 1</div>
                <div style={{display:"flex",gap:8}}>
                  <span className="tag tag-orange">Frontend Intern</span>
                  <span className="tag tag-muted">Jan–Jul 2025</span>
                </div>
              </div>
            </div>
            <div style={{padding:12,background:GREEN+"0a",border:`1px solid ${GREEN}22`,borderRadius:10}}>
              <div style={{fontSize:12,color:GREEN,fontWeight:600}}>✓ Internship marked as completed</div>
            </div>
          </div>

          {/* Rating form */}
          <div className="card">
            <div className="section-title">Performance Ratings</div>
            <div className="section-sub">Rate the intern on each criterion</div>
            <RatingRow label="Technical Skills" k="technical"/>
            <RatingRow label="Autonomy & Initiative" k="autonomy"/>
            <RatingRow label="Communication" k="communication"/>
            <RatingRow label="Punctuality & Reliability" k="punctuality"/>
            <div style={{marginTop:16}}>
              <div style={{fontSize:13,fontWeight:600,marginBottom:8}}>Overall Rating</div>
              <div style={{display:"flex",gap:6,justifyContent:"center"}}>
                {[1,2,3,4,5].map(n=>(
                  <span key={n} onClick={()=>set("overall",n)} style={{fontSize:30,cursor:"pointer",color:n<=ratings.overall?YELLOW:BORDER,transition:"color .15s"}}>★</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div style={{display:"flex",flexDirection:"column",gap:16}}>

          {/* Written feedback */}
          <div className="card">
            <div className="section-title">Written Feedback</div>
            <div className="section-sub">This review will be visible on the intern's profile</div>
            <div className="form-group">
              <label className="form-label">Comments</label>
              <textarea className="form-input" style={{minHeight:140}} placeholder="Describe the intern's performance, strengths, areas for improvement, and overall experience working with them…"/>
            </div>
            <div className="form-group">
              <label className="form-label">Would You Rehire This Intern?</label>
              <div style={{display:"flex",gap:10}}>
                {["Yes, definitely","Yes, with conditions","No"].map(opt=>(
                  <div key={opt} style={{flex:1,padding:"10px 8px",background:CARD2,border:`1px solid ${BORDER}`,borderRadius:10,cursor:"pointer",textAlign:"center",fontSize:12.5,fontWeight:500}}>{opt}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Evaluation summary */}
          <div className="card">
            <div className="section-title">Evaluation Summary</div>
            <div style={{padding:16,background:CARD2,borderRadius:12,border:`1px solid ${BORDER}`,marginBottom:14}}>
              {([
                ["Technical Skills",ratings.technical],
                ["Autonomy",ratings.autonomy],
                ["Communication",ratings.communication],
                ["Punctuality",ratings.punctuality],
              ] as [string, number][]).map(([label,val])=>(
                <div key={label} style={{marginBottom:10}}>
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
                    <span style={{fontSize:12.5}}>{label}</span>
                    <span style={{fontSize:12,color:YELLOW,fontWeight:700}}>{val>0?`${val}/5`:"—"}</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width:`${val*20}%`,background:`linear-gradient(90deg,${YELLOW},${ORANGE})`}}/>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn btn-primary" style={{width:"100%"}}>📝 Submit Evaluation</button>
            <p style={{fontSize:11.5,color:MUTED,marginTop:10,textAlign:"center"}}>This evaluation will be published on the intern's public profile</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default function EvaluateInternSectionPage(){
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
              <div key={n.id} className={`nav-item ${n.id==="eval-intern"?"active":""}`}>
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

        {/* ── Evaluate Intern page ── */}
        <div className="main"><EvalIntern/></div>
      </div>
    </>
  );
}
