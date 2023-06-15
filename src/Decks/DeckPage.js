import React , { useState , useEffect } from "react";
import { useParams , Link } from "react-router-dom";
import { readDeck } from "../utils/api";
import CardList from "./CardList"
function DeckPage(){
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
        <div className="container">
            <div> 
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item" aria-current="page">{currentDeck.name}</li>
                    </ol>
                </nav>
            </div>
            <div>
                <h3>{currentDeck.name}</h3>
                <p>{currentDeck.description}</p>
                <Link to={`/decks/${currentDeck.id}/edit`} className="btn btn-secondary m-2">Edit</Link>
                <Link to={`/decks/${currentDeck.id}/study`} className="btn btn-primary m-2">Study</Link>
                <Link to={`/decks/${currentDeck.id}/cards/new`} className="btn btn-primary m-2">Add Cards</Link>
                <Link to="/" className="btn btn-danger m-2">Delete</Link>
            </div>
            <div>
                <h3 className="m-3">Cards</h3>
                <CardList cards={cards}/>
            </div>
        </div>
    )
}

export default DeckPage;