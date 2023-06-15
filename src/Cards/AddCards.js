import React , { useState } from "react";
import { Link } from "react-router-dom";
import CardForm from "./CardForm";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { createCard } from "../utils/api";

function AddCards({decks , setDecks}){
    const history = useHistory();
    const { deckId } = useParams();
    const [ cards , setCards ] = useState(decks.cards)

    const initialFormData = {
        front : "" ,
        back : "" ,
        deckId : deckId
    }

    const submitHandler = (formData) => {
       createCard(formData.deckId , formData)
        .then(data => console.log(data))
        .then(history.push("/"))
    }
    return (
        <div className="container">
            <div className="m-5"> 
                <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item" aria-current="page">Create Card</li>
                        </ol>
                    </nav>
            </div>
            <div>
                <CardForm 
                    headerText="Create Cards"
                    initialFormData={initialFormData}
                    submitHandler={submitHandler}
                />
            </div>
        </div>
    )
}

export default AddCards;