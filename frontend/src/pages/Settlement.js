// export default function Settlement({setPage}){
//   return(
//     <div className="page">
//       <h2>Settlement Plan</h2>
//       <div className="card">
//         <p>A to B:$50</p>
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";

export default function Settlement({ setPage, groupId }) {
  const [settlements, setSettlements] = useState([]);

  const calculateSettlement = async () => {
    if (!groupId) return alert("No group selected");

    const res = await fetch(`http://localhost:5000/api/settlement/${groupId}`);
    const data = await res.json();
    setSettlements(data); // data should be array of {fromName, toName, amount}
  };

  useEffect(() => {
    calculateSettlement();
  }, [groupId]);

  return (
    <div className="page">
      <div className="card">
        <h2>Settlement</h2>
        <ul>
          {settlements.map((s, i) => (
            <li key={i}>
              {s.fromName} pays {s.toName} ₹{s.amount}
            </li>
          ))}
        </ul>
        <button onClick={() => setPage("ledger")}>Back to Ledger</button>
        <button onClick={() => setPage("group")}>Back to Group</button>
      </div>
    </div>
  );
}