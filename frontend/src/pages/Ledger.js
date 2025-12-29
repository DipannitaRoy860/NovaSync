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
// import { useEffect, useState } from "react";

// export default function Ledger({ setView, groupId }) {
//   const [expenses, setExpenses] = useState([]);

//   // const loadLedger = async () => {
//   //   if (!groupId) return alert("No group selected");
//   //   const res = await fetch(`http://localhost:5000/api/expenses/ledger/${groupId}`);
//   //   const data = await res.json();
//   //   if (data.success) setExpenses(data.expenses);
//   // };

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/expenses/ledger/${groupId}`);
//     .then(res =>res.json());
//     loadLedger();
//   }, [groupId]);

//   return (
//     <div className="page">
//       <div className="card">
//         <h2>Ledger</h2>
//         <ul>
//           {expenses.map((e) => (
//             <li key={e._id}>
//               {e.title} - ₹{e.amount}
//             </li>
//           ))}
//         </ul>
//         <button onClick={() => setPage("group")}>Back to Group</button>
//         <button onClick={() => setPage("settlement")}>Go to Settlement</button>
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";

export default function Ledger({ groupId, setView }) {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    if (!groupId) return;

    fetch(`http://localhost:5000/api/expenses/ledger/${groupId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setExpenses(data.expenses);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [groupId]);

  return (
    <div className="page">
      <div className="card">
        <h3>Ledger</h3>

        {expenses.length === 0 && <p>No expenses yet</p>}

        <ul>
          {expenses.map((e) => (
            <li key={e._id}>
              {e.title} – ₹{e.amount}
            </li>
          ))}
        </ul>

        <button onClick={() => setView("settlement")}>
          Go to Settlement
        </button>

        <button onClick={() => setView("addExpense")}>
          Back
        </button>
      </div>
    </div>
  );
}