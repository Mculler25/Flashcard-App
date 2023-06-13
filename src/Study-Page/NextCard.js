import React , { useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "./Card";

function NextCard({cards}){
    let [id, setId] = useState(1)
    const [frontOrBack, setfrontOrBack] = useState(false)
    const history = useHistory();

    function handleNextBtn(){
        setId(id += 1);
        setfrontOrBack(false);
        if(cards.length < id){
                const comfirm = window.confirm("Reset Deck?")
                if(comfirm){
                    setId(1);
                    setfrontOrBack(false);
                } else {
                    history.push("/")
                }
            } 
        
    }
    console.log(id);
    return(
        <div className="border border-dark p-3 m-3">
            <Card id={id} cards={cards} frontOrBack={frontOrBack} setfrontOrBack={setfrontOrBack} setId={setId}/>
            {frontOrBack === true ? <button className="btn btn-primary m-3 p-3" onClick={handleNextBtn}>Next</button> : null}
        </div>
    )
}

export default NextCard;