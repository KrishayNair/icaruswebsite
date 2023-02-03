import React from 'react';
import { Link } from 'react-router-dom';
import icarus01 from '../media/icarus01.png'

export default function Navbar() {


    return (

        <div className="container my-5">
            <nav className="navbar navbar-expand-lg" style={{ "borderRadius": "15px", "backgroundColor":"rgba(20,20,30,0.5)"}}>
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
                                <a className="nav-link text-light" href="#">Events</a>
                            </li>
                            <li className="nav-item px-5">
                                <a className="nav-link text-light" href="#">Team</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )

}