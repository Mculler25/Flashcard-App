import React from "react";
import SingleCard from "./SingleCard"

function CardList({cards}){
    return <div>
        {cards.map((card) => <SingleCard currentCard={card} key={card.id} />)}
    </div>
}

export default CardList;