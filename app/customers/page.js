const customers = [
  ["BP-1001","Sarah Mitchell","sarah@example.com","Prospect","Sales"],
  ["BP-1002","James Wilson","james@example.com","Enrolled","Support"],
  ["BP-1003","Amina Hassan","amina@example.com","Enrolled","Admissions"],
  ["BP-1004","David Chen","david@example.com","Prospect","Marketing"],
  ["BP-1005","Emily Brown","emily@example.com","Lead","Sales"]
];
export default function Customers() {
  return <Page title="Customers" subtitle="Central customer and contact information." action="+ New Customer">
    <div className="toolbar"><input placeholder="Search customers..." /><select><option>All statuses</option><option>Lead</option><option>Prospect</option><option>Enrolled</option></select></div>
    <div className="card"><table><thead><tr><th>Customer ID</th><th>Name</th><th>Email</th><th>Status</th><th>Owner</th></tr></thead><tbody>{customers.map(r=><tr key={r[0]}>{r.map((x,i)=><td key={i}>{i===3?<span className="badge">{x}</span>:x}</td>)}</tr>)}</tbody></table></div>
  </Page>;
}
function Page({title,subtitle,action,children}) { return <div className="shell"><Sidebar/><main className="main"><header className="topbar"><div><p className="eyebrow">CUSTOMER MANAGEMENT</p><h1>{title}</h1><p className="subtitle">{subtitle}</p></div><button className="primary">{action}</button></header>{children}</main></div>; }
function Sidebar(){return <aside className="sidebar"><div className="brand"><div className="brandmark">B</div><div><strong>BrightPath</strong><span>CRM</span></div></div><nav>{[["⌂","Dashboard","/"],["◉","Customers","/customers"],["↗","Sales","/sales"],["✦","Marketing","/marketing"],["▣","Support","/support"],["▤","Reports","/reports"]].map(([i,l,h])=><a className={l==="Customers"?"active":""} href={h} key={l}><b>{i}</b>{l}</a>)}</nav><div className="navsection">ADMINISTRATION</div><nav><a href="/admin"><b>⚙</b>Users & Access</a></nav></aside>}
