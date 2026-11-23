import { Activity, ArrowUpRight, Bell, BriefcaseBusiness, CalendarDays, ChevronDown, CircleHelp, FileText, LayoutDashboard, Plus, Search, Settings2, Users, UserRoundCheck } from "lucide-react";

const stages = [
  { name: "New applications", count: 18, color: "mint", people: [{n:"AM",c:"peach"},{n:"RS",c:"lilac"},{n:"PK",c:"blue"}] },
  { name: "Screening", count: 12, color: "blue", people: [{n:"NS",c:"blue"},{n:"AK",c:"mint"}] },
  { name: "Interview", count: 7, color: "amber", people: [{n:"SD",c:"peach"},{n:"MR",c:"lilac"}] },
  { name: "Offer", count: 3, color: "lilac", people: [{n:"VK",c:"mint"}] },
];
const candidates = [
  { name:"Aarav Mehta", role:"Frontend Developer", initials:"AM", tone:"peach", status:"Screening", date:"Today", score:"92%" },
  { name:"Riya Sharma", role:"Product Designer", initials:"RS", tone:"lilac", status:"Interview", date:"Today", score:"88%" },
  { name:"Priya Kapoor", role:"Data Analyst", initials:"PK", tone:"blue", status:"New", date:"Yesterday", score:"84%" },
  { name:"Neha Singh", role:"Backend Developer", initials:"NS", tone:"mint", status:"Offer", date:"Nov 21", score:"90%" },
];
function App(){
 return <div className="hire-app">
  <aside className="hire-sidebar">
   <a className="hire-brand" href="#"><span className="hire-logo">h</span>hireflow<span className="ai-tag">AI</span></a>
   <div className="org-switch"><div className="org-icon">N</div><div><b>Northstar Studio</b><small>Recruitment team</small></div><ChevronDown size={15}/></div>
   <div className="side-label">WORKSPACE</div>
   <nav>
    <a className="hire-nav active"><LayoutDashboard size={18}/> Overview</a>
    <a className="hire-nav"><BriefcaseBusiness size={18}/> Job openings <span>6</span></a>
    <a className="hire-nav"><Users size={18}/> Candidates <span>40</span></a>
    <a className="hire-nav"><CalendarDays size={18}/> Interviews</a>
    <a className="hire-nav"><Activity size={18}/> Reports</a>
   </nav>
   <div className="side-label tools-label">TOOLS</div>
   <nav><a className="hire-nav"><FileText size={18}/> Resume library</a><a className="hire-nav"><Settings2 size={18}/> Settings</a><a className="hire-nav"><CircleHelp size={18}/> Help centre</a></nav>
   <div className="hire-profile"><div className="hire-avatar">KJ</div><div><b>Khushi Jha</b><small>Workspace admin</small></div><span>···</span></div>
  </aside>
  <main className="hire-main">
   <header className="hire-topbar"><div className="hire-breadcrumb">Workspace <span>/</span> Overview</div><div className="hire-top-right"><button><Search size={17}/></button><button><Bell size={17}/></button><div className="hire-avatar tiny">KJ</div></div></header>
   <div className="hire-content">
    <div className="hire-welcome"><div><div className="hire-eyebrow">MONDAY, NOVEMBER 23, 2026</div><h1>Your hiring at a glance.</h1><p>Here's how your recruitment pipeline is moving this week.</p></div><button className="hire-primary"><Plus size={17}/> Create job</button></div>
    <div className="hire-stats">
     <div className="hire-stat"><div><span>Open positions</span><BriefcaseBusiness size={18}/></div><strong>06</strong><small>Across 4 departments</small></div>
     <div className="hire-stat"><div><span>Total candidates</span><Users size={18}/></div><strong>40</strong><small>+8 this week</small></div>
     <div className="hire-stat"><div><span>Interviews scheduled</span><CalendarDays size={18}/></div><strong>09</strong><small>Next 7 days</small></div>
     <div className="hire-stat"><div><span>Offers extended</span><UserRoundCheck size={18}/></div><strong>03</strong><small>2 awaiting response</small></div>
    </div>
    <div className="hire-section-title"><div><h2>Application pipeline</h2><p>Track candidates as they move through each stage.</p></div><button className="filter-btn">All roles <ChevronDown size={14}/></button></div>
    <div className="pipeline">{stages.map(s=><div className="stage" key={s.name}><div className="stage-head"><span className={`stage-dot ${s.color}`}></span><b>{s.name}</b><span className="stage-count">{s.count}</span></div><div className="stage-progress"><span style={{width:(s.count/18*100)+"%"}} className={s.color}></span></div><div className="stage-foot"><div className="stage-people">{s.people.map(p=><i className={p.c} key={p.n}>{p.n}</i>)}</div><span>View candidates <ArrowUpRight size={13}/></span></div></div>)}</div>
    <div className="hire-section-title candidate-title"><div><h2>Recent candidates</h2><p>Latest profiles added to your talent pool.</p></div><a href="#">View all candidates <ArrowUpRight size={15}/></a></div>
    <div className="candidate-table"><div className="table-head"><span>CANDIDATE</span><span>APPLICATION STATUS</span><span>APPLIED</span><span>MATCH SCORE*</span></div>{candidates.map(c=><div className="candidate-row" key={c.name}><div className="candidate-name"><i className={c.tone}>{c.initials}</i><div><b>{c.name}</b><small>{c.role}</small></div></div><div><span className={`candidate-status ${c.status.toLowerCase()}`}>{c.status}</span></div><span className="applied-date">{c.date}</span><strong className="match-score">{c.score}</strong></div>)}</div>
    <div className="hire-footnote">Preview interface · Sample candidate data only · Match scores are illustrative, not AI-generated</div>
    <div className="hire-disclaimer">* No automated candidate ranking is active in this preview. Any future matching feature will be documented and designed for recruiter review.</div>
   </div>
  </main>
 </div>
}
export default App;
