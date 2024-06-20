import React from "react";

const Event = ({event}) => {
  return (
    <div className="Event">
      <p>{event.summary}</p>
      <p>{event.location}</p>
      <p>{event.created}</p>
      <button>Show details</button>
    </div>
  );
};

export default Event;
