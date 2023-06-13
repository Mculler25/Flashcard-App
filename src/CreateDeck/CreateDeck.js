import React , { useState } from "react";
import DeckForm from "./DeckForm";

function CreateDeck({ addDeck }){

    const initialFormData = {
        name : "" ,
        description : "" ,
    }
    return (
       <DeckForm 
            headerText="Create Deck"
            initialFormData={initialFormData}
            submitHandler={addDeck}
        />
    )
}

export default CreateDeck;