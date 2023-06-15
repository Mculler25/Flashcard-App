import React , { useState } from "react";
import { Link } from "react-router-dom";

function CardForm({initialFormData , headerText , submitHandler, editedFormData}){
    const [formData , setFormData] = useState(initialFormData);

    const handleInput = (e) => {
        setFormData({
            ...formData ,
            [e.target.name] : e.target.value
        })
    }
    console.log(formData);
    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(formData)
        if(formData.id){
            submitHandler(formData);
            setFormData(editedFormData);
        }
        submitHandler(formData);
        setFormData({ ...initialFormData });
      }

    return (
        <form onSubmit={handleFormSubmit} className="d-flex flex-column m-5">
            <h3>{headerText}</h3>
            <div>
                <label htmlFor="front" className="mt-3">Front</label>
                <input 
                type="text" name="front" id="front" spellCheck="true" placeholder={formData.front === "" ? "Card Front" : formData.front} value={formData.front} onChange={handleInput} className="w-100 p-2"
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