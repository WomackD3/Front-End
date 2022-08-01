import React from 'react';
import "./post.css"
export default function Posts() {
  return (
    <div className="posts">
      <img
        className="postImg"
        src="https://pin.it/4uXA43D"
        alt=""
      />
      <div className="postInfo">
        <div className='postCats'>
          <span className="postCat">Music</span>
          <span className="postCat">Comedy</span>
        </div>
        <span className="postTitle">
          We Name the title of post here
        </span>
        <hr />
        <span className='postDate'>1 hour ago</span>
      </div>
      
    </div>
  );
}


