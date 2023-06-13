import React from "react";

function SingleCard({currentCard}){
    return (
        <div className="container">
            <div className="border border-dark d-flex flex-row ">
                <div  className="w-100 p-2">
                    <p>{currentCard.front}</p>
                </div>
                <div className="w-100 p-2">
                    <p>{currentCard.back}</p>
                    <button className="btn btn-secondary m-2">Edit</button>
                    <button className="btn btn-danger m-2">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default SingleCard;