import React , { useState } from "react";
import { Link } from "react-router-dom";

function DeckForm({initialFormData , headerText , submitHandler, editedFormData}){
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
                <label htmlFor="name" className="mt-3">Name</label>
                <input 
                type="text" name="name" id="name" spellCheck="true" placeholder={formData.name === "" ? "Deck Name" : formData.name} value={formData.name} onChange={handleInput} className="w-100 p-2"
                />
            </div>
            <div>
                <label htmlFor="description" className="mt-3">Description</label>
                <textarea 
                row="5" col="40" spellCheck="true" placeholder="Brief description of the deck" 
                name="description" id="description" value={formData.description} onChange={handleInput} className="w-100 p-2"
                />
            </div>
            <div>
                <Link to="/" className="btn btn-secondary m-2 p-2">Cancel</Link>
                <input type="submit" />
            </div>
        </form>
    )
}

export default DeckForm;