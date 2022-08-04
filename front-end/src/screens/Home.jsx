import React from 'react'
import NavBar from './NavBar'
import CardDemo from './Posts3'
import ToolBar from '../components/MakePost'

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
  </>

  )
}