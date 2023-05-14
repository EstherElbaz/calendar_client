import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Signin(props) {
    const navigate = useNavigate();
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [phoneNumber,setPhoneNumber] = useState();
    const [password,setPassword] = useState();
    const [email,setEmail] = useState("");
    const addUser =async () => {

        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
                pass: password,
                email: email
            })
        };
        var data = await fetch(`http://localhost:5000/users/`, requestOptions);
        
        try{
            var response =await data.json();
        }
        catch{
          console.log( `stutus: ${data.status}. try again later`)
        }
        if(response){
           alert(`hello ${response.firstName} you are with us!`);
            navigate(`../`, {replace: false} )
        }
    }

    return (
        <div>
            <input placeholder="email"autocomplete='on' autofocus required onChange={(e)=>setEmail(e.target.value)}></input>
            <input placeholder="first name"  autocomplete='on' onChange={(e)=>setFirstName(e.target.value)}></input>
            <input placeholder="last name"  autocomplete='on' onChange={(e)=>setLastName(e.alerttarget.value)}></input>
            <input placeholder="phone number"  pattern="[0-9]" autocomplete='on' onChange={(e)=>setPhoneNumber(e.target.value)}></input>
            <input placeholder="password" onChange={(e)=>setPassword(e.target.value)}></input>
            <button onClick={addUser}>sigh up!</button>
        </div>
    )
}
export default Signin