import React, { useState } from 'react'

function Event_selection() {
    const [info,setinfo]=useState([
        {event_name:"abcdefghijk",Edate:"02-10-2020"},
        {event_name:"abcdefghijk",Edate:"02-10-2020"},
        {event_name:"abcdefghijk",Edate:"02-10-2020"},
        {event_name:"abcdefghijk",Edate:"02-10-2020"},
        {event_name:"abcdefghijk",Edate:"02-10-2020"},
        {event_name:"abcdefghijk",Edate:"02-10-2020"},
        {event_name:"abcdefghijk",Edate:"02-10-2020"},
        {event_name:"abcdefghijk",Edate:"02-10-2020"},
        {event_name:"abcdefghijk",Edate:"02-10-2020"},
        {event_name:"abcdefghijk",Edate:"02-10-2020"},
        {event_name:"abcdefghijk",Edate:"02-10-2020"},
        {event_name:"abcdefghijk",Edate:"02-10-2020"},
        {event_name:"abcdefghijk",Edate:"02-10-2020"},

    ])
  return (
    <>
    <h1>past event table</h1>    
    <br /><br />

{
    info.map((info)=>{
        return(
        <div>
        <p>{info.event_name}</p>
        <p>Date: {info.Edate}</p>
        </div>
        )
    })
}
      

    
    
    
    
    
    </>
  )
}

export default Event_selection
