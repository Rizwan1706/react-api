import React from 'react';
import { useState,useContext } from 'react';
import {Navigate} from 'react-router-dom'
import { UserContext } from '../UserContext';
export default function LoginPage (){
   
    const [username, setUser]=useState('');
   const [password, setPassword]=useState('');
   const [redirect, setRedirect]=useState(false);
   const {setUserInfo}=useContext(UserContext)
  async function login (e){
    e.preventDefault();

   const response = await fetch(`https://mern-server-964b.onrender.com/login`, {
    method: 'POST',
    body: JSON.stringify({username,password}),
    headers: {'Content-Type':'application/json'},
    
  });
  if(response.ok){
    response.json().then(userInfo=>{
      setUserInfo(userInfo);
    })
setRedirect(true);
alert('loggedin successfully');
  }
  else {
    alert('Not Loggedin');
  }
  
} 
if (redirect) {
    return <Navigate to={'/'} />
  }
    return(
        <>
        <form className="login" onSubmit={login}>
            <h1>Login</h1>
            <input type="text" value={username}
             onChange={e=>setUser(e.target.value)} 
             placeholder="username"/>

            <input type="password"value={password}
             onChange={e=>setPassword(e.target.value)}
              placeholder="password"/>

            <button>login</button>
        </form>
        </>
    )
}