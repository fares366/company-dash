import { useState } from 'react';
import './post-new-offer.css';

const CYAN="#00e5c8",CARD2="#0f1724",BORDER="#1e2d40",TEXT="#e2e8f0",MUTED="#64748b",ORANGE="#f97316";

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

export default function PostNewOfferPage(){
  const[tab,setTab]=useState("details");

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
              <div key={n.id} className={`nav-item ${n.id==="create-offer"?"active":""}`}>
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
            <div><h1 className="page-title">Create Internship Offer</h1><p className="page-sub">Fill in the details to attract the best candidates</p></div>
            <div style={{display:"flex",gap:10}}>
              <button className="btn btn-outline">Save Draft</button>
              <button className="btn btn-primary">🚀 Publish Offer</button>
            </div>
          </div>

          <div style={{display:"flex",gap:20}}>

            {/* ── LEFT: tabbed form ── */}
            <div style={{flex:1}}>
              <div className="tabs" style={{marginBottom:20}}>
                {["details","requirements","settings"].map(t=>(
                  <div key={t} className={`tab ${tab===t?"active":""}`} onClick={()=>setTab(t)}>
                    {t.charAt(0).toUpperCase()+t.slice(1)}
                  </div>
                ))}
              </div>

              {/* DETAILS */}
              {tab==="details"&&(
                <div className="card">
                  <div className="section-title">Offer Details</div>
                  <div className="section-sub">Describe the position to attract the right candidates</div>
                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">Offer Title</label>
                      <input className="form-input" placeholder="e.g. Frontend Developer Intern"/>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Domain / Sector</label>
                      <select className="form-input">
                        <option>Engineering</option><option>Data Science</option><option>Design</option><option>Mobile</option><option>DevOps</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Description — Context & Objectives</label>
                    <textarea className="form-input" style={{minHeight:100}} placeholder="Describe the internship context, team, and what the intern will work on…"/>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Missions & Responsibilities</label>
                    <textarea className="form-input" style={{minHeight:100}} placeholder="List the main tasks and responsibilities the intern will take on…"/>
                  </div>
                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">Start Date</label>
                      <input className="form-input" type="date"/>
                    </div>
                    <div className="form-group">
                      <label className="form-label">End Date</label>
                      <input className="form-input" type="date"/>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Location</label>
                      <input className="form-input" placeholder="e.g. Algiers, Algeria"/>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Work Type</label>
                      <select className="form-input">
                        <option>On-site</option><option>Remote</option><option>Hybrid</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Compensation</label>
                      <input className="form-input" placeholder="e.g. 15,000 DZD / month (optional)"/>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Available Slots</label>
                      <input className="form-input" type="number" defaultValue="1"/>
                    </div>
                  </div>
                </div>
              )}

              {/* REQUIREMENTS */}
              {tab==="requirements"&&(
                <div className="card">
                  <div className="section-title">Candidate Requirements</div>
                  <div className="section-sub">Help the AI match the best profiles to your offer</div>
                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">Education Level</label>
                      <select className="form-input">
                        <option>Licence (L3)</option><option>Master 1</option><option>Master 2</option><option>Engineering Degree</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Specialty / Field</label>
                      <input className="form-input" placeholder="e.g. Computer Science, Software Engineering"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Required Skills</label>
                    <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:10}}>
                      {["React","TypeScript","Node.js","REST API"].map(s=>(
                        <span key={s} style={{display:"inline-flex",alignItems:"center",gap:6,padding:"5px 10px",background:ORANGE+"15",border:`1px solid ${ORANGE}30`,borderRadius:8,fontSize:12.5,fontWeight:500,color:ORANGE}}>
                          {s}<button style={{background:"none",border:"none",cursor:"pointer",color:ORANGE,fontSize:14,lineHeight:1}}>×</button>
                        </span>
                      ))}
                    </div>
                    <div style={{display:"flex",gap:8}}>
                      <input className="form-input" placeholder="Add required skill…" style={{flex:1}}/>
                      <button className="btn btn-primary btn-sm">+ Add</button>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Desired Qualities</label>
                    <textarea className="form-input" style={{minHeight:70}} placeholder="e.g. Autonomous, curious, team player, good communication skills…"/>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Application Deadline</label>
                    <input className="form-input" type="date"/>
                  </div>
                </div>
              )}

              {/* SETTINGS */}
              {tab==="settings"&&(
                <div className="card">
                  <div className="section-title">Offer Settings</div>
                  <div className="section-sub">Configure visibility and notifications</div>
                  {[
                    {label:"Auto-rank candidates by AI score",       desc:"Automatically sort applicants by compatibility",      enabled:true},
                    {label:"Allow direct messaging from candidates", desc:"Students can message you before applying",             enabled:true},
                    {label:"Notify me when a top match applies",     desc:"Get alerted for candidates with 80%+ match",          enabled:true},
                    {label:"Display salary information",             desc:"Show compensation to candidates",                    enabled:false},
                    {label:"Require cover letter",                   desc:"Make cover letter mandatory",                        enabled:false},
                  ].map((s,i)=>(
                    <div key={i} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 0",borderBottom:`1px solid ${BORDER}22`}}>
                      <div>
                        <div style={{fontSize:13.5,fontWeight:600}}>{s.label}</div>
                        <div style={{fontSize:12,color:MUTED}}>{s.desc}</div>
                      </div>
                      <div style={{width:40,height:22,borderRadius:20,background:s.enabled?ORANGE:BORDER,cursor:"pointer",position:"relative",flexShrink:0}}>
                        <div style={{position:"absolute",top:3,left:s.enabled?20:3,width:16,height:16,borderRadius:"50%",background:"#fff",transition:"left .2s"}}/>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* ── RIGHT: preview sidebar ── */}
            <div style={{width:320,flexShrink:0}}>
              <div className="card card-glow" style={{position:"sticky",top:20}}>
                <div style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:14,color:ORANGE,marginBottom:14}}>📋 Offer Preview</div>
                <div style={{padding:14,background:CARD2,borderRadius:12,border:`1px solid ${BORDER}`}}>
                  <div style={{display:"flex",gap:10,marginBottom:12}}>
                    <div style={{width:38,height:38,borderRadius:10,background:ORANGE+"18",border:`1px solid ${ORANGE}33`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20}}>📡</div>
                    <div>
                      <div style={{fontWeight:700,fontSize:14,color:"#fff"}}>Frontend Developer Intern</div>
                      <div style={{fontSize:12,color:MUTED}}>Djezzy · Algiers, Algeria</div>
                    </div>
                  </div>
                  <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:12}}>
                    <span className="tag tag-orange" style={{fontSize:10}}>6 months</span>
                    <span className="tag tag-muted"  style={{fontSize:10}}>On-site</span>
                    <span className="tag tag-green"  style={{fontSize:10}}>Paid</span>
                    <span className="tag tag-cyan"   style={{fontSize:10}}>Master</span>
                  </div>
                  <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                    {["React","TypeScript","Node.js"].map(s=>(
                      <span key={s} className="skill-tag"><span className="dot req"/> {s}</span>
                    ))}
                  </div>
                </div>
                <div style={{marginTop:14,padding:12,background:CYAN+"08",border:`1px solid ${CYAN}22`,borderRadius:10}}>
                  <div style={{fontSize:12,color:CYAN,fontWeight:600,marginBottom:6}}>✦ AI Reach Estimate</div>
                  <div style={{fontSize:13,color:TEXT}}>~<span style={{fontWeight:700,color:CYAN}}>140</span> matching student profiles on the platform</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}
