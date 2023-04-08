import React, { useState, useEffect } from "react";
import Card from "./Card";
import data from "../data";

const GameBoard = props =>{
    
    const {score, setScore, bestScore, setBestScore} = {...props}
    const [cardData, setCardData] = useState(data)
    const [isSelected, setIsSelected] = useState(
        [false, false, false, false, false, false, false, false]
    )
    const [isRandomized, setIsRandomized] = useState(false);

    const shuffle = (cardData)=> {

        let array = structuredClone(cardData)
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }

    const incScore = ()=>{
        setScore(score+1)
    }

    const resetScore = ()=>{
        setScore(0);
    }

    const resetIsSelected = ()=>{
        setIsSelected([false, false, false, false, false, false, false, false]);
    }

    const handleClick = (dataObj)=>{
        if(isSelected[dataObj.id]===true){
            setBestScore(Math.max(score, bestScore));
            resetScore();
            resetIsSelected();
            return;
        }
        incScore();
        isSelected[dataObj.id] = true;
        setCardData(shuffle(cardData));
    }

    useEffect(() => {
        if (!isRandomized) {
            setCardData(shuffle(cardData));
            setIsRandomized(true);
        }
        // eslint-disable-next-line
    }, []);
    

    return (
        <div className="game-board">
            {cardData.map((dataEl)=>{
                return <Card key={dataEl["name"]} name={dataEl["name"]} imgPath={dataEl["imgPath"]} handleClick={() => handleClick(dataEl)}></Card>
            })}
        </div>
    )
}

export default GameBoard;