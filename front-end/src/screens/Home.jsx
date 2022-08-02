import '../components/post.css'
import React from 'react'
import Posts from '../components/Post.jsx'
import NavBar from './NavBar'

export default function Home() {
  
  return (
    <>
     <NavBar />
     
    <div className="posts">
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
    </div>
  
    </>
  
  )
}