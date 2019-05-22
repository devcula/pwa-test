import React from 'react';

const Card = () => {
    return(
        <div className="bg-light-green br3 ma2 grow dib pa3 bw2 shadow-5">
            <img src="https://robohash.org/devcula?100*100" alt="robo"/>
            <div className="tc">
                <h2>Jane Doe</h2>
                <p>jane.doe@gmail.com</p>
            </div>
        </div>
    )
}

export default Card; 