import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import AddEventToC from "./AddEventToC";

function Enter(props) {
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


    const checkUser = async () => {
    
        const data = await fetch(`http://localhost:5000/users/signin/?email=${email}&pass=${password}`);
      
        var jsonData = await data.json()
        
        if (jsonData.length > 0) {
            alert(`Welcome ${jsonData[0].firstName}!!`)
            navigate(`../Calendar/${jsonData[0].email}`, { state: { id: jsonData[0]._id } }, { replace: false })

        }
        else {
            let confirm = window.confirm("user is not exist. whold you like to sigh up?")
            if (confirm) {
                navigate(`../Signin`, { replace: false })

            }
        }

    }

    
    return (
        <div>
            <input placeholder="email" id="email" autocomplete='on' autofocus required onChange={()=>setEmail(target.value)}></input>
            <input placeholder="password" id="password" type="password" autocomplete='on' required onChange={()=>setPassword(target.value)}></input>
            <button onClick={checkUser}>enter</button>

        </div>
    )
}


export default Enter;