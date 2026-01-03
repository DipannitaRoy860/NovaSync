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



import { useEffect, useState } from "react";

export default function AddExpense({ groupId, setView}) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [splitType, setSplitType] = useState("equal");
  const [members, setMembers] = useState([]);
  const [splits, setSplits] = useState([]);
  const [ledger, setLedger] = useState([]);

  // Load group members
  useEffect(() => {
    async function loadMembers() {
      const res = await fetch(
        `http://localhost:5000/api/groups/${groupId}`
      );
      const data = await res.json();

      if (data && data.members) {
        setMembers(data.members);
        setSplits(
          data.members.map((m) => ({
            name: m.name,
            amount: "",
            percent: "",
          }))
        );
      }
    }
    loadMembers();
  }, [groupId]);

  // Add Expense
  const addExpense = async () => {
    await fetch("http://localhost:5000/api/expenses/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        groupId,
        title,
        amount: Number(amount),
        splitType,
        splits,
      }),
    });

    alert("Expense added");
    setTitle("");
    setAmount("");
  };

  //  View Ledger
  const viewLedger = async () => {
    const res = await fetch(
      `http://localhost:5000/api/expenses/ledger/${groupId}`
    );
    const data = await res.json();
    setLedger(data.expenses || []);
  };

  //  Update split inputs
  const updateSplit = (index, key, value) => {
    const updated = [...splits];
    updated[index][key] = value;
    setSplits(updated);
  };

  return (
    <div className="page">
      <div className="card">
        <h2>Add Expense</h2>

        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
<p></p>
        <input
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
<p></p>
        {/*  Split Type */}
        <select
          value={splitType}
          onChange={(e) => setSplitType(e.target.value)}
        >
          <option value="equal">Equal</option>
          <option value="exact">Exact</option>
          <option value="percentage">Percentage</option>
        </select>

        {/*  Exact Split */}
        {splitType === "exact" &&
          members.map((m, i) => (
            <input
              key={i}
              placeholder={`${m.name} amount`}
              onChange={(e) =>
                updateSplit(i, "amount", Number(e.target.value))
              }
            />
          ))}

        {/* Percentage Split */}
        {splitType === "percentage" &&
          members.map((m, i) => (
            <input
              key={i}
              placeholder={`${m.name} %`}
              onChange={(e) =>
                updateSplit(i, "percent", Number(e.target.value))
              }
            />
          ))}
<p></p>
        <button onClick={addExpense}>Add Expense</button>
        <p></p>
<button onClick={() => setView("ledger")}>Ledger</button>
      

        {/* Ledger View */}
        <ul>
          {ledger.map((e) => (
            <li key={e._id}>
              {e.title} – ₹{e.amount}
            </li>
          ))}
        </ul>
<p></p>
        <button onClick={() => setView("group")}>Back</button>
      </div>
    </div>
  );
}