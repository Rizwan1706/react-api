import {Link} from 'react-router-dom'
import { useEffect, useContext} from "react";
import { UserContext } from './UserContext';

export default function Header (){

  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch(`https://mern-server-964b.onrender.com/profile`, {
      
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);
  function logout() {
    fetch(`https://mern-server-964b.onrender.com/logout`, {
      
      method: 'POST',
    });
    setUserInfo("");
  }
  const username=userInfo?.username
    return(
        <header>
        <Link to="/" className="logo"> MyBlog</Link>
      
      <nav>
        {
          username && (
            <>
            <span> Hello {username}</span>
            <Link to="/create">Create new post</Link>
            <a onClick={logout}>Logout</a>
            </>
          )
        }
        {!username &&(
          <>
          <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
          
          </>
        )


        }
      

      </nav>
      </header>
    )
}