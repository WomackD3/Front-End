
import React, { useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';

export default function WritePost () {
    const [value, setValue] = useState('');

    return (
        <div>
            <div className="card">
                <InputTextarea value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={117} autoResize />
            </div>
        </div>
    )
}
