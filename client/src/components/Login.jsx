import React,{useState} from 'react';
function Login(){
    const [username,setUsername] = useState(null);
    const [password,setPassword] = useState(null);
    function handleChange(e) {
        setUsername(e.target.value);
        setResult("");
    }
    return (
        <>
            <div>
                <span className="sahyadri-logo"></span>
                <span className="login-form">
                    <form action=""  method="post">
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