import '../components/post.css'
//import './posts.css'
//import './Posts2.jsx'
import React from 'react'
import MentionDemo from './Posts2'
import Posts from '../components/Post.jsx'
import CardDemo from './Posts3'
import ToolBar from '../components/MakePost'


export default function Home() {
  
  return (
    <>
    
     
    <div className="posts">
      <ToolBar />
      <CardDemo />
      <CardDemo />
      <CardDemo />
      <CardDemo />
      {/* <MentionDemo /> */}
      {/* <Posts /> */}
      {/*<Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts /> */}
    </div>
  
    </>
  
  )
}