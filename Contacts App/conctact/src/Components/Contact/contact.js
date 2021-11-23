import { useEffect,useState} from 'react'
import List from './List/list'
import Form from './Form/form'
import './Contact.css'

function Contact() {
    const [contacts, setContacts] = useState([{
        fullname:"Hikmet",
        phone_number:"111"
        },
        {
            fullname:"Dilara",
            phone_number:"222"
        }       
        ]);
    
    useEffect(() => {
        console.log(contacts);

    },[contacts])

    return (
        <div id={"container"}>
            <h1>Contact</h1>
            <List contacts={contacts}/>
            <Form addContact={setContacts} contact={contacts} /> 

        </div>
    )
}

export default Contact
