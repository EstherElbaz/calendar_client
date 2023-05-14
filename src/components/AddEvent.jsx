import React, { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useLocation } from "react-router-dom";


function AddEvent(props) {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const event = location.state.event;

    const [title, setTitle] = useState();
    const [descreption, setDescription] = useState("");
    const [data, setDate] = useState(new Date());
    const [eventTime, setEventTime] = useState();

    const save = async () => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                date: date + eventTime,
                description: descreption,

            })
        };

        var data = await fetch(`http://localhost:5000/events/`, requestOptions);
        console.log(data);
        try {
            var response = await data.json();
        }
        catch {
            alert("try again");
        }
        if (response) {
            alert("The event added");
            navigate(`../Calendar`, { replace: false })
        }

        return;
    }
    const cancel = () => {
        let confirm = window.confirm("Are you sure you want to exit without saving?")
        if (confirm) {
            navigate(`../Calendar`, { replace: true })
        }
    }


    return (
        <div>
            <input defaultValue={event.title} value={`Add a title`} onChange={(e) => setTitle(e.target.value)}></input>
            <br></br>
            <label>date</label>
            <input defaultValue={event.date} placeholder={props.date} onChange={(e) => setDate(e.target.value)}></input>
            <label>time</label>
            <input defaultValue={event.time} onChange={(e) => setEventTime(e.target.value)}></input>
            <br></br>
            <textarea placeholder="description of your event" onChange={(e) => setDescription(e.target.value)}></textarea>
            <br></br>
            <button onClick={save}>save event👍</button>
            <br></br>
            <button onClick={cancel}>cancel event👎</button>
        </div>
    )
}


export default AddEvent;