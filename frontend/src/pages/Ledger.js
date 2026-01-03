// export default function Ledger({setPage}){
//   return(
//     <div className="page">
//       <h2>Ledger</h2>
//       <div className="card">
//         <p>a paid $50</p>
//         <p>b paid $100</p>
//       </div>
//       <p></p>
//       <button onClick={()=>setPage("settlement")}  style={{display:"block",margin:"20px auto",width:"fit-content"}}>View Settlement</button>
      
//     </div>
//   );
// }
import { useEffect, useState } from "react";

export default function Ledger({ groupId, setPage }) {
  const [expenses, setExpenses] = useState([]);
  useEffect(()=>{
    loadLedger();
  },[]);
const loadLedger = async () => {
  const res = await fetch (`http://localhost:5000/api/expenses/ledger/${groupId}`);
  const data = await res.json ();
  setExpenses(data.expenses || []);
}
  return (
    <div className="page">
      <div className="card">
       { expenses.map((e)=>(
        <div key={e._id} style ={{marginBottom:"15px"}}>
          <h4>{e.title}-₹{e.amount}</h4>
          <ul>
            {e.participants.map((p,i)=>(
              <li key={i}>{p.name} owes ₹ {p.share}</li>
            ))}
          </ul>
          </div>
       ))}
       <button onClick={()=> setPage("settlement")}>Settlement</button>
       <p></p>
       <button onClick ={()=> setPage("groups")}>Back</button>
      </div>
    </div>
  );
}