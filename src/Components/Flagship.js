import React, { useEffect, useState } from "react";
import "./Events.css";
import { Flagship } from "../data/events.js";

import {observer} from "./events-scroll-animation"

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

  const cards = Flagship.map((item, index) => {
    return (
      <EventCard
        item={item}
        handleCardClick={handleCardClick}
        key={index}
      />
    );
  })
  useEffect(()=>{
    var cards = document.querySelectorAll(".event-card")
    cards.forEach((card)=>{
    observer.observe(card)
  })
  },[])

  return (
    <div className="text-light events-container">
      {/* <h2>Events</h2> */}
      <h3>Flagship Events</h3>
      <div className="events-grid">
        {cards}
        {modalOpen && (
          <div className="modal">
            <EventModal
              selectedCard={selectedCard}
              handleModalClose={handleModalClose}
            />
          </div>
        )}
      </div>
      {/* <script src={animation}></script> */}
    </div>
  );
};
export default Events;
