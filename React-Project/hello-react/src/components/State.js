import {useState} from "react";

// Array States
// Object States
function State() {
    const [name, setName] = useState("Hikmethan")
    const [age, setAge] = useState(24)
    const [friends, setFriends] = useState(["Dilara", "Emre"])
    const [address, setAddress] = useState({title: "Kagıthane/Istanbul", zip: 34400})

    return (
        <div>
            <h1>Merhaba Sayın {name}!</h1>
            <h2>{age}</h2>

            <button onClick={() => setName ("Mahmut")}>Change Name</button>
            <button onClick={() => setAge (31)}>Change Age</button>

            <br></br>

            <h2>Friends</h2>
            
            {friends.map((friend, index) => (
                <div key={index}> {friend}</div>
            ))}

            <button onClick={() => setFriends([...friends, " Ayse"])}> add new friends </button>

            <h3>Address</h3>

            {address.title} {address.zip}
        
            
        </div>
    )
}

export default State