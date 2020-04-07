import React from 'react';
import Card from './Card';
const CardList = props => {
    return(               
            <div className="container">
                <Card item={props.myGithub}/>
                {props.githubFollowers.map}
                <Card item={props.githubFollowers}/>
            </div>
    )
}

export default CardList;