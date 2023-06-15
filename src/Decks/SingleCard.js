import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function SingleCard({currentCard}){
    return (
        <div className="container">
            <div className="border border-dark d-flex flex-row ">
                <div  className="w-100 p-2">
                    <p>{currentCard.front}</p>
                </div>
                <div className="w-100 p-2">
                    <p>{currentCard.back}</p>
                    <Link to={`/decks/${currentCard.deckId}/cards/${currentCard.id}/edit`} className="btn btn-secondary m-2">Edit</Link>
                    <button className="btn btn-danger m-2">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default SingleCard;