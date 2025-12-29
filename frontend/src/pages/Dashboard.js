
export default function Dashboard({setPage}){
  return(
    <div className="page">
      <h1>Dashboard</h1>
      <div className="card">
        <p>Manage Your Groups</p>
        <button onClick={()=>setPage("groups")}>Go to Groups</button>
      
        <p>Check ledger</p>
        <button onClick={()=>setPage("ledger")}>Show Ledger</button>
        <p>View Profile</p>
        <button onClick={()=>setPage("profile")}>Profile</button>
      </div>
    </div>
  )
}