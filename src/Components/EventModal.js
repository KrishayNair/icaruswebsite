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
            <h1 className="modal-title ">{selectedCard.title}</h1>
          </div>

          <div className="modal-description text-lg-start my-3">
            <p className="text-wrap modal-para">{selectedCard.description}</p>
          </div>
          {selectedCard.link.length > 0 && (
            <a
              href={selectedCard.link}
              target="_blank"
              rel="noreferrer"
              className=" registerbtn  "
            >
              Register
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventModal;
