import React, { useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { Card } from 'primereact/card'
import { FileUpload } from 'primereact/fileupload'
import { Button } from 'primereact/button'
import axios from 'axios'
import { createPost } from '../service/posts'
import api from '../service/apiConfig';
import { ConnectedOverlayScrollHandler } from 'primereact/utils';

export default function NewPost (props) {
    const [value, setValue] = useState({});

    const [image, setImage] = useState({
        image: ''
    })

    const uploadDescription = async () => {
        console.log(value)
        let description = await api.post('http://localhost:3002/api/posts', value)
        return description

    }



    const uploadPhoto = async (props) => {
       setImage(props.files[0].name)
       console.log(image) 
       let userImage =  await api.post('http://localhost:3002/api/posts', image)
       console.log(userImage)
       return userImage
    }

    // const uploadPhoto = async (props) => {
    //     setImage(props.files[0].name)
    //     console.log(setImage) 
    //     let userImage =  image
    //     console.log(userImage)
    //  }

    return (
        <div>
            <div className="card">
                <Card style={{width: '50%'}}>
                    <InputTextarea style={{width: '100%'}} placeholder='Write something...' name='description' value={value} onChange={(e) => setValue({...value,[e.target.name]: e.target.value})} rows={5} cols={30} />
                    <FileUpload name="image" url='http://localhost:3002/api/posts' customUpload uploadHandler={uploadPhoto} auto />
                    <br/>
                    <Button onClick={uploadDescription}>Create Post</Button>
                </Card>
            </div>
        </div>
    )
}