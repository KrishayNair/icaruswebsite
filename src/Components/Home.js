import React from 'react';
import './Home.css'
import photo01 from '../media/photo01.png'
import icarus02 from '../media/icarus02.png'
import { Link } from 'react-router-dom';

export default function Home() {

    return (

        // <div className='row'>
        // <div  style={{ "display": "flex", "paddingTop": "15px", "marginLeft": "80px" }}>
        //     <div className='py-4' style={{ "position": "relative", "left": "70px" }}>
        //         <img className='my-5' src={icarus02} alt="icarus02" style={{ "minWidth": "590px" }} />
        //         <p className='text-light' style={{ "fontSize": "22px", "textAlign": "justify" }}>ICARUS is the enthusiastic Technical Festival of the Rajiv Gandhi Institute of Technology. With a footfall of over 2000 students, ICARUS celebrates the innovativeness of its engineering students.</p>
        //         <button className='text-light my-2' style={{ "minWidth": "220px", "minHeight": "50px", "fontSize": "22px", "backgroundColor": "rgba(20,20,20,0.5)", "border": "none" }}><Link className='text-light' to="/" style={{ "textDecoration": "none" }}>Explore &rarr;</Link></button>
        //     </div>

        //     <div  style={{ "zIndex": "-1", "position": "relative" }}>
        //         <img src={photo01} style={{ "width": "672px", "WebkitTransform": "scaleX(-1)", "transform": "scaleX(-1)" }} alt="photo01"/>
        // <div className="text-light px-5 py-3" style={{ "display": "flex", "flex": "right", "backgroundColor": "rgba(20,20,20,0.5)", "backdropFilter": "blur(10px)", "position": "absolute", "bottom": "0" }}>
        //     <div className='col-7 mx-3'>
        //         <p><b>METAVERSE &nbsp;</b>&mdash;&mdash;&mdash;&mdash;</p><span style={{ "flex": "right", "fontSize": "13px", "opacity": "0.7" }}>"The metaverse is essentially the next iteration of the internet."</span>
        //     </div>
        //     <div style={{ "marginLeft": "15px", "borderLeft": "1px solid rgba(255,255,255,0.5)", "width": "50px", "height": "90px" }}></div>
        //     <div>
        //         <p><b>ICARUS</b></p><span style={{ "fontSize": "13px", "opacity": "0.7" }}>It's happening!</span>
        //     </div>
        // </div>
        //     </div>
        // </div>
        // </div>
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <img className='pt-5' src={icarus02} alt="icarus02" style={{ "minWidth": "54vw", "maxWidth": "100%" }} />
                        <p className='text-light pt-5' style={{ "fontSize": "22px", "textAlign": "justify", "minWidth": "48vw", "maxWidth": "100%" }}>ICARUS is the enthusiastic Technical Festival of the Rajiv Gandhi Institute of Technology. With a footfall of over 2000 students, ICARUS celebrates the innovativeness of its engineering students.</p>
                        <button className='text-light my-2' style={{ "minWidth": "220px", "minHeight": "50px", "fontSize": "22px", "backgroundColor": "rgba(20,20,20,0.5)", "border": "none" }}><Link className='text-light' to="/" style={{ "textDecoration": "none" }}>Explore &rarr;</Link></button>
                    </div>
                    <div className="col-sm-6 text-light" style={{ "zIndex": "-1", "position": "relative" }}>
                        <img src={photo01} style={{ "minWidth": "48vw", "maxWidth": "100%", "minHeight": "100%", "WebkitTransform": "scaleX(-1)", "transform": "scaleX(-1)" }} alt="photo01" />
                        <div className="container py-2 image-text" style={{ "backgroundColor": "rgba(20,20,20,0.5)", "backdropFilter": "blur(10px)", "letterSpacing": "0.25vh", "position": "absolute", "bottom": "0", "right": "0" }}>
                            <div className="row">
                                <div className="col-sm-7">
                                    <p><b>METAVERSE &nbsp;</b><span style={{ "letterSpacing": "0" }}>&mdash;&mdash;&mdash;&mdash;</span></p><span style={{ "fontSize": "13px", "opacity": "0.7" }}>"The metaverse is essentially the next iteration of the internet."</span>
                                </div>
                                <div className="col-sm-1">
                                    <div style={{ "borderLeft": "1px solid rgba(255,255,255,0.5)", "minHeight": "10vh" }}></div>
                                </div>
                                <div className="col-sm-4">
                                    <p><b>ICARUS</b></p><span style={{ "fontSize": "13px", "opacity": "0.7" }}>It's happening!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}