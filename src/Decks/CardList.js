import React from "react";
import SingleCard from "./SingleCard"


function CardList({cards , setCards }){

    return <div>
        {cards.map((card) => <SingleCard currentCard={card} key={card.id} cards={cards} setCards={setCards}/>)}
    </div>
}

export default CardList;