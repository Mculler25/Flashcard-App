import React , { useState , useEffect } from "react";
import { useParams , Link } from "react-router-dom";
import { listDecks, readDeck } from "../utils/api";
import CardList from "./CardList"
function DeckPage({deleteHandler}){
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
                <Link to={`/decks/${currentDeck.id}/edit`} className="btn btn-secondary m-2"><span className="oi oi-pencil"></span>Edit</Link>
                <Link to={`/decks/${currentDeck.id}/study`} className="btn btn-primary m-2"><span className="oi oi-book"></span>Study</Link>
                <Link to={`/decks/${currentDeck.id}/cards/new`} className="btn btn-primary m-2"><span className="oi oi-plus"></span>Add Cards</Link>
                <Link to="/" className="btn btn-danger m-2" onClick={() => deleteHandler(currentDeck.id)}><span className="oi oi-trash"></span></Link>
            </div>
            <div>
                <h3 className="m-3">Cards</h3>
                <CardList cards={cards} setCards={setCards}/>
            </div>
        </div>
    )
}

export default DeckPage;