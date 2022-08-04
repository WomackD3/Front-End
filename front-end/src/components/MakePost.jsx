import React, { useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { Card } from 'primereact/card'
import { FileUpload } from 'primereact/fileupload'
import { Button } from 'primereact/button'

export default function NewPost () {
    const [value1, setValue1] = useState('');

    return (
        <div>
            <div className="card">
                <Card style={{width: '50%'}}>
                    <InputTextarea style={{width: '100%'}}placeholder='Write something...' value={value1} onChange={(e) => setValue1(e.target.value)} rows={5} cols={30} />
                    <FileUpload name="image" url="http://localhost:8080/post" auto />
                    <br/>
                    <Button>Create Post</Button>
                </Card>
            </div>
        </div>
    )
}