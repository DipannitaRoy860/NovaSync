// export default function AddExpense({setPage}){
//   return(
//     <div className="all">
//     <div className="page">
//       <h2>Add Expense</h2>
//       <div className="card">
//         <input placeholder="Amount"/><br/><br/>
//         <input placeholder="Description"/><br/><br/>
//         <label>Split Type</label><br/><br/>
//         <select>
//           <option>Equal</option>
//           <option>Percentage</option>
//         </select>
//         <br/><br/>
//         <button onClick={()=>setPage("ledger")}>Add Expense</button>
//       </div>
//     </div>
//     </div>
//   )
// }
import { useState } from "react";

export default function AddExpense({ groupId, setView }) {
  //const[page, setPage]= useState("login");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  //const [ledger, setLedger] = useState([]);

  const addExpense = async () => {
   if (!title || !amount) return alert("Fill all fields");
   try{
    const res =await 
    fetch("http://localhost:5000/api/expenses/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        groupId,
        title,
        amount,
        //paidBy: localStorage.getItem("userId"),
      }),
    });
const data = await res.json();
if(data.success){
  alert("Expense added Successfully");
    setTitle("");
    setAmount("");
   // setLedger([...ledger,{_id:data.expense._id,title,amount}])
  }else {
    alert(data.message || "Error adding expense");
  }
   }catch(err){
    console.error(err);
    alert("Server error while adding expense");
   }
  }
  // const goToLedger =() => {
  //   if(!groupId) return alert("No group selected");
  //   setPage("ledger");
  //   // const res = await fetch(
  //   //   `http://localhost:5000/api/expenses/ledger/${groupId}`

  //   // const data = await res.json();
  //   // setLedger(data.expenses);
  // };

  return (
    <div className="page">
      <div className="card">
      <h3>Add Expense</h3>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
<p></p>
      <button onClick={addExpense}>Add Expense</button>

      <button onClick={()=> setView("ledger")}>Ledger</button>

    

      <button onClick={() => setView("group")}>Back to Groups</button>
    </div>
    </div>
  );
}