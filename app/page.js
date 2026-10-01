const kpis = [
  { label: "Active Opportunities", value: "24", note: "+8% this month" },
  { label: "New Enquiries", value: "38", note: "12 require follow-up" },
  { label: "Open Support Cases", value: "17", note: "4 overdue" },
  { label: "Active Campaigns", value: "6", note: "2 running this week" }
];

const activities = [
  ["New enquiry", "Sarah Mitchell", "Sales", "10 min ago"],
  ["Case assigned", "James Wilson", "Support", "32 min ago"],
  ["Enrolment completed", "Amina Hassan", "Admissions", "1 hr ago"],
  ["Campaign response", "David Chen", "Marketing", "2 hrs ago"]
];

export default function Dashboard() {
  return (
    <div className="shell">
      <Sidebar />
      <main className="main">
        <header className="topbar">
          <div>
            <p className="eyebrow">BRIGHTPATH LEARNING</p>
            <h1>CRM Dashboard</h1>
          </div>
          <div className="user">
            <div className="avatar">CO</div>
            <div><strong>Catherine</strong><span>Lead BA</span></div>
          </div>
        </header>

        <section className="welcome">
          <div>
            <h2>Good evening, Catherine</h2>
            <p>Here is the latest overview of customer, sales and support activity.</p>
          </div>
          <button className="primary">+ New Customer</button>
        </section>

        <section className="grid four">
          {kpis.map((kpi) => (
            <div className="card kpi" key={kpi.label}>
              <span>{kpi.label}</span>
              <strong>{kpi.value}</strong>
              <small>{kpi.note}</small>
            </div>
          ))}
        </section>

        <section className="grid two">
          <div className="card">
            <div className="cardhead"><h3>Sales Pipeline</h3><a href="/sales">View pipeline</a></div>
            <div className="pipeline">
              <div><span>New Enquiry</span><strong>12</strong></div>
              <div><span>Qualified</span><strong>8</strong></div>
              <div><span>Proposal</span><strong>3</strong></div>
              <div><span>Enrolled</span><strong>7</strong></div>
            </div>
          </div>

          <div className="card">
            <div className="cardhead"><h3>Support Cases</h3><a href="/support">View cases</a></div>
            <div className="case-summary">
              <div><strong>17</strong><span>Open</span></div>
              <div><strong>4</strong><span>Overdue</span></div>
              <div><strong>9</strong><span>Assigned</span></div>
            </div>
          </div>
        </section>

        <section className="card">
          <div className="cardhead"><h3>Recent Activity</h3><a href="/customers">View all</a></div>
          <table>
            <thead><tr><th>Activity</th><th>Customer</th><th>Team</th><th>When</th></tr></thead>
            <tbody>
              {activities.map((row) => <tr key={row.join("-")}>{row.map((cell, i) => <td key={i}>{cell}</td>)}</tr>)}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

function Sidebar() {
  const links = [
    ["⌂", "Dashboard", "/"],
    ["◉", "Customers", "/customers"],
    ["↗", "Sales", "/sales"],
    ["✦", "Marketing", "/marketing"],
    ["▣", "Support", "/support"],
    ["▤", "Reports", "/reports"]
  ];
  return <aside className="sidebar">
    <div className="brand"><div className="brandmark">B</div><div><strong>BrightPath</strong><span>CRM</span></div></div>
    <nav>{links.map(([icon, label, href]) => <a className={label === "Dashboard" ? "active" : ""} href={href} key={label}><b>{icon}</b>{label}</a>)}</nav>
    <div className="navsection">ADMINISTRATION</div>
    <nav><a href="/admin"><b>⚙</b>Users & Access</a></nav>
    <div className="sidebarbottom">BrightPath Learning<br/><small>CRM Practice Engagement</small></div>
  </aside>;
}
