import React,{useState} from 'react';
import StudentPayment from './StudentPayment';
import AddStudent from './AddStudent';
import FeeModules from './FeeModules';
import "../styles/AdminDashboard.css";
function Admin(){
    const [add,setAdd] = useState(0);
    return(
        <>
        <nav>
            <h1>AdminDashboard</h1><p></p>
        </nav>
        <div className="container">
        <button onClick={()=>{setAdd(0)}}>Student FEE</button>
        <button onClick={()=>{setAdd(1)}}>Add Student</button>
        {add == 0 ? <StudentPayment/> : <AddStudent/> }
        </div>
        </>
    )
}
export default Admin      