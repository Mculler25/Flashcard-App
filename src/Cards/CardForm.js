import React , { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CardForm({initialFormData , headerText , submitHandler, isEdit}){
    const [formData , setFormData] = useState(initialFormData);
    
    
    useEffect(() => {
        setFormData(initialFormData)
    }, [initialFormData])
    
    const handleInput = (e) => {
        setFormData({
            ...formData ,
            [e.target.name] : e.target.value
        })
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        submitHandler(formData);
        setFormData({ ...formData});
        
      }

    return (
        <form onSubmit={handleFormSubmit} className="d-flex flex-column m-5">
            <h3>{headerText}</h3>
            <div>
                <label htmlFor="front" className="mt-3">Front</label>
                <textarea 
                 row="5" col="40" name="front" id="front" spellCheck="true" placeholder={isEdit !== "yes" ? "Card Front" : formData.front} value={formData.front} onChange={handleInput} className="w-100 p-2"
                />
            </div>
            <div>
                <label htmlFor="back" className="mt-3">Back</label>
                <textarea 
                row="5" col="40" spellCheck="true" placeholder="Answer to display on back"
                name="back" id="back" value={formData.back} onChange={handleInput} className="w-100 p-2"
                />
            </div>
            <div>
                <Link to="/" className="btn btn-secondary m-2 p-2">Cancel</Link>
                <input type="submit" className="btn btn-primary" />
            </div>
        </form>
    )
}

export default CardForm;