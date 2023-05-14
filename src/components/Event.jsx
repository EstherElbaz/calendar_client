import React, { useState ,useEffect} from "react";
import { useLocation } from 'react-router-dom';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { useNavigate } from 'react-router-dom'



function Event(props) {

    const [event, setEvent] = useState("");

    const currentDay = `${props.date.month() + 1}/${props.date.date()}/${props.date.year()}`
    const contextId = new Date().getMilliseconds();
    const navigate = useNavigate();

    const getEvent = async () => {
       
        var data = await fetch(`http://localhost:5000/events/?${currentDay}`);
        var json = await data.json();
        if (json.length > 0) {
            setEvent(json);
        }
        else {
            setEvent([]);
        }

    }

    useEffect(() => {
        getEvent();
    }, [props.date]);


const deleteEvent = () => {
    fetch(`http://localhost:5000/events/${event[0]._id}`, {
        method: 'DELETE',
    })
        .then(res => res.text())
        .then(res => console.log(res))
}
const update= ()=>{
    navigate('../Add', { state: { event: event[0] } }, { replace: false })
}

return (

    <body>

        <div>
            <ContextMenuTrigger id={contextId}>
                <div>
                    <span > {getEvent}</span>
                  <button onClick={getEvent}>show events👍</button> 
                </div>
            </ContextMenuTrigger>
            <ContextMenu id={contextId}>
                <MenuItem>
                    <button onClick={ deleteEvent}>delete event</button>
                </MenuItem>
                <MenuItem>
                    <button onClick={update}>update</button>
                </MenuItem>
            </ContextMenu>
        </div>
    </body>)
}

export default Event;