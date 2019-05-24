import React from 'react';
import Card from '../CardComponent/Card';

const CardList = ( {robots} ) =>{
    if(robots.length===0){
        return (
            <div>
                <h1>Nothing found to display</h1>
            </div>
        )
    }
    else{
        return(
            <div>
                {
                    robots.map( (user,i) =>{
                        return (
                        <Card 
                        key={i} 
                        id = {user.id} 
                        name={user.name} 
                        email={user.email}
                        />)
                    })
                }
            </div>
        )
    }
}

export default CardList;