import React from "react";

const Event = ({event}) => {
  return (
    <div className="Event">
      <p>{event.summary}</p>
    </div>
  );
};

export default Event;
