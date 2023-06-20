import React from "react";
import { Link , useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { deleteCard } from "../utils/api";

function SingleCard({currentCard}){
    const history = useHistory();
    const { deckId } = useParams();

    
    return (
        <div className="container">
            <div className="border border-dark d-flex flex-row ">
                <div  className="w-100 p-2">
                    <p>{currentCard.front}</p>
                </div>
                <div className="w-100 p-2">
                    <p>{currentCard.back}</p>
                    <Link to={`/decks/${currentCard.deckId}/cards/${currentCard.id}/edit`} className="btn btn-secondary m-2"><span className="oi oi-pencil"></span>Edit</Link>
                    <button className="btn btn-danger m-2" onClick={() => {deleteCard(currentCard.id).then(window.location.reload())}}><span className="oi oi-trash"></span></button>
                </div>
            </div>
        </div>
    )
}

export default SingleCard;