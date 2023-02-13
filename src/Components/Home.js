import React, { useEffect, useState, useRef } from 'react';
import './Home.css';
import landing from '../media/landing-01.png';
import NFTMonkey from '../media/nftmonkey.png';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
    const [time, setTime] = useState({});
    const vrDidiRef = useRef(null);
    const landingBottomBoxRef = useRef(null);
    const monkeyBoiRef = useRef(null);

    useEffect(() => {
        const target = new Date("March 23, 2023").getTime();
        const addZeroPrefix = value => value < 10 ? '0' + value : value;
        const updateTime = () => {
          const remaining = target - Date.now();
          if (remaining > 0) {
            setTime({
              days: addZeroPrefix(Math.floor(remaining / (1000 * 60 * 60 * 24))),
              hours: addZeroPrefix(Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
              minutes: addZeroPrefix(Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60))),
              seconds: addZeroPrefix(Math.floor((remaining % (1000 * 60)) / 1000))
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

        gsap.timeline({
            scrollTrigger: {
                trigger: '.landing-page',
                start: "top top",
                end: "bottom top",
                markers: false,
                scrub: true,
            }
        })
            .to(vrDidiRef.current, {x: 150, y: 200})
            .to(landingBottomBoxRef.current, {y: 100}, "<0")
            .to('.landing-page', {filter: "hue-rotate(360deg)"}, "<0")

        gsap.timeline({
            scrollTrigger: {
                trigger: '.about-us-page',
                start: "top top",
                end: "bottom top",
                markers: false,
                scrub: true,
            }
        })
            .to(monkeyBoiRef.current, {x: 150, y: 40})
            .to('.monkey-outline-circle', {width: "30vw", height: "30vw"}, "<0")
      }, []);


    return (
        <>
            <section className='container-fluid landing-page vh-100' style={{ "filter": "hue-rotate(0deg)" }}>
                <div className="row">
                    <div className="col-6 vh-100 content d-flex flex-column justify-content-center align-items-start"
                        style={{ "paddingInlineStart": "5rem", "paddingTop": "5rem" }}>
                        <div className="logo-text primary-font position-relative mb-5" style={{ "width": "fit-content" }}>
                            <h1 className='m-0 p-0 logo-text-animated'>ICARUS</h1>
                            <span className='position-absolute'>2023</span>
                        </div>
                        <p className='mb-5'>
                            ICARUS is the enthusiastic Technical Festival of the Rajiv Gandhi Institute of Technology. With a footfall of over 2000 students, 
                            ICARUS celebrates the innovativeness of its engineering students.
                        </p>
                        <button className='icarus-button'>Explore</button>
                    </div>
                    <div className="col-6 vh-100 position-relative graphics">
                        <img ref={vrDidiRef} src={landing} alt="Cartoon Girl with VR headset" />
                        <div ref={landingBottomBoxRef} className="row d-flex px-5 py-4 bottom-box main-background-effect">
                            <div className="col info" style={{ "borderRight": "1px solid rgba(255 255 255 / 25%)" }}>
                                <span className='letter-spacing-heading' style={{ "fontWeight": "400", "fontSize": "1.1vw" }}>
                                    METAVERSE
                                </span> 
                                <p className='fw-light pt-2 mb-0 letter-spacing-text'>"The metaverse is essentially the next iteration of the internet."</p>
                            </div>
                            <div className="col info ms-3">
                                <span className='letter-spacing-heading' style={{ "fontWeight": "400", "fontSize": "1.1vw" }}>ICARUS</span>
                                <p className='fw-light pt-2 mb-0 letter-spacing-text'>It's Happeneninngg!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='position-relative' style={{ "background": "linear-gradient(145deg, rgba(25,42,114,1) 38%, rgba(3,23,53,0.94) 70%)" }}>
                <div className='w-100 h-100 position-absolute' style={{ "backgroundColor": "rgba(0 0 0 / 68%)", "backdropFilter": "blur(10px)" }}></div>
                <section className='about-us-page vh-100' style={{ "position": "relative", "zIndex": 1 }}>
                    <div className="row">
                        <div className="col-6 content d-flex flex-column justify-content-center align-items-start ps-5">
                            <h1 className='content-title primary-font letter-spacing-heading mb-5' 
                                style={{ "fontSize": "3.5vw" }}>
                                What is icarus 2023 ?
                            </h1>
                            <div className="description letter-spacing-text" style={{ "fontSize": "1.2vw", "textAlign": "justify" }}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend erat tellus, a vestibulum massa sodales sed. Mauris 
                                    tellus erat, lobortis sit amet viverra non, dapibus id velit. Maecenas sed rhoncus purus. Sed nec hendrerit urna. Donec 
                                    venenatis, justo semper consequat sagittis, sem dui lobortis lacus, vel pulvinar eros est ut metus. 
                                    Donec pretium ipsum nisl, sit amet ultricies nulla laoreet at. Vestibulum in erat pretium, finibus nulla ultricies, 
                                    pellentesque enim.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend erat tellus, a vestibulum massa sodales sed. Mauris 
                                    tellus erat, lobortis sit amet viverra non, dapibus id velit. Maecenas sed rhoncus purus. Sed nec hendrerit urna. Donec 
                                    venenatis, justo semper consequat sagittis, sem dui lobortis lacus, vel pulvinar eros est ut metus.
                                </p>
                                <p style={{ "borderLeft": "1px solid rgba(255 255 255 / 28%)", "paddingLeft": "1rem" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend erat tellus, a vestibulum massa sodales sed. Mauris 
                                    tellus erat, lobortis sit amet viverra non, dapibus id velit.
                                </p>
                            </div>
                        </div>
                        <div className="col-6 position-relative graphics vh-100">
                            <div className="monkey-outline-circle" style={{"--size": "40vw"}}></div>
                            <div className="monkey-outline-circle" style={{"--size": "45vw"}}></div>
                            <div className="monkey-outline-circle" style={{"--size": "50vw"}}></div>
                            <div className="monkey-outline-circle" style={{"--size": "55vw"}}></div>
                            <img ref={monkeyBoiRef} src={NFTMonkey} alt="NFT Monkey" />
                        </div>
                    </div>
                </section>
                <div className="timer-overlay px-2 py-5 w-100 main-background-effect d-flex justify-content-around align-items-center"
                        style={{ "position": "relative", "zIndex": "2" }}>
                        <span>ICARUS ARRVING IN</span>
                        <div className="row timer">
                            <div className="col timer-count">
                                <h1>{time.days}</h1>
                                <p>days</p>
                            </div>
                            <div className="col timer-count">
                                <h1>{time.hours}</h1>
                                <p>hours</p>
                            </div>
                            <div className="col timer-count">
                                <h1>{time.minutes}</h1>
                                <p>minutes</p>
                            </div>
                            <div className="col timer-count">
                                <h1>{time.seconds}</h1>
                                <p>seconds</p>
                            </div>
                        </div>
                </div>
                <section className='event-desc-page position-relative vh-100' style={{ "position": "relative", "zIndex": 1 }}>
                    <h1>events wala code yaha likhdo</h1>
                </section>
                <footer className='footer' style={{ "height": "50vh", "position": "relative", "zIndex": 1 }}>
                    <h1>footer yaha bana do</h1>
                </footer>
            </section>
        </>
        // <>
        //     <div className="container-fluid" style={{ "letterSpacing": "0.125rem", "wordSpacing": "0.5vh", "textAlign": "justify" }}>

        //         <div className="row">
        //             <div className="mydiv col-sm-6 mt-5" style={{ "paddingLeft": "10vw" }}>
        //                 <img className='mt-5' src={icarus02} alt="icarus02" style={{ "minWidth": "45vw", "maxWidth": "100%" }} />
        //                 <p className='text-light mt-5' style={{ "fontSize": "1.15rem", "minWidth": "48vw", "maxWidth": "100%" }}>ICARUS is the enthusiastic Technical Festival of the Rajiv Gandhi Institute of Technology. With a footfall of over 2000 students, ICARUS celebrates the innovativeness of its engineering students.</p>
        //                 <button className='text-light my-4' style={{ "minWidth": "15rem", "minHeight": "4rem", "backgroundColor": "rgba(20,20,20,0.5)", "border": "none" }}><Link className='text-light' to="/" style={{ "textDecoration": "none", "fontSize": "1.5rem" }}>Explore &#10230;</Link></button>
        //             </div>
        //             <div className="col-sm-6 mt-5 text-light" style={{ "zIndex": "-1", "position": "relative" }}>
        //                 <img src={photo01} style={{ "minWidth": "48vw", "maxWidth": "100%", "minHeight": "100%", "WebkitTransform": "scaleX(-1)", "transform": "scaleX(-1)" }} alt="photo01" />
        //                 <div className="container py-2 image-text" style={{ "backgroundColor": "rgba(20,20,20,0.5)", "backdropFilter": "blur(10px)", "position": "absolute", "bottom": "0", "right": "0" }}>
        //                     <div className="row m-2">
        //                         <div className="col-7">
        //                             <p style={{ "fontSize": "1.2vw", "fontWeight": "bold" }}>METAVERSE &nbsp;<span style={{ "letterSpacing": "0" }}>&mdash;&mdash;&mdash;&mdash;</span></p><span style={{ "fontSize": "0.9vw", "opacity": "0.7" }}>"The metaverse is essentially the next iteration of the internet."</span>
        //                         </div>
        //                         <div className="col-1">
        //                             <div style={{ "borderLeft": "1px solid rgba(255,255,255,0.5)", "minHeight": "100%" }}></div>
        //                         </div>
        //                         <div className="col-4">
        //                             <p style={{ "fontSize": "1.2vw", "fontWeight": "bold" }}>ICARUS</p><span style={{ "fontSize": "0.9vw", "opacity": "0.7" }}>It's happening!</span>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="row text-light" >
        //             <div className="col-sm-7 py-5" style={{"paddingLeft":"10vw"}}><p style={{"fontSize": "3vw", "fontFamily": "Raider Crusader" }}>what is icarus 2023 ? </p><span >Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque molestias incidunt nesciunt dolor odit vel fugit, voluptatem beatae architecto laborum quasi aliquam reprehenderit debitis animi deserunt. Molestias quas fugit nam! <br /><br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, hic sed? Natus, dolore! Odit nisi, aperiam dolorum modi commodi, iste dicta corporis, eveniet qui adipisci ab quo. Minima, eveniet ipsam. <br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, voluptas! Consequatur dignissimos, qui ducimus totam eveniet ipsa eaque culpa earum dolorum similique sit non reiciendis repellat rerum nesciunt fuga labore.</span>
        //             </div>
        //             <div className="col" style={{ "position":"relative" }}>
        //                 <img src={nftmonkey} alt="nftmonkey" style={{"zIndex":"-1", "maxWidth": "50vw", "minHeight":"100%", "position": "absolute", "right": "0", "bottom":"0"  }} />
        //             </div>
        //         </div>

        //     </div>
        // </>
    )

}