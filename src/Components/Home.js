import React from 'react';
import './Home.css'
import photo01 from '../media/photo01.png'
import icarus02 from '../media/icarus02.png'
import nftmonkey from '../media/nftmonkey.png'
import { Link } from 'react-router-dom';

export default function Home() {


    return (

        <>
            <div className="container-fluid" style={{ "letterSpacing": "0.125rem", "wordSpacing": "0.5vh", "textAlign": "justify" }}>

                <div className="row">
                    <div className="mydiv col-sm-6 mt-5" style={{ "paddingLeft": "10vw" }}>
                        <img className='mt-5' src={icarus02} alt="icarus02" style={{ "minWidth": "45vw", "maxWidth": "100%" }} />
                        <p className='text-light mt-5' style={{ "fontSize": "1.15rem", "minWidth": "48vw", "maxWidth": "100%" }}>ICARUS is the enthusiastic Technical Festival of the Rajiv Gandhi Institute of Technology. With a footfall of over 2000 students, ICARUS celebrates the innovativeness of its engineering students.</p>
                        <button className='text-light my-4' style={{ "minWidth": "15rem", "minHeight": "4rem", "backgroundColor": "rgba(20,20,20,0.5)", "border": "none" }}><Link className='text-light' to="/" style={{ "textDecoration": "none", "fontSize": "1.5rem" }}>Explore &#10230;</Link></button>
                    </div>
                    <div className="col-sm-6 mt-5 text-light" style={{ "zIndex": "-1", "position": "relative" }}>
                        <img src={photo01} style={{ "minWidth": "48vw", "maxWidth": "100%", "minHeight": "100%", "WebkitTransform": "scaleX(-1)", "transform": "scaleX(-1)" }} alt="photo01" />
                        <div className="container py-2 image-text" style={{ "backgroundColor": "rgba(20,20,20,0.5)", "backdropFilter": "blur(10px)", "position": "absolute", "bottom": "0", "right": "0" }}>
                            <div className="row m-2">
                                <div className="col-7">
                                    <p style={{ "fontSize": "1.2vw", "fontWeight": "bold" }}>METAVERSE &nbsp;<span style={{ "letterSpacing": "0" }}>&mdash;&mdash;&mdash;&mdash;</span></p><span style={{ "fontSize": "0.9vw", "opacity": "0.7" }}>"The metaverse is essentially the next iteration of the internet."</span>
                                </div>
                                <div className="col-1">
                                    <div style={{ "borderLeft": "1px solid rgba(255,255,255,0.5)", "minHeight": "100%" }}></div>
                                </div>
                                <div className="col-4">
                                    <p style={{ "fontSize": "1.2vw", "fontWeight": "bold" }}>ICARUS</p><span style={{ "fontSize": "0.9vw", "opacity": "0.7" }}>It's happening!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row text-light" >
                    <div className="col-sm-7 py-5" style={{"paddingLeft":"10vw"}}><p style={{"fontSize": "3vw", "fontFamily": "Raider Crusader" }}>what is icarus 2023 ? </p><span >Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque molestias incidunt nesciunt dolor odit vel fugit, voluptatem beatae architecto laborum quasi aliquam reprehenderit debitis animi deserunt. Molestias quas fugit nam! <br /><br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, hic sed? Natus, dolore! Odit nisi, aperiam dolorum modi commodi, iste dicta corporis, eveniet qui adipisci ab quo. Minima, eveniet ipsam. <br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, voluptas! Consequatur dignissimos, qui ducimus totam eveniet ipsa eaque culpa earum dolorum similique sit non reiciendis repellat rerum nesciunt fuga labore.</span>
                    </div>
                    <div className="col" style={{ "position":"relative" }}>
                        <img src={nftmonkey} alt="nftmonkey" style={{"zIndex":"-1", "maxWidth": "50vw", "minHeight":"100%", "position": "absolute", "right": "0", "bottom":"0"  }} />
                    </div>
                </div>

            </div>
        </>
    )

}