import React , { useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "./Card";

function NextCard({cards}){
    let [idx, setIdx] = useState(0)
    const [frontOrBack, setfrontOrBack] = useState(false)
    const history = useHistory();

    function handleNextBtn(){
        setIdx(idx += 1);
        setfrontOrBack(false);
        if(cards.length === idx){
                const comfirm = window.confirm("Reset Deck?")
                if(comfirm){
                    setIdx(0);
                    setfrontOrBack(false);
                } else {
                    history.push("/")
                }
            } 
        
    }
    console.log(idx)
    return(
        <div className="border border-dark p-3 m-3">
            <Card idx={idx} cards={cards} frontOrBack={frontOrBack} setfrontOrBack={setfrontOrBack}/>
            {frontOrBack === true ? <button className="btn btn-primary m-3 p-3" onClick={handleNextBtn}>Next</button> : null}
        </div>
    )
}

export default NextCard;