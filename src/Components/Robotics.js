import React, { useEffect, useState } from "react";
import "./Events.css";
import { Robotics } from "../data/events";
// paragraph : montserrat, title : Raider Crusader
import EventCard from "./EventCard";
import EventModal from "./EventModal";
import { observer } from "./events-scroll-animation";

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
  useEffect(() => {
    var cards = document.querySelectorAll(".event-card");
    cards.forEach((card) => {
      observer.observe(card);
    });
  }, []);
  return (
    <div className="text-light events-container" style={{ paddingTop: "7rem" }}>
      {/* <h2>Events</h2> */}

      <h3>Robotics</h3>
      <div className="events-grid">
        {Robotics.map((item, index) => {
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
      {/* <script src={animation}></script> */}
    </div>
  );
};
export default Events;
