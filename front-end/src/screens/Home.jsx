import React from 'react'
import NavBar from './NavBar'
import CardDemo from './Posts3'
import ToolBar from '../components/MakePost'
import SidebarDemo from '../components/Sidebar'

export default function Home() {
  
  return (
    <>

     <SidebarDemo />
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