import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import landing from "../media/landing-01.png";
import NFTMonkey from "../media/nftmonkey.png";
import icarus01 from "../media/icarus01.png";
import facebook from '../media/facebook.png';
import instagram from '../media/instagram.png';
import linkedin from '../media/linkedin.png';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [time, setTime] = useState({});
  const vrDidiRef = useRef(null);
  const landingBottomBoxRef = useRef(null);
  const monkeyBoiRef = useRef(null);

  useEffect(() => {
    const target = new Date("March 23, 2023").getTime();
    const addZeroPrefix = (value) => (value < 10 ? "0" + value : value);
    const updateTime = () => {
      const remaining = target - Date.now();
      if (remaining > 0) {
        setTime({
          days: addZeroPrefix(Math.floor(remaining / (1000 * 60 * 60 * 24))),
          hours: addZeroPrefix(
            Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          ),
          minutes: addZeroPrefix(
            Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60))
          ),
          seconds: addZeroPrefix(Math.floor((remaining % (1000 * 60)) / 1000)),
        });
        setTimeout(updateTime, 1000);
      } else {
        setTime({});
      }
    };
    updateTime();

    return () => {
      // Cleanup function to stop the timeout when the component unmounts
      clearTimeout(updateTime);
    };
  }, []);

  useEffect(() => {
    // gsap.from('.logo-text-animated', {y: 40, stagger: 1, duration: 2})

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".landing-page",
          start: "top top",
          end: "bottom top",
          markers: false,
          scrub: true,
        },
      })
      .to(vrDidiRef.current, { x: 150, y: 200 })
      .to(landingBottomBoxRef.current, { y: 100 }, "<0")
      .to(".landing-page", { filter: "hue-rotate(360deg)" }, "<0");

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".about-us-page",
          start: "top top",
          end: "bottom top",
          markers: false,
          scrub: true,
        },
      })
      .to(monkeyBoiRef.current, { x: 150, y: 40 })
      .to(".monkey-outline-circle", { width: "30vw", height: "30vw" }, "<0");
  }, []);

  return (
    <>
      <section
        className="container-fluid landing-page vh-100"
        style={{ filter: "hue-rotate(0deg)" }}
      >
        <div className="row">
          <div
            className="col-sm-6 vh-100 content d-flex flex-column justify-content-center align-items-start"
            style={{ paddingInlineStart: "5rem", paddingTop: "5rem" }}
          >
            <div
              className="logo-text primary-font position-relative mb-5"
              style={{ width: "fit-content" }}
            >
              <h1 className="logo-text-animated">ICARUS</h1>
              <span className="m-0 p-0 position-absolute">2023</span>
            </div>
            <p className="mb-5">
              ICARUS is the enthusiastic Technical Festival of the Rajiv Gandhi
              Institute of Technology. With a footfall of over 2000 students,
              ICARUS celebrates the innovativeness of its engineering students.
            </p>
            <button className="icarus-button">Explore</button>
          </div>
          <div className="col-sm-6 vh-100 position-relative graphics">
            <img
              ref={vrDidiRef}
              src={landing}
              alt="Cartoon Girl with VR headset"
            />
            <div
              ref={landingBottomBoxRef}
              className="row d-flex px-5 py-4 bottom-box main-background-effect"
            >
              <div
                className="col info"
                style={{ borderRight: "1px solid rgba(255 255 255 / 25%)" }}
              >
                <span
                  className="letter-spacing-heading"
                  style={{ fontWeight: "400", fontSize: "1.1vw" }}
                >
                  METAVERSE
                </span>
                <p className="fw-light pt-2 mb-0 letter-spacing-text">
                  "The metaverse is essentially the next iteration of the
                  internet."
                </p>
              </div>
              <div className="col info ms-3">
                <span
                  className="letter-spacing-heading"
                  style={{ fontWeight: "400", fontSize: "1.1vw" }}
                >
                  ICARUS
                </span>
                <p className="fw-light pt-2 mb-0 letter-spacing-text">
                  It's Happeneninngg!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="position-relative"
        style={{
          background:
            "linear-gradient(145deg, rgba(25,42,114,1) 38%, rgba(3,23,53,0.94) 70%)",
        }}
      >
        <div
          className="w-100 h-100 position-absolute"
          style={{
            backgroundColor: "rgba(0 0 0 / 68%)",
            backdropFilter: "blur(10px)",
          }}
        ></div>
        <section
          className="about-us-page vh-100"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div className="row">
            <div className="col-sm-6 content d-flex flex-column justify-content-center align-items-start ps-5">
              <h1
                className="content-title primary-font letter-spacing-heading mb-5"
                style={{ fontSize: "3.5vw" }}
              >
                What is icarus 2023 ?
              </h1>
              <div
                className="description letter-spacing-text"
                style={{ fontSize: "1.2vw", textAlign: "justify" }}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  eleifend erat tellus, a vestibulum massa sodales sed. Mauris
                  tellus erat, lobortis sit amet viverra non, dapibus id velit.
                  Maecenas sed rhoncus purus. Sed nec hendrerit urna. Donec
                  venenatis, justo semper consequat sagittis, sem dui lobortis
                  lacus, vel pulvinar eros est ut metus. Donec pretium ipsum
                  nisl, sit amet ultricies nulla laoreet at. Vestibulum in erat
                  pretium, finibus nulla ultricies, pellentesque enim.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  eleifend erat tellus, a vestibulum massa sodales sed. Mauris
                  tellus erat, lobortis sit amet viverra non, dapibus id velit.
                  Maecenas sed rhoncus purus. Sed nec hendrerit urna. Donec
                  venenatis, justo semper consequat sagittis, sem dui lobortis
                  lacus, vel pulvinar eros est ut metus.
                </p>
                <p
                  style={{
                    borderLeft: "1px solid rgba(255 255 255 / 28%)",
                    paddingLeft: "1rem",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  eleifend erat tellus, a vestibulum massa sodales sed. Mauris
                  tellus erat, lobortis sit amet viverra non, dapibus id velit.
                </p>
              </div>
            </div>
            <div className="col-sm-6 position-relative graphics vh-100">
              <div
                className="monkey-outline-circle"
                style={{ "--size": "40vw" }}
              ></div>
              <div
                className="monkey-outline-circle"
                style={{ "--size": "45vw" }}
              ></div>
              <div
                className="monkey-outline-circle"
                style={{ "--size": "50vw" }}
              ></div>
              <div
                className="monkey-outline-circle"
                style={{ "--size": "55vw" }}
              ></div>
              <img ref={monkeyBoiRef} src={NFTMonkey} alt="NFT Monkey" />
            </div>
          </div>
        </section>
        <div
          className="timer-overlay px-2 py-5 main-background-effect d-flex justify-content-around align-items-center"
          style={{ position: "relative", zIndex: "2" }}
        >
          <span>ICARUS ARRVING IN</span>
          <div className="row timer">
            <div className="col-sm timer-count">
              <h1>{time.days}</h1>
              <p>days</p>
            </div>
            <div className="col-sm timer-count">
              <h1>{time.hours}</h1>
              <p>hours</p>
            </div>
            <div className="col-sm timer-count">
              <h1>{time.minutes}</h1>
              <p>minutes</p>
            </div>
            <div className="col-sm timer-count">
              <h1>{time.seconds}</h1>
              <p>seconds</p>
            </div>
          </div>
        </div>
        <section
          className="event-desc-page position-relative my-5"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div className="container overflow-hidden">
            <div className="gy-4">
              <h6>EVENTS AT ICARUS</h6>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste voluptates quasi earum placeat similique itaque officiis culpa repudiandae? Et dolores nulla facilis architecto laborum adipisci eos, dolorem aut minus ratione.</p>
            </div>
            {/* // <!-- ---------------------------------------four columns----------------------------------- --> */}
            <div className="row gy-2" style={{ backgroundColor: 'transparent' }}>
              {/* -------------------------block with non-contigent events------------------------------------------------ */}
              <div className="col-6">
                <div className="pt-2">
                  <h6>NON-CONTINGENT</h6>
                  <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste voluptates quasi earum placeat similique itaque officiis culpa repudiandae? Et dolores nulla facilis architecto laborum adipisci eos, dolorem aut minus ratione.</p>
                </div>
              </div>
              {/*-----------------------block with contigent events----------------------------------------------- --> */}
              <div className="col-6">
                <div className="pt-2">
                  <h6>CONTINGENT</h6>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste voluptates quasi earum placeat similique itaque officiis culpa repudiandae? Et dolores nulla facilis architecto laborum adipisci eos, dolorem aut minus ratione.</p>
                </div>
              </div>
              {/*--------------------------block with esports events----------------------------------------------- --> */}
              <div className="col-6">
                <div className="pt-2">
                  <h6>E-SPORTS</h6>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste voluptates quasi earum placeat similique itaque officiis culpa repudiandae? Et dolores nulla facilis architecto laborum adipisci eos, dolorem aut minus ratione.</p>
                </div>
              </div>
              {/*--------------------------block with flagship events----------------------------------------------- --> */}
              <div className="col-6">
                <div className="pt-2">
                  <h6>FLAGSHIP</h6>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste voluptates quasi earum placeat similique itaque officiis culpa repudiandae? Et dolores nulla facilis architecto laborum adipisci eos, dolorem aut minus ratione.</p>
                </div>
              </div>
            </div>
          </div>

        </section>
        <footer
          className="footer"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div className="container-fluid">
            <div className="container">

              <div className="row">

                {/* <!-- -------------------------------first column which contains logo------------------------------------------------> */}
                <div className="col-sm text-center">
                  <img className="footer-logo" src={icarus01} alt="icarus01" />
                </div>

                {/* <!-- -------------------------------second column which contains contact us------------------------------------------> */}
                <div className="col gx-2" >
                  <h6>CONTACT US AT</h6>
                  <p>9323963445<br />support@icarusthefest.in</p>
                  <h6 className="handles">SOCIAL MEDIA HANDLES</h6>
                </div>

                {/* <!-- -------------------------------third column which contains address---------------------------------------------> */}
                <div className="col">
                  <h6>ADDRESS</h6>
                  <p>Juhu Versova Link Road, Versova, Andheri (West), Mumbai (Maharashtra)</p>
                  <div className="social">
                    <a href="/"><img src={instagram} alt="instagram" /></a>
                    <a href="/"><img src={facebook} alt="facebook" /></a>
                    <a href="/"><img src={linkedin} alt="linkedin" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>

  );
}
