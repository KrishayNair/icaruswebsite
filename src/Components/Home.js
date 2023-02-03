import React from 'react';
import photo01 from '../media/photo01.png'
import icarus02 from '../media/icarus02.png'

export default function Home() {

    return (

        <div style={{ "display": "flex", "paddingTop": "20px", "margin": "0 30px" }}>
            <div>
                <img className='my-5' src={icarus02} alt="icarus02" style={{"width":"500px"}} />
                <div className='text-light py-3' style={{ "fontSize": "25px" }}>ICARUS is the enthusiastic Technical Festival of the Rajiv Gandhi Institute of Technology. With a footfall of over 2000 students, ICARUS celebrates the innovativeness of its engineering students.</div>
                <button className='mx-5 my-5 text-light' style={{ "width": "220px", "height": "50px", "fontSize": "25px", "backgroundColor": "rgba(0,0,40,0.5)", "border": "none" }}>Explore &rarr;</button>
            </div>
            <img src={photo01} style={{ "width": "50%", "flex": "right", "WebkitTransform": "scaleX(-1)", "transform": "scaleX(-1)", }} />
        </div>
    )

}