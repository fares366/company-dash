import { useState } from 'react';
import './messages-section.css';

const BORDER="#1e2d40",TEXT="#e2e8f0",MUTED="#64748b",GREEN="#22c55e",ORANGE="#f97316";

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

const convos=[
  {id:1,name:"Amira Benali",initials:"AB",last:"Thank you! I'm available next week.",time:"1h",unread:1},
  {id:2,name:"Karim Meziani",initials:"KM",last:"Could you clarify the stack?",time:"3h",unread:0},
  {id:3,name:"Sara Hamidi",initials:"SH",last:"Looking forward to the interview!",time:"1d",unread:0},
];

const Messages = () => {
  const [active,setActive]=useState(convos[0]);
  const msgs=[
    {from:"them",text:"Hello! I just applied for the Frontend Developer Intern position. I'm really excited about the opportunity.",time:"9:00 AM"},
    {from:"me",text:"Hi Amira! Thank you for your application. We've reviewed your profile and your AI match score is excellent at 91%.",time:"9:30 AM"},
    {from:"them",text:"That's great to hear! I'm very passionate about frontend development and Djezzy's digital transformation projects.",time:"9:45 AM"},
    {from:"me",text:"We'd love to schedule a technical interview. Are you available this week?",time:"10:00 AM"},
    {from:"them",text:"Absolutely! I'm available Tuesday and Thursday afternoon. What time works best for your team?",time:"10:05 AM"},
  ];
  return(
    <div>
      <div className="page-header"><div><h1 className="page-title">Messages</h1><p className="page-sub">Direct communication with candidates</p></div></div>
      <div className="card" style={{padding:0,overflow:"hidden"}}>
        <div style={{display:"flex"}}>
          <div style={{width:290,borderRight:`1px solid ${BORDER}`,flexShrink:0}}>
            <div style={{padding:"16px 16px 12px",borderBottom:`1px solid ${BORDER}`}}>
              <div className="search-wrap"><span className="search-icon">🔍</span><input className="search-input" placeholder="Search conversations…" style={{fontSize:12.5}}/></div>
            </div>
            <div className="chat-list">
              {convos.map(c=>(
                <div key={c.id} className={`chat-item ${active.id===c.id?"active":""}`} onClick={()=>setActive(c)}>
                  <div className="cand-avatar" style={{width:38,height:38,fontSize:13,position:"relative"}}>
                    {c.initials}
                    {c.unread>0&&<span style={{position:"absolute",top:-3,right:-3,width:16,height:16,background:ORANGE,borderRadius:"50%",fontSize:9,color:"#000",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700}}>{c.unread}</span>}
                  </div>
                  <div style={{flex:1,overflow:"hidden"}}>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                      <span style={{fontWeight:600,fontSize:13.5}}>{c.name}</span>
                      <span style={{fontSize:11,color:MUTED}}>{c.time}</span>
                    </div>
                    <div style={{fontSize:12,color:MUTED,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",marginTop:2}}>{c.last}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{flex:1,display:"flex",flexDirection:"column"}}>
            <div style={{padding:"16px 20px",borderBottom:`1px solid ${BORDER}`,display:"flex",alignItems:"center",gap:12,justifyContent:"space-between"}}>
              <div style={{display:"flex",gap:12,alignItems:"center"}}>
                <div className="cand-avatar" style={{width:36,height:36,fontSize:13}}>{active.initials}</div>
                <div><div style={{fontWeight:700}}>{active.name}</div><div style={{fontSize:12,color:GREEN}}>● Online</div></div>
              </div>
              <div style={{display:"flex",gap:8}}>
                <span className="tag tag-cyan" style={{fontSize:10}}>91% match</span>
                <button className="btn btn-success btn-sm">✓ Accept</button>
              </div>
            </div>
            <div style={{flex:1,padding:20,overflowY:"auto",display:"flex",flexDirection:"column",gap:12,minHeight:320}}>
              {msgs.map((m,i)=>(
                <div key={i} style={{display:"flex",flexDirection:"column",alignItems:m.from==="me"?"flex-end":"flex-start"}}>
                  <div className={`chat-bubble ${m.from==="me"?"sent":"recv"}`}>{m.text}</div>
                  <div className="msg-time">{m.time}</div>
                </div>
              ))}
            </div>
            <div style={{padding:"14px 20px",borderTop:`1px solid ${BORDER}`,display:"flex",gap:10}}>
              <input className="form-input" placeholder="Type a message…" style={{flex:1}}/>
              <button className="btn btn-outline btn-sm">↑</button>
              <button className="btn btn-primary btn-sm">➤</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function MessagesSectionPage(){
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
              <div key={n.id} className={`nav-item ${n.id==="messages"?"active":""}`}>
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

        {/* ── Messages page ── */}
        <div className="main"><Messages/></div>
      </div>
    </>
  );
}
