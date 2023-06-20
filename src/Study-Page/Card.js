import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


function Card({idx , cards, frontOrBack, setfrontOrBack}){
    const [currentCard , setCurrentCard] = useState({})

    useEffect(() => {
        const myCard = cards.find((card,idx) => {
            return idx === idx;
        })

        setCurrentCard(myCard);
        
    }, [idx])

        if (cards.length >= 3) {
            return (
                <>
                    <h4>Card {idx + 1} of {cards.length}</h4>
                    <h2>{frontOrBack === false ? cards[idx].front : cards[idx].back}</h2>
                    <button className="btn btn-secondary m-3 p-3" onClick={() => setfrontOrBack(!frontOrBack)}>Flip</button>
                </>
            )
        } 
        else {
            return (
                <>
                    <h3>Not enough cards.</h3>
                    <p>You need at least 3 cards to study. There are {cards.length} cards in this deck.</p>
                    <Link to="/decks/new" className="btn btn-primary m-3 p-3"><span className="oi oi-plus"></span>Add Cards</Link>
                </>
            )
        }
    
} 
    


export default Card;