import React from 'react';

const Card = props => {
    return(
        <div className="card">
            <img alt="" src={props.item.avatar_url} />
            <div className="card-info">
                <h3 className="name">{props.item.name}</h3>
                <p className="username">{props.item.login}</p>
                <p>Location: {props.item.location}</p>
                <p>Profile: <a href={props.item.html_url} target="blank">{props.item.html_url}</a></p>
                <p>Followers: {props.item.followers}</p>
                <p>Following: {props.item.following}</p>
                <p>Bio: {props.item.bio}</p>
            </div>
        </div>
    )
}

export default Card;