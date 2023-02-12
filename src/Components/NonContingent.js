import React, { useState } from "react";
import "./Events.css";
import {  NonContigent } from "../data/events.js";

// paragraph : montserrat, title : Raider Crusader
import EventCard from "./EventCard";
import EventModal from "./EventModal";
const Events = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setModalOpen(!modalOpen);
  };

  const handleModalClose = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <div className="text-light events-container">
      {/* <h2>Events</h2> */}

      <h3>Non-Contingent Events</h3>
      <div className="events-grid">
        {NonContigent.map((item, index) => {
          return (
            <EventCard
              item={item}
              handleCardClick={handleCardClick}
              key={index}
            />
          );
        })}

        {modalOpen && (
          <div className="modal">
            <EventModal
              selectedCard={selectedCard}
              handleModalClose={handleModalClose}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default Events;
