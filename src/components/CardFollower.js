import React from 'react';

const CardFollower = props => {
 
    console.log(props)
    return(
        <div className="card">
            <img alt="" src={props.item.avatar_url} />
            <div className="card-info">
                <h3 className="name">{props.item.login}</h3>
                <p>Profile: <a href={props.item.html_url} target="blank">{props.item.html_url}</a></p>
            </div>
        </div>
    )
}

export default CardFollower;