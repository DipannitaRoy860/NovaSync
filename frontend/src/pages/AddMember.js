// export default function AddMembers({setPage}){
//   return(
//     <div className="page">
//       <h2>Add Members</h2>
//       <div className="card">
//         <input placeholder="Member Name"/><br/><br/>
//         <input placeholder="Member Email"/><br/><br/>
//         <button>Add Members</button>
//       </div>
//       <p></p>
//       <button  onClick={()=>setPage("groups")} style={{display:"block",margin:"20px auto",width:"fit-content"}}>Finish</button>
//     </div>
//   );
// }
import { useState } from "react";

export default function AddMember({ groupId, setView }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [membersCount, setMembersCount] = useState(0);

  const addMember = async () => {
    console.log("Add members clicked",{groupId,name,email});
    if(!groupId) return alert("group Id missing");
    const res = await fetch("http://localhost:5000/api/groups/add-members", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ groupId, name, email }),
    });

    const data = await res.json();

    if (data.success) {
      setMembersCount(data.membersCount);
      setName("");
      setEmail("");
    }else{
      alert(data.message);
    }
  };

  const done = async () => {
    console.log("Finalize clicked",{groupId,membersCount})
    if(!groupId) return alert("Group ID missing");
    const res = await fetch("http://localhost:5000/api/groups/add-members", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ groupId, finalize: true }),
    });

    const data = await res.json();
console.log("Finalize response",data);
    if (!data.success) {
      alert(data.message);
    } else {
      setView("group");
    }
  };

  return (
    <div className="page">
      <div className="card">
      <h3>Add Members</h3>

      <input
        placeholder="Member Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
<p></p>
      <input
        placeholder="Member Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
<p></p>
      <button onClick={addMember}>Add</button>

      <p>Members Added: {membersCount}</p>

      <button onClick={done}>Done</button>
    </div>
    </div>
  );
}