import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { readDeck, updateDeck } from "../utils/api";
import DeckForm from "./DeckForm";

function EditDeck({ decks, setDecks }) {
  const { deckId } = useParams();
  const history = useHistory();
  const [initialFormData, setInitialFormData] = useState({
    name: "",
    description: "",
  });
  

  useEffect(() => {

    readDeck(deckId)
      .then(data => setInitialFormData(data))

  }, [deckId]);



  const handleUpdateDeck = async (formData) => {
    try {
      const updatedDeck = await updateDeck({
        ...formData,
        id: deckId,
      });
      setDecks(
        decks.map((deck) => (deck.id === updatedDeck.id ? updatedDeck : deck))
      );
      history.push(`/decks/${deckId}`);
    } catch (error) {
      console.log(error);
    }
  };
     
    return (
        <div className="container">
             <div> 
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item text-primary">{initialFormData.name}</li>
                        <li className="breadcrumb-item" aria-current="page">Edit Deck</li>
                    </ol>
                </nav>
            </div>
            <DeckForm
                initialFormData={initialFormData}
                headerText="Edit Deck"
                submitHandler={handleUpdateDeck}
      
            />
        </div>
    )
}

export default EditDeck;