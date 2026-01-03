
import { useState } from "react";
import AddGroup from "./AddGroup";
import AddMember from "./AddMember";
import AddExpense from "./AddExpense";

export default function Group() {
  const [view, setView] = useState("group"); 
  const [groupId, setGroupId] = useState(null);

  return (
    <div className="page">
      <div className="card">
      {view === "group" && (
        <>
          <h2>Group Page</h2>

          <button onClick={() => setView("addGroup")}>
            Create Group
          </button>
<p></p>
          <button
            onClick={() => {
              if (!groupId) return alert("Create group first");
              setView("addMember");
            }}
          >
            Add Members
          </button>
<p></p>
          <button
            onClick={() => {
              if (!groupId) return alert("Create group first");
              setView("addExpense");
            }}
          >
            Add Expense
          </button>
        </>
      )}

      {view === "addGroup" && (
        <AddGroup setView={setView} setGroupId={setGroupId} />
      )}

      {view === "addMember" && (
        <AddMember groupId={groupId} setView={setView} />
      )}

      {view === "addExpense" && (
        <AddExpense groupId={groupId} setView={setView} />
      )}
    
      </div>
    </div>
  );
}