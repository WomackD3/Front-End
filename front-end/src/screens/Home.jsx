import '../components/post.css'
//import './posts.css'
//import './Posts2.jsx'
import React from 'react'


import NavBar from './NavBar'
import CardDemo from './Posts3'
import ToolBar from '../components/MakePost'
import PhotoUpload from '../components/FileUpload'
import WritePost from '../components/Inputtext'
import { Card } from 'primereact/card'
//import { FileUpload } from 'primereact/fileupload'


export default function Home() {
  
  return (
    <>

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