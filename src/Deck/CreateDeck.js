import React , { useState } from "react";
import { Link } from "react-router-dom";
import DeckForm from "./DeckForm";
import { createDeck } from "../utils/api";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function CreateDeck({decks , setDecks}){
    const history = useHistory();

    const initialFormData = {
        name : "" ,
        description : "" ,
    }

    const submitHandler = (formData) => {
       createDeck(formData)
        .then(data => setDecks([...decks , data]))
        .then(history.push("/"))
    }
    return (
        <div className="container">
            <div className="m-5"> 
                <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item" aria-current="page">Create Deck</li>
                        </ol>
                    </nav>
            </div>
            <div>
                <DeckForm 
                    headerText="Create Deck"
                    initialFormData={initialFormData}
                    submitHandler={submitHandler}
                />
            </div>
        </div>
    )
}

export default CreateDeck;