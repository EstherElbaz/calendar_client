import React from "react";
import { useParams, useNavigate, useLocation } from 'react-router-dom';


function AddEventToC(props) {
    //  const{id}=useParams();
    const navigate = useNavigate();
    const location = useLocation();
    var id = location.state.id;
    const event = location.state.event;

    const save = async () => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: id,
                title: document.getElementById("title").value,
                date: document.getElementById("eventDate").value,
                description: document.getElementById("desc").value,

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

            navigate(`../Calendar`, { state: { id: id } }, { replace: false });
        }
    }
    const cancel = () => {
        let confirm = window.confirm("Are you sure you want to exit without saving?")
        if (confirm) {
            navigate(`../Calendar`, { state: { id: id } }, { replace: true })

        }
    }
    const update = async () => {
        const requestOptions = {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: id,
                title: document.getElementById("title").value,
                date: document.getElementById("eventDate").value,
                description: document.getElementById("desc").value,
            })
        };
        var res = await fetch(`http://localhost:5000/events/:${event[0]._id}`, requestOptions);
        var response = await res.json();
        if (response) {
            alert(`${response.title} was updated`)
            navigate(`../Calendar`, { state: { id: event.userId } }, { replace: false });
        }
        else {
            alert('try again...');
        }
    }

    return (
        <div>
            <label>title</label>
            <input id="title" placeholder={`Add a title`} ></input>
            <br></br>
            <br></br>
            <label>date</label>
            <input id="eventDate" value={props.date} placeholder={`Add a date`}></input>
            <br></br>
            <br></br>
            <label>time</label>
            <input id="eventTime" placeholder={`Add a time`}></input>
            <br></br>
            <br></br>
            <textarea id="desc" placeholder="description of your event"></textarea>
            <br></br>
            <br></br>
            <button onClick={save}>save event👍</button>
            <br></br>
            <br></br>
            <button onClick={cancel}>cancel event👎</button>
            <button onClick={update}>update</button>
        </div>
    )
}
export default AddEventToC;
