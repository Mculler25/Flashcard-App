import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import DeckForm from "../CreateDeck/DeckForm";
import { readDeck } from "../utils/api";
import { useParams } from "react-router-dom";

function EditDeck({editDeck}){
    const [currentDeck, setCurrentDeck] = useState([])
    const [editedFormData , setEditedFormData] = useState(currentDeck);
    const { deckId } = useParams();

    useEffect(() => {
        readDeck(deckId)
            .then(data => {
                setCurrentDeck(data)
            });
    },[])


     
    return (
        <div className="container">
             <div> 
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item text-primary">{currentDeck.name}</li>
                        <li className="breadcrumb-item" aria-current="page">Edit Deck</li>
                    </ol>
                </nav>
            </div>
            <DeckForm 
                headerText="Edit Deck"
                initialFormData={currentDeck}
            />
        </div>
    )
}

export default EditDeck;