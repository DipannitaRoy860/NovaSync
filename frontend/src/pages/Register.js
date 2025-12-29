// export default function Register({setPage}){
//   return(
//     <div className="page">
//       <h2>Register</h2>
//       <div className="card">
//         <input placeholder="Name"/><br/><br/>
//         <input placeholder="Email"/><br/><br/>
//         <input placeholder="Password" type="password"/><br/><br/>
//       <button onClick={()=>setPage("login")}>Register</button>
//     </div>
//     </div>
//   )
// }
import {useState} from "react";
export default function Register({setPage}) {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const handleRegister = async() =>{
    console.log("Registeres button clicked");
    try{
    const res =await
    fetch("http://localhost:5000/api/users/signup",{
      method:"POST",
      headers: {"Content-Type":"application/json"},
      body:JSON.stringify({name,email,password})
    });
    const data = await res.json();
    alert(data.message || data.error);
    if(data.message === "User registered"){
      setPage("login");
    }
  }catch(error){
    alert("Server not reachable");
    console.error(error);
  }
  };
  return(
    <div className="page">
      <div className="card">
        <h2>Register</h2>
        <label></label>
        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
        <label></label>
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <label></label>
        <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <p> </p>
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  )
}