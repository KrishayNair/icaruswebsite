import React from 'react';
import { Link } from 'react-router-dom';
import icarus01min from '../media/icarus01min.png'
import './Navbar.css'

export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg my-4 main-background-effect" style={{ "borderRadius": "10px" }} >
            <div className="container-fluid navbar-container">
                <Link className="navbar-brand" to="/">
                    <img className='px-5' src={icarus01min} alt="icarus01min" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end me-5" id="navbarSupportedContent" >
                    <ul className="col navbar-nav me-auto mb-2 mb-lg-0 justify-content-end" style={{ "columnGap": "2.5vw", "letterSpacing": "0.1vw" }}>
                        <li className="nav-item">
                            <Link className="nav-link active text-light fw-light" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-light fw-light" aria-current="page" to='/events'>Events</Link>
                        </li>
                        <li className="nav-item text-light fw-light">
                            <Link className="nav-link text-light" to='/team'>Team</Link>
                        </li>
                        <li className="nav-item text-light fw-light">
                            <Link className="nav-link text-light" to='/esports'>E-Sports</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}