import React, { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails]= useState(false)
  return (
    <div className="Event">
      <p>{event.summary}</p>
      <p>{event.location}</p>
      <p>{event.created}</p>
      <button onClick={() => {setShowDetails(!showDetails)}}>{showDetails ? "Hide Details" : "Show details"}</button>
      {showDetails ? <div>{event.Description}</div> : null}
    </div>
  );
};

export default Event;
