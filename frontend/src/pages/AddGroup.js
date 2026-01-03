// export default function AddGroup({setPage}){
//   return(
//     <div className="all">
//     <div className="page">
//       <h2>Create Group</h2>
//       <div className="card">
//         <input placeholder="Group Name"/><br/><br/>
//         <button onClick={()=>setPage("addmembers")}>Add Members</button>
//       </div>
//     </div>
//     </div>
//   )
// }
import { useState } from "react";

export default function AddGroup({ setView, setGroupId }) {
  const [groupName, setgroupName] = useState("");

  const createGroup = async () => {
    const res = await fetch("http://localhost:5000/api/groups/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        groupName,
        userId: localStorage.getItem("userId")
      }),
    });

    const data = await res.json();
console.log(data);
    if (data.message==="Group created successfully") {
      setGroupId(data.group._id);
      setView("group");
    } else {
      alert("Group creation failed");
    }
  };

  return (
    <div className="page">
      <div className="card">
      <h2>Create Group</h2>

      <input
        placeholder="Group Name"
        value={groupName}
        onChange={(e) => setgroupName(e.target.value)}
      />
<p></p>
      <button onClick={createGroup}>Done</button>
    </div>
    </div>
  );
}