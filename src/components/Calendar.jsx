import React from "react";
import { useParams,useNavigate } from 'react-router-dom';
import moment, { now } from "moment";
import Day from "./Day";
import { useState } from "react";
import {useLocation} from 'react-router-dom';



function Calendar(props) {
   const navigate = useNavigate();
   const location = useLocation();
   var id=location.state.id;
   var now = moment();
   const [sunday, setSunday] = useState(now.clone().weekday(0));

   const cuurentWeek = () => {
      setSunday(now.clone().weekday(0));
   }
   const nextWeek = () => {
      setSunday(sunday.clone().weekday(+7));
   }
   const lastWeek = () => {
      setSunday(sunday.clone().weekday(-7));
   }
   const addEvent = () => {
      console.log("add event");
      navigate(`../AddEvent`,{replace:false})
   }
   const findEvent = ()=>{
      console.log("find event");
      navigate(`../FindEvent${id}`,{replace:false})
   }

   const funcY = () => {
      navigate(`../Add`, {state:{id:id}},{ replace: false })
  }
  

   return (
      <div>
         <div>
            <h1>Welcome To MY Calendar</h1>
           
      
            <table align="center" border={3}>
               <td colSpan={10}>
                  <th>
                     Sunday
                  </th>
                  <tr>
                     <Day date={sunday.clone().weekday(0)} today = {cuurentWeek} addEvent={funcY}></Day>
                  </tr>
               </td>
               <td colSpan={10}>
                  <th>
                     Munday
                  </th>
                  <tr>
                     <Day date={sunday.clone().weekday(1)}></Day>
                  </tr>
               </td>
               <td colSpan={10}>
                  <th>
                     Tuesday
                  </th>
                  <tr>
                     <Day date={sunday.clone().weekday(2)}></Day>
                     {console.log(`ssssssssssssssssss${sunday.clone().weekday(2)}`)}
                  </tr>
               </td>
               <td colSpan={10}>
                  <th>
                     Wednesday
                  </th>
                  <tr>
                     <Day date={sunday.clone().weekday(3)}></Day>
                  </tr>
               </td>
               <td colSpan={10}>
                  <th>
                     Thursday
                  </th>
                  <tr>
                     <Day date={sunday.clone().weekday(4)}></Day>
                  </tr>
               </td><td colSpan={10}>
                  <th>
                     Fryday
                  </th>
                  <tr>
                     <Day date={sunday.clone().weekday(5)}></Day>
                  </tr>
               </td>
               <td colSpan={10}>
                  <th>
                     Saturday
                  </th>
                  <tr>
                     <Day date={sunday.clone().weekday(6)}></Day>
                  </tr>
               </td>

            </table>
            <button onClick={lastWeek}>⬅️🔙last week</button>
            <button onClick={cuurentWeek}>Move to current date💫</button>
            <button onClick={funcY}> new event👍</button>
            <button onClick={findEvent}> search event🔎</button>
            <button onClick={nextWeek}>next week🔜➡️</button>
            
         </div>
      </div>
   )
}
export default Calendar
