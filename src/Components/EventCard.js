import React from "react";
import "./Events.css";

const EventCard = (props) => {
  const { title, Image, description } = props.item;
  return (
    <div
      className="event-card"
      onClick={() => props.handleCardClick(props.item)}
    >
      <div className="event-poster">
        <img src={Image} alt="event poster" />
      </div>
      <div className="event-text">
        <div className="event-title">{title}</div>
        <div className="event-desc">{description}</div>
        <a href="/" className="registerbtn">Register</a>
      </div>
    </div>
  );
};
export default EventCard;
