import react,{useState} from 'react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settlement from './pages/Settlement';
import Register from './pages/Register';
import AddGroup from './pages/AddGroup';
import AddMember from './pages/AddMember';
import AddExpense from './pages/AddExpense';
import Login from './pages/Login';
import Groups from './pages/Group';
import Ledger from './pages/Ledger';
import './style.css';

export default function App(){
  const[page,setPage]=useState("login");
  const [groupId, setGroupId]=useState(null);
  return(
<>
{page!=="login" && page!=="register" && (<Navbar setPage={setPage}/> )}
{page==="login" && <Login setPage={setPage}/>}
{page==="register" && <Register setPage={setPage}/>}
{page==="dashboard" && <Dashboard setPage={setPage}/>}
{page==="groups" && <Groups setPage={setPage}/>}
{page==="profile" && <Profile setPage={setPage}/>}
{page==="ledger" && <Ledger setPage={setPage} />}
{page==="addmember" && <AddMember setPage={setPage}/>}
{page==="addgroup" && <AddGroup setPage={setPage}/>}
{page==="addexpense" && <AddExpense setPage={setPage}/>}
{page==="settlement" && <Settlement setPage={setPage}/>}
</>
  );
}