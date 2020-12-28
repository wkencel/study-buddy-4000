import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import EventList from "./EventList.jsx";
//use axios to get the list
//use hooks and use effect to set state 
let temp;
function EventLanding() {
    const [eventInfo, setEventInfo] = useState([]);
    const [classinfo, setClassInfo] = useState([]);
    
    //useEffect to update state and fetch data 
    //render event list 
    useEffect(()=> {
        axios.get('http://localhost:3000/api/events')
            .then(res => {
                console.log(res.data);
                setEventInfo(res.data);
                // console.log(eventInfo);
            })
            .catch (err => {
                console.log(err);
            })
    },[eventInfo.join(",")]);

     useEffect(()=> {
        axios.get('http://localhost:3000/api/classes')
            .then(res => {
                console.log(res.data);
                setClassInfo(res.data);
            })
            .catch (err => {
                console.log(err);
            })
    },[classinfo.join(",")]);
    const eventList = [];
    for (let i = 0; i < eventInfo.length; i+= 1) {
        eventList.push(<EventList className ="eventList" key= {eventInfo[i]["event_id"]} name={eventInfo[i]["event_name"]} location={eventInfo[i]["event_location"]} ></EventList>)
    }
   
    return (
        <div>
            Event Landing
            <div>
                Class Info: 
            </div>
            <div>
                {eventList}
            </div>
        </div>
    )
}

export default EventLanding