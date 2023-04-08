import React from "react";

const ScoreBoard = props =>{

    return (
        <div>
            Score: {props.score}<br/>
            Best Score: {props.bestScore}
        </div>
    )
}

export default ScoreBoard;