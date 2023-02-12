import React from "react";
import "./Events.css";

const EventModal = ({ selectedCard, handleModalClose }) => {
  return (
    <div className="modal-content">
      <div className="titleCloseBtn" onClick={handleModalClose}>
        X
      </div>
      <div className="modal-card">
        <img
          src={selectedCard.Image}
          alt={selectedCard.title}
          className="modal-image"
        />
        <div>
          <div className="m-3 d-flex justify-content-between">
            <h1 className="modal-title "> Tech Debate</h1>
            <a href={selectedCard.link} className=" registerbtn w-50 h-50 ">
              Register
            </a>
          </div>

          <div className="modal-description text-lg-start m-3">
            <h4>Description:</h4>
            <p className="text-wrap">
              A tech debate is a discussion about technology, where people
              present their opinions and arguments about a specific topic
              related to technology. Participants in a tech debate will present
              their arguments and support their viewpoints, while also
              considering and responding to the arguments presented by others
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
