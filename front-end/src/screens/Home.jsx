import '../components/post.css'
//import './posts.css'
//import './Posts2.jsx'
import React from 'react'
import MentionDemo from './Posts2'

import NavBar from './NavBar'
import CardDemo from './Posts3'
import ToolBar from '../components/MakePost'
import PhotoUpload from '../components/FileUpload'


export default function Home() {
  
  return (
    <>

     <NavBar />
     
    <div className="posts">
      <ToolBar />
      <CardDemo />
      <CardDemo />
      <CardDemo />
      <CardDemo />
     
    </div>
  

  )
}