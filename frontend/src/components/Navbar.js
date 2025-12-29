

export default function Navbar({setPage}){
return(
  <div  className="navbar">
<button onClick={()=>setPage("dashboard")}>Dashboard</button>
<button onClick={()=>setPage("groups")}>Groups</button>
<button onClick={()=>setPage("addgroup")}>Create Group</button>
<button onClick={()=>setPage("ledger")}>Ledger</button>
<button onClick={()=>setPage("settlement")}>Settlement</button>
<button onClick={()=>setPage("profile")}>Profile</button>
  </div>
);
}