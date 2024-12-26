import React,{useState} from 'react'
import "./AddStudent.css"
export default function AddStudent() {
  const [name,setName] = useState(null);
  const [usn,setUsn] = useState(null);
  const [mode,setMode] = useState(null);
  const [fee,setFee] = useState(null);
  const [paid,setPaid] = useState(null);
  function handleSubmit(e){
    e.preventDefault();


  }
  return (
    <>
    <div className="add-student-container">
      <form onSubmit={handleSubmit} method="post">
        <label htmlFor="Name">Student Name</label>
        <input type="text" id="Name" required
        onChange={(e)=>{setName(e.target.value)}}/>
        <br />
        <label htmlFor="Usn">Student Usn</label>
        <input type="text" id="Usn" required
        onChange={(e)=>{setUsn(e.target.value)}} />
        <br />
        <label htmlFor="mode">Admission mode</label>
        <select name="" id="mode" required onChange={(e)=>{setMode(e.target.value)}}>
          <option value="Merit">Merit</option>
          <option value="Management">Management</option>
          <option value="ComedK">ComedK</option>
        </select>
        <br/>
        <label htmlFor="Fee">Fee to be paid</label>
        <input type="number" id="Fee" required
        onChange={(e)=>{setFee(e.target.value)}}/>
        <br/>
        <label htmlFor="paid">Fee paid</label>
        <input type="number" id="paid" required
        onChange={(e)=>{setPaid(e.target.value)}}/>
        <br/>
        <input type="submit" />
      </form>
    </div>
    <br/>
    <div>AddStudent</div>
    </>
    
  )
}
