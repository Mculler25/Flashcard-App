import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../Layout/Header";
import NextCard from "./NextCard"
import { readDeck } from "../utils/api";

function Study () {
    const [currentDeck, setCurrentDeck] = useState({})
    const [cards , setCards] = useState([])
    const { deckId } = useParams();

    useEffect(() => {
        readDeck(deckId)
            .then(data => {
                setCurrentDeck(data)
                setCards(data.cards)
            })
    }, [deckId])

    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item text-primary">{currentDeck.name}</li>
                    <li className="breadcrumb-item active" aria-current="page">Study</li>
                </ol>
            </nav>
            <div>
                <h1>Study: {currentDeck.name}</h1>
                <NextCard cards={cards}/>
            </div>
        </>
    )
    
}

export default Study;