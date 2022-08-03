import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './posts3.css';
import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import Write from '../Write';

export default function Post () {

  const [visibleBottom, setVisibleBottom] = useState(false);

    const header = (
        <img alt="Card" src="images/usercard.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
    );
    const footer = (
        <span>
            {/* <Button label="Save" icon="pi pi-check" />
            <Button label="Cancel" icon="pi pi-times" className="p-button-secondary ml-2" /> */}
            <InputText type="text" className="block mb-2" placeholder="Write a comment..." style={{width: '42em'}}/>
        </span>
    );

    return (
        <div className="cardDemo">
            {/* <Card title="Simple Card" style={{ width: '25rem', marginBottom: '2em' }}>
                <p className="m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
            </Card> */}


            <Card title="Title Of Post" subTitle="1 hour ago" style={{width: '45em'}} header={header} footer={footer}>
                <p className="m-0" style={{lineHeight: '1.5'}}>Post Content</p>
                <Card style={{background: 'lightgray'}}>
                    <p>Comments</p>
                </Card>
            </Card>
            
            {/* <Sidebar className='comment' visible={visibleBottom} position="bottom" onHide={() => setVisibleBottom(false)}>
                <h2>Comment Thread</h2>
                <h3><Write /></h3>
            </Sidebar>
            
            <Button icon="pi pi-arrow-up" onClick={() => setVisibleBottom(true)} className="mr-2" /> */}

        </div>
    )
}