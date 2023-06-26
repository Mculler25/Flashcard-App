import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { readCard, readDeck, updateCard } from "../utils/api";
import CardForm from "./CardForm";

function EditCard() {
  const { deckId , cardId } = useParams();
  const history = useHistory();
  const [initialFormData, setInitialFormData] = useState({});
  const [currentDeck , setCurrentDeck] = useState([])
  

  useEffect(() => {

    readDeck(deckId)
      .then(data => setCurrentDeck(data))
    
    readCard(cardId)
      .then(data => setInitialFormData({...data}))
      .then(console.log(initialFormData))

    
  }, []);



  const handleUpdateDeck = async (formData) => {
    try {
      const updatedCard = await updateCard({
        ...formData,
        deckId : Number(deckId),
        id: cardId,
      });
          currentDeck.cards.map((card) => (card.id === updatedCard.id ? updatedCard : card))
      history.push(`/decks/${deckId}`)
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
                        <li className="breadcrumb-item text-primary">{currentDeck.name}</li>
                        <li className="breadcrumb-item" aria-current="page">Edit Card</li>
                    </ol>
                </nav>
            </div>
            <CardForm
                initialFormData={initialFormData}
                headerText="Edit Card"
                submitHandler={handleUpdateDeck}
                isEdit="yes"
            />
        </div>
    )
}

export default EditCard;