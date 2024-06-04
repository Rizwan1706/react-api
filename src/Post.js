import { Link } from "react-router-dom";

import {  format } from "date-fns";
export default function Post ({_id,title,summary,cover,content,createdAt,author}){
    return (
        <div className="post">
        <div className="image">
          <Link to={`/post/${_id}`}>
          <img src={`https://mern-server-964b.onrender.com/`+cover} alt="p"/>
          </Link>
        
    </div> 
      <div className="texts">
<Link to={`/post/${_id}`}>
<h2>{title}</h2>
</Link>
      
      <p className="info">
        <a className="author">{author.username}</a>
        <time>{format(new Date(createdAt), "yyyy-MM-dd HH:mm:ss")}</time>
      </p>
      <p className="summary"> {summary} </p>
      </div>
      </div>
    )
}