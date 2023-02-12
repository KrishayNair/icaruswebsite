import React from 'react';
import './Events.css';

export default function Events (){

    return(
        <>
            <section className='position-relative' style={{ "background": "linear-gradient(145deg, rgba(25,42,114,1) 38%, rgba(3,23,53,0.94) 70%)" }}>
                <div className='w-100 h-100 position-absolute' style={{ "backgroundColor": "rgba(0 0 0 / 68%)", "backdropFilter": "blur(10px)" }}></div>
                <div className="main-container h-100 position-relative" style={{ "zIndex": "5" }}>
                    <section className='flagship-event event-section vh-100'>
                        <h1 className='container-title primary-font'>Flagship <br /> Events</h1>
                    </section>
                    <section className='contigent-event event-section vh-100'>
                        <h1 className='container-title primary-font'>Contigent <br /> Events</h1>
                    </section>
                    <section className='non-contigent-event event-section vh-100'>
                        <h1 className='container-title primary-font'>Non Contigent <br /> Events</h1>
                    </section>
                </div>
            </section>
        </>
    )

}