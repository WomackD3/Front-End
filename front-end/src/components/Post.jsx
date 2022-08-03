import React from 'react';
import {useState} from 'react'
import "./post.css"
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function Posts() {
  const [visibleBottom, setVisibleBottom] = useState(false);
  return (
    <div className="posts">
      <img
        className="postImg"
        src="https://pin.it/4uXA43D"
        alt=""
      />
      <Sidebar visible={visibleBottom} position="bottom" onHide={() => setVisibleBottom(false)}>
                    <h3>Bottom Sidebar</h3>
                </Sidebar>
      <Button icon="pi pi-arrow-up" onClick={() => setVisibleBottom(true)} className="mr-2" />
      <div className="postInfo">
        <div className='postCats'>
          <span className="postCat">Music</span>
          <span className="postCat">Comedy</span>
        <span className="postTitle">
          We Name the title of post here
        </span>
        </div>
        <hr />
      </div>
      <p className='postDesc'>
        This will be for the descripton of the post 
      </p>
      
    </div>
  );
}


