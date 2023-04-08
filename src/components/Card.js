import React from "react"

const Card = props =>{
    return (
        <div className="card" id={props.name} onClick={props.handleClick}>
            {props.name}
            <img src={process.env.PUBLIC_URL + props.imgPath} alt="blank" className="card-image"></img>
        </div>
    )
}

export default Card;