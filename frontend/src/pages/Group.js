// import { useState } from "react";
// export default function Groups({ setPage }) {
//   const [groups, setGroups] = useState([]);
//   const loggedUserId = localStorage.getItem("userId");

//   async function loadGroups() {
//     const res = await fetch(
//       `http://localhost:5000/api/groups/${loggedUserId}`
//     );
//     const data = await res.json();
//     setGroups(Array.isArray(data) ? data : []);
//   }

//   useEffect(() => {
//     loadGroups();
//   }, []);

//   return (
//     <div className="page">
//       <div className="card">
//         <h2>My Groups</h2>

//         {/* CREATE GROUP */}
//         <button onClick={() => setPage("addgroup")}>
//           Create Group
//         </button>

//         {/* GROUP LIST */}
//         {groups.map((g) => (
//           <div
//             key={g._id}
//             style={{
//               border: "1px solid #ccc",
//               padding: "12px",
//               marginTop: "12px",
//             }}
//           >
//             <p><b>{g.groupName}</b></p>

//             {/* ADD MEMBERS */}
//             <button
//               onClick={() => {
//                 localStorage.setItem("groupId", g._id);
//                 setPage("addmembers");
//               }}
//             >
//               Add Members
//             </button>

//             {/* ADD EXPENSE */}
//             <button
//               onClick={() => {
//                 localStorage.setItem("groupId", g._id);
//                 setPage("addexpense");
//               }}
//             >
//               Add Expense
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
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