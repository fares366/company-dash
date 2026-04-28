import { useState } from 'react';
import './company-profile.css';

const CARD="#111827",CARD2="#0f1724",BORDER="#1e2d40",TEXT="#e2e8f0",MUTED="#64748b",GREEN="#22c55e",ORANGE="#f97316";

const navItems=[
  {id:"dashboard",      label:"Dashboard",       icon:"⊞"},
  {id:"profile",        label:"Company Profile",  icon:"🏭"},
  {id:"offers",         label:"My Offers",        icon:"📋", badge:"3"},
  {id:"create-offer",   label:"Post New Offer",   icon:"＋"},
  {id:"applications",   label:"Applications",     icon:"👥", badge:"8", red:true},
  {id:"candidate-detail",label:"Candidate Detail",icon:"🔍"},
  {id:"messages",       label:"Messages",         icon:"💬", badge:"1", red:true},
  {id:"stats",          label:"Analytics",        icon:"📊"},
  {id:"eval-intern",    label:"Evaluate Intern",  icon:"⭐"},
];

const Stars=({n=4}: { n?: number })=><span>{Array.from({length:5},(_,i)=><span key={i} className="star">{i<n?"★":"☆"}</span>)}</span>;

export default function CompanyProfilePage(){
  const[tab,setTab]=useState("info");

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
              <div key={n.id} className={`nav-item ${n.id==="profile"?"active":""}`}>
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
            <div><h1 className="page-title">Company Profile</h1><p className="page-sub">Your public page seen by all students</p></div>
            <button className="btn btn-primary">✓ Save Changes</button>
          </div>

          {/* Cover banner */}
          <div style={{height:120,borderRadius:16,background:`linear-gradient(135deg,${ORANGE}22,${CARD2})`,border:`1px solid ${ORANGE}22`,marginBottom:-50,position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",right:20,bottom:12}}>
              <button className="btn btn-outline btn-sm">📷 Change Banner</button>
            </div>
            <div style={{position:"absolute",inset:0,background:`repeating-linear-gradient(45deg,${ORANGE}04 0,${ORANGE}04 1px,transparent 0,transparent 50%)`,backgroundSize:"20px 20px"}}/>
          </div>

          <div style={{display:"flex",gap:20,alignItems:"flex-start"}}>

            {/* Left sidebar */}
            <div style={{width:260,flexShrink:0,display:"flex",flexDirection:"column",gap:16,marginTop:0}}>
              <div className="card" style={{textAlign:"center",paddingTop:36}}>
                <div style={{display:"flex",justifyContent:"center",marginBottom:12}}>
                  <div style={{width:72,height:72,borderRadius:18,background:ORANGE+"22",border:`3px solid ${CARD}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:32,boxShadow:`0 0 0 2px ${ORANGE}33`}}>📡</div>
                </div>
                <div style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:18,color:"#fff"}}>Djezzy</div>
                <div className="verified-badge" style={{margin:"6px auto 10px",width:"fit-content"}}>✓ Verified Company</div>
                <div style={{color:MUTED,fontSize:12,marginBottom:8}}>Telecommunications · Algiers, Algeria</div>
                <div style={{color:MUTED,fontSize:12,marginBottom:14}}>Large Enterprise · 5,000+ employees</div>
                <Stars n={4}/>
                <div style={{fontSize:12,color:MUTED,marginTop:4}}>4.2 / 5 · 28 intern reviews</div>
              </div>

              <div className="card">
                <div style={{fontWeight:600,fontSize:13,marginBottom:14}}>Quick Links</div>
                {[
                  ["🌐","Website","www.djezzy.dz"],
                  ["💼","LinkedIn","linkedin.com/company/djezzy"],
                  ["📍","HQ","Algiers, Algeria"],
                ].map(([icon,label,val])=>(
                  <div key={label} style={{display:"flex",gap:10,alignItems:"center",marginBottom:12}}>
                    <span style={{fontSize:16}}>{icon}</span>
                    <div>
                      <div style={{fontSize:11,color:MUTED}}>{label}</div>
                      <div style={{fontSize:12.5,fontWeight:500}}>{val}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card">
                <div style={{fontWeight:600,fontSize:13,marginBottom:10}}>Activity Tags</div>
                <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                  {["Telecom","Mobile","Networks","5G","Digital","IoT"].map(t=>(
                    <span key={t} className="tag tag-muted" style={{fontSize:11}}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right content */}
            <div style={{flex:1,marginTop:60}}>
              <div className="tabs" style={{marginBottom:20}}>
                {["info","contact","reviews"].map(t=>(
                  <div key={t} className={`tab ${tab===t?"active":""}`} onClick={()=>setTab(t)}>
                    {t.charAt(0).toUpperCase()+t.slice(1)}
                  </div>
                ))}
              </div>

              {/* ── INFO TAB ── */}
              {tab==="info"&&(
                <div className="card">
                  <div className="section-title">Company Information</div>
                  <div className="section-sub">This information is visible to all students on the platform</div>
                  <div className="grid-2">
                    {[
                      ["Company Name","Djezzy"],
                      ["Sector","Telecommunications"],
                      ["Company Size","Large Enterprise (5,000+)"],
                      ["Founded","2001"],
                      ["Legal Reg. Number","RC-DZZ-2001-0042"],
                      ["Headquarters","Algiers, Algeria"],
                    ].map(([l,v])=>(
                      <div key={l} className="form-group">
                        <label className="form-label">{l}</label>
                        <input className="form-input" defaultValue={v}/>
                      </div>
                    ))}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Company Description</label>
                    <textarea className="form-input" defaultValue="Djezzy is Algeria's leading telecommunications company, providing mobile, internet and digital services to over 17 million subscribers. We are committed to innovation and digital transformation, offering exciting internship opportunities for ambitious students."/>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Company Logo</label>
                    <div style={{padding:20,background:CARD2,borderRadius:12,border:`1px dashed ${BORDER}`,display:"flex",alignItems:"center",gap:16}}>
                      <div style={{width:60,height:60,borderRadius:14,background:ORANGE+"18",border:`1px solid ${ORANGE}33`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:28}}>📡</div>
                      <div>
                        <div style={{fontSize:13.5,fontWeight:600,marginBottom:4}}>djezzy_logo.png · 128 KB</div>
                        <div style={{fontSize:12,color:GREEN,marginBottom:8}}>✓ Currently uploaded</div>
                        <button className="btn btn-outline btn-sm">↑ Update Logo</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ── CONTACT TAB ── */}
              {tab==="contact"&&(
                <div className="card">
                  <div className="section-title">Contact & Social</div>
                  <div className="section-sub">Manage your contact details and online presence</div>
                  <div className="grid-2">
                    {[
                      ["HR Manager Name","Yasmine Boukhalfa"],
                      ["Professional Email","hr@djezzy.dz"],
                      ["Phone","+213 21 73 00 00"],
                      ["Website","www.djezzy.dz"],
                      ["LinkedIn","linkedin.com/company/djezzy"],
                      ["Twitter/X","@DjezzyDZ"],
                    ].map(([l,v])=>(
                      <div key={l} className="form-group">
                        <label className="form-label">{l}</label>
                        <input className="form-input" defaultValue={v}/>
                      </div>
                    ))}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Full Address</label>
                    <textarea className="form-input" style={{minHeight:60}} defaultValue="Avenue de l'ALN, Hydra, Algiers 16035, Algeria"/>
                  </div>
                </div>
              )}

              {/* ── REVIEWS TAB ── */}
              {tab==="reviews"&&(
                <div className="card">
                  <div className="section-title">Intern Reviews</div>
                  <div className="section-sub">Feedback left by past interns — publicly visible</div>
                  <div style={{display:"flex",gap:24,alignItems:"center",marginBottom:24,padding:20,background:CARD2,borderRadius:14,border:`1px solid ${BORDER}`}}>
                    <div style={{textAlign:"center"}}>
                      <div style={{fontFamily:"'Syne',sans-serif",fontSize:48,fontWeight:800,color:ORANGE}}>4.2</div>
                      <Stars n={4}/>
                      <div style={{fontSize:12,color:MUTED,marginTop:4}}>28 reviews</div>
                    </div>
                    <div style={{flex:1}}>
                      {([
                        ["Welcome & Onboarding",4.5],
                        ["Mentoring Quality",4.2],
                        ["Mission Interest",4.0],
                        ["Work Environment",4.4],
                        ["Would Recommend",80],
                      ] as [string, number][]).map(([label,val])=>(
                        <div key={label} style={{marginBottom:9}}>
                          <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
                            <span style={{fontSize:12.5,fontWeight:500}}>{label}</span>
                            <span style={{fontSize:12,color:ORANGE,fontWeight:700}}>{val}{typeof val==="number"&&val>5?"%":"/5"}</span>
                          </div>
                          <div className="progress-bar">
                            <div className="progress-fill" style={{width:`${typeof val==="number"&&val>5?val:(val/5)*100}%`}}/>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {[
                    {name:"Amira B.",   date:"Jun 2025", stars:5, note:"Great experience! The team was welcoming and the missions were really interesting. I learned a lot about telecom infrastructure."},
                    {name:"Anonymous",  date:"Feb 2025", stars:4, note:"Good internship overall. The mentoring could be more structured but the environment is very dynamic."},
                    {name:"Karim M.",   date:"Oct 2024", stars:4, note:"Very professional company. Real responsibilities from day one. Highly recommend for engineering students."},
                  ].map((r,i)=>(
                    <div key={i} style={{padding:16,background:CARD2,borderRadius:12,border:`1px solid ${BORDER}`,marginBottom:12}}>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
                        <div style={{fontWeight:600,fontSize:13.5}}>{r.name}</div>
                        <div style={{display:"flex",alignItems:"center",gap:8}}>
                          <Stars n={r.stars}/>
                          <span style={{fontSize:12,color:MUTED}}>{r.date}</span>
                        </div>
                      </div>
                      <div style={{fontSize:13.5,color:MUTED,lineHeight:1.6}}>{r.note}</div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>
        </div>

      </div>
    </>
  );
}
