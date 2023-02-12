import React from 'react';
import { Link } from 'react-router-dom';
import icarus01min from '../media/icarus01min.png'
import './Navbar.css'

export default function Navbar() {


    return (


        <nav className="navbar navbar-expand-lg mx-5 my-5" style={{ "borderRadius": "15px", "backgroundColor": "rgba(40,10,40,0.4)" }} >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img className='px-5' src={icarus01min} alt="icarus01min" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent" >
                    <ul className="col navbar-nav me-auto mb-2 mb-lg-0 justify-content-end" style={{ "columnGap": "2.5vw", "letterSpacing": "0.5vw" }}>
                        <li className="nav-item">
                            <Link className="nav-link active text-light" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle text-light" to='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Events
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to='/events'>Flagship</Link></li>
                                <li><Link className="dropdown-item" to='/events'>Contingent</Link></li>
                                <li><Link className="dropdown-item" to='/events'>Non-Contingent</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item text-light">
                            <Link className="nav-link text-light" to='/team'>Team</Link>
                        </li>
                        <li className="nav-item text-light">
                            <Link className="nav-link text-light" to='/esports'>E-Sports</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}