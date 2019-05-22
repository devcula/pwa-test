import React from 'react';

const Card = ({ id, name, email}) => {
    //const { id, name, email} = props;      //Used Destructuring directly above
    return(
        <div className="tc bg-light-green br3 ma2 grow dib pa3 bw2 shadow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt="robo"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card; 