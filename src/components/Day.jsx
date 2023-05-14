import React from "react";
import Event from "./Event";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

import { useLocation} from 'react-router-dom';


// import ContextMenu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';



function Day(props) {
    const contextId = new Date().getMilliseconds();
    return (
        <body>

            <div>
                <ContextMenuTrigger id={contextId}>
                    <div>
                    <h2>{props.day}</h2>
                    <span>{`${props.date.date()}/${props.date.month() + 1}/${props.date.year()}`}</span>
                    <Event date={props.date}></Event> 
                     </div>
                </ContextMenuTrigger>
                <ContextMenu id={contextId}>
                    <MenuItem>
                        <button onClick={() => { props.addEvent() }}>add event</button>
                    </MenuItem>
                    <MenuItem>
                        <button onClick={() => { props.today() }}>today</button>
                    </MenuItem>
                </ContextMenu>
            </div>
        </body>)
}
export default Day