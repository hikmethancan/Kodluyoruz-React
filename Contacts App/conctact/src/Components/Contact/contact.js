import { useEffect,useState} from 'react'
import List from './List/list'
import Form from './Form/form'

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
        <div>
            <Form addContact={setContacts} contact={contacts} /> 
            <List contacts={contacts}/>  
        </div>
    )
}

export default Contact
