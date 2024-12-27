import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Login.css"
function Login(){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [admin,setAdmin] = useState(0);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        let url = 'http://localhost:5000/api/auth/login'; 
        if (admin === 1) { url = 'http://localhost:5000/api/auth/admin-login'; }
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: username, usn: password }),
          });
          if (response.ok) {
            const data = await response.json();
            alert(data.message);
            navigate(admin ===  0 ? '/dashboard' : '/admin-login'); 
          } else {
            const errorData = await response.json();
            alert(errorData.message || 'Login failed');
        }
      } catch (error) {
        console.error('Error during login:', error);
        alert('An error occurred. Please try again.');
      }
    };
    return (
        <>
            <div>
                <span className="sahyadri-logo"></span>
                <span className="login-form">
                  <div className='user'>
                    
                    <div className="admin" onClick={(e)=>{setAdmin(1)}}>admin</div>
                    <div className="student" onClick={(e)=>{setAdmin(0)}}>student</div>
                  </div>
                    <form onSubmit={handleSubmit} method="post">
                        <label htmlFor="username" >name</label>
                        <input type="text" 
                        placeholder="Username" 
                        name="username"
                        id="username"
                        value ={username}
                        onChange={(e) => {setUsername(e.target.value)}}/>

                        <label htmlFor="password">password</label>
                        <input type="password" 
                        name="password" 
                        id="password" 
                        value = {password}
                        placeholder="password" 
                        onChange={(e) =>{setPassword(e.target.value)}}/>
                        <input type="submit" />
                    </form>
                </span>
            </div>
        </>
    )
}

export default Login;