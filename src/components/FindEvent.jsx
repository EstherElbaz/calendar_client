import React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

function FindEvent(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState(new Date);
    const [findData, setFindData] = useState("");

    const search = async () => {

        if (title.length > 0) {
            findData = title;
        }
        if (desc) {
            findData = desc;
        }
        else {
            findData = document.getElementById("eventDate").value;
        }
        const res = await fetch(`http://localhost:5000/events/?varilbe=${findData}`);
        if (!res.ok) {
            throw console.error(`stsutus: ${res.status}. try again later.`);
        }
        else if (res.status == 204) {
            alert("there are no events")
        }
        else {
            data = await res.json;
            setDate(data.date);
            setTitle(data.title);
            setDesc(data.desc);
        }
      
    }
    return (
        <div>
            <input onChange={(e) => setTitle(e.target.value)} value={`title`} ></input>
            <br></br>
            <label>date</label>
            <input onChange={(e) => setDate(e.target.value)} ></input>
            <label>descreption</label>
            <input onChange={(e) => setDesc(e.target.value)} ></input>
            <table>
                <td>
                    <th>Date </th>
                    <tr>aaa</tr>
                </td>
                <td>
                    <th>Title </th>
                    <tr>bbb</tr>
                </td>
                <td>
                    <th>Description </th>
                    <tr >ccc</tr>
                </td>
            </table>
            <textarea id="txt"></textarea>
            <button onClick={search}>search🔍</button>
        </div>
    )
}
export default FindEvent;
