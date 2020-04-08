import React from 'react';
import Card from './Card';
import CardFollower from './CardFollower';

const CardList = props => {
    return(               
            <div className="container">
                <Card item={props.myGithub}/>
                {props.githubFollowers.map(obj => {
                    return <CardFollower item={obj} />        
                })}
            </div>
    )
}

export default CardList;