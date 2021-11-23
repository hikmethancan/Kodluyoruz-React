import { useState } from 'react';
import './App.css';
import Counter from './components/Counter'
// import ettiğimiz componentin baş harfi Büyük harf ile yazılmalı
// import User from './components/User'
// import State from './components/State'



function App() {

    const [isVisible, setIsVisible] = useState(true)

  return (
    <div>
      {isVisible && <Counter/>}

      <button onClick={()=> setIsVisible(!isVisible)}>Deactive Counter</button>
    </div>
 
  );
}

export default App;


{/* <User 
    name= "Hikmet" 
    surname="Can" 
    isLoggedIn = {true}
    age = {24}
    friends={["Ayse", "Fatma", "Hayriye"]}
    address = {{
      title : "Ataşehir/Istanbul",
      zip: 34555
    }}
    /> */}