import React, { useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext'
import { Card } from 'primereact/card'
import { FileUpload } from 'primereact/fileupload'
import { Button } from 'primereact/button'
import axios from 'axios'
import { createPost } from '../service/posts'
import api from '../service/apiConfig';

export default function NewPost (props) {
    const [title, setTitle] = useState({})
    const [value, setValue] = useState({});
    const [image, setImage] = useState({})

    const uploadPhoto = async (props) => {
        setImage(props.files[0].name)
        console.log(image)
        return image
    }

    const post = async () => {
        console.log(image)
        let newObj = {
            title: title,
            image: image,
            description: value
        }
       

       let userPost =  await api.post('http://localhost:3002/api/posts', newObj)
       console.log(userPost)
       return userPost
    }
     
    



    

    // const uploadPhoto = async (props) => {
    // let newObj = {
    //     image: value
    // }

    // let userImage =  await createPost(newObj)
    // console.log(userImage)
    // return userImage
    // }

    return (
        <div>
            <div className="card">
                <Card style={{width: '50%'}}>
                    <InputText type="text" style={{width: '100%'}}className="p-inputtext-lg block"  placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <br/>
                    <InputTextarea style={{width: '100%'}} placeholder='Write something...' name='description' value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
                    <br/>
                    <br/>
                    <FileUpload name="image" url='http://localhost:3002/api/posts' customUpload uploadHandler={uploadPhoto} auto/>
                    <br/>
                    <Button onClick={post}>Create Post</Button>
                </Card>
            </div>
        </div>
    )
}