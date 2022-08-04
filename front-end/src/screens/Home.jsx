import React from 'react'
import { useState } from 'react'
import NavBar from './NavBar'
import CardDemo from './Posts'
import NewPost from '../components/MakePost'
import SidebarDemo from '../components/Sidebar.jsx'
import PhotoUpload from '../components/FileUpload'
import WritePost from '../components/Inputtext'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import '../App.scss'

export default function Home() {
  const [showNew, setShowNew] = useState([])
  const [disable, setDisable] = useState(false)
  
  return (
    <>
     <SidebarDemo />
     <NavBar />
     
     
    <div className="posts">
      <Button label="New Post" className="createpost" disabled={disable} onClick={() => {
        setShowNew([showNew, <NewPost />])
        setDisable(true)
    }}/>
      
      <div className="create">{showNew}</div>
      
      <div className="create">
        
      </div>
      <CardDemo />
      <CardDemo />
      <CardDemo />
      <CardDemo />
    </div>
  
  </>

  )
}