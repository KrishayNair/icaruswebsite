import React from 'react';
import { Link } from 'react-router-dom';
import icarus01 from '../media/icarus01.png'

export default function Navbar() {


    return (

        <div className="container my-5">
            <nav className="navbar navbar-expand-lg" style={{ "borderRadius": "15px", "backgroundColor":"rgba(80,80,80,0.4)"}}>
                <div className="container-fluid" style={{"height":"40px"}}>
                    <img className="navbar-brand mx-5" src={icarus01} style={{"width":"120px"}}/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav" style={{"flex":"revert"}}>
                        <ul className="navbar-nav" style={{"fontSize":"20px"}}>
                            <li className="nav-item px-5">
                                <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item px-5">
                                <Link className="nav-link text-light" to="/events">Events</Link>
                            </li>
                            <li className="nav-item px-5">
                                <Link className="nav-link text-light" to="/team">Team</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )

}