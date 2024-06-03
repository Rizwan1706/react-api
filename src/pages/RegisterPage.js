import React from 'react';
import { useState } from 'react';

export default function RegisterPage() {
   
   const [username, setUser]=useState('');
   const [password, setPassword]=useState('');
    async function submitData (e){
    e.preventDefault();
    const response =await  fetch(`https://mern-server-964b.onrender.com/register`, {
        method: 'POST',
        body: JSON.stringify({username,password}),
        headers: {'Content-Type':'application/json'},
      });
      
      if(response.status===200){
        alert ("Registeration is successful");
      
      
      
    }
    
      else{
        alert("Registeration is not successful");
      }
        setUser("");
        setPassword("") ;


   }
   
   
    return (
        
        
         <>
        <form className="register" onSubmit={submitData}>
            <h1>Register</h1>
            <input type="text" value={username} onChange={e=>setUser(e.target.value)} placeholder="username"/>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="password"/>
            <button>Register</button>
        </form>
        </>
        
    )
}