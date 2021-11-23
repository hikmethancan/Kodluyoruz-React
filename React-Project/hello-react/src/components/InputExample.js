import { useState, useEffect } from "react";

// useEffect yapısı döngü içerisinde kullanılamaz!!
function InputExample() {
    const [name, setName] = useState("")
    const [surname, setSurName] = useState("")


    const onChangeName = (event) => setName(event.target.value)
    const onChangeSurName = (event) => setSurName(event.target.value)

    useEffect(() => {
        console.log("Name Güncellendi!")
    }, [name])

    useEffect(() => {
        console.log("Surname güncellendi!!");
    }, [surname])

    return(
        <div>
            Please enter a name <br></br>
            <input value={name} onChange={onChangeName}></input>
            <br></br>  
            <br></br>
            Please enter a Surname <br></br>
            <input value={surname} onChange={onChangeSurName}></input>
            <br></br>
            {name} { surname}
        </div>
    )

}

/**
 function InputExample() {
    const [form, setForm] = useState({name:"",surname:""})
    
    //...form yazarak formdaki bilgileri base aldık ve e.target.name'e e.target.valueyi aktardık.

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }


    return(
        <div>
            Please enter a name <br></br>
            <input name="name" value={form.name} onChange={onChangeInput}></input>
            <br></br>  



            <br></br>
            Please enter a Surname <br></br>
            <input name="surname" value={form.surname} onChange={onChangeInput}></input>
            <br></br>
            {form.name} { form.surname}
        </div>
    )

}

*/



export default InputExample