// export default function Login({setPage}){
//   return(
//     <div className="page">
//       <h2>Login</h2>
//       <div className="card">
//         <input placeholder="Email"/><br/><br/>
//         <input placeholder="Password" type="password"/><br/><br/>
//         <button onClick={()=>setPage("dashboard")}>Login</button>
//         <p>Don't have an account?</p>
//         <button onclick={()=>setPage("register")}>Register</button>
//       </div>
//     </div>
//   )
// }
import {useState} from "react";
export default function Login({setPage}){
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
const handleLogin = async() => {
  const res=await
  fetch("http://localhost:5000/api/users/login",{
     method:"POST",
      headers: {"Content-Type":"application/json"},
      body:JSON.stringify({email,password})
  });
  const data = await res.json();
  alert(data.message || data.error);
  if(data.message === "Login successful"){
    localStorage.setItem("userId",data.user._id);
    setPage("dashboard");
  }
};
return(
   <div className="page">
      <div className="card">
        <h2>Login</h2>
        
          <label></label>
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
     
       
        <label></label>
        <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        
      <p> </p>
        <button onClick={handleLogin}>Login</button>
        <p>Don't have an account?</p>
        <button onClick={()=> setPage("register")}>Register</button>
      </div>
    </div>
);
}