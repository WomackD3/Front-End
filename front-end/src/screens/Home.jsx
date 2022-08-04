import React from 'react'
import NavBar from './NavBar'
import CardDemo from './Posts'
import ToolBar from '../components/MakePost'
import SidebarDemo from '../components/Sidebar'
import PhotoUpload from '../components/FileUpload'
import WritePost from '../components/Inputtext'
import { Card } from 'primereact/card'

export default function Home() {
  
  return (
    <>

     <SidebarDemo />
     <NavBar />
     
    <div className="posts">
      <ToolBar />
      <div style={{width: "50%"}}>
      <Card>
        <WritePost />
        <PhotoUpload />
      </Card>
      </div>
      <CardDemo />
      <CardDemo />
      <CardDemo />
      <CardDemo />
    </div>
  </>

  )
}