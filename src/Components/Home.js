import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import "./Home.mobile.css";
import landing from "../media/landing-01.png";
import NFTMonkey from "../media/nftmonkey.png";
import icarus01 from "../media/icarus01.png";

import { RiInstagramFill, RiTwitterFill, RiMailFill, RiPhoneFill } from 'react-icons/ri';
import { Icon } from '@iconify/react';

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
            .to(landingBottomBoxRef.current, { y: "100%" }, "<0")
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
                        <div className="col-sm-6 content d-flex flex-column justify-content-center align-items-start"
                            style={{ "paddingLeft": "5rem" }}>
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
                                    ICARUS is a national level technical symposium which draws
                                    participation from all over India. It is a popular event among
                                    students of degree as well as diploma colleges. Competitions and
                                    challenges are central to Innovision's operations. The fest casts
                                    a remarkable impression by putting forth a varied array of
                                    innovative and interesting events that fascinate the visitors to a
                                    great extent.
                                </p>
                                <p>
                                    ICARUS aims to provide an excellent platform for the budding
                                    engineers of today and a launch pad for new talent. It provides
                                    an opportunity for companies to scout for young talent. It is a
                                    huge avenue for inspired techies to showcase their talent to the
                                    technical world!
                                </p>
                                <p
                                    style={{
                                        borderLeft: "1px solid rgba(255 255 255 / 28%)",
                                        paddingLeft: "1rem",
                                    }}
                                >
                                    The festival unfolds the treasure of talent in the students if the
                                    student gets an opportunity to show his/her talent and skills
                                    before an audience, it helps in the overall personality
                                    development of student Today's amateur and novice artist can
                                    be an eminent professional tomorrow.
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
                        <div className="col-sm-6 col-lg timer-count">
                            <h1>{time.days}</h1>
                            <p>days</p>
                        </div>
                        <div className="col-sm-6 col-lg timer-count">
                            <h1>{time.hours}</h1>
                            <p>hours</p>
                        </div>
                        <div className="col-sm-6 col-lg timer-count">
                            <h1>{time.minutes}</h1>
                            <p>minutes</p>
                        </div>
                        <div className="col-sm-6 col-lg timer-count">
                            <h1>{time.seconds}</h1>
                            <p>seconds</p>
                        </div>
                    </div>
                </div>
                <section
                    className="event-desc-page position-relative my-5 vh-100 d-flex flex-column justify-content-center align-items-start"
                    style={{ position: "relative", zIndex: 1 }}
                >
                    <div className="container px-0">
                        <div className="gy-4" style={{ "marginBottom": "4rem" }}>
                            <h6>EVENTS AT ICARUS</h6>
                            {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste voluptates quasi earum placeat similique itaque officiis culpa repudiandae? Et dolores nulla facilis architecto laborum adipisci eos, dolorem aut minus ratione.</p> */}
                        </div>
                        <div className="row gy-2" style={{ backgroundColor: 'transparent' }}>
                            {/* -------------------------block with non-contigent events------------------------------------------------ */}
                            <div className="col-sm-12 col-lg-6">
                                <div className="pt-2">
                                    <h6 className="mb-4">NON-CONTINGENT</h6>
                                    <p >A non-contingent is a team of students from different college attending the event held. They would be representing their college at all the events. Members can take part from the college as well as from other colleges.</p>
                                </div>
                            </div>
                            {/*-----------------------block with contigent events----------------------------------------------- --> */}
                            <div className="col-sm-12 col-lg-6">
                                <div className="pt-2">
                                    <h6 className="mb-4">CONTINGENT</h6>
                                    <p>A contingent is a team of students (at least 7) from same college, attending the event held. They would be representing their college department at all the events. Contingent events are inter-department events. The contingent members would be competing in various events.
                                    </p>
                                </div>
                            </div>
                            {/*--------------------------block with esports events----------------------------------------------- --> */}
                            <div className="col-sm-12 col-lg-6">
                                <div className="pt-2">
                                    <h6 className="mb-4">E-SPORTS</h6>
                                    <p>Esports events are competitive gaming tournaments where professional gamers and esports teams compete against each other in various video games. These events are typically held both online and in-person, and they can attract thousands of spectators from around the world.</p>
                                </div>
                            </div>
                            {/*--------------------------block with flagship events----------------------------------------------- --> */}
                            <div className="col-sm-12 col-lg-6">
                                <div className="pt-2">
                                    <h6 className="mb-4">FLAGSHIP</h6>
                                    <p>Flagship events are the institutional level events conducted by the college for all the college members. These events give the students a chance to come up with solutions and manage situations in the face of actual constraints and timeliness. The value gained from the organization of these events is invaluable, and all the events are managed by the student committees detailed in the preceding section.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <footer
                    className="footer main-background-effect"
                    style={{ position: "relative", zIndex: 1 }}
                >
                    <div className="container-fluid">
                        <div className="container py-lg-5 py-sm-2">
                            <div className="row main-row d-flex justify-content-around align-items-center">
                                <div className="col-sm-12 col-lg-4 text-center">
                                    <img className="footer-logo" style={{ "marginBottom": "4rem" }} src={icarus01} alt="icarus01" />
                                </div>
                                <div className="col-sm-12 col-lg-8">
                                    <div className="row">
                                        <div className="col-sm-12 col-lg-6 gx-2" style={{ "marginBottom": "3rem" }}>
                                            <h6>CONTACT US AT</h6>
                                            <div className="foot-item mb-2"><RiPhoneFill /> +91 93239 63445</div>
                                            <div className="foot-item"><RiMailFill /> support@icarusthefest.in</div>
                                        </div>
                                        <div className="col-sm-12 col-lg-6 gx-2" >
                                            <h6>ADDRESS</h6>
                                            <p>Juhu Versova Link Road, <br /> Versova, Andheri (West), <br /> Mumbai Maharashtra</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="px-0 social-layout d-flex justify-content-start align-items-center">
                                            <h6 className="mb-0 me-5">FOLLOW US ON</h6>
                                            <div className="social">
                                                <a href="https://instagram.com/theicarusfest?igshid=YmMyMTA2M2Y=" target={"_blank"} rel="noreferrer"><RiInstagramFill /></a>
                                                <a href="https://twitter.com/theicarusfest?s=11" target={"_blank"} rel="noreferrer"><RiTwitterFill /></a>
                                                <a href="https://linktr.ee/theicarusfest" target={"_blank"} rel="noreferrer"><Icon icon="simple-icons:linktree" /></a>
                                            </div>
                                        </div>
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
