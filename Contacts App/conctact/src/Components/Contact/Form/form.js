import React from 'react'
import { useState } from 'react'

function Form({addContact, contact }) {

    const [form, setForm] = useState({fullname:"", phone_number:""})

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name] : e.target.value});
    }

    const onSubmit = (e) =>{
        e.preventDefault();

        if (form.fullname === "" || form.phone_number ==="") {
            return false;
        }

        addContact([...contact,form])
        setForm({fullname:"" , phone_number:""})
    }

    return (
        <div>
            <div>
                <input 
                name="fullname"
                value={form.fullname}
                placeholder="Full Name"
                onChange={onChangeInput}
                ></input>
            </div>
            <div>
                <input
                name="phone_number" 
                placeholder="Phone Number"
                value={form.phone_number} 
                onChange={onChangeInput}>                    
                </input>
            </div>

            <div>
                <button onClick={onSubmit}>
                Add</button>
            </div>
        </div>
    )
}

export default Form
