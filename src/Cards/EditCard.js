import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { readCard, readDeck, updateCard } from "../utils/api";
import CardForm from "./CardForm";

function EditCard({ decks, setDecks, cards, setCards }) {
  const { deckId , cardId } = useParams();
  const history = useHistory();
  const [initialFormData, setInitialFormData] = useState({
    front : "",
    back : "",
  });
  const [currentDeck , setCurrentDeck] = useState([])
  const [currentCard , setCurrentCard] = useState([])
  const [editedFormData, setEditedFormData ] = useState({})

  useEffect(() => {
    const abortController = new AbortController();

    async function loadDeck() {
      try {
        setCurrentDeck(await readDeck(deckId, abortController.signal));
        const card = await readCard(cardId)
        setCurrentCard(card)
        setInitialFormData({
          front: card.front ,
          back: card.back,
        });
      } catch (error) {
        console.log(error);
      }
    }

    loadDeck();

    return () => abortController.abort();
  }, [deckId, cardId]);

  console.log("this is the intial form data",initialFormData)
  console.log("this is the current card", currentCard)

  const handleUpdateDeck = async (formData) => {
    try {
      const updatedCard = await updateCard({
        ...formData,
        deckId : deckId,
        id: cardId,
      });
      setEditedFormData({...updatedCard})
      setCards(
        cards.map((card) => (card.id === updatedCard.id ? updatedCard : card))
      );
      history.push(`/decks/${deckId}/cards/${cardId}`);
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
                editedFormData={editedFormData}
            />
        </div>
    )
}

export default EditCard;