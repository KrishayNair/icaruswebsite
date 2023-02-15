import React from "react";
import "./Team.css";
import image from "../media/muazzam.jpeg";
import image2 from "../media/akshar.JPG";
import image3 from "../media/jenil2.jpg";
import image4 from "../media/vaishnavi.jpg";
import image5 from "../media/rituja2.jpeg";

function Team() {
  return (
    <div className="container-fluid text-light" style={{"marginTop":"7rem"}}>
      <div className="headingdiv">
        <h1 className="heading">OUR TEAM</h1>
      </div>
      <div className="mainDiv">
        <div className="element">
          <h1 className="divHeading">Technical Secretary</h1>

          <img src={image2} className="image" />
          <h1 className="name"> Akshar Mehta</h1>
        </div>
        <div className="element">
          <h1 className="divHeading">Technical Secretary</h1>

          <img src={image} className="image" />
          <h1 className="name"> Muazzam Shaikh</h1>
        </div>
      </div>
      <hr className="line" />
      <div className="mainDiv2">
        <div className="element2">
          <h1 className="divHeading2">Jt.Technical Secretary</h1>
          <img src={image3} className="image" />
          <h1 className="name"> Jenil Kumbhani</h1>
        </div>
        <div className="element2">
          <h1 className="divHeading2">Jt.Technical Secretary</h1>
          <img src={image4} className="image" />
          <h1 className="name">Vaishnavi Mishra</h1>
        </div>
        <div className="element2">
          <h1 className="divHeading2">Jt.Technical Secretary</h1>
          <img src={image5} className="image" />
          <h1 className="name">Rituja Kotangale</h1>
        </div>
      </div>
      <hr className="line" />
      <div className="mainDiv3">
        <div className="element3">
          <h1 className="divHeading3">Technical Head</h1>

          <h1 className="name"> Mr. Avinash Gupta</h1>
        </div>
        <div className="element3">
          <h1 className="divHeading3">Technical Head</h1>

          <h1 className="name">Mr. Ronak Kambli</h1>
        </div>
        <div className="element3">
          <h1 className="divHeading3">Technical Head</h1>

          <h1 className="name">Mr. Aryan Panchal</h1>
        </div>
        <div className="element3">
          <h1 className="divHeading3">Technical Head</h1>

          <h1 className="name">Mr. Nikhil Poojari</h1>
        </div>
        <div className="element3">
          <h1 className="divHeading3">Technical Head</h1>

          <h1 className="name">Mr. Smith Mankar</h1>
        </div>
      </div>
      <hr className="line" />
      <div className="mainDiv4">
        <div className="element4">
          <h1 className="divHeading4">Asst. Technical Head</h1>

          <h1 className="name">Mr. Jagdish Kantharia</h1>
        </div>
        <div className="element4">
          <h1 className="divHeading4">Asst. Technical Head</h1>

          <h1 className="name">Ms. Disha Jain</h1>
        </div>
        <div className="element4">
          <h1 className="divHeading4">Asst. Technical Head</h1>

          <h1 className="name">Mr. Shreyas Tiwari</h1>
        </div>
        <div className="element4">
          <h1 className="divHeading4">Asst. Technical Head</h1>

          <h1 className="name">Mr. Dhirendra Lohar</h1>
        </div>
      </div>
    </div>
  );
}

export default Team;
